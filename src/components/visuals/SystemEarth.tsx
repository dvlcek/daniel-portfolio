"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function createEarthTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (!ctx) return null;

  const ocean = ctx.createLinearGradient(0, 0, 0, canvas.height);
  ocean.addColorStop(0, "#0b1b2d");
  ocean.addColorStop(0.55, "#06121f");
  ocean.addColorStop(1, "#020813");
  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const drawLand = (points: Array<[number, number]>, fill: string) => {
    ctx.beginPath();
    points.forEach(([x, y], index) => {
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
  };

  const land = "rgba(29, 56, 75, 0.92)";
  const landSoft = "rgba(20, 45, 65, 0.78)";

  drawLand(
    [
      [100, 265], [180, 210], [275, 208], [345, 250], [410, 265], [450, 325],
      [432, 395], [375, 418], [350, 485], [290, 540], [245, 510], [190, 430],
      [145, 390], [120, 328],
    ],
    land,
  );

  drawLand(
    [
      [405, 520], [475, 540], [520, 610], [535, 690], [490, 765], [445, 845],
      [405, 810], [385, 735], [365, 650],
    ],
    landSoft,
  );

  drawLand(
    [
      [920, 205], [1010, 175], [1110, 188], [1170, 230], [1260, 215], [1340, 245],
      [1425, 225], [1510, 270], [1600, 295], [1640, 350], [1580, 390], [1490, 385],
      [1430, 430], [1355, 428], [1300, 465], [1220, 455], [1150, 405], [1085, 390],
      [1020, 338], [960, 330], [905, 285],
    ],
    land,
  );

  drawLand(
    [
      [1015, 390], [1090, 410], [1160, 470], [1195, 555], [1175, 660], [1115, 770],
      [1060, 755], [1020, 670], [985, 590], [955, 500],
    ],
    landSoft,
  );

  drawLand(
    [
      [1540, 590], [1615, 565], [1705, 585], [1760, 635], [1710, 690], [1625, 705],
      [1560, 670],
    ],
    land,
  );

  const glow = ctx.createRadialGradient(1050, 420, 10, 1050, 420, 700);
  glow.addColorStop(0, "rgba(63, 115, 161, .10)");
  glow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const lightClusters: Array<[number, number, number]> = [
    [1090, 310, 140], [1200, 330, 110], [1320, 330, 130], [1450, 350, 115],
    [330, 330, 110], [240, 300, 95], [420, 580, 70], [1050, 485, 80],
    [1590, 625, 90], [1515, 330, 70],
  ];

  ctx.globalCompositeOperation = "screen";
  for (const [cx, cy, radius] of lightClusters) {
    for (let i = 0; i < 95; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.pow(Math.random(), 1.7) * radius;
      const x = cx + Math.cos(angle) * distance;
      const y = cy + Math.sin(angle) * distance * 0.55;
      const size = Math.random() * 2.4 + 0.5;
      ctx.fillStyle = Math.random() > 0.28 ? "rgba(255, 184, 98, .78)" : "rgba(142, 197, 255, .55)";
      ctx.fillRect(x, y, size, size);
    }
  }
  ctx.globalCompositeOperation = "source-over";

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.wrapS = THREE.RepeatWrapping;
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
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.25, 7.3);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.position.set(0, -2.65, 0);
    group.rotation.set(0.02, -0.32, 0);
    scene.add(group);

    const texture = createEarthTexture();
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(3.75, 128, 96),
      new THREE.MeshPhysicalMaterial({
        map: texture ?? undefined,
        color: 0x8fb7d4,
        roughness: 0.86,
        metalness: 0.02,
        clearcoat: 0.08,
        clearcoatRoughness: 0.8,
      }),
    );
    group.add(globe);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(3.82, 96, 72),
      new THREE.MeshBasicMaterial({
        color: 0x78b8ff,
        transparent: true,
        opacity: 0.065,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
      }),
    );
    group.add(atmosphere);

    const edgeGlow = new THREE.Mesh(
      new THREE.SphereGeometry(3.795, 96, 72),
      new THREE.MeshBasicMaterial({
        color: 0xa7d4ff,
        transparent: true,
        opacity: 0.035,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
      }),
    );
    group.add(edgeGlow);

    scene.add(new THREE.HemisphereLight(0x9dcfff, 0x01040a, 1.7));
    const key = new THREE.DirectionalLight(0xcbe7ff, 3.4);
    key.position.set(-1.8, 4.5, 4.8);
    scene.add(key);
    const rim = new THREE.PointLight(0x4d8cff, 10, 20);
    rim.position.set(2.8, 1.8, 4.5);
    scene.add(rim);

    const arcMaterial = new THREE.LineBasicMaterial({
      color: 0x8eb8e8,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });

    const routes = [
      [48, 16, 40, -74], [51, 14, 35, 139], [40, -74, 34, -118],
      [52, 13, 25, 55], [35, 139, -33, 151], [25, 55, 1, 104],
      [48, 16, 19, -99], [40, -74, -23, -46], [35, 139, 22, 114],
    ];

    routes.forEach(([latA, lonA, latB, lonB]) => {
      const a = pointOnSphere(3.79, latA, lonA);
      const b = pointOnSphere(3.79, latB, lonB);
      const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(4.12);
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(42));
      group.add(new THREE.Line(geometry, arcMaterial));
    });

    const nodeGeometry = new THREE.SphereGeometry(0.026, 10, 10);
    const blueNode = new THREE.MeshBasicMaterial({ color: 0x8ec8ff });
    const amberNode = new THREE.MeshBasicMaterial({ color: 0xffad63 });
    [
      [48, 16], [51, 14], [40, -74], [35, 139], [34, -118], [25, 55],
      [1, 104], [-33, 151], [19, -99], [-23, -46], [22, 114],
    ].forEach(([lat, lon], index) => {
      const node = new THREE.Mesh(nodeGeometry, index % 4 === 0 ? amberNode : blueNode);
      node.position.copy(pointOnSphere(3.82, lat, lon));
      group.add(node);
    });

    const starPositions: number[] = [];
    for (let i = 0; i < 170; i += 1) {
      starPositions.push(
        (Math.random() - 0.5) * 14,
        Math.random() * 6 - 0.3,
        -Math.random() * 4 - 1,
      );
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xa8cfff, size: 0.018, transparent: true, opacity: 0.42 }),
    );
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

    let frame = 0;
    let raf = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = () => {
      if (!reduceMotion) {
        frame += 1;
        group.rotation.y = -0.32 + Math.sin(frame * 0.0025) * 0.018;
        group.rotation.z = Math.sin(frame * 0.0016) * 0.003;
        stars.rotation.z += 0.000035;
      }
      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      texture?.dispose();
      globe.geometry.dispose();
      (globe.material as THREE.Material).dispose();
      atmosphere.geometry.dispose();
      (atmosphere.material as THREE.Material).dispose();
      edgeGlow.geometry.dispose();
      (edgeGlow.material as THREE.Material).dispose();
      arcMaterial.dispose();
      nodeGeometry.dispose();
      blueNode.dispose();
      amberNode.dispose();
      starGeometry.dispose();
      (stars.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className={className} />;
}
