"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function drawPolygon(
  ctx: CanvasRenderingContext2D,
  points: Array<[number, number]>,
  fill: string,
) {
  ctx.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
}

function createSurfaceTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const ocean = ctx.createLinearGradient(0, 0, 0, 1024);
  ocean.addColorStop(0, "#0d2136");
  ocean.addColorStop(0.48, "#071624");
  ocean.addColorStop(1, "#020914");
  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, 2048, 1024);

  const land = "#17374e";
  const landDark = "#102c40";
  drawPolygon(ctx, [[85,265],[150,220],[245,195],[340,225],[420,278],[448,340],[405,408],[350,450],[300,505],[236,492],[195,425],[132,392],[100,325]], land);
  drawPolygon(ctx, [[385,490],[452,520],[500,595],[510,680],[474,758],[420,842],[382,802],[360,720],[350,635]], landDark);
  drawPolygon(ctx, [[890,225],[980,178],[1080,185],[1178,225],[1260,215],[1345,242],[1430,232],[1538,272],[1635,302],[1668,355],[1592,395],[1502,388],[1432,430],[1358,425],[1290,468],[1208,454],[1140,408],[1065,392],[1008,338],[948,326]], land);
  drawPolygon(ctx, [[1005,392],[1080,410],[1155,472],[1192,555],[1170,655],[1115,762],[1060,742],[1018,658],[985,572],[950,500]], landDark);
  drawPolygon(ctx, [[1532,586],[1602,564],[1688,580],[1755,630],[1715,682],[1632,704],[1564,672]], land);

  const haze = ctx.createRadialGradient(1050, 360, 40, 1050, 360, 820);
  haze.addColorStop(0, "rgba(68, 126, 170, 0.14)");
  haze.addColorStop(0.55, "rgba(25, 66, 101, 0.045)");
  haze.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, 2048, 1024);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

function createLightsTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 2048, 1024);
  ctx.globalCompositeOperation = "screen";

  const clusters: Array<[number, number, number, number]> = [
    [1060, 320, 170, 160], [1210, 332, 150, 125], [1380, 330, 175, 145],
    [1515, 350, 115, 105], [310, 315, 150, 130], [220, 295, 105, 95],
    [430, 585, 85, 70], [1030, 500, 85, 78], [1600, 625, 105, 95],
  ];

  clusters.forEach(([cx, cy, rx, ry]) => {
    for (let i = 0; i < 165; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.pow(Math.random(), 1.8);
      const x = cx + Math.cos(angle) * rx * distance;
      const y = cy + Math.sin(angle) * ry * distance;
      const radius = Math.random() * 1.65 + 0.42;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = Math.random() > 0.22
        ? `rgba(255, ${Math.floor(165 + Math.random() * 55)}, ${Math.floor(92 + Math.random() * 52)}, ${0.3 + Math.random() * 0.56})`
        : `rgba(120, 190, 255, ${0.2 + Math.random() * 0.4})`;
      ctx.fill();
    }
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

function pointOnSphere(radius: number, lat: number, lon: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

export function SystemEarth({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    const cameraState = { z: 8.2 };
    camera.position.set(0, 0.35, cameraState.z);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const earthGroup = new THREE.Group();
    const earthState = { y: -4.62, rotationY: -0.31 };
    earthGroup.position.set(0, earthState.y, 0);
    earthGroup.rotation.set(0.015, earthState.rotationY, 0);
    scene.add(earthGroup);

    const surfaceTexture = createSurfaceTexture();
    const lightsTexture = createLightsTexture();
    const radius = 4.45;

    const globeMaterial = new THREE.MeshPhysicalMaterial({
      map: surfaceTexture ?? undefined,
      color: 0x8eb5d2,
      roughness: 0.95,
      metalness: 0.01,
      clearcoat: 0.025,
      clearcoatRoughness: 0.95,
    });
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 144, 96),
      globeMaterial,
    );
    earthGroup.add(globe);

    let lights: THREE.Mesh | null = null;
    if (lightsTexture) {
      lights = new THREE.Mesh(
        new THREE.SphereGeometry(radius + 0.012, 144, 96),
        new THREE.MeshBasicMaterial({
          map: lightsTexture,
          transparent: true,
          opacity: 0.7,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      earthGroup.add(lights);
    }

    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uIntensity: { value: 1 },
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
        uniform float uIntensity;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPosition;
        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float rim = pow(1.0 - max(dot(normalize(vNormalWorld), viewDir), 0.0), 4.2);
          float alpha = rim * 0.64 * uIntensity;
          vec3 color = mix(vec3(0.22, 0.50, 0.84), vec3(0.80, 0.93, 1.0), rim);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius + 0.065, 112, 80),
      atmosphereMaterial,
    );
    earthGroup.add(atmosphere);

    scene.add(new THREE.HemisphereLight(0x7eaad0, 0x01050b, 0.78));
    const keyLight = new THREE.DirectionalLight(0xc7e5ff, 2.05);
    keyLight.position.set(-1.6, 5.8, 5.5);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0x68adff, 5.8, 25);
    rimLight.position.set(3.8, 2.4, 5.4);
    scene.add(rimLight);

    const routes = [
      [48, 16, 40, -74], [51, 14, 35, 139], [40, -74, 34, -118],
      [52, 13, 25, 55], [35, 139, -33, 151], [25, 55, 1, 104],
      [48, 16, 19, -99], [40, -74, -23, -46], [35, 139, 22, 114],
      [48, 16, 1, 104],
    ];

    const routeMaterial = new THREE.LineBasicMaterial({
      color: 0x8fc7ff,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    routes.forEach(([latA, lonA, latB, lonB]) => {
      const a = pointOnSphere(radius + 0.055, latA, lonA);
      const b = pointOnSphere(radius + 0.055, latB, lonB);
      const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(radius + 0.34);
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(52));
      earthGroup.add(new THREE.Line(geometry, routeMaterial));
    });

    const nodeGeometry = new THREE.SphereGeometry(0.022, 8, 8);
    const blueNode = new THREE.MeshBasicMaterial({ color: 0xa7d7ff });
    const amberNode = new THREE.MeshBasicMaterial({ color: 0xffb367 });
    [
      [48, 16], [51, 14], [40, -74], [35, 139], [34, -118], [25, 55],
      [1, 104], [-33, 151], [19, -99], [-23, -46], [22, 114],
    ].forEach(([lat, lon], index) => {
      const node = new THREE.Mesh(nodeGeometry, index % 4 === 0 ? amberNode : blueNode);
      node.position.copy(pointOnSphere(radius + 0.09, lat, lon));
      earthGroup.add(node);
    });

    const starPositions: number[] = [];
    for (let i = 0; i < 150; i += 1) {
      starPositions.push(
        (Math.random() - 0.5) * 15,
        Math.random() * 6.4 - 0.15,
        -Math.random() * 4.4 - 1.4,
      );
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xb6d7fb,
      size: 0.017,
      transparent: true,
      opacity: 0.31,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

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

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let scrollTimeline: gsap.core.Timeline | null = null;

    if (!reduceMotion) {
      const hero = mount.closest<HTMLElement>("[data-hero-scene]");
      if (hero) {
        gsap.registerPlugin(ScrollTrigger);
        scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        });

        scrollTimeline
          .to(earthState, { rotationY: -0.12, y: -4.43, ease: "none", duration: 0.58 }, 0)
          .to(cameraState, { z: 7.72, ease: "none", duration: 0.58 }, 0)
          .to(routeMaterial, { opacity: 0.37, ease: "none", duration: 0.3 }, 0.08)
          .to(atmosphereMaterial.uniforms.uIntensity, { value: 1.72, ease: "none", duration: 0.34 }, 0.2)
          .to(rimLight, { intensity: 8.8, ease: "none", duration: 0.28 }, 0.26)
          .to(atmosphereMaterial.uniforms.uIntensity, { value: 2.15, ease: "none", duration: 0.22 }, 0.58)
          .to(rimLight, { intensity: 11.2, ease: "none", duration: 0.22 }, 0.58)
          .to(earthState, { rotationY: 0.02, y: -4.18, ease: "none", duration: 0.3 }, 0.66)
          .to(cameraState, { z: 7.45, ease: "none", duration: 0.3 }, 0.66);
      }
    }

    let frame = 0;
    let raf = 0;
    const render = () => {
      if (!reduceMotion) frame += 1;
      earthGroup.position.y = earthState.y;
      earthGroup.rotation.y = earthState.rotationY + (reduceMotion ? 0 : Math.sin(frame * 0.0022) * 0.01);
      camera.position.z = cameraState.z;
      if (!reduceMotion) stars.rotation.z += 0.00002;
      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(raf);
      scrollTimeline?.scrollTrigger?.kill();
      scrollTimeline?.kill();
      observer.disconnect();
      surfaceTexture?.dispose();
      lightsTexture?.dispose();
      globe.geometry.dispose();
      globeMaterial.dispose();
      if (lights) {
        lights.geometry.dispose();
        (lights.material as THREE.Material).dispose();
      }
      atmosphere.geometry.dispose();
      atmosphereMaterial.dispose();
      routeMaterial.dispose();
      nodeGeometry.dispose();
      blueNode.dispose();
      amberNode.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className={className} />;
}
