import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById("deploymentScene");

if (canvas) {
  const fallback = document.getElementById("sceneFallback");
  if (fallback) fallback.hidden = true;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f1720);
  scene.fog = new THREE.Fog(0x0f1720, 80, 170);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;

  const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 260);
  camera.position.set(58, 46, 66);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.82;
  controls.target.set(2, 1.6, 0);
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.minDistance = 34;
  controls.maxDistance = 126;
  canvas.style.touchAction = "none";

  const root = new THREE.Group();
  scene.add(root);

  const hemi = new THREE.HemisphereLight(0xddefff, 0x18212c, 2.1);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 2.6);
  key.position.set(34, 62, 30);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.near = 8;
  key.shadow.camera.far = 140;
  key.shadow.camera.left = -76;
  key.shadow.camera.right = 76;
  key.shadow.camera.top = 76;
  key.shadow.camera.bottom = -76;
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x70d7ff, 1.1);
  rim.position.set(-42, 32, -48);
  scene.add(rim);

  const glow = new THREE.PointLight(0x2ed3ff, 68, 86);
  glow.position.set(-42, 14, -24);
  scene.add(glow);

  const mat = {
    floor: new THREE.MeshStandardMaterial({ color: 0x24313e, roughness: 0.86, metalness: 0.08 }),
    floorLine: new THREE.LineBasicMaterial({ color: 0x5b6b7f, transparent: true, opacity: 0.32 }),
    wall: new THREE.MeshStandardMaterial({ color: 0x677483, roughness: 0.65, metalness: 0.06, transparent: true, opacity: 0.28 }),
    wallFrame: new THREE.MeshStandardMaterial({ color: 0x9aa8b8, roughness: 0.42, metalness: 0.22 }),
    it: new THREE.MeshStandardMaterial({ color: 0x3478f6, roughness: 0.45, metalness: 0.18 }),
    itDark: new THREE.MeshStandardMaterial({ color: 0x173e78, roughness: 0.58, metalness: 0.28 }),
    cooling: new THREE.MeshStandardMaterial({ color: 0x22b8a0, roughness: 0.44, metalness: 0.16 }),
    coolingDark: new THREE.MeshStandardMaterial({ color: 0x0f6f66, roughness: 0.58, metalness: 0.18 }),
    power: new THREE.MeshStandardMaterial({ color: 0xf4a62a, roughness: 0.42, metalness: 0.24 }),
    powerDark: new THREE.MeshStandardMaterial({ color: 0x7f4b11, roughness: 0.55, metalness: 0.24 }),
    battery: new THREE.MeshStandardMaterial({ color: 0xe94f73, roughness: 0.45, metalness: 0.18 }),
    batteryDark: new THREE.MeshStandardMaterial({ color: 0x782238, roughness: 0.56, metalness: 0.2 }),
    cabinet: new THREE.MeshStandardMaterial({ color: 0x18212f, roughness: 0.42, metalness: 0.42 }),
    panel: new THREE.MeshStandardMaterial({ color: 0xe9f0f7, roughness: 0.38, metalness: 0.22 }),
    glass: new THREE.MeshStandardMaterial({ color: 0x83d8ff, roughness: 0.15, metalness: 0.05, transparent: true, opacity: 0.58 }),
    tray: new THREE.MeshStandardMaterial({ color: 0xd8e0e8, roughness: 0.32, metalness: 0.56 }),
    trayDark: new THREE.MeshStandardMaterial({ color: 0x7f8b98, roughness: 0.46, metalness: 0.42 }),
    copper: new THREE.MeshStandardMaterial({ color: 0xc87533, roughness: 0.34, metalness: 0.64 }),
    yellow: new THREE.MeshStandardMaterial({ color: 0xffd166, roughness: 0.36, metalness: 0.18 }),
    greenLight: new THREE.MeshBasicMaterial({ color: 0x6effa9 }),
    redLight: new THREE.MeshBasicMaterial({ color: 0xff5b6e }),
    text: new THREE.MeshBasicMaterial({ color: 0xffffff })
  };

  function roundedBoxGeometry(w, h, d, r = 0.16, s = 3) {
    if (THREE.RoundedBoxGeometry) return new THREE.RoundedBoxGeometry(w, h, d, s, r);
    return new THREE.BoxGeometry(w, h, d, 2, 2, 2);
  }

  function meshBox(name, x, y, z, w, h, d, material, options = {}) {
    const geo = options.rounded ? roundedBoxGeometry(w, h, d, options.radius || 0.12, 3) : new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, material);
    mesh.name = name;
    mesh.position.set(x, y + h / 2, z);
    mesh.castShadow = options.castShadow !== false;
    mesh.receiveShadow = options.receiveShadow !== false;
    root.add(mesh);
    if (options.edges !== false) addEdges(mesh, options.edgeColor || 0xffffff, options.edgeOpacity ?? 0.18);
    return mesh;
  }

  function addEdges(mesh, color, opacity) {
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(mesh.geometry),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity })
    );
    edges.position.copy(mesh.position);
    edges.rotation.copy(mesh.rotation);
    root.add(edges);
    return edges;
  }

  function label(text, x, y, z, scale = 1) {
    const c = document.createElement("canvas");
    c.width = 768;
    c.height = 160;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "rgba(8,14,22,0.74)";
    roundRect(ctx, 20, 28, 728, 86, 18);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.28)";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 44px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 384, 72);
    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true }));
    sprite.position.set(x, y, z);
    sprite.scale.set(11.8 * scale, 2.45 * scale, 1);
    root.add(sprite);
    return sprite;
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function addDoorPanel(x, z, w, h, side, material = mat.panel) {
    const y = 0.48;
    const thick = 0.08;
    if (side === "front") return meshBox("door panel", x, y, z, w, h, thick, material, { edges: true, edgeOpacity: 0.24 });
    return meshBox("door panel", x, y, z, thick, h, w, material, { edges: true, edgeOpacity: 0.24 });
  }

  function ventBank(x, z, count, side, width = 1.2) {
    for (let i = 0; i < count; i += 1) {
      const offset = (i - (count - 1) / 2) * 0.34;
      if (side === "front") meshBox("vent", x + offset, 2.72, z, 0.22, 0.08, 0.08, mat.trayDark, { edges: false });
      else meshBox("vent", x, 2.72, z + offset, 0.08, 0.08, 0.22, mat.trayDark, { edges: false });
    }
    if (side === "front") meshBox("vent frame", x, 2.54, z - 0.005, width, 0.58, 0.04, mat.glass, { edges: true, edgeOpacity: 0.3 });
    else meshBox("vent frame", x - 0.005, 2.54, z, 0.04, 0.58, width, mat.glass, { edges: true, edgeOpacity: 0.3 });
  }

  function statusLights(x, z, side, count = 3) {
    for (let i = 0; i < count; i += 1) {
      const material = i === 0 ? mat.greenLight : i === 1 ? mat.yellow : mat.redLight;
      const offset = (i - 1) * 0.28;
      const geo = new THREE.SphereGeometry(0.095, 16, 10);
      const s = new THREE.Mesh(geo, material);
      s.position.set(side === "front" ? x + offset : x, 2.02, side === "front" ? z : z + offset);
      root.add(s);
    }
  }

  function container(name, x, z, w, d, h, materials, options = {}) {
    const body = meshBox(name, x, 0, z, w, h, d, materials.body, { rounded: true, radius: 0.12, edgeOpacity: 0.2 });
    meshBox(`${name} roof cap`, x, h + 0.02, z, w + 0.24, 0.16, d + 0.24, materials.dark, { edgeOpacity: 0.18 });
    meshBox(`${name} plinth`, x, 0.02, z, w + 0.22, 0.22, d + 0.22, mat.cabinet, { edgeOpacity: 0.12 });
    const frontZ = z + d / 2 + 0.045;
    const doorCount = options.doors || Math.max(2, Math.floor(w / 2.2));
    for (let i = 0; i < doorCount; i += 1) {
      const px = x - w / 2 + (i + 0.5) * (w / doorCount);
      addDoorPanel(px, frontZ, w / doorCount - 0.18, h * 0.68, "front");
      if (i % 2 === 0) statusLights(px + 0.28, frontZ + 0.045, "front", 2);
    }
    ventBank(x, z - d / 2 - 0.055, Math.min(12, doorCount + 4), "front", Math.min(w * 0.58, 5.8));
    if (options.sideVents) {
      ventBank(x - w / 2 - 0.055, z, 8, "side", Math.min(d * 0.64, 4.4));
      ventBank(x + w / 2 + 0.055, z, 8, "side", Math.min(d * 0.64, 4.4));
    }
    return body;
  }

  function cabinetRow(name, x, z, count, material) {
    for (let i = 0; i < count; i += 1) {
      const px = x + (i - (count - 1) / 2) * 1.35;
      meshBox(`${name}-${i}`, px, 0, z, 1.08, 2.4, 1.08, material, { rounded: true, radius: 0.06, edgeOpacity: 0.26 });
      addDoorPanel(px, z + 0.58, 0.76, 1.62, "front", mat.glass);
      statusLights(px, z + 0.64, "front", 2);
    }
  }

  function cableTray(name, x, y, z, w, d, direction = "x") {
    meshBox(`${name} base`, x, y, z, w, 0.18, d, mat.tray, { edgeOpacity: 0.34 });
    meshBox(`${name} rail A`, x, y + 0.18, z - d / 2 + 0.08, w, 0.26, 0.12, mat.trayDark, { edgeOpacity: 0.24 });
    meshBox(`${name} rail B`, x, y + 0.18, z + d / 2 - 0.08, w, 0.26, 0.12, mat.trayDark, { edgeOpacity: 0.24 });
    const supportCount = Math.max(3, Math.floor(w / 8));
    for (let i = 0; i < supportCount; i += 1) {
      const px = x - w / 2 + (i + 0.5) * (w / supportCount);
      meshBox(`${name} support ${i}`, px, 3.4, z, 0.14, y - 3.4, 0.14, mat.trayDark, { edges: false });
      meshBox(`${name} bracket ${i}`, px, y - 0.05, z, 1.35, 0.12, 0.12, mat.trayDark, { edges: false });
    }
  }

  function cableCurve(points, color = 0xffd166, radius = 0.055) {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
    const geo = new THREE.TubeGeometry(curve, 72, radius, 8, false);
    const material = new THREE.MeshStandardMaterial({ color, roughness: 0.28, metalness: 0.45, emissive: color, emissiveIntensity: 0.04 });
    const tube = new THREE.Mesh(geo, material);
    tube.castShadow = true;
    root.add(tube);
    return tube;
  }

  const floor = meshBox("raised floor", 0, -0.1, 0, 100, 0.2, 64, mat.floor, { edges: false, castShadow: false });
  floor.receiveShadow = true;
  const grid = new THREE.GridHelper(100, 25, 0x6f8094, 0x384757);
  grid.position.y = 0.03;
  grid.material.transparent = true;
  grid.material.opacity = 0.45;
  root.add(grid);

  for (let x = -45; x <= 45; x += 15) {
    cableCurve([[x, 0.08, -30], [x, 0.08, 30]], 0x3c4c5e, 0.012);
  }
  for (let z = -24; z <= 24; z += 12) {
    cableCurve([[-48, 0.09, z], [48, 0.09, z]], 0x3c4c5e, 0.012);
  }

  meshBox("north transparent wall", 0, 0, -31.2, 96, 4.8, 0.5, mat.wall, { edgeOpacity: 0.12 });
  meshBox("south transparent wall", 0, 0, 31.2, 96, 4.8, 0.5, mat.wall, { edgeOpacity: 0.12 });
  meshBox("west transparent wall", -48.4, 0, 0, 0.5, 4.8, 62, mat.wall, { edgeOpacity: 0.12 });
  meshBox("east transparent wall", 48.4, 0, 0, 0.5, 4.8, 62, mat.wall, { edgeOpacity: 0.12 });
  meshBox("entry lintel", -45, 4.8, -25, 6.5, 0.36, 1.4, mat.wallFrame, { edgeOpacity: 0.2 });

  for (let i = 0; i < 6; i += 1) {
    const x = -34 + i * 13.6;
    const letter = String.fromCharCode(65 + i);
    container(`ITFC-${letter}M`, x, -9.5, 8.8, 6.8, 3.8, { body: mat.it, dark: mat.itDark }, { doors: 4, sideVents: true });
    container(`ITFC-${letter}N`, x, 6.5, 8.8, 6.8, 3.8, { body: mat.it, dark: mat.itDark }, { doors: 4, sideVents: true });
    cabinetRow(`RPP-${letter}`, x, -1.5, 5, mat.cabinet);
    label(`ITFC-${letter}`, x, 6.35, -1.4, 0.65);
  }

  for (let i = 0; i < 6; i += 1) {
    const x = -34 + i * 13.6;
    const letter = String.fromCharCode(65 + i);
    container(`COFC-${letter}01`, x, 22.2, 9.7, 5.8, 3.7, { body: mat.cooling, dark: mat.coolingDark }, { doors: 3, sideVents: true });
    for (let f = 0; f < 3; f += 1) {
      const fan = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.12, 28), mat.trayDark);
      fan.rotation.x = Math.PI / 2;
      fan.position.set(x - 2.3 + f * 2.3, 3.95, 22.2);
      fan.castShadow = true;
      root.add(fan);
    }
  }
  label("COFC 冷却&配电方舱", 0, 6.3, 22.4, 0.9);

  container("TRFC-01", -38, -23.8, 10.5, 7.2, 5.2, { body: mat.power, dark: mat.powerDark }, { doors: 5, sideVents: true });
  container("TRFC-02", -25.5, -23.8, 10.5, 7.2, 5.2, { body: mat.power, dark: mat.powerDark }, { doors: 5, sideVents: true });
  label("TRFC 1600kVA x2", -31.8, 7.55, -23.8, 0.82);

  for (let i = 0; i < 4; i += 1) {
    container(`HVFC-${i + 1}`, -10 + i * 7.4, -23.6, 5.6, 6.4, 4.25, { body: mat.power, dark: mat.powerDark }, { doors: 3 });
  }

  for (let i = 0; i < 6; i += 1) {
    const x = -36 + i * 7.4;
    container(`BTFC-${i + 1}`, x, 0.5, 4.7, 5.3, 3.35, { body: mat.battery, dark: mat.batteryDark }, { doors: 2 });
    container(`PAFC-${i + 1}`, x, 13.7, 5.8, 6.0, 3.6, { body: mat.battery, dark: mat.batteryDark }, { doors: 3, sideVents: true });
  }
  label("BTFC / PAFC", -18, 6.15, 8.2, 0.82);

  const trayY = 6.5;
  cableTray("medium voltage tray", -1, trayY, -15.4, 86, 1.15);
  cableTray("it bus tray", 0, trayY - 0.35, -0.7, 86, 1.05);
  cableTray("cooling tray", 0, trayY - 0.15, 18.0, 86, 1.05);
  for (let i = 0; i < 6; i += 1) {
    const x = -34 + i * 13.6;
    meshBox(`drop tray ${i}`, x, 3.3, 8.7, 0.62, 0.42, 21.2, mat.tray, { edgeOpacity: 0.3 });
    meshBox(`drop tray rail ${i}`, x - 0.35, 3.5, 8.7, 0.12, 0.28, 21.2, mat.trayDark, { edges: false });
    meshBox(`drop tray rail b ${i}`, x + 0.35, 3.5, 8.7, 0.12, 0.28, 21.2, mat.trayDark, { edges: false });
  }

  meshBox("incoming cable duct", -47.2, 0.25, -24.2, 4.6, 0.52, 1.36, mat.copper, { edgeOpacity: 0.38 });
  label("电缆入户", -42.8, 3.8, -25.2, 0.55);

  cableCurve([[-48, 0.85, -24.2], [-42, 1.1, -24.2], [-38, 2.4, -23.8], [-31.8, trayY + 0.2, -15.4], [10, trayY + 0.25, -15.4], [37, trayY + 0.25, -0.7]], 0xffd166, 0.065);
  cableCurve([[-31.8, trayY + 0.15, -15.4], [-20, trayY + 0.1, -4.0], [-16, trayY + 0.05, 13.7]], 0xef476f, 0.046);
  cableCurve([[4, trayY + 0.08, -0.7], [8, trayY, 8], [22, trayY, 22.2]], 0x22b8a0, 0.046);

  const views = {
    overview: { position: [58, 46, 66], target: [2, 1.6, 0] },
    power: { position: [-58, 32, -38], target: [-24, 2.7, -21] },
    it: { position: [30, 36, 44], target: [4, 2.2, -2] },
    cooling: { position: [34, 30, 52], target: [2, 2.4, 20] }
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
    const pixelRatio = renderer.getPixelRatio();
    if (canvas.width !== Math.floor(width * pixelRatio) || canvas.height !== Math.floor(height * pixelRatio)) {
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
      if (camera.position.distanceTo(targetCamera) < 0.06) {
        targetCamera = null;
        targetLook = null;
      }
    }
    root.rotation.y += 0.00045;
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}
