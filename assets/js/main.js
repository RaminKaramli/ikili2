import { initHeader } from "./header.js";
import "./testimonials.js";

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
  // Ensure body scroll is never left locked from previous UI state.
  document.body.classList.remove("mega-open");

  const headerLoad = loadPartial(
    "./assets/components/header.html",
    "header-placeholder"
  );
  const footerLoad = loadPartial(
    "./assets/components/footer.html",
    "footer-placeholder"
  );

  await headerLoad;
  if (document.getElementById("megaMenu")) {
    initHeader();
  } else {
    document.body.classList.remove("mega-open");
  }

  await footerLoad;
}

window.addEventListener("pageshow", () => {
  document.body.classList.remove("mega-open");
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
