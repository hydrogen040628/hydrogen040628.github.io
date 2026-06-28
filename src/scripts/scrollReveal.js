export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements.length) return;

  // ScrollReveal is loaded from a CDN; bail out gracefully if it is unavailable
  // so the rest of the page (carousel, tilt) still works.
  if (typeof ScrollReveal === "undefined") return;

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}
