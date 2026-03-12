import { gsap } from "../vendors/gsap/index.js";

function initPartnersSlider() {
  const section = document.querySelector(".partners-section");
  if (!section) return;

  const track = section.querySelector(".partners__grid");
  const nav = section.querySelector(".section-header__nav");
  if (!track || !nav) return;
  track.style.overflow = "hidden";
  track.style.position = "relative";

  const items = () => track.querySelectorAll(":scope > .partners__item");
  if (items().length < 2) return;

  const buttons = nav.querySelectorAll(".section-header__btn");
  const prevBtn =
    nav.querySelector('button[aria-label="Əvvəlki"]') || buttons[0] || null;
  const nextBtn =
    nav.querySelector('button[aria-label="Növbəti"]') || buttons[1] || null;

  const hasGsap = Boolean(gsap);
  let isAnimating = false;

  function getStepSize() {
    const list = items();
    if (!list.length) return 0;
    const item = list[0];
    const styles = window.getComputedStyle(track);
    const gapValue = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    return item.getBoundingClientRect().width + gapValue;
  }

  function createFloatingClone(sourceItem, leftPx) {
    const clone = sourceItem.cloneNode(true);
    const width = sourceItem.getBoundingClientRect().width;
    const height = sourceItem.getBoundingClientRect().height;
    clone.setAttribute("aria-hidden", "true");
    clone.classList.add("partners__item--clone");
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
    const list = items();
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

    const animList = [...items(), clone];
    gsap.to(animList, {
      x: -step,
      duration: 0.45,
      ease: "power2.inOut",
      onComplete: () => {
        track.appendChild(first);
        clone.remove();
        gsap.set(items(), { x: 0, clearProps: "transform" });
        isAnimating = false;
      },
    });
  };

  const shiftPrev = () => {
    const list = items();
    if (list.length < 2 || isAnimating) return;

    const step = getStepSize();
    if (!step) return;

    const lastItem = list[list.length - 1];
    if (!hasGsap) {
      track.prepend(lastItem);
      return;
    }

    isAnimating = true;
    const first = list[0];
    const cloneLeft = first.offsetLeft - step;
    const clone = createFloatingClone(lastItem, cloneLeft);

    const animList = [...items(), clone];
    gsap.set(animList, { x: -step });
    gsap.to(animList, {
      x: 0,
      duration: 0.45,
      ease: "power2.inOut",
      onComplete: () => {
        track.prepend(lastItem);
        clone.remove();
        gsap.set(items(), { x: 0, clearProps: "transform" });
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
}

export { initPartnersSlider };
