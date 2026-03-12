import { initBlogSlider } from "../carousels_sliders/blogSlider.js";

function startBlogTipsSlider() {
  if (!document.querySelector(".blog-section .blog__grid")) return;
  initBlogSlider();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startBlogTipsSlider, {
    once: true,
  });
} else {
  startBlogTipsSlider();
}
