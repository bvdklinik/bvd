const VISIBLE_CLASS = "is-visible";

let observer = null;
let reducedMotion = null;

function prefersReducedMotion() {
  if (reducedMotion === null) {
    reducedMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return reducedMotion;
}

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(VISIBLE_CLASS);
        // One-shot: an element never replays when the user scrolls past it again.
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
  );
  return observer;
}

/**
 * Fades an element in the first time it enters the viewport.
 * Returns a cleanup function so unmounting components never leak observers.
 */
export function observeReveal(el) {
  if (!el) return () => {};
  if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
    el.classList.add(VISIBLE_CLASS);
    return () => {};
  }
  const activeObserver = getObserver();
  activeObserver.observe(el);
  return () => activeObserver.unobserve(el);
}