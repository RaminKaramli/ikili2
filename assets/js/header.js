export function initHeader() {
  initDrawerMenu();
}

function initDrawerMenu() {
  const drawer = document.getElementById("drawerMenu");
  const overlay = document.getElementById("drawerOverlay");
  const panel = document.getElementById("drawerPanel");
  const openBtn = document.getElementById("openDrawer");
  const categoriesBox = document.getElementById("categories");
  const drawerCenter = document.getElementById("drawerCenter");
  const subBox = document.getElementById("subcategories");
  const drawerRight = drawer?.querySelector(".drawer__right");
  const hamburgerMenu = openBtn?.querySelector(".header__hamburger-menu");

  if (
    !drawer ||
    !overlay ||
    !panel ||
    !openBtn ||
    !categoriesBox ||
    !drawerCenter ||
    !subBox ||
    !drawerRight
  )
    return;

  const iconCamera = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5858 4.5858L15.7071 5.70712C15.8946 5.89465 16.149 6 16.4142 6H19C20.1046 6 21 6.89543 21 8V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V8C3 6.89543 3.89543 6 5 6H7.58579C7.851 6 8.10535 5.89464 8.29289 5.70711L9.41421 4.5858C9.78928 4.21072 10.298 4 10.8284 4H13.1716C13.702 4 14.2107 4.21072 14.5858 4.5858Z" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="4" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.05 9.00007C18.05 9.02767 18.0276 9.05001 18 9.05C17.9724 9.04999 17.95 9.02761 17.95 9.00002C17.95 8.97242 17.9723 8.95003 17.9999 8.95C18.0132 8.94998 18.026 8.95525 18.0354 8.96464C18.0447 8.97404 18.05 8.98678 18.05 9.00006" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 12C10.5 11.1716 11.1716 10.5 12 10.5" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconTripod = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4169 8.18099C14.1759 8.93999 14.1759 10.172 13.4169 10.931C12.6579 11.69 11.4259 11.69 10.6669 10.931C9.90791 10.172 9.90791 8.93999 10.6669 8.18099C11.4269 7.42099 12.6579 7.42099 13.4169 8.18099" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.333 6.222L14.32 4.538C14.119 4.204 13.758 4 13.368 4H10.602C10.207 4 9.842 4.21 9.643 4.551L8.667 6.222H7.139C6.372 6.222 5.75 6.844 5.75 7.611V12.611C5.75 13.378 6.372 14 7.139 14H16.861C17.628 14 18.25 13.378 18.25 12.611V7.611C18.25 6.844 17.628 6.222 16.862 6.222H15.333V6.222Z" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.667 21L12 19.667L10.667 18.334" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.8892 14.006C21.5922 14.538 22.0002 15.138 22.0002 15.778C22.0002 17.414 19.4002 18.811 15.7222 19.386" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.111 14.006C2.408 14.538 2 15.138 2 15.778C2 17.926 6.477 19.667 12 19.667" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconMic = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 15V15C10.343 15 9 13.657 9 12V6C9 4.343 10.343 3 12 3V3C13.657 3 15 4.343 15 6V12C15 13.657 13.657 15 12 15Z" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 10V12C18 15.314 15.314 18 12 18V18C8.686 18 6 15.314 6 12V10" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18V21" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.81982 21H16.1798" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconRig = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 18H14" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.46885 18.873C6.44085 18.873 6.41885 18.895 6.41885 18.923C6.41885 18.951 6.44085 18.973 6.46885 18.973" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 12V5C19 3.896 18.105 3 17 3H6C4.895 3 4 3.896 4 5V10" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5002 20H18.4092C17.5812 20 16.9092 19.328 16.9092 18.5V13.5C16.9092 12.672 17.5812 12 18.4092 12H20.5002C21.3282 12 22.0002 12.672 22.0002 13.5V18.5C22.0002 19.328 21.3282 20 20.5002 20Z" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.91 15H11" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 21H4C2.895 21 2 20.105 2 19V12C2 10.895 2.895 10 4 10H9C10.105 10 11 10.895 11 12V19C11 20.105 10.105 21 9 21Z" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconStand = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8.49998" r="2.5" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 17V16C7 14.6193 8.11929 13.5 9.5 13.5H14.5C15.8807 13.5 17 14.6193 17 16V17" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="2.99998" width="18" height="18" rx="2" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 17H3" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconStrip = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5V3" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 4H21" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.87001 20.705L3.29501 19.13C2.90101 18.736 2.90101 18.098 3.29501 17.705L12.87 8.13C13.264 7.736 13.902 7.736 14.295 8.13L15.87 9.705C16.264 10.099 16.264 10.737 15.87 11.13L6.29501 20.705C5.90201 21.098 5.26301 21.098 4.87001 20.705Z" stroke="#010203" stroke-width="1.5104" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5102 13.31L10.6802 10.48" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 15H19" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14V16" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 3V5" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 4H8" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconMonitor = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.283 19.792L19.594 20.375C20.255 20.669 21 20.185 21 19.461V4.539C21 3.815 20.255 3.331 19.594 3.625L18.283 4.208C14.283 5.986 9.717 5.986 5.717 4.208L4.406 3.625C3.745 3.331 3 3.815 3 4.539V19.461C3 20.185 3.745 20.669 4.406 20.375L5.717 19.792C9.717 18.015 14.283 18.015 18.283 19.792Z" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 15.5H9C8.448 15.5 8 15.052 8 14.5V9.5C8 8.948 8.448 8.5 9 8.5H15C15.552 8.5 16 8.948 16 9.5V14.5C16 15.052 15.552 15.5 15 15.5Z" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.46 10.95L16 13.02" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.4598 10.95L11.3198 13.18" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.3199 13.18L10.1499 12.4" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.15 12.4L8 14.21" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconAcoustic = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 20H4" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 15H4" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.061 17.439C15.647 18.025 15.647 18.975 15.061 19.56C14.475 20.146 13.525 20.146 12.94 19.56C12.354 18.974 12.354 18.024 12.94 17.439C13.525 16.854 14.475 16.854 15.061 17.439" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.561 16.439C21.147 17.025 21.147 17.975 20.561 18.56C19.975 19.146 19.025 19.146 18.44 18.56C17.854 17.974 17.854 17.024 18.44 16.439C19.025 15.854 19.975 15.854 20.561 16.439" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 18.5V13.677C15.5 13.268 15.749 12.9 16.129 12.749L19.629 11.349C20.286 11.086 21 11.57 21 12.277V17.5" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 10H4" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 5H4" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconStudio = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 15V9" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17V7" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 21V3" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16V8" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 19V5" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconTeleprompter = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 21H6C4.343 21 3 19.657 3 18V6C3 4.343 4.343 3 6 3H18C19.657 3 21 4.343 21 6V18C21 19.657 19.657 21 18 21Z" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17.486L7.612 12.874C8.003 12.483 8.636 12.483 9.026 12.874L10.432 14.28L15.009 9.704C15.4 9.313 16.033 9.313 16.423 9.704L21 14.281" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.51517 7.40683C8.66161 7.55328 8.66161 7.79072 8.51517 7.93716C8.36872 8.08361 8.13128 8.08361 7.98483 7.93716C7.83839 7.79072 7.83839 7.55328 7.98483 7.40683C8.13128 7.26039 8.36872 7.26039 8.51517 7.40683" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconBattery = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 18H5C3.895 18 3 17.105 3 16V8C3 6.895 3.895 6 5 6H17C18.105 6 19 6.895 19 8V16C19 17.105 18.105 18 17 18Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.3002 15L12.8002 12H9.2002L10.7002 9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 9H20.014C20.169 9 20.322 9.036 20.461 9.106L20.947 9.349C21.286 9.518 21.5 9.865 21.5 10.243V13.757C21.5 14.136 21.286 14.482 20.947 14.651L20.461 14.894C20.322 14.964 20.169 15 20.014 15H19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconBag = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18.934H5C3.895 18.934 3 18.039 3 16.934V14.481C3 13.328 3.935 12.393 5.088 12.393H6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 18.934H19C20.105 18.934 21 18.039 21 16.934V14.434C21 13.329 20.105 12.434 19 12.434H18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.894H10C9.448 17.894 9 17.446 9 16.894V14.894C9 14.342 9.448 13.894 10 13.894H14C14.552 13.894 15 14.342 15 14.894V16.894C15 17.447 14.552 17.894 14 17.894Z" stroke="black" stroke-width="1.6432" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 6V5C15 3.895 14.105 3 13 3H11C9.895 3 9 3.895 9 5V6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 10H11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 6H10C7.791 6 6 7.791 6 10V19C6 20.105 6.895 21 8 21H16C17.105 21 18 20.105 18 19V10C18 7.791 16.209 6 14 6Z" stroke="black" stroke-width="1.5492" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const categories = [
    {
      name: "Foto & Video İşıqlandırmalar",
      icon: iconCamera,
      subs: [
        "RGB LED Panel",
        "İki Rəngli LED Panel",
        "İmpuls İşıq",
        "Daimi İşıq",
        "Flaş",
        "Tətikləyici",
        "Selfi İşıq",
      ],
    },
    {
      name: "Tripod & Monopodlar",
      icon: iconTripod,
      subs: ["Tripod Və Monopod", "Aksesuar"],
    },
    {
      name: "Mikrafonlar",
      icon: iconMic,
      subs: [
        "Masaüstü Mikarafon",
        "Yaxa Mikrafonu",
        "Kamera Mikrafonu",
        "Pop Filter",
        "Mikrafon Dayaq",
        "Şok Dayağı, Güc Qaynağı",
        "Kabellər",
      ],
    },
    {
      name: "Riglər",
      icon: iconRig,
      subs: ["Kamera Rig", "Universal Rig", "Telefon Üçün Rig"],
    },
    {
      name: "Dayaqlar",
      icon: iconStand,
      subs: [
        "Yüngül Dayaq",
        "Ağır Dayaq",
        "Tavan Dayaq",
        "Divar Dayaq",
        "Masaüstü Dayaq",
        "Avtomobil Dayaq",
        "Dayaq Təkərləri",
      ],
    },
    {
      name: "LED Striplər",
      icon: iconStrip,
      subs: ["5 Metrlik", "10 Metrlik", "15 Metrlik"],
    },
    { name: "Kamera Monitorlar", icon: iconMonitor, subs: ["Monitor"] },
    {
      name: "Akustik Panellər",
      icon: iconAcoustic,
      subs: ["Divar Üçün Panel", "Mikrafon Üçün Panel"],
    },
    {
      name: "Studiya Avadanlıqları",
      icon: iconStudio,
      subs: [
        "Arxa Fon Dayaqları",
        "Parça Fonlar",
        "Reflektorlar",
        "Softbokslar Və Çətirlər",
        "Filterlər",
        "Digər",
      ],
    },
    {
      name: "Teleprompterlər",
      icon: iconTeleprompter,
      subs: ["Teleprompter", "Dayaq"],
    },
    {
      name: "Batareyalar & Şarj Alətləri",
      icon: iconBattery,
      subs: ["Batareya", "Şarj Aləti & Adapter", "Batareya Dəsti"],
    },
    { name: "Daşıma Çantaları", icon: iconBag, subs: ["Kamera Çantası"] },
  ];

  const productMap = {
    default: {
      category: "Led işıq",
      name: "NEEWER CB200B ikirəngli 210W LED",
      img: "assets/images/aab16cae23c7ca205e773a150d533e075c77f81f.png",
      badge: "Stokda var",
      badgeClass: "products__badge--blue",
      oldPrice: "600.00 AZN",
    },
    "Tripod Və Monopod": {
      category: "Aksesuar",
      name: "NEEWER CB200B ikirəngli 210W LED",
      img: "assets/images/aab16cae23c7ca205e773a150d533e075c77f81f.png",
      badge: "Tükəndi",
      badgeClass: "products__badge--red",
      oldPrice: "600.00 AZN",
    },
  };

  const specialCardCategories = new Set([
    "Mikrafonlar",
    "Kamera Monitorlar",
    "Akustik Panellər",
  ]);

  let activeCategoryIndex = -1;
  const compactDrawerMedia = window.matchMedia("(max-width: 480px)");
  const tabletTopMedia = window.matchMedia("(max-width: 991px)");
  const equalizeDrawerColumnsMedia = window.matchMedia("(min-width: 768px)");
  const desktopPreviewMedia = window.matchMedia("(min-width: 992px)");
  let wasCompactDrawer = isCompactDrawer();
  let wasDesktopPreview = desktopPreviewMedia.matches;

  function isCompactDrawer() {
    return compactDrawerMedia.matches;
  }

  function animateProductsButton(isOpen, immediate = false) {
    if (!hamburgerMenu) return;
    if (immediate) {
      hamburgerMenu.style.transition = "none";
      hamburgerMenu.classList.toggle("animate", isOpen);
      requestAnimationFrame(() => {
        hamburgerMenu.style.transition = "";
      });
      return;
    }
    hamburgerMenu.classList.toggle("animate", isOpen);
  }

  function syncDrawerHorizontalPosition() {
    const left = Math.max(16, Math.round(openBtn.getBoundingClientRect().left));
    drawer.style.setProperty("--drawer-left", `${left}px`);
  }

  function syncDrawerColumnHeights() {
    requestAnimationFrame(() => {
      drawerCenter.style.minHeight = "0px";
      drawerRight.style.minHeight = "0px";

      if (!equalizeDrawerColumnsMedia.matches) {
        return;
      }

      const hasCenterContent = subBox.children.length > 0;
      const hasRightContent = drawerRight.children.length > 0;

      if (!hasCenterContent || !hasRightContent) {
        return;
      }

      const centerHeight = drawerCenter.getBoundingClientRect().height;
      const rightHeight = drawerRight.getBoundingClientRect().height;
      const targetHeight = Math.ceil(Math.max(centerHeight, rightHeight));

      if (targetHeight > 0) {
        drawerCenter.style.minHeight = `${targetHeight}px`;
        drawerRight.style.minHeight = `${targetHeight}px`;
      }
    });
  }

  function productCardHtml(categoryName, subName) {
    const normalizeLabel = (value) =>
      (value || "")
        .toLocaleLowerCase("az")
        .replace(/\s+/g, " ")
        .trim();

    const normalizedCategory = normalizeLabel(categoryName);
    const normalizedSub = normalizeLabel(subName);

    const isImpulsHero =
      normalizedCategory === normalizeLabel("Foto & Video İşıqlandırmalar") &&
      [
        normalizeLabel("İmpuls İşıq"),
        normalizeLabel("İmpuls isıq"),
        normalizeLabel("İmpuls işıq"),
      ].includes(normalizedSub);

    if (isImpulsHero) {
      return `
        <aside class="hero__card">
          <a class="card-link-overlay" href="product-details.html" aria-label="NEEWER CB200B İkirəngli 210W LED səhifəsinə keçid"></a>
          <div class="hero__head">
            <h3 class="hero__title">Həftənin ən çox satılanı</h3>
          </div>
          <div class="hero__body">
            <div class="hero__body_header">
              <span class="hero__category">Led işıq</span>
              <h4 class="hero__name">NEEWER CB200B İkirəngli 210W LED</h4>
            </div>
            <div class="hero__product">
              <div class="hero__media">
                <img class="hero__img" src="assets/images/932a5c73d09bcfdf84ce95ddccce7e37fd0dcb29.png" alt="NEEWER CB200B">
                <span class="hero__discount">-50%</span>
                <div class="hero__tags">
                  <span class="hero__stock">Stokda var</span>
                  <span class="hero__sale">-300 AZN</span>
                </div>
              </div>
            </div>
            <div class="hero__footer">
              <a href="product-details.html" class="hero__btn is-visual-link" aria-hidden="true" tabindex="-1">
                <span class="hero__btn-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40902 14.246L5.87402 7H18.5C19.151 7 19.628 7.611 19.47 8.243L18.122 13.635C17.917 14.454 17.221 15.056 16.381 15.14L9.56502 15.822C8.54902 15.923 7.62002 15.244 7.40902 14.246Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.874 7L5.224 4H3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M17.1091 19.267C16.9071 19.267 16.7431 19.431 16.7451 19.633C16.7451 19.835 16.9091 19.999 17.1111 19.999C17.3131 19.999 17.4771 19.835 17.4771 19.633C17.4761 19.431 17.3121 19.267 17.1091 19.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8.697 19.267C8.495 19.267 8.331 19.431 8.333 19.633C8.331 19.836 8.496 20 8.698 20C8.9 20 9.064 19.836 9.064 19.634C9.064 19.431 8.9 19.267 8.697 19.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                İndi al
              </a>
              <div class="hero__prices">
                <span class="hero__old-price">600.00 AZN</span>
                <span class="hero__price">300.00 AZN</span>
              </div>
            </div>
          </div>
        </aside>
      `;
    }

    const p = productMap[subName] || productMap.default;
    const isSpecial = specialCardCategories.has(categoryName);
    const card = isSpecial
      ? {
          ...p,
          img: "assets/images/d03a5fe2e8ed842952963fee9335660e2d963f77.png",
          badge: "Sifarişlə",
          badgeClass: "products__badge--green",
        }
      : p;

    const starsSvg = isSpecial
      ? `<svg width="108" height="20" viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.04894 2.92705C9.3483 2.00574 10.6517 2.00574 10.9511 2.92705L12.0206 6.21885C12.1545 6.63087 12.5385 6.90983 12.9717 6.90983H16.4329C17.4016 6.90983 17.8044 8.14945 17.0207 8.71885L14.2205 10.7533C13.87 11.0079 13.7234 11.4593 13.8572 11.8713L14.9268 15.1631C15.2261 16.0844 14.1717 16.8506 13.388 16.2812L10.5878 14.2467C10.2373 13.9921 9.7627 13.9921 9.41221 14.2467L6.61204 16.2812C5.82833 16.8506 4.77385 16.0844 5.0732 15.1631L6.14277 11.8713C6.27665 11.4593 6.12999 11.0079 5.7795 10.7533L2.97933 8.71885C2.19562 8.14945 2.59839 6.90983 3.56712 6.90983H7.02832C7.46154 6.90983 7.8455 6.63087 7.97937 6.21885L9.04894 2.92705Z" fill="#FFAE00"></path>
          <path d="M31.0489 2.92705C31.3483 2.00574 32.6517 2.00574 32.9511 2.92705L34.0206 6.21885C34.1545 6.63087 34.5385 6.90983 34.9717 6.90983H38.4329C39.4016 6.90983 39.8044 8.14945 39.0207 8.71885L36.2205 10.7533C35.87 11.0079 35.7234 11.4593 35.8572 11.8713L36.9268 15.1631C37.2261 16.0844 36.1717 16.8506 35.388 16.2812L32.5878 14.2467C32.2373 13.9921 31.7627 13.9921 31.4122 14.2467L28.612 16.2812C27.8283 16.8506 26.7739 16.0844 27.0732 15.1631L28.1428 11.8713C28.2766 11.4593 28.13 11.0079 27.7795 10.7533L24.9793 8.71885C24.1956 8.14945 24.5984 6.90983 25.5671 6.90983H29.0283C29.4615 6.90983 29.8455 6.63087 29.9794 6.21885L31.0489 2.92705Z" fill="#FFAE00"></path>
          <path d="M53.0489 2.92705C53.3483 2.00574 54.6517 2.00574 54.9511 2.92705L56.0206 6.21885C56.1545 6.63087 56.5385 6.90983 56.9717 6.90983H60.4329C61.4016 6.90983 61.8044 8.14945 61.0207 8.71885L58.2205 10.7533C57.87 11.0079 57.7234 11.4593 57.8572 11.8713L58.9268 15.1631C59.2261 16.0844 58.1717 16.8506 57.388 16.2812L54.5878 14.2467C54.2373 13.9921 53.7627 13.9921 53.4122 14.2467L50.612 16.2812C49.8283 16.8506 48.7739 16.0844 49.0732 15.1631L50.1428 11.8713C50.2766 11.4593 50.13 11.0079 49.7795 10.7533L46.9793 8.71885C46.1956 8.14945 46.5984 6.90983 47.5671 6.90983H51.0283C51.4615 6.90983 51.8455 6.63087 51.9794 6.21885L53.0489 2.92705Z" fill="#FFAE00"></path>
          <path d="M75.0489 2.92705C75.3483 2.00574 76.6517 2.00574 76.9511 2.92705L78.0206 6.21885C78.1545 6.63087 78.5385 6.90983 78.9717 6.90983H82.4329C83.4016 6.90983 83.8044 8.14945 83.0207 8.71885L80.2205 10.7533C79.87 11.0079 79.7234 11.4593 79.8572 11.8713L80.9268 15.1631C81.2261 16.0844 80.1717 16.8506 79.388 16.2812L76.5878 14.2467C76.2373 13.9921 75.7627 13.9921 75.4122 14.2467L72.612 16.2812C71.8283 16.8506 70.7739 16.0844 71.0732 15.1631L72.1428 11.8713C72.2766 11.4593 72.13 11.0079 71.7795 10.7533L68.9793 8.71885C68.1956 8.14945 68.5984 6.90983 69.5671 6.90983H73.0283C73.4615 6.90983 73.8455 6.63087 73.9794 6.21885L75.0489 2.92705Z" fill="#FFAE00"></path>
          <path d="M97.0489 2.92705C97.3483 2.00574 98.6517 2.00574 98.9511 2.92705L100.021 6.21885C100.155 6.63087 100.538 6.90983 100.972 6.90983H104.433C105.402 6.90983 105.804 8.14945 105.021 8.71885L102.22 10.7533C101.87 11.0079 101.723 11.4593 101.857 11.8713L102.927 15.1631C103.226 16.0844 102.172 16.8506 101.388 16.2812L98.5878 14.2467C98.2373 13.9921 97.7627 13.9921 97.4122 14.2467L94.612 16.2812C93.8283 16.8506 92.7739 16.0844 93.0732 15.1631L94.1428 11.8713C94.2766 11.4593 94.13 11.0079 93.7795 10.7533L90.9793 8.71885C90.1956 8.14945 90.5984 6.90983 91.5671 6.90983H95.0283C95.4615 6.90983 95.8455 6.63087 95.9794 6.21885L97.0489 2.92705Z" fill="#FFAE00"></path>
        </svg>`
      : `<svg width="108" height="20" viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.04894 2.92705C9.3483 2.00574 10.6517 2.00574 10.9511 2.92705L12.0206 6.21885C12.1545 6.63087 12.5385 6.90983 12.9717 6.90983H16.4329C17.4016 6.90983 17.8044 8.14945 17.0207 8.71885L14.2205 10.7533C13.87 11.0079 13.7234 11.4593 13.8572 11.8713L14.9268 15.1631C15.2261 16.0844 14.1717 16.8506 13.388 16.2812L10.5878 14.2467C10.2373 13.9921 9.7627 13.9921 9.41221 14.2467L6.61204 16.2812C5.82833 16.8506 4.77385 16.0844 5.0732 15.1631L6.14277 11.8713C6.27665 11.4593 6.12999 11.0079 5.7795 10.7533L2.97933 8.71885C2.19562 8.14945 2.59839 6.90983 3.56712 6.90983H7.02832C7.46154 6.90983 7.8455 6.63087 7.97937 6.21885L9.04894 2.92705Z" fill="#FFAE00"></path>
          <path d="M31.0489 2.92705C31.3483 2.00574 32.6517 2.00574 32.9511 2.92705L34.0206 6.21885C34.1545 6.63087 34.5385 6.90983 34.9717 6.90983H38.4329C39.4016 6.90983 39.8044 8.14945 39.0207 8.71885L36.2205 10.7533C35.87 11.0079 35.7234 11.4593 35.8572 11.8713L36.9268 15.1631C37.2261 16.0844 36.1717 16.8506 35.388 16.2812L32.5878 14.2467C32.2373 13.9921 31.7627 13.9921 31.4122 14.2467L28.612 16.2812C27.8283 16.8506 26.7739 16.0844 27.0732 15.1631L28.1428 11.8713C28.2766 11.4593 28.13 11.0079 27.7795 10.7533L24.9793 8.71885C24.1956 8.14945 24.5984 6.90983 25.5671 6.90983H29.0283C29.4615 6.90983 29.8455 6.63087 29.9794 6.21885L31.0489 2.92705Z" fill="#FFAE00"></path>
          <path d="M53.0489 2.92705C53.3483 2.00574 54.6517 2.00574 54.9511 2.92705L56.0206 6.21885C56.1545 6.63087 56.5385 6.90983 56.9717 6.90983H60.4329C61.4016 6.90983 61.8044 8.14945 61.0207 8.71885L58.2205 10.7533C57.87 11.0079 57.7234 11.4593 57.8572 11.8713L58.9268 15.1631C59.2261 16.0844 58.1717 16.8506 57.388 16.2812L54.5878 14.2467C54.2373 13.9921 53.7627 13.9921 53.4122 14.2467L50.612 16.2812C49.8283 16.8506 48.7739 16.0844 49.0732 15.1631L50.1428 11.8713C50.2766 11.4593 50.13 11.0079 49.7795 10.7533L46.9793 8.71885C46.1956 8.14945 46.5984 6.90983 47.5671 6.90983H51.0283C51.4615 6.90983 51.8455 6.63087 51.9794 6.21885L53.0489 2.92705Z" fill="#DADBDD"></path>
          <path d="M75.0489 2.92705C75.3483 2.00574 76.6517 2.00574 76.9511 2.92705L78.0206 6.21885C78.1545 6.63087 78.5385 6.90983 78.9717 6.90983H82.4329C83.4016 6.90983 83.8044 8.14945 83.0207 8.71885L80.2205 10.7533C79.87 11.0079 79.7234 11.4593 79.8572 11.8713L80.9268 15.1631C81.2261 16.0844 80.1717 16.8506 79.388 16.2812L76.5878 14.2467C76.2373 13.9921 75.7627 13.9921 75.4122 14.2467L72.612 16.2812C71.8283 16.8506 70.7739 16.0844 71.0732 15.1631L72.1428 11.8713C72.2766 11.4593 72.13 11.0079 71.7795 10.7533L68.9793 8.71885C68.1956 8.14945 68.5984 6.90983 69.5671 6.90983H73.0283C73.4615 6.90983 73.8455 6.63087 73.9794 6.21885L75.0489 2.92705Z" fill="#DADBDD"></path>
          <path d="M97.0489 2.92705C97.3483 2.00574 98.6517 2.00574 98.9511 2.92705L100.021 6.21885C100.155 6.63087 100.538 6.90983 100.972 6.90983H104.433C105.402 6.90983 105.804 8.14945 105.021 8.71885L102.22 10.7533C101.87 11.0079 101.723 11.4593 101.857 11.8713L102.927 15.1631C103.226 16.0844 102.172 16.8506 101.388 16.2812L98.5878 14.2467C98.2373 13.9921 97.7627 13.9921 97.4122 14.2467L94.612 16.2812C93.8283 16.8506 92.7739 16.0844 93.0732 15.1631L94.1428 11.8713C94.2766 11.4593 94.13 11.0079 93.7795 10.7533L90.9793 8.71885C90.1956 8.14945 90.5984 6.90983 91.5671 6.90983H95.0283C95.4615 6.90983 95.8455 6.63087 95.9794 6.21885L97.0489 2.92705Z" fill="#DADBDD"></path>
        </svg>`;
    if (isSpecial) {
      return `
        <div class="products__card">
          <a class="card-link-overlay" href="product-details.html" aria-label="${card.name} səhifəsinə keçid"></a>
          <div class="products__img-wrap">
            <img class="products__img" src="${card.img}" alt="NEEWER CB200B">
          </div>
          <div class="products__info">
            <div class="products__body-header">
              <span class="products__category">${card.category}</span>
              <h4 class="products__name">${card.name}</h4>
            </div>
            <div class="products__meta">
              <div class="products__stars">${starsSvg}</div>
              <span class="products__badge ${card.badgeClass}">${card.badge}</span>
            </div>
            <div class="products__footer">
              <a href="product-details.html" class="products__btn is-visual-link" aria-hidden="true" tabindex="-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40902 14.246L5.87402 7H18.5C19.151 7 19.628 7.611 19.47 8.243L18.122 13.635C17.917 14.454 17.221 15.056 16.381 15.14L9.56502 15.822C8.54902 15.923 7.62002 15.244 7.40902 14.246Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M5.874 7L5.224 4H3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M17.1091 19.267C16.9071 19.267 16.7431 19.431 16.7451 19.633C16.7451 19.835 16.9091 19.999 17.1111 19.999C17.3131 19.999 17.4771 19.835 17.4771 19.633C17.4761 19.431 17.3121 19.267 17.1091 19.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M8.697 19.267C8.495 19.267 8.331 19.431 8.333 19.633C8.331 19.836 8.496 20 8.698 20C8.9 20 9.064 19.836 9.064 19.634C9.064 19.431 8.9 19.267 8.697 19.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                İndi al
              </a>
              <span class="products__price">${card.oldPrice}</span>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="products-section--discount">
        <div class="products__card">
          <a class="card-link-overlay" href="product-details.html" aria-label="${p.name} səhifəsinə keçid"></a>
          <div class="products__img-wrap">
            <img class="products__img" src="${p.img}" alt="NEEWER CB200B">
          </div>
          <div class="products__info">
            <div class="products__body-header">
              <span class="products__category">${p.category}</span>
              <h4 class="products__name">${p.name}</h4>
            </div>
            <div class="products__meta">
              <div class="products__stars">${starsSvg}</div>
              <span class="products__badge ${p.badgeClass}">${p.badge}</span>
            </div>
            <div class="products__footer">
              <a href="product-details.html" class="products__btn is-visual-link" aria-hidden="true" tabindex="-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40902 14.246L5.87402 7H18.5C19.151 7 19.628 7.611 19.47 8.243L18.122 13.635C17.917 14.454 17.221 15.056 16.381 15.14L9.56502 15.822C8.54902 15.923 7.62002 15.244 7.40902 14.246Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M5.874 7L5.224 4H3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M17.1091 19.267C16.9071 19.267 16.7431 19.431 16.7451 19.633C16.7451 19.835 16.9091 19.999 17.1111 19.999C17.3131 19.999 17.4771 19.835 17.4771 19.633C17.4761 19.431 17.3121 19.267 17.1091 19.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M8.697 19.267C8.495 19.267 8.331 19.431 8.333 19.633C8.331 19.836 8.496 20 8.698 20C8.9 20 9.064 19.836 9.064 19.634C9.064 19.431 8.9 19.267 8.697 19.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                İndi al
              </a>
              <span class="products__price">${p.oldPrice}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderSubcategories(index) {
    const category = categories[index];
    const subs = category?.subs || [];
    const defaultSubIndex =
      category?.name === "Tripod & Monopodlar" && subs.length > 1 ? 1 : 0;

    subBox.innerHTML = "";
    const list = document.createElement("ul");
    list.className = "drawer__sub-list";

    subs.forEach((sub, subIndex) => {
      const listItem = document.createElement("li");
      listItem.className = "drawer__sub-item";

      const item = document.createElement("label");
      item.className = `drawer__sub${
        subIndex === defaultSubIndex ? " drawer__sub--active" : ""
      }`;
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      item.innerHTML = `<span class="drawer__sub-text">${sub}</span>`;

      item.addEventListener("mouseenter", () => {
        subBox
          .querySelectorAll(".drawer__sub")
          .forEach((node) => node.classList.remove("drawer__sub--active"));
        item.classList.add("drawer__sub--active");
        drawerRight.innerHTML = productCardHtml(category.name, sub);
        syncDrawerColumnHeights();
      });

      item.addEventListener("click", () => {
        window.location.href = "product-details.html";
      });

      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          window.location.href = "product-details.html";
        }
      });

      listItem.appendChild(item);
      list.appendChild(listItem);
    });

    subBox.appendChild(list);

    drawerRight.innerHTML = productCardHtml(
      category.name,
      subs[defaultSubIndex] || "default"
    );
    syncDrawerColumnHeights();
  }

  function setActiveCategory(index) {
    if (isCompactDrawer()) {
      activeCategoryIndex = activeCategoryIndex === index ? -1 : index;
      renderCategories();
      return;
    }

    activeCategoryIndex = index;
    drawer.classList.remove("drawer--preview");
    drawer.classList.add("drawer--details");
    categoriesBox
      .querySelectorAll(".drawer__item")
      .forEach((node) => node.classList.remove("drawer__item--active"));
    const btn = categoriesBox.querySelector(`[data-cat-index="${index}"]`);
    if (btn) btn.classList.add("drawer__item--active");
    renderSubcategories(index);
  }

  function renderCategories() {
    categoriesBox.innerHTML = "";
    drawer.classList.toggle("drawer--compact", isCompactDrawer());
    panel.querySelectorAll(".drawer__mobile-top--bar").forEach((node) => node.remove());

    if (tabletTopMedia.matches) {
      const mobileTop = document.createElement("div");
      mobileTop.className = "drawer__mobile-top";
      mobileTop.innerHTML = `
        <div class="drawer__mobile-search">
          <input class="drawer__mobile-search-input" type="text" placeholder="Axtarış..." />
          <button class="drawer__mobile-search-btn" type="button" aria-label="Axtar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 19L15.71 15.71" stroke="#010203" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="drawer__mobile-links">
          <a class="drawer__mobile-link" href="about.html">Haqqımızda</a>
          <a class="drawer__mobile-link" href="blog.html">Blog</a>
          <a class="drawer__mobile-link" href="contact.html">Bizimlə əlaqə</a>
          <div class="drawer__mobile-lang-wrap">
            <button class="drawer__mobile-lang-btn" type="button" aria-expanded="false">
              <span class="drawer__mobile-lang-flag" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                  <path fill="#E00034" d="M0 13h36v10H0z"></path>
                  <path fill="#0098C3" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path>
                  <g fill="#FFF">
                    <path d="M17.844 21.333a3.333 3.333 0 1 1 2.475-5.565a4 4 0 1 0 .001 4.464a3.325 3.325 0 0 1-2.476 1.101z"></path>
                    <path d="M23.667 17.998l-1.196-.424l.544-1.146l-1.146.545l-.426-1.195l-.424 1.196l-.003-.002l-1.144-.542l.546 1.146l-1.196.426l1.196.424l-.544 1.146l1.141-.543l.005-.002l.426 1.195l.424-1.196l1.147.544l-.546-1.146z"></path>
                  </g>
                  <path fill="#00AE65" d="M4 31h28a4 4 0 0 0 4-4v-4H0v4a4 4 0 0 0 4 4z"></path>
                </svg>
              </span>
              <span class="drawer__mobile-lang-label">Azərbaycan dili</span>
              <svg class="drawer__mobile-lang-chevron" viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <ul class="drawer__mobile-lang-menu" hidden>
              <li><button type="button" class="drawer__mobile-lang-option" data-lang="az"><span class="drawer__mobile-lang-option-flag" aria-hidden="true"><svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><path fill="#E00034" d="M0 13h36v10H0z"></path><path fill="#0098C3" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path><g fill="#FFF"><path d="M17.844 21.333a3.333 3.333 0 1 1 2.475-5.565a4 4 0 1 0 .001 4.464a3.325 3.325 0 0 1-2.476 1.101z"></path><path d="M23.667 17.998l-1.196-.424l.544-1.146l-1.146.545l-.426-1.195l-.424 1.196l-.003-.002l-1.144-.542l.546 1.146l-1.196.426l1.196.424l-.544 1.146l1.141-.543l.005-.002l.426 1.195l.424-1.196l1.147.544l-.546-1.146z"></path></g><path fill="#00AE65" d="M4 31h28a4 4 0 0 0 4-4v-4H0v4a4 4 0 0 0 4 4z"></path></svg></span><span>Azərbaycan dili</span></button></li>
              <li><button type="button" class="drawer__mobile-lang-option" data-lang="en"><span class="drawer__mobile-lang-option-flag" aria-hidden="true"><svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><path fill="#B22334" d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2h17.445zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2zM18 9h18v2H18z"></path><path fill="#EEE" d="M.068 27.679c.017.093.036.186.059.277c.026.101.058.198.092.296c.089.259.197.509.333.743L.555 29h34.89l.002-.004a4.22 4.22 0 0 0 .332-.741a3.75 3.75 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679zM0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM0 9zm.555-2l-.003.005L.555 7zM.128 8.044c.025-.102.06-.199.092-.297a3.78 3.78 0 0 0-.092.297zM18 9h18c0-.233-.028-.459-.069-.68a3.606 3.606 0 0 0-.153-.576A4.21 4.21 0 0 0 35.445 7H18v2z"></path><path fill="#3C3B6E" d="M18 5H4a4 4 0 0 0-4 4v10h18V5z"></path></svg></span><span>İngilis dili</span></button></li>
              <li><button type="button" class="drawer__mobile-lang-option" data-lang="ru"><span class="drawer__mobile-lang-option-flag" aria-hidden="true"><svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><path fill="#CE2028" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4h36v4z"></path><path fill="#22408C" d="M0 13h36v10H0z"></path><path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path></svg></span><span>Rus dili</span></button></li>
            </ul>
          </div>
        </div>
      `;
      if (isCompactDrawer()) {
        categoriesBox.appendChild(mobileTop);
      } else {
        mobileTop.classList.add("drawer__mobile-top--bar");
        panel.insertBefore(mobileTop, panel.firstChild);
      }

      const langWrap = mobileTop.querySelector(".drawer__mobile-lang-wrap");
      const langBtn = mobileTop.querySelector(".drawer__mobile-lang-btn");
      const langMenu = mobileTop.querySelector(".drawer__mobile-lang-menu");
      const langLabel = mobileTop.querySelector(".drawer__mobile-lang-label");

      if (langBtn && langMenu && langLabel && langWrap) {
        langBtn.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          const nextOpen = langBtn.getAttribute("aria-expanded") !== "true";
          langBtn.setAttribute("aria-expanded", nextOpen ? "true" : "false");
          langWrap.classList.toggle("is-open", nextOpen);
          if (nextOpen) {
            langMenu.hidden = false;
            langMenu.removeAttribute("hidden");
          } else {
            langMenu.hidden = true;
            langMenu.setAttribute("hidden", "");
          }
        });

        langMenu.addEventListener("click", (event) => {
          const option = event.target.closest(".drawer__mobile-lang-option");
          if (!option) return;
          const code = option.dataset.lang || "az";
          langLabel.textContent = option.textContent || "Azərbaycan dili";
          document.documentElement.lang = code;
          try {
            localStorage.setItem("siteLanguage", code);
          } catch (error) {
            // ignore storage errors
          }
          langBtn.setAttribute("aria-expanded", "false");
          langWrap.classList.remove("is-open");
          langMenu.hidden = true;
        });
      }
    }

    const list = document.createElement("ul");
    list.className = "drawer__list";

    categories.forEach((category, index) => {
      const listItem = document.createElement("li");
      listItem.className = "drawer__list-item";
      const isExpandedCompact = isCompactDrawer() && index === activeCategoryIndex;
      const chevronPath = isExpandedCompact
        ? "M8 10L12 14L16 10"
        : "M10 16L14 12L10 8";

      const itemLabel = document.createElement("label");
      itemLabel.className = `drawer__item${
        index === activeCategoryIndex ? " drawer__item--active" : ""
      }`;
      itemLabel.dataset.catIndex = String(index);
      itemLabel.setAttribute("role", "button");
      itemLabel.setAttribute("tabindex", "0");
      itemLabel.innerHTML = `
        <span class="drawer__item-left">
          <span class="drawer__item-ico">${category.icon}</span>
          <span class="drawer__item-text">${category.name}</span>
        </span>
        <span class="drawer__chev">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="${chevronPath}" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      `;

      itemLabel.addEventListener("mouseenter", () => {
        if (!isCompactDrawer()) setActiveCategory(index);
      });
      itemLabel.addEventListener("click", () => setActiveCategory(index));
      itemLabel.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setActiveCategory(index);
        }
      });

      listItem.appendChild(itemLabel);

      if (isCompactDrawer() && index === activeCategoryIndex) {
        const subs = category?.subs || [];
        const defaultSubIndex =
          category?.name === "Tripod & Monopodlar" && subs.length > 1 ? 1 : 0;

        itemLabel.classList.add("drawer__item--expanded");

        const mobileSubs = document.createElement("div");
        mobileSubs.className = "drawer__mobile-subs";

        subs.forEach((sub, subIndex) => {
          const subItem = document.createElement("label");
          subItem.className = `drawer__mobile-sub${
            subIndex === defaultSubIndex ? " drawer__mobile-sub--active" : ""
          }`;
          subItem.setAttribute("role", "button");
          subItem.setAttribute("tabindex", "0");
          subItem.textContent = sub;

          subItem.addEventListener("click", () => {
            window.location.href = "product-details.html";
          });

          subItem.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              window.location.href = "product-details.html";
            }
          });

          mobileSubs.appendChild(subItem);
        });

        listItem.appendChild(mobileSubs);

        const divider = document.createElement("div");
        divider.className = "drawer__mobile-divider";
        listItem.appendChild(divider);
      }

      list.appendChild(listItem);
    });

    categoriesBox.appendChild(list);

    if (activeCategoryIndex >= 0 && !isCompactDrawer()) {
      drawer.classList.add("drawer--details");
      renderSubcategories(activeCategoryIndex);
    } else {
      drawer.classList.remove("drawer--details");
      subBox.innerHTML = "";
      if (!drawer.classList.contains("drawer--preview")) {
        drawerRight.innerHTML = "";
      }
      drawerCenter.style.minHeight = "0px";
      drawerRight.style.minHeight = "0px";
    }
  }

  function openDrawer() {
    wasCompactDrawer = isCompactDrawer();
    if (!isCompactDrawer()) activeCategoryIndex = -1;
    syncDrawerHorizontalPosition();
    drawer.classList.add("drawer--active");
    if (!isCompactDrawer() && desktopPreviewMedia.matches) {
      drawer.classList.remove("drawer--details");
      drawer.classList.add("drawer--preview");
      drawerRight.innerHTML = productCardHtml(
        "Foto & Video İşıqlandırmalar",
        "İmpuls İşıq"
      );
    } else {
      drawer.classList.remove("drawer--preview");
      drawer.classList.remove("drawer--details");
    }
    document.body.classList.add("drawer-open");
    openBtn.setAttribute("aria-expanded", "true");
    openBtn.classList.add("active");
    animateProductsButton(true);
    renderCategories();
  }

  function closeDrawer() {
    drawer.classList.remove(
      "drawer--active",
      "drawer--details",
      "drawer--compact",
      "drawer--preview"
    );
    document.body.classList.remove("drawer-open");
    openBtn.setAttribute("aria-expanded", "false");
    openBtn.classList.remove("active");
    animateProductsButton(false);
    drawerCenter.style.minHeight = "0px";
    drawerRight.style.minHeight = "0px";
  }

  openBtn.addEventListener("click", () => {
    if (drawer.classList.contains("drawer--active")) closeDrawer();
    else openDrawer();
  });

  overlay.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.classList.contains("drawer--active")) {
      closeDrawer();
      openBtn.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (!drawer.classList.contains("drawer--active")) return;
    const isCompactNow = isCompactDrawer();
    const isDesktopPreviewNow = desktopPreviewMedia.matches;

    if (
      isCompactNow !== wasCompactDrawer ||
      isDesktopPreviewNow !== wasDesktopPreview
    ) {
      wasCompactDrawer = isCompactNow;
      wasDesktopPreview = isDesktopPreviewNow;
      if (!isDesktopPreviewNow) {
        drawer.classList.remove("drawer--preview");
      }
      renderCategories();
    }
    syncDrawerHorizontalPosition();
    syncDrawerColumnHeights();
  });

  const onCompactModeChange = () => {
    if (!drawer.classList.contains("drawer--active")) return;
    wasCompactDrawer = isCompactDrawer();
    wasDesktopPreview = desktopPreviewMedia.matches;
    if (!wasDesktopPreview) {
      drawer.classList.remove("drawer--preview");
    }
    renderCategories();
    syncDrawerHorizontalPosition();
    syncDrawerColumnHeights();
  };

  const onDesktopPreviewChange = () => {
    if (!drawer.classList.contains("drawer--active")) return;
    wasDesktopPreview = desktopPreviewMedia.matches;
    if (!wasDesktopPreview) {
      drawer.classList.remove("drawer--preview");
    }
    renderCategories();
    syncDrawerHorizontalPosition();
    syncDrawerColumnHeights();
  };

  const onTabletTopChange = () => {
    if (!drawer.classList.contains("drawer--active")) return;
    renderCategories();
    syncDrawerHorizontalPosition();
    syncDrawerColumnHeights();
  };

  if (typeof compactDrawerMedia.addEventListener === "function") {
    compactDrawerMedia.addEventListener("change", onCompactModeChange);
  } else if (typeof compactDrawerMedia.addListener === "function") {
    compactDrawerMedia.addListener(onCompactModeChange);
  }

  if (typeof desktopPreviewMedia.addEventListener === "function") {
    desktopPreviewMedia.addEventListener("change", onDesktopPreviewChange);
  } else if (typeof desktopPreviewMedia.addListener === "function") {
    desktopPreviewMedia.addListener(onDesktopPreviewChange);
  }

  if (typeof tabletTopMedia.addEventListener === "function") {
    tabletTopMedia.addEventListener("change", onTabletTopChange);
  } else if (typeof tabletTopMedia.addListener === "function") {
    tabletTopMedia.addListener(onTabletTopChange);
  }

  animateProductsButton(false, true);
  renderCategories();
}
