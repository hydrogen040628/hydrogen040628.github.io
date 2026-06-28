// Lightweight horizontal carousel: native touch-swipe via CSS scroll-snap,
// with arrow buttons and dot indicators wired up here.
export default function initCarousel() {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const slides = Array.from(track.children);
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const dotsWrap = carousel.querySelector("[data-carousel-dots]");

    if (slides.length <= 1) {
      if (prev) prev.style.display = "none";
      if (next) next.style.display = "none";
      return;
    }

    const dots = slides.map((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel__dot";
      dot.setAttribute("aria-label", `Go to image ${i + 1}`);
      dot.addEventListener("click", () => scrollToIndex(i));
      dotsWrap.appendChild(dot);
      return dot;
    });

    const currentIndex = () =>
      Math.round(track.scrollLeft / track.clientWidth);

    function scrollToIndex(i) {
      const clamped = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    }

    function update() {
      const i = currentIndex();
      dots.forEach((dot, di) => dot.classList.toggle("is-active", di === i));
      if (prev) prev.disabled = i === 0;
      if (next) next.disabled = i === slides.length - 1;
    }

    if (prev) prev.addEventListener("click", () => scrollToIndex(currentIndex() - 1));
    if (next) next.addEventListener("click", () => scrollToIndex(currentIndex() + 1));

    let ticking = false;
    track.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            update();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
    window.addEventListener("resize", update);

    update();
  });
}
