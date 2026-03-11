import { initProductGallerySlider } from "../sliders/productGallerySlider.js";

const DATA_URL = "./assets/data/product-details.json";

const $ = (selector, root = document) => root.querySelector(selector);

function createSpecRow(cells = []) {
  const [leftKey = "", leftVal = "", rightKey = "", rightVal = ""] = cells;
  const tr = document.createElement("tr");
  tr.className = "pd-specs__row";

  const th1 = document.createElement("th");
  th1.scope = "row";
  th1.textContent = leftKey;

  const td1 = document.createElement("td");
  td1.textContent = leftVal;

  const th2 = document.createElement("th");
  th2.scope = "row";
  th2.textContent = rightKey;

  const td2 = document.createElement("td");
  td2.textContent = rightVal;

  tr.append(th1, td1, th2, td2);
  return tr;
}

function replaceNoteContent(noteNode, noteText) {
  if (!noteNode) return;
  const strong = document.createElement("strong");
  strong.textContent = "Qeyd:";
  noteNode.replaceChildren(strong, document.createTextNode(` ${noteText || ""}`));
}

function renderProductDetails(product) {
  document.title = `${product.title} | ikili2.az`;

  const currentCrumb = $('.breadcrumb a[aria-current="page"]');
  if (currentCrumb) {
    currentCrumb.textContent = product.title;
    currentCrumb.href = `mehsullar/index.html?slug=${encodeURIComponent(product.slug)}`;
  }

  const heroImg = $(".pd-gallery__hero-img");
  if (heroImg) {
    heroImg.src = product.gallery.hero;
    heroImg.alt = product.gallery.alt;
  }

  const discount = $(".pd-gallery__discount");
  if (discount) discount.textContent = product.discountText;

  const thumbs = document.querySelectorAll(".pd-gallery__thumb img");
  thumbs.forEach((thumb, index) => {
    thumb.src = product.gallery.thumbs[index] || product.gallery.hero;
    thumb.alt = `${product.title} thumb ${index + 1}`;
  });

  const title = $(".pd-info__title");
  if (title) title.textContent = product.productName;

  const code = $(".pd-info__code");
  if (code) code.textContent = `Məhsul kodu: ${product.productCode}`;

  const oldPrice = $(".pd-price__old");
  if (oldPrice) oldPrice.textContent = product.oldPrice;

  const newPrice = $(".pd-price__new");
  if (newPrice) newPrice.textContent = product.newPrice;

  replaceNoteContent($(".pd-info__note"), product.note);

  const stock = $(".pd-stock__badge");
  if (stock) stock.textContent = product.stockText;

  const saving = $(".pd-info__saving");
  if (saving) saving.textContent = product.savingText;

  const specsBody = $(".pd-specs__table tbody");
  if (specsBody) {
    const specRows = Array.isArray(product.specs) ? product.specs : [];
    const fragment = document.createDocumentFragment();
    specRows.forEach((cells) => fragment.appendChild(createSpecRow(cells)));
    specsBody.replaceChildren(fragment);
  }

  const descriptionList = $(".pd-description__list");
  if (descriptionList) {
    const items = Array.isArray(product.description) ? product.description : [];
    const fragment = document.createDocumentFragment();
    items.forEach((text) => {
      const p = document.createElement("p");
      p.className = "pd-description__item";
      p.textContent = text;
      fragment.appendChild(p);
    });
    descriptionList.replaceChildren(fragment);
  }
}

async function loadProductDetailsData(signal) {
  const response = await fetch(DATA_URL, {
    cache: "no-store",
    signal,
  });

  if (!response.ok) {
    throw new Error(`Məhsul datası yüklənmədi: ${response.status}`);
  }

  return response.json();
}

function resolveProduct(data, slug) {
  const products = data?.products || {};
  const defaultSlug = data?.defaultSlug || "rgb-led-panel";
  const normalizedSlug = slug && products[slug] ? slug : defaultSlug;
  return products[normalizedSlug] || null;
}

function getSlugFromLocation() {
  const querySlug = new URLSearchParams(window.location.search).get("slug");
  if (querySlug) return querySlug;

  const parts = window.location.pathname.split("/").filter(Boolean);
  const mehsullarIndex = parts.indexOf("mehsullar");
  if (mehsullarIndex === -1) return null;

  const slug = parts[mehsullarIndex + 1];
  return slug || null;
}

async function initProductDetailsPage() {
  if (!$(".page--product-details")) return;

  const controller = new AbortController();
  window.addEventListener("pagehide", () => controller.abort(), { once: true });

  try {
    const data = await loadProductDetailsData(controller.signal);
    const slug = getSlugFromLocation();
    const product = resolveProduct(data, slug);
    if (!product) return;
    renderProductDetails(product);
    initProductGallerySlider();
  } catch (error) {
    if (error?.name === "AbortError") return;
    console.error("Product details render error:", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProductDetailsPage, { once: true });
} else {
  initProductDetailsPage();
}
