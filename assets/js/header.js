export function initHeader() {
  void initDrawerMenu();
}

async function loadHeaderConfig() {
  const response = await fetch("./assets/data/header-config.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Header config yüklənmədi: ${response.status}`);
  }
  return response.json();
}

async function initDrawerMenu() {
  const drawer = document.getElementById("drawerMenu");
  const overlay = document.getElementById("drawerOverlay");
  const panel = document.getElementById("drawerPanel");

  const categoriesBox = document.getElementById("categories");
  const subBox = document.getElementById("subcategories");
  const openBtn = document.getElementById("openDrawer");
  const drawerRight = drawer.querySelector(".drawer__right");

  if (!drawer || !overlay || !panel || !categoriesBox || !subBox || !openBtn) {
    return;
  }

  let hoverEnabled = false;

  function syncDrawerHorizontalPosition() {
    const left = Math.max(16, Math.round(openBtn.getBoundingClientRect().left));
    drawer.style.setProperty("--drawer-left", `${left}px`);
  }
  let headerConfig;
  try {
    headerConfig = await loadHeaderConfig();
  } catch (error) {
    console.error("Header config error:", error);
    return;
  }

  const icons = headerConfig?.icons || {};
  const icon = (type) => icons[type] || icons.camera || "";

  const chevron = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const data = headerConfig?.categories || [];
  const HERO_DEALS = headerConfig?.heroDeals || {};

  const STAR_SVG = `<svg width="108" height="20" viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.04894 2.92705C9.3483 2.00574 10.6517 2.00574 10.9511 2.92705L12.0206 6.21885C12.1545 6.63087 12.5385 6.90983 12.9717 6.90983H16.4329C17.4016 6.90983 17.8044 8.14945 17.0207 8.71885L14.2205 10.7533C13.87 11.0079 13.7234 11.4593 13.8572 11.8713L14.9268 15.1631C15.2261 16.0844 14.1717 16.8506 13.388 16.2812L10.5878 14.2467C10.2373 13.9921 9.7627 13.9921 9.41221 14.2467L6.61204 16.2812C5.82833 16.8506 4.77385 16.0844 5.0732 15.1631L6.14277 11.8713C6.27665 11.4593 6.12999 11.0079 5.7795 10.7533L2.97933 8.71885C2.19562 8.14945 2.59839 6.90983 3.56712 6.90983H7.02832C7.46154 6.90983 7.8455 6.63087 7.97937 6.21885L9.04894 2.92705Z" fill="#FFAE00"></path>
    <path d="M31.0489 2.92705C31.3483 2.00574 32.6517 2.00574 32.9511 2.92705L34.0206 6.21885C34.1545 6.63087 34.5385 6.90983 34.9717 6.90983H38.4329C39.4016 6.90983 39.8044 8.14945 39.0207 8.71885L36.2205 10.7533C35.87 11.0079 35.7234 11.4593 35.8572 11.8713L36.9268 15.1631C37.2261 16.0844 36.1717 16.8506 35.388 16.2812L32.5878 14.2467C32.2373 13.9921 31.7627 13.9921 31.4122 14.2467L28.612 16.2812C27.8283 16.8506 26.7739 16.0844 27.0732 15.1631L28.1428 11.8713C28.2766 11.4593 28.13 11.0079 27.7795 10.7533L24.9793 8.71885C24.1956 8.14945 24.5984 6.90983 25.5671 6.90983H29.0283C29.4615 6.90983 29.8455 6.63087 29.9794 6.21885L31.0489 2.92705Z" fill="#FFAE00"></path>
    <path d="M53.0489 2.92705C53.3483 2.00574 54.6517 2.00574 54.9511 2.92705L56.0206 6.21885C56.1545 6.63087 56.5385 6.90983 56.9717 6.90983H60.4329C61.4016 6.90983 61.8044 8.14945 61.0207 8.71885L58.2205 10.7533C57.87 11.0079 57.7234 11.4593 57.8572 11.8713L58.9268 15.1631C59.2261 16.0844 58.1717 16.8506 57.388 16.2812L54.5878 14.2467C54.2373 13.9921 53.7627 13.9921 53.4122 14.2467L50.612 16.2812C49.8283 16.8506 48.7739 16.0844 49.0732 15.1631L50.1428 11.8713C50.2766 11.4593 50.13 11.0079 49.7795 10.7533L46.9793 8.71885C46.1956 8.14945 46.5984 6.90983 47.5671 6.90983H51.0283C51.4615 6.90983 51.8455 6.63087 51.9794 6.21885L53.0489 2.92705Z" fill="#FFAE00"></path>
    <path d="M75.0489 2.92705C75.3483 2.00574 76.6517 2.00574 76.9511 2.92705L78.0206 6.21885C78.1545 6.63087 78.5385 6.90983 78.9717 6.90983H82.4329C83.4016 6.90983 83.8044 8.14945 83.0207 8.71885L80.2205 10.7533C79.87 11.0079 79.7234 11.4593 79.8572 11.8713L80.9268 15.1631C81.2261 16.0844 80.1717 16.8506 79.388 16.2812L76.5878 14.2467C76.2373 13.9921 75.7627 13.9921 75.4122 14.2467L72.612 16.2812C71.8283 16.8506 70.7739 16.0844 71.0732 15.1631L72.1428 11.8713C72.2766 11.4593 72.13 11.0079 71.7795 10.7533L68.9793 8.71885C68.1956 8.14945 68.5984 6.90983 69.5671 6.90983H73.0283C73.4615 6.90983 73.8455 6.63087 73.9794 6.21885L75.0489 2.92705Z" fill="#FFAE00"></path>
    <path d="M97.0489 2.92705C97.3483 2.00574 98.6517 2.00574 98.9511 2.92705L100.021 6.21885C100.155 6.63087 100.538 6.90983 100.972 6.90983H104.433C105.402 6.90983 105.804 8.14945 105.021 8.71885L102.22 10.7533C101.87 11.0079 101.723 11.4593 101.857 11.8713L102.927 15.1631C103.226 16.0844 102.172 16.8506 101.388 16.2812L98.5878 14.2467C98.2373 13.9921 97.7627 13.9921 97.4122 14.2467L94.612 16.2812C93.8283 16.8506 92.7739 16.0844 93.0732 15.1631L94.1428 11.8713C94.2766 11.4593 94.13 11.0079 93.7795 10.7533L90.9793 8.71885C90.1956 8.14945 90.5984 6.90983 91.5671 6.90983H95.0283C95.4615 6.90983 95.8455 6.63087 95.9794 6.21885L97.0489 2.92705Z" fill="#FFAE00"></path>
  </svg>`;
  const STAR_SVG_MONITOR = `<svg width="108" height="20" viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.04894 2.92705C9.3483 2.00574 10.6517 2.00574 10.9511 2.92705L12.0206 6.21885C12.1545 6.63087 12.5385 6.90983 12.9717 6.90983H16.4329C17.4016 6.90983 17.8044 8.14945 17.0207 8.71885L14.2205 10.7533C13.87 11.0079 13.7234 11.4593 13.8572 11.8713L14.9268 15.1631C15.2261 16.0844 14.1717 16.8506 13.388 16.2812L10.5878 14.2467C10.2373 13.9921 9.7627 13.9921 9.41221 14.2467L6.61204 16.2812C5.82833 16.8506 4.77385 16.0844 5.0732 15.1631L6.14277 11.8713C6.27665 11.4593 6.12999 11.0079 5.7795 10.7533L2.97933 8.71885C2.19562 8.14945 2.59839 6.90983 3.56712 6.90983H7.02832C7.46154 6.90983 7.8455 6.63087 7.97937 6.21885L9.04894 2.92705Z" fill="#FFAE00"></path>
    <path d="M31.0489 2.92705C31.3483 2.00574 32.6517 2.00574 32.9511 2.92705L34.0206 6.21885C34.1545 6.63087 34.5385 6.90983 34.9717 6.90983H38.4329C39.4016 6.90983 39.8044 8.14945 39.0207 8.71885L36.2205 10.7533C35.87 11.0079 35.7234 11.4593 35.8572 11.8713L36.9268 15.1631C37.2261 16.0844 36.1717 16.8506 35.388 16.2812L32.5878 14.2467C32.2373 13.9921 31.7627 13.9921 31.4122 14.2467L28.612 16.2812C27.8283 16.8506 26.7739 16.0844 27.0732 15.1631L28.1428 11.8713C28.2766 11.4593 28.13 11.0079 27.7795 10.7533L24.9793 8.71885C24.1956 8.14945 24.5984 6.90983 25.5671 6.90983H29.0283C29.4615 6.90983 29.8455 6.63087 29.9794 6.21885L31.0489 2.92705Z" fill="#DADBDD"></path>
    <path d="M53.0489 2.92705C53.3483 2.00574 54.6517 2.00574 54.9511 2.92705L56.0206 6.21885C56.1545 6.63087 56.5385 6.90983 56.9717 6.90983H60.4329C61.4016 6.90983 61.8044 8.14945 61.0207 8.71885L58.2205 10.7533C57.87 11.0079 57.7234 11.4593 57.8572 11.8713L58.9268 15.1631C59.2261 16.0844 58.1717 16.8506 57.388 16.2812L54.5878 14.2467C54.2373 13.9921 53.7627 13.9921 53.4122 14.2467L50.612 16.2812C49.8283 16.8506 48.7739 16.0844 49.0732 15.1631L50.1428 11.8713C50.2766 11.4593 50.13 11.0079 49.7795 10.7533L46.9793 8.71885C46.1956 8.14945 46.5984 6.90983 47.5671 6.90983H51.0283C51.4615 6.90983 51.8455 6.63087 51.9794 6.21885L53.0489 2.92705Z" fill="#DADBDD"></path>
    <path d="M75.0489 2.92705C75.3483 2.00574 76.6517 2.00574 76.9511 2.92705L78.0206 6.21885C78.1545 6.63087 78.5385 6.90983 78.9717 6.90983H82.4329C83.4016 6.90983 83.8044 8.14945 83.0207 8.71885L80.2205 10.7533C79.87 11.0079 79.7234 11.4593 79.8572 11.8713L80.9268 15.1631C81.2261 16.0844 80.1717 16.8506 79.388 16.2812L76.5878 14.2467C76.2373 13.9921 75.7627 13.9921 75.4122 14.2467L72.612 16.2812C71.8283 16.8506 70.7739 16.0844 71.0732 15.1631L72.1428 11.8713C72.2766 11.4593 72.13 11.0079 71.7795 10.7533L68.9793 8.71885C68.1956 8.14945 68.5984 6.90983 69.5671 6.90983H73.0283C73.4615 6.90983 73.8455 6.63087 73.9794 6.21885L75.0489 2.92705Z" fill="#DADBDD"></path>
    <path d="M97.0489 2.92705C97.3483 2.00574 98.6517 2.00574 98.9511 2.92705L100.021 6.21885C100.155 6.63087 100.538 6.90983 100.972 6.90983H104.433C105.402 6.90983 105.804 8.14945 105.021 8.71885L102.22 10.7533C101.87 11.0079 101.723 11.4593 101.857 11.8713L102.927 15.1631C103.226 16.0844 102.172 16.8506 101.388 16.2812L98.5878 14.2467C98.2373 13.9921 97.7627 13.9921 97.4122 14.2467L94.612 16.2812C93.8283 16.8506 92.7739 16.0844 93.0732 15.1631L94.1428 11.8713C94.2766 11.4593 94.13 11.0079 93.7795 10.7533L90.9793 8.71885C90.1956 8.14945 90.5984 6.90983 91.5671 6.90983H95.0283C95.4615 6.90983 95.8455 6.63087 95.9794 6.21885L97.0489 2.92705Z" fill="#DADBDD"></path>
  </svg>`;

  const DRAWER_PRODUCTS = {
    "RGB Led Panel": {
      category: "Led işıq",
      name: "NEEWER CB200B İkirəngli 210W LED",
      img: "assets/images/538ed5fb4d0aa670fe02bb14eb3eb90df5809c58.png",
      badge: "Sifarişlə",
      badgeClass: "products__badge--green",
      starsSvg: STAR_SVG,
      discount: true,
    },
    Monitor: {
      category: "Led işıq",
      name: "NEEWER CB200B İkirəngli 210W LED",
      img: "assets/images/538ed5fb4d0aa670fe02bb14eb3eb90df5809c58.png",
      badge: "Tezliklə",
      badgeClass: "products__badge--yellow",
      starsSvg: STAR_SVG_MONITOR,
      discount: false,
      price: "000 AZN",
    },
    "Divar Üçün Panel": {
      category: "Akustik panel",
      name: "NEEWER CB200B İkirəngli 210W LED",
      img: "assets/images/538ed5fb4d0aa670fe02bb14eb3eb90df5809c58.png",
      badge: "Sifarişlə",
      badgeClass: "products__badge--green",
      starsSvg: STAR_SVG,
      discount: true,
      price: "000 AZN",
    },
    "Mikrafon Üçün Panel": {
      category: "Led işıq",
      name: "NEEWER CB200B İkirəngli 210W LED",
      img: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
      badge: "Tezliklə",
      badgeClass: "products__badge--yellow",
      starsSvg: STAR_SVG_MONITOR,
      discount: false,
      price: "000 AZN",
    },
    "5 metrlik": {
      category: "Led işıq",
      name: "5 metrlik",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Product",
      badge: "Tezliklə",
      badgeClass: "products__badge--yellow",
      starsSvg: STAR_SVG_MONITOR,
      discount: false,
      price: "000 AZN",
    },
    "10 metrlik": {
      category: "Led işıq",
      name: "10 metrlik",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Product",
      badge: "Tezliklə",
      badgeClass: "products__badge--yellow",
      starsSvg: STAR_SVG_MONITOR,
      discount: false,
      price: "000 AZN",
    },
    "15 metrlik": {
      category: "Led işıq",
      name: "15 metrlik",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Product",
      badge: "Tezliklə",
      badgeClass: "products__badge--yellow",
      starsSvg: STAR_SVG_MONITOR,
      discount: false,
      price: "000 AZN",
    },
  };
  const SUB_LINKS = headerConfig?.subLinks || {};

  const getSubHref = (subName) => SUB_LINKS[subName] || "#";

  function renderHeroBySub(subName) {
    if (!drawerRight) return;

    const base = DRAWER_PRODUCTS[subName] || {};
    const deal = HERO_DEALS[subName] || {};
    const p = {
      category: base.category || deal.category || "Led işıq",
      name: base.name || deal.name || subName,
      img:
        base.img ||
        deal.img ||
        "https://dummyimage.com/420x420/ddd/000.png&text=Product",
      badge: base.badge || "Sifarişlə",
      badgeClass: base.badgeClass || "products__badge--green",
      starsSvg: base.starsSvg || STAR_SVG,
      discount: typeof base.discount === "boolean" ? base.discount : true,
      price: base.price || deal.oldPrice || "000 AZN",
    };

    const productHref = getSubHref(subName);

    drawerRight.innerHTML = `
      <div class="${p.discount ? "products-section--discount" : ""}">
        <div class="products__card">
          <a class="card-link-overlay" href="${productHref}" aria-label="${p.name} səhifəsinə keçid"></a>
          <div class="products__img-wrap">
            <img class="products__img" src="${p.img}" alt="${p.name}">
          </div>
          <div class="products__info">
            <div class="products__body-header">
              <span class="products__category">${p.category}</span>
              <h4 class="products__name">${p.name}</h4>
            </div>
            <div class="products__meta">
              <div class="products__stars">${p.starsSvg}</div>
              <span class="products__badge ${p.badgeClass}">${p.badge}</span>
            </div>
            <div class="products__footer">
              <a href="${productHref}" class="products__btn is-visual-link" aria-hidden="true" tabindex="-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40902 14.246L5.87402 7H18.5C19.151 7 19.628 7.611 19.47 8.243L18.122 13.635C17.917 14.454 17.221 15.056 16.381 15.14L9.56502 15.822C8.54902 15.923 7.62002 15.244 7.40902 14.246Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M5.874 7L5.224 4H3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M17.1091 19.267C16.9071 19.267 16.7431 19.431 16.7451 19.633C16.7451 19.835 16.9091 19.999 17.1111 19.999C17.3131 19.999 17.4771 19.835 17.4771 19.633C17.4761 19.431 17.3121 19.267 17.1091 19.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M8.697 19.267C8.495 19.267 8.331 19.431 8.333 19.633C8.331 19.836 8.496 20 8.698 20C8.9 20 9.064 19.836 9.064 19.634C9.064 19.431 8.9 19.267 8.697 19.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                İndi al
              </a>
              <span class="products__price">${p.price}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function hideDetails() {
    drawer.classList.remove("drawer--details");
    subBox.innerHTML = "";
    [...categoriesBox.children].forEach((el) =>
      el.classList.remove("drawer__item--active")
    );
  }

  function setCategory(index) {
    [...categoriesBox.children].forEach((el) =>
      el.classList.remove("drawer__item--active")
    );
    categoriesBox.children[index].classList.add("drawer__item--active");

    drawer.classList.add("drawer--details");
    subBox.innerHTML = "";

    const subs = data[index].subs;
    if (subs && subs.length) {
      renderHeroBySub(subs[0]);
    }

    subs.forEach((name, i) => {
      const href = getSubHref(name);
      const el = document.createElement("div");
      el.className = "drawer__sub";
      if (i === 0) el.classList.add("drawer__sub--active");
      el.textContent = name;

      const activate = () => {
        document
          .querySelectorAll(".drawer__sub")
          .forEach((x) => x.classList.remove("drawer__sub--active"));
        el.classList.add("drawer__sub--active");
        renderHeroBySub(name);
      };

      el.addEventListener("mouseenter", activate);
      el.addEventListener("click", () => {
        activate();
        if (href !== "#") {
          window.location.href = href;
        }
      });

      subBox.appendChild(el);
    });
  }

  function renderCategories() {
    categoriesBox.innerHTML = "";

    data.forEach((cat, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "drawer__item";
      btn.innerHTML = `
        <span class="drawer__item-left">
          <span class="drawer__item-ico">${icon(cat.icon)}</span>
          <span class="drawer__item-text">${cat.name}</span>
        </span>
        <span class="drawer__chev">${chevron}</span>
      `;

      btn.addEventListener("mouseenter", () => {
        if (!hoverEnabled) return;
        setCategory(i);
      });

      categoriesBox.appendChild(btn);
    });
  }

  function openDrawer() {
    syncDrawerHorizontalPosition();
    drawer.classList.add("drawer--active");
    document.body.classList.add("drawer-open");

    openBtn.classList.add("active");
    openBtn.setAttribute("aria-expanded", "true");

    hideDetails();

    hoverEnabled = false;
    setTimeout(() => {
      hoverEnabled = true;
    }, 200);
  }

  function closeDrawer() {
    drawer.classList.remove("drawer--active", "drawer--details");
    document.body.classList.remove("drawer-open");

    openBtn.classList.remove("active");
    openBtn.setAttribute("aria-expanded", "false");

    hoverEnabled = false;
    hideDetails();
  }

  openBtn.addEventListener("click", () => {
    drawer.classList.contains("drawer--active") ? closeDrawer() : openDrawer();
  });

  overlay.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("drawer--active")) {
      closeDrawer();
      openBtn.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (!drawer.classList.contains("drawer--active")) return;
    syncDrawerHorizontalPosition();
  });

  panel.addEventListener("mouseleave", () => {
    hideDetails();
  });

  renderCategories();
  renderHeroBySub("RGB Led Panel");
}
