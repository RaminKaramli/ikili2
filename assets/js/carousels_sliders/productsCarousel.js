export function initProductsAutoRotate() {
  const targets = [
    {
      sectionSelector: ".products-section",
      trackSelector: ".products__grid",
      cardSelector: ".products__card",
    },
    {
      sectionSelector: ".arrivals-section",
      trackSelector: ".arrivals__cards",
      cardSelector: ".products__card",
    },
  ];

  targets.forEach(({ sectionSelector, trackSelector, cardSelector }) => {
    const sections = document.querySelectorAll(sectionSelector);
    sections.forEach((section) => {
      const track = section.querySelector(trackSelector);
      const nav = section.querySelector(".section-header__nav");
      if (!track || !nav) return;

      track.style.overflow = "hidden";
      track.style.position = "relative";
      track.style.display = "flex";
      track.style.flexWrap = "nowrap";
      track.style.alignItems = "stretch";

      const cards = () => track.querySelectorAll(`:scope > ${cardSelector}`);
      if (cards().length < 2) return;

      const buttons = nav.querySelectorAll(".section-header__btn");
      const prevBtn =
        nav.querySelector('button[aria-label="Əvvəlki"]') || buttons[0] || null;
      const nextBtn =
        nav.querySelector('button[aria-label="Növbəti"]') || buttons[1] || null;

      const hasGsap = typeof window.gsap !== "undefined";
      let isAnimating = false;

      function getVisibleCount() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1200) return 2;
        if (window.innerWidth <= 1400) return 3;
        return 4;
      }

      function applyCarouselLayout() {
        const list = cards();
        if (!list.length) return;

        const styles = window.getComputedStyle(track);
        const gapValue = parseFloat(styles.columnGap || styles.gap || "0") || 0;
        const visibleCount = getVisibleCount();
        const totalGap = gapValue * (visibleCount - 1);
        const width = Math.max(0, (track.clientWidth - totalGap) / visibleCount);

        list.forEach((card) => {
          card.style.flex = `0 0 ${width}px`;
          card.style.maxWidth = `${width}px`;
        });
      }

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

      applyCarouselLayout();
      window.addEventListener("resize", applyCarouselLayout);
      startAuto();
    });
  });
}
