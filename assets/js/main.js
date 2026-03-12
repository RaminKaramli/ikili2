import { initHeader } from "./header.js";
import { initLanguages } from "./languages.js";
import "./testimonials.js";
import { initPartnersSlider } from "./carousels_sliders/partnersSlider.js";
import { initProductsAutoRotate } from "./carousels_sliders/productsCarousel.js";
import { initFaqAccordion } from "./faq/initFaqAccordion.js";

function initWholeCardLinks() {
  const cardConfigs = [
    {
      cardSelector: ".blog-card",
      buttonSelector: ".blog-card__btn",
      titleSelector: ".blog-card__title",
    },
    {
      cardSelector: ".products__card",
      buttonSelector: ".products__btn",
      titleSelector: ".products__name",
    },
    {
      cardSelector: ".hero__card",
      buttonSelector: ".hero__btn",
      titleSelector: ".hero__name",
    },
  ];

  cardConfigs.forEach(({ cardSelector, buttonSelector, titleSelector }) => {
    const cards = document.querySelectorAll(cardSelector);
    cards.forEach((card) => {
      if (card.querySelector(".card-link-overlay")) return;

      const buttonLink = card.querySelector(buttonSelector);
      if (!(buttonLink instanceof HTMLAnchorElement)) return;

      const href = buttonLink.getAttribute("href");
      if (!href) return;

      const titleText = card.querySelector(titleSelector)?.textContent?.trim();
      const overlay = document.createElement("a");
      overlay.className = "card-link-overlay";
      overlay.href = href;
      overlay.setAttribute(
        "aria-label",
        titleText ? `${titleText} səhifəsinə keçid` : "Kart səhifəsinə keçid"
      );

      card.prepend(overlay);

      buttonLink.setAttribute("aria-hidden", "true");
      buttonLink.setAttribute("tabindex", "-1");
      buttonLink.classList.add("is-visual-link");
    });
  });
}

async function loadPartial(url, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  if (target.innerHTML.trim()) return;

  const cacheKey = `partial:${url}`;
  let cachedHtml = null;
  try {
    cachedHtml = localStorage.getItem(cacheKey);
  } catch (error) {
    console.warn("Cache read error:", error);
  }

  if (cachedHtml) {
    target.innerHTML = cachedHtml;
  }

  try {
    if (window.location.protocol === "file:") {
      throw new Error(
        "Bu layout hissələri file:// rejimində yüklənmir. Lokal server istifadə edin."
      );
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${url} yüklənmədi: ${response.status}`);
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const nextHtml = doc.body.innerHTML;

    if (target.innerHTML !== nextHtml) {
      target.innerHTML = nextHtml;
    }

    try {
      localStorage.setItem(cacheKey, nextHtml);
    } catch (error) {
      console.warn("Cache write error:", error);
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
}

async function initApp() {
  document.body.classList.remove("drawer-open");

  const headerLoad = loadPartial(
    "./assets/components/header.html",
    "header-placeholder"
  );
  const footerLoad = loadPartial(
    "./assets/components/footer.html",
    "footer-placeholder"
  );

  await headerLoad;
  initLanguages();
  if (document.getElementById("drawerMenu")) {
    initHeader();
  } else {
    document.body.classList.remove("drawer-open");
  }

  await footerLoad;
  initWholeCardLinks();
  initProductsAutoRotate();
  initFaqAccordion();
  initPartnersSlider();
}

window.addEventListener("pageshow", () => {
  document.body.classList.remove("drawer-open");
});

document.addEventListener(
  "click",
  (event) => {
    const link = event.target.closest('a[href="#"]');
    if (!link) return;
    event.preventDefault();
    event.stopPropagation();
  },
  true
);

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#") {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
});

let appInitialized = false;

function startApp() {
  if (appInitialized) return;
  appInitialized = true;
  initApp();
}

if (
  document.getElementById("header-placeholder") ||
  document.getElementById("footer-placeholder")
) {
  startApp();
} else if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp, { once: true });
} else {
  startApp();
}
