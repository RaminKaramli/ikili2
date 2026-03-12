import { gsap } from "../vendors/gsap/index.js";

const $ = (selector, root = document) => root.querySelector(selector);

function animateHeroImage(heroImg) {
  if (!heroImg || !gsap) return;

  gsap.killTweensOf(heroImg);
  gsap.fromTo(
    heroImg,
    { autoAlpha: 0.45, y: 8, scale: 0.985 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.32, ease: "power2.out" }
  );
}

function initProductGallerySlider(root = document) {
  const gallery = $(".pd-gallery", root);
  const heroImg = $(".pd-gallery__hero-img", gallery);
  if (!gallery || !heroImg) return;

  const thumbsTrack = $(".pd-gallery__thumbs-track", gallery);
  const thumbs = [...gallery.querySelectorAll(".pd-gallery__thumb")];
  const arrows = [...gallery.querySelectorAll(".pd-gallery__arrow")];
  if (!thumbs.length || !thumbsTrack) return;

  const visibleThumbsCount = 4;
  let trackIndex = 0;

  let activeIndex = thumbs.findIndex((thumb) => thumb.classList.contains("is-active"));
  if (activeIndex < 0) activeIndex = 0;

  const getTrackStep = () => {
    const firstThumb = thumbs[0];
    if (!firstThumb) return 0;
    const thumbStyle = window.getComputedStyle(firstThumb);
    const thumbWidth = firstThumb.getBoundingClientRect().width;
    const marginRight = parseFloat(thumbStyle.marginRight) || 0;
    const trackStyle = window.getComputedStyle(thumbsTrack);
    const gap =
      parseFloat(trackStyle.gap) ||
      parseFloat(trackStyle.columnGap) ||
      parseFloat(trackStyle.rowGap) ||
      0;

    return thumbWidth + Math.max(gap, marginRight);
  };

  const updateTrackPosition = () => {
    const maxTrackIndex = Math.max(0, thumbs.length - visibleThumbsCount);
    trackIndex = Math.min(Math.max(trackIndex, 0), maxTrackIndex);
    const step = getTrackStep();
    thumbsTrack.style.transform = `translateX(-${trackIndex * step}px)`;
  };

  const ensureActiveThumbVisible = () => {
    const maxTrackIndex = Math.max(0, thumbs.length - visibleThumbsCount);
    if (activeIndex < trackIndex) {
      trackIndex = activeIndex;
    } else if (activeIndex >= trackIndex + visibleThumbsCount) {
      trackIndex = activeIndex - visibleThumbsCount + 1;
    }
    trackIndex = Math.min(Math.max(trackIndex, 0), maxTrackIndex);
    updateTrackPosition();
  };

  const setActiveThumb = (nextIndex, withAnimation = true) => {
    const index = (nextIndex + thumbs.length) % thumbs.length;
    const currentThumb = thumbs[index];
    const img = $("img", currentThumb);
    if (!img) return;

    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle("is-active", i === index);
    });

    activeIndex = index;
    heroImg.src = img.src;
    heroImg.alt = img.alt || heroImg.alt;
    ensureActiveThumbVisible();

    if (withAnimation) animateHeroImage(heroImg);
  };

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => setActiveThumb(index));
  });

  if (arrows[0]) {
    arrows[0].addEventListener("click", () => setActiveThumb(activeIndex - 1));
  }
  if (arrows[1]) {
    arrows[1].addEventListener("click", () => setActiveThumb(activeIndex + 1));
  }

  window.addEventListener("resize", updateTrackPosition);
  setActiveThumb(activeIndex, false);
}

export { initProductGallerySlider };
