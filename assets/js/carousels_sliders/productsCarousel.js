export function initProductsAutoRotate() {
  const targets = [
    { sectionSelector: ".products-section", trackSelector: ".products__grid" },
    { sectionSelector: ".arrivals-section", trackSelector: ".arrivals__cards" },
  ];

  targets.forEach(({ sectionSelector, trackSelector }) => {
    const sections = document.querySelectorAll(sectionSelector);
    sections.forEach((section) => {
      const track = section.querySelector(trackSelector);
      const nav = section.querySelector(".section-header__nav");
      if (!track || !nav) return;
      track.style.overflow = "hidden";
      track.style.position = "relative";

      const cards = () => track.querySelectorAll(":scope > .products__card");
      if (cards().length < 2) return;

      const buttons = nav.querySelectorAll(".section-header__btn");
      const prevBtn =
        nav.querySelector('button[aria-label="Əvvəlki"]') || buttons[0] || null;
      const nextBtn =
        nav.querySelector('button[aria-label="Növbəti"]') || buttons[1] || null;

      const hasGsap = typeof window.gsap !== "undefined";
      let isAnimating = false;

      function getStepSize() {
        const list = cards();
        if (!list.length) return 0;
        const card = list[0];
        const styles = window.getComputedStyle(track);
        const gapValue = parseFloat(styles.columnGap || styles.gap || "0") || 0;
        return card.getBoundingClientRect().width + gapValue;
      }

      function createFloatingClone(sourceCard, leftPx) {
        const clone = sourceCard.cloneNode(true);
        const width = sourceCard.getBoundingClientRect().width;
        const height = sourceCard.getBoundingClientRect().height;
        clone.setAttribute("aria-hidden", "true");
        clone.classList.add("products__card--clone");
        clone.style.position = "absolute";
        clone.style.top = "0";
        clone.style.left = `${leftPx}px`;
        clone.style.width = `${width}px`;
        clone.style.height = `${height}px`;
        clone.style.pointerEvents = "none";
        clone.style.zIndex = "3";
        track.appendChild(clone);
        return clone;
      }

      const shiftNext = () => {
        const list = cards();
        if (list.length < 2 || isAnimating) return;

        const step = getStepSize();
        if (!step) return;

        if (!hasGsap) {
          track.appendChild(list[0]);
          return;
        }

        isAnimating = true;
        const first = list[0];
        const last = list[list.length - 1];
        const cloneLeft = last.offsetLeft + step;
        const clone = createFloatingClone(first, cloneLeft);

        const animList = [...cards(), clone];
        window.gsap.to(animList, {
          x: -step,
          duration: 0.45,
          ease: "power2.inOut",
          onComplete: () => {
            track.appendChild(first);
            clone.remove();
            window.gsap.set(cards(), { x: 0, clearProps: "transform" });
            isAnimating = false;
          },
        });
      };

      const shiftPrev = () => {
        const list = cards();
        if (list.length < 2 || isAnimating) return;

        const step = getStepSize();
        if (!step) return;

        const lastCard = list[list.length - 1];
        if (!hasGsap) {
          track.prepend(lastCard);
          return;
        }

        isAnimating = true;
        const first = list[0];
        const cloneLeft = first.offsetLeft - step;
        const clone = createFloatingClone(lastCard, cloneLeft);

        const animList = [...cards(), clone];
        window.gsap.set(animList, { x: -step });
        window.gsap.to(animList, {
          x: 0,
          duration: 0.45,
          ease: "power2.inOut",
          onComplete: () => {
            track.prepend(lastCard);
            clone.remove();
            window.gsap.set(cards(), { x: 0, clearProps: "transform" });
            isAnimating = false;
          },
        });
      };

      let timerId = null;
      const startAuto = () => {
        if (timerId) return;
        timerId = window.setInterval(shiftNext, 3000);
      };

      const restartAuto = () => {
        if (timerId) window.clearInterval(timerId);
        timerId = null;
        startAuto();
      };

      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          shiftPrev();
          restartAuto();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          shiftNext();
          restartAuto();
        });
      }

      startAuto();
    });
  });
}
