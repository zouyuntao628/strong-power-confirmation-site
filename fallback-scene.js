(function () {
  const fallback = document.getElementById("sceneFallback");
  const world = fallback && fallback.querySelector(".fallback-world");
  if (!fallback || !world) return;

  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let rotX = 62;
  let rotZ = -34;

  function applyRotation() {
    const clampedX = Math.max(38, Math.min(76, rotX));
    world.style.setProperty("--fallback-x", `${clampedX}deg`);
    world.style.setProperty("--fallback-z", `${rotZ}deg`);
  }

  function start(event) {
    dragging = true;
    const point = event.touches ? event.touches[0] : event;
    lastX = point.clientX;
    lastY = point.clientY;
    fallback.setPointerCapture?.(event.pointerId);
  }

  function move(event) {
    if (!dragging) return;
    const point = event.touches ? event.touches[0] : event;
    const dx = point.clientX - lastX;
    const dy = point.clientY - lastY;
    lastX = point.clientX;
    lastY = point.clientY;
    rotZ += dx * 0.24;
    rotX -= dy * 0.18;
    applyRotation();
    event.preventDefault();
  }

  function end() {
    dragging = false;
  }

  fallback.addEventListener("pointerdown", start);
  fallback.addEventListener("pointermove", move);
  fallback.addEventListener("pointerup", end);
  fallback.addEventListener("pointercancel", end);
  fallback.addEventListener("touchstart", start, { passive: false });
  fallback.addEventListener("touchmove", move, { passive: false });
  fallback.addEventListener("touchend", end);
  applyRotation();
})();
