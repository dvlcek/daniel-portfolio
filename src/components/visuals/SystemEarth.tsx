"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function pointOnSphere(radius: number, lat: number, lon: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function createSunGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const gradient = ctx.createRadialGradient(128, 128, 2, 128, 128, 128);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.07, "rgba(226,243,255,0.98)");
  gradient.addColorStop(0.2, "rgba(151,207,255,0.5)");
  gradient.addColorStop(0.5, "rgba(87,154,226,0.14)");
  gradient.addColorStop(1, "rgba(32,90,154,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function configureTexture(texture: THREE.Texture, renderer: THREE.WebGLRenderer, srgb = true) {
  texture.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
}

export function SystemEarth({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const compact = window.matchMedia("(max-width: 767px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(compact ? 39 : 35, 1, 0.1, 100);
    const cameraState = { z: compact ? 8.55 : 8.2 };
    camera.position.set(0, compact ? 0.42 : 0.3, cameraState.z);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1.25 : 1.6));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.92;
    mount.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const dayTexture = loader.load("/earth/earth-day.webp");
    const nightTexture = loader.load("/earth/earth-night.webp");
    const cloudTexture = loader.load("/earth/earth-clouds.webp");
    configureTexture(dayTexture, renderer, true);
    configureTexture(nightTexture, renderer, true);
    configureTexture(cloudTexture, renderer, false);

    const radius = compact ? 4.28 : 4.62;
    const earthState = {
      y: compact ? -4.74 : -5.18,
      rotationY: compact ? 0.34 : 0.38,
      rotationX: compact ? 0.035 : 0.045,
    };

    const earthGroup = new THREE.Group();
    earthGroup.position.set(0, earthState.y, 0);
    earthGroup.rotation.set(earthState.rotationX, earthState.rotationY, -0.035);
    scene.add(earthGroup);

    // Light comes from behind/above the planet: the visible face remains mostly night,
    // while the upper horizon gets a sunrise-style illuminated rim.
    const sunDirection = new THREE.Vector3(-0.32, 0.9, -0.3).normalize();

    const earthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uDayMap: { value: dayTexture },
        uNightMap: { value: nightTexture },
        uSunDirection: { value: sunDirection },
        uAmbient: { value: 0.035 },
        uNightStrength: { value: 1.58 },
        uSweep: { value: 0 },
        uSweepStrength: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPosition;

        void main() {
          vUv = uv;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uDayMap;
        uniform sampler2D uNightMap;
        uniform vec3 uSunDirection;
        uniform float uAmbient;
        uniform float uNightStrength;
        uniform float uSweep;
        uniform float uSweepStrength;

        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPosition;

        void main() {
          vec3 normalWorld = normalize(vNormalWorld);
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          vec3 sunDirection = normalize(uSunDirection);

          vec3 dayColor = texture2D(uDayMap, vUv).rgb;
          vec3 nightColor = texture2D(uNightMap, vUv).rgb;

          float sunAmount = dot(normalWorld, sunDirection);
          float dayFactor = smoothstep(-0.08, 0.34, sunAmount);
          float nightFactor = 1.0 - smoothstep(-0.26, 0.10, sunAmount);
          float twilight = 1.0 - abs(smoothstep(-0.18, 0.22, sunAmount) * 2.0 - 1.0);

          vec3 daylight = dayColor * (uAmbient + dayFactor * 0.9);
          daylight *= mix(vec3(0.68, 0.79, 0.92), vec3(1.02, 1.0, 0.97), dayFactor);

          float nightLuminance = max(max(nightColor.r, nightColor.g), nightColor.b);
          float lightBoost = 0.72 + pow(nightLuminance, 0.66) * 2.0;
          vec3 cityLights = nightColor * nightFactor * lightBoost * uNightStrength;

          float blueDominance = dayColor.b - max(dayColor.r, dayColor.g) * 0.82;
          float oceanMask = smoothstep(0.015, 0.16, blueDominance);
          vec3 halfVector = normalize(sunDirection + viewDirection);
          float specular = pow(max(dot(normalWorld, halfVector), 0.0), 64.0);
          specular *= oceanMask * dayFactor * 0.2;

          float fresnel = pow(1.0 - max(dot(normalWorld, viewDirection), 0.0), 3.5);
          vec3 atmosphereTint = vec3(0.055, 0.16, 0.30) * fresnel * (0.08 + dayFactor * 0.13);

          float sweepPosition = mix(-1.08, 1.08, uSweep);
          float sweepBand = exp(-pow((normalWorld.x - sweepPosition) * 8.0, 2.0));
          float sweep = sweepBand * fresnel * uSweepStrength;

          vec3 color = daylight + cityLights + vec3(specular) + atmosphereTint;
          color += vec3(0.38, 0.68, 1.0) * sweep * 0.56;
          color += vec3(0.1, 0.16, 0.26) * twilight * 0.04;

          gl_FragColor = vec4(color, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
    });
    earthMaterial.toneMapped = true;

    const globeGeometry = new THREE.SphereGeometry(
      radius,
      compact ? 96 : 160,
      compact ? 64 : 104,
    );
    const globe = new THREE.Mesh(globeGeometry, earthMaterial);
    earthGroup.add(globe);

    const cloudGeometry = new THREE.SphereGeometry(
      radius + 0.022,
      compact ? 80 : 128,
      compact ? 52 : 84,
    );
    const cloudMaterial = new THREE.MeshPhongMaterial({
      color: 0xdcecff,
      alphaMap: cloudTexture,
      transparent: true,
      opacity: compact ? 0.085 : 0.11,
      depthWrite: false,
      shininess: 2,
      blending: THREE.NormalBlending,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    clouds.rotation.y = 0.014;
    earthGroup.add(clouds);

    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uSunDirection: { value: sunDirection },
        uIntensity: { value: compact ? 0.78 : 0.88 },
        uSweep: { value: 0 },
        uSweepStrength: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormalWorld;
        varying vec3 vWorldPosition;

        void main() {
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uSunDirection;
        uniform float uIntensity;
        uniform float uSweep;
        uniform float uSweepStrength;

        varying vec3 vNormalWorld;
        varying vec3 vWorldPosition;

        void main() {
          vec3 normalWorld = normalize(vNormalWorld);
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          vec3 sunDirection = normalize(uSunDirection);

          float viewAmount = max(dot(normalWorld, viewDirection), 0.0);
          float rim = pow(1.0 - viewAmount, 4.15);
          float sunAmount = smoothstep(-0.28, 0.58, dot(normalWorld, sunDirection));

          float sweepPosition = mix(-1.08, 1.08, uSweep);
          float sweepBand = exp(-pow((normalWorld.x - sweepPosition) * 7.2, 2.0));
          float sweep = sweepBand * rim * uSweepStrength;

          vec3 deepBlue = vec3(0.12, 0.33, 0.6);
          vec3 paleBlue = vec3(0.66, 0.86, 1.0);
          vec3 color = mix(deepBlue, paleBlue, clamp(sunAmount * 0.78 + rim * 0.28, 0.0, 1.0));

          float alpha = rim * (0.08 + sunAmount * 0.45) * uIntensity;
          alpha += sweep * 0.46;

          gl_FragColor = vec4(color, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });
    atmosphereMaterial.toneMapped = true;

    const atmosphereGeometry = new THREE.SphereGeometry(
      radius + 0.07,
      compact ? 80 : 128,
      compact ? 52 : 84,
    );
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphere.renderOrder = 4;
    earthGroup.add(atmosphere);

    scene.add(new THREE.HemisphereLight(0x8eb9dd, 0x02060b, 0.24));
    const cloudLight = new THREE.DirectionalLight(0xd8ecff, 0.95);
    cloudLight.position.copy(sunDirection.clone().multiplyScalar(8));
    scene.add(cloudLight);

    const routes = [
      [48, 16, 40, -74],
      [48, 16, 35, 139],
      [48, 16, 25, 55],
      [48, 16, 1, 104],
      [40, -74, 34, -118],
      [40, -74, -23, -46],
      [35, 139, -33, 151],
      [35, 139, 22, 114],
    ];

    const routeMaterial = new THREE.LineBasicMaterial({
      color: 0x9dccff,
      transparent: true,
      opacity: compact ? 0.05 : 0.085,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const routeGeometries: THREE.BufferGeometry[] = [];

    routes.forEach(([latA, lonA, latB, lonB]) => {
      const a = pointOnSphere(radius + 0.06, latA, lonA);
      const b = pointOnSphere(radius + 0.06, latB, lonB);
      const mid = a
        .clone()
        .add(b)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(radius + 0.31);
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(compact ? 36 : 54));
      routeGeometries.push(geometry);
      earthGroup.add(new THREE.Line(geometry, routeMaterial));
    });

    const nodeGeometry = new THREE.SphereGeometry(compact ? 0.018 : 0.022, 8, 8);
    const blueNode = new THREE.MeshBasicMaterial({ color: 0xb8ddff });
    const amberNode = new THREE.MeshBasicMaterial({ color: 0xf4b46c });

    [
      [48, 16],
      [40, -74],
      [35, 139],
      [34, -118],
      [25, 55],
      [1, 104],
      [-33, 151],
      [19, -99],
      [-23, -46],
      [22, 114],
    ].forEach(([lat, lon], index) => {
      const node = new THREE.Mesh(nodeGeometry, index % 4 === 0 ? amberNode : blueNode);
      node.position.copy(pointOnSphere(radius + 0.088, lat, lon));
      earthGroup.add(node);
    });

    const starPositions: number[] = [];
    for (let i = 0; i < (compact ? 70 : 145); i += 1) {
      starPositions.push(
        (Math.random() - 0.5) * 15,
        Math.random() * 6.2 - 0.1,
        -Math.random() * 4.6 - 1.3,
      );
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xc3def9,
      size: compact ? 0.014 : 0.016,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const sunGlowTexture = createSunGlowTexture();
    let sunGlow: THREE.Sprite | null = null;
    let sunGlowMaterial: THREE.SpriteMaterial | null = null;

    if (sunGlowTexture) {
      sunGlowMaterial = new THREE.SpriteMaterial({
        map: sunGlowTexture,
        color: 0xe2f2ff,
        transparent: true,
        opacity: compact ? 0.42 : 0.62,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
      });
      sunGlowMaterial.toneMapped = false;
      sunGlow = new THREE.Sprite(sunGlowMaterial);
      sunGlow.scale.set(compact ? 1.15 : 1.35, compact ? 1.15 : 1.35, 1);
      sunGlow.position.set(-0.2, compact ? -0.42 : -0.46, 0.55);
      scene.add(sunGlow);
    }

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    let scrollTimeline: gsap.core.Timeline | null = null;

    if (!reduceMotion) {
      const hero = mount.closest<HTMLElement>("[data-hero-scene]");
      if (hero) {
        gsap.registerPlugin(ScrollTrigger);
        scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 0.78,
            invalidateOnRefresh: true,
          },
        });

        scrollTimeline
          .to(earthState, { rotationY: earthState.rotationY + 0.16, y: earthState.y + 0.18, ease: "none", duration: 0.54 }, 0)
          .to(cameraState, { z: cameraState.z - 0.38, ease: "none", duration: 0.54 }, 0)
          .to(routeMaterial, { opacity: compact ? 0.09 : 0.2, ease: "none", duration: 0.32 }, 0.07)
          .to(earthMaterial.uniforms.uSweepStrength, { value: 1, ease: "none", duration: 0.12 }, 0.18)
          .to(atmosphereMaterial.uniforms.uSweepStrength, { value: 1.2, ease: "none", duration: 0.12 }, 0.18)
          .to(earthMaterial.uniforms.uSweep, { value: 1, ease: "none", duration: 0.42 }, 0.22)
          .to(atmosphereMaterial.uniforms.uSweep, { value: 1, ease: "none", duration: 0.42 }, 0.22)
          .to(atmosphereMaterial.uniforms.uIntensity, { value: compact ? 1.05 : 1.3, ease: "none", duration: 0.34 }, 0.32)
          .to(earthMaterial.uniforms.uNightStrength, { value: 1.78, ease: "none", duration: 0.3 }, 0.42)
          .to(sunGlowMaterial ?? {}, { opacity: compact ? 0.55 : 0.8, ease: "none", duration: 0.28 }, 0.42)
          .to(earthState, { rotationY: earthState.rotationY + 0.29, y: earthState.y + 0.3, ease: "none", duration: 0.32 }, 0.66)
          .to(cameraState, { z: cameraState.z - 0.64, ease: "none", duration: 0.32 }, 0.66)
          .to(earthMaterial.uniforms.uSweepStrength, { value: 0.12, ease: "none", duration: 0.22 }, 0.72)
          .to(atmosphereMaterial.uniforms.uSweepStrength, { value: 0.18, ease: "none", duration: 0.22 }, 0.72);
      }
    }

    let frame = 0;
    let raf = 0;

    const render = () => {
      if (!reduceMotion) frame += 1;

      earthGroup.position.y = earthState.y;
      earthGroup.rotation.x = earthState.rotationX;
      earthGroup.rotation.y = earthState.rotationY + (reduceMotion ? 0 : Math.sin(frame * 0.0018) * 0.007);
      camera.position.z = cameraState.z;

      if (!reduceMotion) {
        clouds.rotation.y += 0.00004;
        stars.rotation.z += 0.000014;
      }

      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(raf);
      scrollTimeline?.scrollTrigger?.kill();
      scrollTimeline?.kill();
      observer.disconnect();

      dayTexture.dispose();
      nightTexture.dispose();
      cloudTexture.dispose();
      sunGlowTexture?.dispose();

      globeGeometry.dispose();
      earthMaterial.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      routeGeometries.forEach((geometry) => geometry.dispose());
      routeMaterial.dispose();
      nodeGeometry.dispose();
      blueNode.dispose();
      amberNode.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      sunGlowMaterial?.dispose();

      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className={className} />;
}
