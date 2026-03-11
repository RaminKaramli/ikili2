import { gsap } from "../vendors/gsap/index.js";

function initPartnersSlider() {
  const container = document.querySelector(".partners__container");
  if (!container) return;

  const track = container.querySelector(".partners__grid");
  const items = Array.from(container.querySelectorAll(".partners__item"));
  const prevBtn = container.querySelector('.section-header__btn[aria-label="Əvvəlki"]');
  const nextBtn = container.querySelector('.section-header__btn[aria-label="Növbəti"]');

  if (!track || items.length === 0 || !prevBtn || !nextBtn) return;

  let isAnimating = false;
  const duration = 0.32;
  const ease = "power2.out";
  const autoIntervalMs = 5000;
  const canAnimate = Boolean(gsap);
  let autoTimer = null;

  const canScrollAnimate = (stepWidth) =>
    canAnimate &&
    stepWidth > 0 &&
    track.scrollWidth > track.clientWidth + 1;

  const getStepWidth = () => {
    const currentItems = track.querySelectorAll(".partners__item");
    if (currentItems.length > 1) {
      return currentItems[1].offsetLeft - currentItems[0].offsetLeft;
    }
    return currentItems[0]?.getBoundingClientRect().width || 0;
  };

  const moveNext = () => {
    if (isAnimating) return;
    const first = track.querySelector(".partners__item");
    if (!first) return;

    const stepWidth = getStepWidth();
    if (!canScrollAnimate(stepWidth)) {
      track.append(first);
      return;
    }

    isAnimating = true;
    gsap.killTweensOf(track);
    gsap.to(track, {
      scrollLeft: stepWidth,
      duration,
      ease,
      onComplete: () => {
        if (first) track.append(first);
        track.scrollLeft = 0;
        isAnimating = false;
      },
    });
  };

  const movePrev = () => {
    if (isAnimating) return;
    const itemsList = track.querySelectorAll(".partners__item");
    const last = itemsList[itemsList.length - 1];
    if (!last) return;

    const stepWidth = getStepWidth();
    if (!canScrollAnimate(stepWidth)) {
      track.prepend(last);
      return;
    }

    track.prepend(last);
    isAnimating = true;
    track.scrollLeft = stepWidth;
    gsap.killTweensOf(track);
    gsap.to(track, {
      scrollLeft: 0,
      duration,
      ease,
      onComplete: () => {
        isAnimating = false;
      },
    });
  };

  track.scrollLeft = 0;

  const startAuto = () => {
    if (autoTimer) return;
    autoTimer = window.setInterval(moveNext, autoIntervalMs);
  };

  const stopAuto = () => {
    if (!autoTimer) return;
    window.clearInterval(autoTimer);
    autoTimer = null;
  };

  const restartAuto = () => {
    stopAuto();
    startAuto();
  };

  prevBtn.addEventListener("click", () => {
    movePrev();
    restartAuto();
  });
  nextBtn.addEventListener("click", () => {
    moveNext();
    restartAuto();
  });

  startAuto();
}

export { initPartnersSlider };
