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

  const thumbs = [...gallery.querySelectorAll(".pd-gallery__thumb")];
  const arrows = [...gallery.querySelectorAll(".pd-gallery__arrow")];
  if (!thumbs.length) return;

  let activeIndex = thumbs.findIndex((thumb) => thumb.classList.contains("is-active"));
  if (activeIndex < 0) activeIndex = 0;

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

  setActiveThumb(activeIndex, false);
}

export { initProductGallerySlider };

