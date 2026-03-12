import { initProductGallerySlider } from "../carousels_sliders/productGallerySlider.js";

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      initProductGallerySlider();
    },
    { once: true }
  );
} else {
  initProductGallerySlider();
}
