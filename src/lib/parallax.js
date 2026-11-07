/**
 * One shared, rAF-throttled scroll listener drives every parallax layer, so
 * adding depth to a section never costs an extra scroll handler. Layers are
 * moved with transform only, and the whole effect switches off for reduced
 * motion, touch devices and small screens.
 */
const layers = new Set();

let frame = null;
let listening = false;
let canAnimate = null;

function supportsDepth() {
  if (canAnimate === null) {
    const query = (value) =>
      typeof window.matchMedia === "function" && window.matchMedia(value).matches;
    canAnimate =
      typeof window !== "undefined" &&
      !query("(prefers-reduced-motion: reduce)") &&
      !query("(max-width: 767px)") &&
      !query("(hover: none)");
  }
  return canAnimate;
}

// The layer is 10% taller than its frame on each side, so it can travel up to
// 10% of the frame height without ever exposing an edge.
const MAX_TRAVEL_RATIO = 0.083;

function paint() {
  frame = null;
  const viewport = window.innerHeight || 0;

  layers.forEach((layer) => {
    const el = layer.el;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.height === 0 || rect.bottom < -160 || rect.top > viewport + 160) return;
    const travel = rect.height * MAX_TRAVEL_RATIO * layer.strength;
    const progress = (viewport - rect.top) / (viewport + rect.height);
    const shift = (progress - 0.5) * 2 * travel;
    el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
  });
}

function schedule() {
  if (frame === null) frame = requestAnimationFrame(paint);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
  if (frame !== null) {
    cancelAnimationFrame(frame);
    frame = null;
  }
}

/** Registers a parallax layer. Returns a cleanup function. */
export function registerParallax(el, strength = 1) {
  if (!el || strength <= 0 || !supportsDepth()) return () => {};

  const layer = { el, strength };
  layers.add(layer);
  startListening();
  schedule();

  return () => {
    layers.delete(layer);
    el.style.transform = "";
    if (!layers.size) stopListening();
  };
}