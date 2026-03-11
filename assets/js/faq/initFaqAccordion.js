import { gsap } from "../vendors/gsap/index.js";

function initFaqAccordion() {
  const items = Array.from(document.querySelectorAll(".faq-item"));
  if (items.length === 0) return;

  const duration = 0.28;
  const ease = "power2.out";
  const canAnimate = Boolean(gsap);

  const syncAria = () => {
    items.forEach((node) => {
      const nodeHead = node.querySelector(".faq-item__head");
      if (!nodeHead) return;
      nodeHead.setAttribute(
        "aria-expanded",
        node.classList.contains("faq-item--open") ? "true" : "false"
      );
    });
  };

  const closeItem = (node) => {
    const body = node.querySelector(".faq-item__body");
    const icon = node.querySelector(".faq-item__icon svg");
    node.classList.remove("faq-item--open");

    if (canAnimate && icon) gsap.to(icon, { rotate: 0, duration, ease });
    if (body) {
      if (canAnimate) {
        gsap.killTweensOf(body);
        gsap.to(body, {
          height: 0,
          autoAlpha: 0,
          duration,
          ease,
        });
      }
    }
  };

  const openItem = (node) => {
    const body = node.querySelector(".faq-item__body");
    const icon = node.querySelector(".faq-item__icon svg");
    node.classList.add("faq-item--open");

    if (canAnimate && icon) gsap.to(icon, { rotate: 180, duration, ease });
    if (body) {
      if (canAnimate) {
        gsap.killTweensOf(body);
        gsap.fromTo(
          body,
          { height: 0, autoAlpha: 0 },
          { height: "auto", autoAlpha: 1, duration, ease }
        );
      }
    }
  };

  items.forEach((item) => {
    const head = item.querySelector(".faq-item__head");
    const body = item.querySelector(".faq-item__body");
    const icon = item.querySelector(".faq-item__icon svg");
    if (!head || !body) return;

    head.setAttribute("role", "button");
    head.setAttribute("tabindex", "0");
    if (canAnimate) {
      body.style.overflow = "hidden";
      body.style.display = "block";

      if (item.classList.contains("faq-item--open")) {
        gsap.set(body, { height: "auto", autoAlpha: 1 });
        if (icon) gsap.set(icon, { rotate: 180 });
      } else {
        gsap.set(body, { height: 0, autoAlpha: 0 });
        if (icon) gsap.set(icon, { rotate: 0 });
      }
    }

    const toggle = () => {
      const willOpen = !item.classList.contains("faq-item--open");
      items.forEach((node) => closeItem(node));
      if (willOpen) openItem(item);
      syncAria();
    };

    head.addEventListener("click", toggle);
    head.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });

  syncAria();
}

export { initFaqAccordion };
