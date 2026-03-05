export function initHeader() {
  initDrawerMenu();
}

function initDrawerMenu() {
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

  const icon = (type) => {
    const map = {
      camera: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5858 4.5858L15.7071 5.70712C15.8946 5.89465 16.149 6 16.4142 6H19C20.1046 6 21 6.89543 21 8V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V8C3 6.89543 3.89543 6 5 6H7.58579C7.851 6 8.10535 5.89464 8.29289 5.70711L9.41421 4.5858C9.78928 4.21072 10.298 4 10.8284 4H13.1716C13.702 4 14.2107 4.21072 14.5858 4.5858Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.05 9.00007C18.05 9.02767 18.0276 9.05001 18 9.05C17.9724 9.04999 17.95 9.02761 17.95 9.00002C17.95 8.97242 17.9723 8.95003 17.9999 8.95C18.0132 8.94998 18.026 8.95525 18.0354 8.96464C18.0447 8.97404 18.05 8.98678 18.05 9.00006" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 12C10.5 11.1716 11.1716 10.5 12 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      tripod: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.4169 8.18099C14.1759 8.93999 14.1759 10.172 13.4169 10.931C12.6579 11.69 11.4259 11.69 10.6669 10.931C9.90791 10.172 9.90791 8.93999 10.6669 8.18099C11.4269 7.42099 12.6579 7.42099 13.4169 8.18099" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.333 6.222L14.32 4.538C14.119 4.204 13.758 4 13.368 4H10.602C10.207 4 9.842 4.21 9.643 4.551L8.667 6.222H7.139C6.372 6.222 5.75 6.844 5.75 7.611V12.611C5.75 13.378 6.372 14 7.139 14H16.861C17.628 14 18.25 13.378 18.25 12.611V7.611C18.25 6.844 17.628 6.222 16.862 6.222H15.333V6.222Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.667 21L12 19.667L10.667 18.334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.8892 14.006C21.5922 14.538 22.0002 15.138 22.0002 15.778C22.0002 17.414 19.4002 18.811 15.7222 19.386" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.111 14.006C2.408 14.538 2 15.138 2 15.778C2 17.926 6.477 19.667 12 19.667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      mics: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15V15C10.343 15 9 13.657 9 12V6C9 4.343 10.343 3 12 3V3C13.657 3 15 4.343 15 6V12C15 13.657 13.657 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 10V12C18 15.314 15.314 18 12 18V18C8.686 18 6 15.314 6 12V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 18V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.82031 21H16.1803" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      rig: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 18H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.46934 18.873C6.44134 18.873 6.41934 18.895 6.41934 18.923C6.41934 18.951 6.44134 18.973 6.46934 18.973" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19 12V5C19 3.896 18.105 3 17 3H6C4.895 3 4 3.896 4 5V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5002 20H18.4092C17.5812 20 16.9092 19.328 16.9092 18.5V13.5C16.9092 12.672 17.5812 12 18.4092 12H20.5002C21.3282 12 22.0002 12.672 22.0002 13.5V18.5C22.0002 19.328 21.3282 20 20.5002 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.91 15H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 21H4C2.895 21 2 20.105 2 19V12C2 10.895 2.895 10 4 10H9C10.105 10 11 10.895 11 12V19C11 20.105 10.105 21 9 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      stand: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="8.5" r="2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 17V16C7 14.6193 8.11929 13.5 9.5 13.5H14.5C15.8807 13.5 17 14.6193 17 16V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21 17H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      magic: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 5V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19 4H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87001 20.705L3.29501 19.13C2.90101 18.736 2.90101 18.098 3.29501 17.705L12.87 8.12997C13.264 7.73597 13.902 7.73597 14.295 8.12997L15.87 9.70497C16.264 10.099 16.264 10.737 15.87 11.13L6.29501 20.705C5.90201 21.098 5.26301 21.098 4.87001 20.705Z" stroke="currentColor" stroke-width="1.5104" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.5102 13.31L10.6802 10.48" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21 15H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 14V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 3V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 4H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      panorama: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.283 19.792L19.594 20.375C20.255 20.669 21 20.185 21 19.461V4.53896C21 3.81496 20.255 3.33096 19.594 3.62496L18.283 4.20796C14.283 5.98596 9.717 5.98596 5.717 4.20796L4.406 3.62496C3.745 3.33096 3 3.81496 3 4.53896V19.461C3 20.185 3.745 20.669 4.406 20.375L5.717 19.792C9.717 18.015 14.283 18.015 18.283 19.792Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 15.5H9C8.448 15.5 8 15.052 8 14.5V9.5C8 8.948 8.448 8.5 9 8.5H15C15.552 8.5 16 8.948 16 9.5V14.5C16 15.052 15.552 15.5 15 15.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.46 10.95L16 13.02" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.4598 10.95L11.3198 13.18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.3199 13.1799L10.1499 12.3999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.15 12.3999L8 14.2099" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 20H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 15H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.061 17.439C15.647 18.025 15.647 18.975 15.061 19.56C14.475 20.146 13.525 20.146 12.94 19.56C12.354 18.974 12.354 18.024 12.94 17.439C13.525 16.854 14.475 16.854 15.061 17.439" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.561 16.439C21.147 17.025 21.147 17.975 20.561 18.56C19.975 19.146 19.025 19.146 18.44 18.56C17.854 17.974 17.854 17.024 18.44 16.439C19.025 15.854 19.975 15.854 20.561 16.439" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.5 18.5V13.677C15.5 13.268 15.749 12.9 16.129 12.749L19.629 11.349C20.286 11.086 21 11.57 21 12.277V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 10H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 5H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      audio: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 15V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 17V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 21V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 16V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 19V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      photo: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 21H6C4.343 21 3 19.657 3 18V6C3 4.343 4.343 3 6 3H18C19.657 3 21 4.343 21 6V18C21 19.657 19.657 21 18 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 17.4859L7.612 12.8739C8.003 12.4829 8.636 12.4829 9.026 12.8739L10.432 14.2799L15.009 9.70389C15.4 9.31289 16.033 9.31289 16.423 9.70389L21 14.2809" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.51517 7.40671C8.66161 7.55316 8.66161 7.79059 8.51517 7.93704C8.36872 8.08349 8.13128 8.08349 7.98483 7.93704C7.83839 7.79059 7.83839 7.55316 7.98483 7.40671C8.13128 7.26026 8.36872 7.26026 8.51517 7.40671" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      battery: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 18H5C3.895 18 3 17.105 3 16V8C3 6.895 3.895 6 5 6H17C18.105 6 19 6.895 19 8V16C19 17.105 18.105 18 17 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.3002 15L12.8002 12H9.2002L10.7002 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19 9H20.014C20.169 9 20.322 9.036 20.461 9.106L20.947 9.349C21.286 9.518 21.5 9.865 21.5 10.243V13.757C21.5 14.136 21.286 14.482 20.947 14.651L20.461 14.894C20.322 14.964 20.169 15 20.014 15H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      bag: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 18.9341H5C3.895 18.9341 3 18.0391 3 16.9341V14.4811C3 13.3281 3.935 12.3931 5.088 12.3931H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 18.9341H19C20.105 18.9341 21 18.0391 21 16.9341V14.4341C21 13.3291 20.105 12.4341 19 12.4341H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.894H10C9.448 17.894 9 17.446 9 16.894V14.894C9 14.342 9.448 13.894 10 13.894H14C14.552 13.894 15 14.342 15 14.894V16.894C15 17.447 14.552 17.894 14 17.894Z" stroke="currentColor" stroke-width="1.6432" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 6V5C15 3.895 14.105 3 13 3H11C9.895 3 9 3.895 9 5V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 10H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6H10C7.791 6 6 7.791 6 10V19C6 20.105 6.895 21 8 21H16C17.105 21 18 20.105 18 19V10C18 7.791 16.209 6 14 6Z" stroke="currentColor" stroke-width="1.5492" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    };
    return map[type] || map.camera;
  };

  const chevron = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;


  const data = [
    {
      name: "Foto & Video işıqlandırmalar",
      icon: "camera",
      subs: [
        "RGB Led Panel",
        "İki Rəngli Led Panel",
        "İmpuls İşıq",
        "Daimi İşıq",
        "Fleş",
        "Tətikləyici",
        "Selfi İşıq",
      ],
    },
    { name: "Tripod & Monopodlar", icon: "tripod", subs: ["Tripod və monopod", "Aksesuar"] },
    {
      name: "Mikrafonlar",
      icon: "mics",
      subs: [
        "Masaüstü Mikarafon",
        "Yaxa Mikrafonu",
        "Kamera Mikrafonu",
        "Pop Filter",
        "Mikrafon Dayaq",
        "Şok Dayağı",
        "Güc Qaynağı, Səs Kartı",
        "Kabellər",
      ],
    },
    { name: "Riglər", icon: "rig", subs: ["Kamera Rig", "Universal Rig", "Telefon Üçün Rig"] },
    {
      name: "Dayaqlar",
      icon: "stand",
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
    { name: "Led Striplər", icon: "magic", subs: ["5 metrlik", "10 metrlik", "15 metrlik"] },
    { name: "Kamera Monitorlar", icon: "panorama", subs: ["Monitor"] },
    { name: "Akustik Panellər", icon: "media", subs: ["Divar Üçün Panel", "Mikrafon Üçün Panel"] },
    {
      name: "Studiya Avadanlıqları",
      icon: "audio",
      subs: [
        "Arxa fon Dayaqları",
        "Parça Fonlar",
        "Softbokslar Və Çətirlər",
        "Filterlər",
        "Digər",
      ],
    },
    { name: "Teleprompterlər", icon: "photo", subs: ["Teleprompter", "Dayaq"] },
    { name: "Batareyalar & Şarj Alətləri", icon: "battery", subs: ["Batareya", "Şarj Aləti & Adapter", "Batareya Dəsti"] },
    { name: "Daşıma Çantaları", icon: "bag", subs: ["Kamera Çantası"] },
  ];

  const HERO_DEALS = {
    "RGB Led Panel": {
      category: "Led işıq",
      name: "RGB Led Panel (Demo)",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=RGB",
      discount: "-50%",
      stock: "Stokda var",
      sale: "-300 AZN",
      oldPrice: "600.00 AZN",
      newPrice: "300.00 AZN",
    },
    "İki Rəngli Led Panel": {
      category: "Led işıq",
      name: "İki Rəngli Led Panel (Demo)",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=BiColor",
      discount: "-35%",
      stock: "Stokda var",
      sale: "-150 AZN",
      oldPrice: "450.00 AZN",
      newPrice: "300.00 AZN",
    },
    "İmpuls İşıq": {
      category: "Led işıq",
      name: "İmpuls İşıq (Demo)",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Flash",
      discount: "-20%",
      stock: "Stokda var",
      sale: "-80 AZN",
      oldPrice: "400.00 AZN",
      newPrice: "320.00 AZN",
    },
    "Daimi İşıq": {
      category: "Led işıq",
      name: "Daimi İşıq (Demo)",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Constant",
      discount: "-10%",
      stock: "Stokda var",
      sale: "-40 AZN",
      oldPrice: "350.00 AZN",
      newPrice: "310.00 AZN",
    },
    "Fleş": {
      category: "Led işıq",
      name: "Fleş (Demo)",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Flesh",
      discount: "-15%",
      stock: "Stokda var",
      sale: "-60 AZN",
      oldPrice: "380.00 AZN",
      newPrice: "320.00 AZN",
    },
    "Tətikləyici": {
      category: "Aksesuar",
      name: "Tətikləyici (Demo)",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Trigger",
      discount: "-25%",
      stock: "Stokda var",
      sale: "-30 AZN",
      oldPrice: "120.00 AZN",
      newPrice: "90.00 AZN",
    },
    "Selfi İşıq": {
      category: "Led işıq",
      name: "Selfi İşıq (Demo)",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Selfie",
      discount: "-30%",
      stock: "Stokda var",
      sale: "-20 AZN",
      oldPrice: "80.00 AZN",
      newPrice: "60.00 AZN",
    },
  };

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
      price: "600.00 AZN",
    },
    "Divar Üçün Panel": {
      category: "Akustik panel",
      name: "NEEWER CB200B İkirəngli 210W LED",
      img: "assets/images/538ed5fb4d0aa670fe02bb14eb3eb90df5809c58.png",
      badge: "Sifarişlə",
      badgeClass: "products__badge--green",
      starsSvg: STAR_SVG,
      discount: true,
      price: "600.00 AZN",
    },
    "Mikrafon Üçün Panel": {
      category: "Led işıq",
      name: "NEEWER CB200B İkirəngli 210W LED",
      img: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
      badge: "Tezliklə",
      badgeClass: "products__badge--yellow",
      starsSvg: STAR_SVG_MONITOR,
      discount: false,
      price: "600.00 AZN",
    },
    "5 metrlik": {
      category: "Led işıq",
      name: "5 metrlik",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Product",
      badge: "Tezliklə",
      badgeClass: "products__badge--yellow",
      starsSvg: STAR_SVG_MONITOR,
      discount: false,
      price: "600.00 AZN",
    },
    "10 metrlik": {
      category: "Led işıq",
      name: "10 metrlik",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Product",
      badge: "Tezliklə",
      badgeClass: "products__badge--yellow",
      starsSvg: STAR_SVG_MONITOR,
      discount: false,
      price: "600.00 AZN",
    },
    "15 metrlik": {
      category: "Led işıq",
      name: "15 metrlik",
      img: "https://dummyimage.com/420x420/ddd/000.png&text=Product",
      badge: "Tezliklə",
      badgeClass: "products__badge--yellow",
      starsSvg: STAR_SVG_MONITOR,
      discount: false,
      price: "600.00 AZN",
    },
  };

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
      price: base.price || deal.oldPrice || "600.00 AZN",
    };

    drawerRight.innerHTML = `
      <div class="${p.discount ? "products-section--discount" : ""}">
        <div class="products__card">
          <a class="card-link-overlay" href="#" aria-label="${p.name} səhifəsinə keçid"></a>
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
              <a href="#" class="products__btn is-visual-link" aria-hidden="true" tabindex="-1">
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
      el.addEventListener("click", activate);

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
