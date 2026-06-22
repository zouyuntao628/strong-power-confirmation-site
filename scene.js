import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById("deploymentScene");

if (canvas) {
  const fallback = document.getElementById("sceneFallback");
  if (fallback) fallback.hidden = true;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x101820);
  scene.fog = new THREE.Fog(0x101820, 58, 145);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 260);
  camera.position.set(48, 42, 62);

  const controls = new OrbitControls(camera, canvas);
  controls.enabled = true;
  controls.enableRotate = true;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.82;
  controls.target.set(2, 1, 0);
  controls.maxPolarAngle = Math.PI * 0.48;
  controls.minDistance = 32;
  controls.maxDistance = 120;
  canvas.style.touchAction = "none";

  const hemi = new THREE.HemisphereLight(0xd9f1ff, 0x1b2630, 2.4);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 2.1);
  key.position.set(32, 54, 28);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.near = 8;
  key.shadow.camera.far = 120;
  key.shadow.camera.left = -70;
  key.shadow.camera.right = 70;
  key.shadow.camera.top = 70;
  key.shadow.camera.bottom = -70;
  scene.add(key);

  const fill = new THREE.PointLight(0x43c6ff, 45, 70);
  fill.position.set(-36, 18, -20);
  scene.add(fill);

  const materials = {
    floor: new THREE.MeshStandardMaterial({ color: 0x263340, roughness: 0.82, metalness: 0.1 }),
    grid: new THREE.LineBasicMaterial({ color: 0x4d5d70, transparent: true, opacity: 0.34 }),
    wall: new THREE.MeshStandardMaterial({ color: 0x4a5663, roughness: 0.74, metalness: 0.06 }),
    it: new THREE.MeshStandardMaterial({ color: 0x4f8cff, roughness: 0.52, metalness: 0.18 }),
    cooling: new THREE.MeshStandardMaterial({ color: 0x26c6a8, roughness: 0.48, metalness: 0.16 }),
    power: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.45, metalness: 0.22 }),
    battery: new THREE.MeshStandardMaterial({ color: 0xef476f, roughness: 0.48, metalness: 0.16 }),
    cabinet: new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.44, metalness: 0.36 }),
    tray: new THREE.MeshStandardMaterial({ color: 0xd7dee8, roughness: 0.35, metalness: 0.5 }),
    copper: new THREE.MeshStandardMaterial({ color: 0xc47a34, roughness: 0.38, metalness: 0.55 }),
    label: new THREE.MeshBasicMaterial({ color: 0xffffff })
  };

  const root = new THREE.Group();
  scene.add(root);

  function box(name, x, y, z, w, h, d, material, options = {}) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, material);
    mesh.name = name;
    mesh.position.set(x, y + h / 2, z);
    mesh.castShadow = options.castShadow !== false;
    mesh.receiveShadow = true;
    root.add(mesh);

    if (options.edges !== false) {
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: options.edgeColor || 0xffffff, transparent: true, opacity: options.edgeOpacity || 0.22 })
      );
      edges.position.copy(mesh.position);
      root.add(edges);
    }
    return mesh;
  }

  function label(text, x, y, z, scale = 1) {
    const canvas2 = document.createElement("canvas");
    canvas2.width = 512;
    canvas2.height = 128;
    const ctx = canvas2.getContext("2d");
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx.fillStyle = "rgba(15,23,32,0.78)";
    ctx.fillRect(0, 18, 512, 78);
    ctx.strokeStyle = "rgba(255,255,255,0.22)";
    ctx.strokeRect(0.5, 18.5, 511, 77);
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 40px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 256, 58);
    const texture = new THREE.CanvasTexture(canvas2);
    texture.colorSpace = THREE.SRGBColorSpace;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true }));
    sprite.position.set(x, y, z);
    sprite.scale.set(9 * scale, 2.25 * scale, 1);
    root.add(sprite);
    return sprite;
  }

  const floor = box("floor", 0, -0.08, 0, 94, 0.16, 60, materials.floor, { castShadow: false, edges: false });
  floor.receiveShadow = true;

  const grid = new THREE.GridHelper(96, 24, 0x7a8ba0, 0x3f4d5b);
  grid.position.y = 0.02;
  grid.material.transparent = true;
  grid.material.opacity = 0.42;
  root.add(grid);

  box("north wall", 0, 0, -30, 94, 4.2, 1.0, materials.wall);
  box("south wall", 0, 0, 30, 94, 4.2, 1.0, materials.wall);
  box("west wall", -47, 0, 0, 1.0, 4.2, 60, materials.wall);
  box("east wall", 47, 0, 0, 1.0, 4.2, 60, materials.wall);

  const itGroup = new THREE.Group();
  root.add(itGroup);
  for (let i = 0; i < 6; i += 1) {
    const x = -32 + i * 12.8;
    const a = box(`ITFC-${String.fromCharCode(65 + i)}M`, x, 0, -8.4, 8.6, 3.4, 7.8, materials.it);
    const b = box(`ITFC-${String.fromCharCode(65 + i)}N`, x, 0, 7.8, 8.6, 3.4, 7.8, materials.it);
    itGroup.add(a, b);
    label(`ITFC-${String.fromCharCode(65 + i)}`, x, 5.4, -0.3, 0.72);
  }

  for (let i = 0; i < 6; i += 1) {
    const x = -32 + i * 12.8;
    box(`COFC-${String.fromCharCode(65 + i)}01`, x, 0, 21.5, 9.2, 3.1, 5.6, materials.cooling);
  }
  label("COFC 冷却&配电方舱", 0, 5.5, 21.5, 0.95);

  box("TRFC-01", -36, 0, -23, 10, 4.8, 7, materials.power);
  box("TRFC-02", -23.8, 0, -23, 10, 4.8, 7, materials.power);
  label("TRFC 1600kVA x2", -29.9, 7.1, -23, 0.86);

  for (let i = 0; i < 4; i += 1) {
    box(`HVFC-${i + 1}`, -7 + i * 6.6, 0, -23, 5.1, 3.8, 6.5, materials.power);
  }

  for (let i = 0; i < 6; i += 1) {
    box(`BTFC-${i + 1}`, -37 + i * 7.4, 0, 0, 4.5, 3.1, 5.6, materials.battery);
  }
  for (let i = 0; i < 6; i += 1) {
    box(`PAFC-${i + 1}`, -37 + i * 7.4, 0, 13.8, 5.8, 3.4, 6.2, materials.battery);
  }
  label("BTFC / PAFC", -18, 5.5, 8, 0.85);

  for (let i = 0; i < 6; i += 1) {
    const x = -32 + i * 12.8;
    for (let j = 0; j < 4; j += 1) {
      box(`RPP-${i}-${j}`, x - 3.3 + j * 2.2, 0, -1.0, 1.35, 2.2, 1.4, materials.cabinet);
    }
  }

  const trayHeight = 6.4;
  box("main cable tray", 0, trayHeight, -15.2, 78, 0.55, 1.15, materials.tray, { edgeOpacity: 0.34 });
  box("it cable tray", 0, trayHeight, -0.2, 78, 0.45, 1.05, materials.tray, { edgeOpacity: 0.34 });
  box("cooling cable tray", 0, trayHeight, 18.2, 78, 0.45, 1.05, materials.tray, { edgeOpacity: 0.34 });
  for (let i = 0; i < 6; i += 1) {
    const x = -32 + i * 12.8;
    box(`vertical tray ${i}`, x, 3.3, 8.8, 0.72, 0.42, 21, materials.tray, { edgeOpacity: 0.32 });
  }

  box("incoming cable", -45.5, 0.25, -23, 3.6, 0.46, 1.25, materials.copper, { edgeOpacity: 0.38 });
  label("电缆入户", -42, 3.6, -24.5, 0.55);

  const pathMaterial = new THREE.LineBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.85 });
  const pathPoints = [
    new THREE.Vector3(-45.5, 0.9, -23),
    new THREE.Vector3(-36, 1.8, -23),
    new THREE.Vector3(-29.9, trayHeight + 0.5, -15.2),
    new THREE.Vector3(0, trayHeight + 0.5, -15.2),
    new THREE.Vector3(36, trayHeight + 0.5, -0.2)
  ];
  const powerPath = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pathPoints), pathMaterial);
  root.add(powerPath);

  const views = {
    overview: { position: [48, 42, 62], target: [2, 1, 0] },
    power: { position: [-54, 30, -34], target: [-25, 2, -20] },
    it: { position: [24, 35, 44], target: [4, 2, -2] },
    cooling: { position: [32, 28, 50], target: [2, 2, 19] }
  };

  let targetCamera = null;
  let targetLook = null;

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const view = views[button.dataset.view] || views.overview;
      targetCamera = new THREE.Vector3(...view.position);
      targetLook = new THREE.Vector3(...view.target);
    });
  });

  function resize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== Math.floor(width * renderer.getPixelRatio()) || canvas.height !== Math.floor(height * renderer.getPixelRatio())) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
  }

  function animate() {
    resize();
    if (targetCamera && targetLook) {
      camera.position.lerp(targetCamera, 0.055);
      controls.target.lerp(targetLook, 0.055);
      if (camera.position.distanceTo(targetCamera) < 0.05) {
        targetCamera = null;
        targetLook = null;
      }
    }
    root.rotation.y += 0.0009;
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}
