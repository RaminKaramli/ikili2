function initMegaMenu() {
  const mega = document.getElementById("megaMenu");
  const overlay = document.getElementById("megaOverlay");
  const panel = document.getElementById("megaPanel");

  const categoriesBox = document.getElementById("categories");
  const subBox = document.getElementById("subcategories");
  const dealBox = document.getElementById("megaDeal");
  const openBtn = document.getElementById("openMega");

  if (!mega || !overlay || !panel || !categoriesBox || !subBox || !dealBox || !openBtn) {
    return;
  }

  let hoverEnabled = false;

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

  const DEALS = {
    "RGB Led Panel": {
      cat: "Led işıq",
      title: "RGB Led Panel (Demo)",
      img: "https://dummyimage.com/240x240/ddd/000.png&text=RGB",
      saleCircle: "-50%",
      badge1: "Stokda var",
      badge2: "-300 AZN",
      oldPrice: "600.00 AZN",
      newPrice: "300.00 AZN",
      btnText: "🛒 İndi al",
    },
    "İki Rəngli Led Panel": {
      cat: "Led işıq",
      title: "İki Rəngli Led Panel (Demo)",
      img: "https://dummyimage.com/240x240/ddd/000.png&text=BiColor",
      saleCircle: "-35%",
      badge1: "Stokda var",
      badge2: "-150 AZN",
      oldPrice: "450.00 AZN",
      newPrice: "300.00 AZN",
      btnText: "🛒 İndi al",
    },
    "İmpuls İşıq": {
      cat: "Led işıq",
      title: "İmpuls İşıq (Demo)",
      img: "https://dummyimage.com/240x240/ddd/000.png&text=Flash",
      saleCircle: "-20%",
      badge1: "Stokda var",
      badge2: "-80 AZN",
      oldPrice: "400.00 AZN",
      newPrice: "320.00 AZN",
      btnText: "🛒 İndi al",
    },
    "Daimi İşıq": {
      cat: "Led işıq",
      title: "Daimi İşıq (Demo)",
      img: "https://dummyimage.com/240x240/ddd/000.png&text=Constant",
      saleCircle: "-10%",
      badge1: "Stokda var",
      badge2: "-40 AZN",
      oldPrice: "350.00 AZN",
      newPrice: "310.00 AZN",
      btnText: "🛒 İndi al",
    },
    "Fleş": {
      cat: "Led işıq",
      title: "Fleş (Demo)",
      img: "https://dummyimage.com/240x240/ddd/000.png&text=Flesh",
      saleCircle: "-15%",
      badge1: "Stokda var",
      badge2: "-60 AZN",
      oldPrice: "380.00 AZN",
      newPrice: "320.00 AZN",
      btnText: "🛒 İndi al",
    },
    "Tətikləyici": {
      cat: "Aksesuar",
      title: "Tətikləyici (Demo)",
      img: "https://dummyimage.com/240x240/ddd/000.png&text=Trigger",
      saleCircle: "-25%",
      badge1: "Stokda var",
      badge2: "-30 AZN",
      oldPrice: "120.00 AZN",
      newPrice: "90.00 AZN",
      btnText: "🛒 İndi al",
    },
    "Selfi İşıq": {
      cat: "Led işıq",
      title: "Selfi İşıq (Demo)",
      img: "https://dummyimage.com/240x240/ddd/000.png&text=Selfie",
      saleCircle: "-30%",
      badge1: "Stokda var",
      badge2: "-20 AZN",
      oldPrice: "80.00 AZN",
      newPrice: "60.00 AZN",
      btnText: "🛒 İndi al",
    },
  };

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
    { name: "Daşıma Çantaları", icon: "bag", subs: ["kamera çantası"] },
  ];

  function renderDealBySub(subName) {
    const d = DEALS[subName] || {
      cat: "Məhsul",
      title: subName,
      img: "https://dummyimage.com/240x240/ddd/000.png&text=Product",
      saleCircle: "",
      badge1: "Stokda var",
      badge2: "",
      oldPrice: "",
      newPrice: "",
      btnText: "🛒 İndi al",
    };

    dealBox.innerHTML = `
      <div class="deal__head">Həftənin ən çox satılanı</div>
      <div class="deal__body">
        <div class="deal__cat">${d.cat}</div>
        <p class="deal__title">${d.title}</p>

        <div class="deal__row">
          <div class="deal__img">
            <img src="${d.img}" alt="${d.title}" loading="lazy" />
          </div>
          <div class="deal__badges">
            ${d.saleCircle ? `<div class="deal__circle">${d.saleCircle}</div>` : ""}
            ${d.badge1 ? `<div class="deal__tag">${d.badge1}</div>` : ""}
            ${d.badge2 ? `<div class="deal__tag deal__tag--red">${d.badge2}</div>` : ""}
          </div>
        </div>

        <div class="deal__bottom">
          <button class="deal__btn" type="button">${d.btnText}</button>
          <div class="deal__price">
            ${d.oldPrice ? `<span class="old">${d.oldPrice}</span>` : ""}
            ${d.newPrice ? `<span class="new">${d.newPrice}</span>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  function hideDetails() {
    mega.classList.remove("mega--details");
    subBox.innerHTML = "";
    [...categoriesBox.children].forEach((el) =>
      el.classList.remove("mega__item--active")
    );
  }

  function setCategory(index) {
    [...categoriesBox.children].forEach((el) =>
      el.classList.remove("mega__item--active")
    );
    categoriesBox.children[index].classList.add("mega__item--active");

    mega.classList.add("mega--details");
    subBox.innerHTML = "";

    const subs = data[index].subs;

    if (subs && subs.length) {
      renderDealBySub(subs[0]);
    }

    subs.forEach((name, i) => {
      const el = document.createElement("div");
      el.className = "mega__sub";
      if (i === 0) el.classList.add("mega__sub--active");
      el.textContent = name;

      const activate = () => {
        document
          .querySelectorAll(".mega__sub")
          .forEach((x) => x.classList.remove("mega__sub--active"));
        el.classList.add("mega__sub--active");
        renderDealBySub(name);
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
      btn.className = "mega__item";
      btn.innerHTML = `
        <span class="mega__item-left">
          <span class="mega__item-ico">${icon(cat.icon)}</span>
          <span class="mega__item-text">${cat.name}</span>
        </span>
        <span class="mega__chev">${chevron}</span>
      `;

      btn.addEventListener("mouseenter", () => {
        if (!hoverEnabled) return;
        setCategory(i);
      });

      categoriesBox.appendChild(btn);
    });
  }

  function openMega() {
    mega.classList.add("mega--active");
    document.body.classList.add("mega-open");

    openBtn.classList.add("active");
    openBtn.setAttribute("aria-expanded", "true");

    hideDetails();

    hoverEnabled = false;
    setTimeout(() => {
      hoverEnabled = true;
    }, 200);
  }

  function closeMega() {
    mega.classList.remove("mega--active", "mega--details");
    document.body.classList.remove("mega-open");

    openBtn.classList.remove("active");
    openBtn.setAttribute("aria-expanded", "false");

    hoverEnabled = false;
    hideDetails();
  }

  openBtn.addEventListener("click", () => {
    mega.classList.contains("mega--active") ? closeMega() : openMega();
  });

  overlay.addEventListener("click", closeMega);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mega.classList.contains("mega--active")) {
      closeMega();
      openBtn.focus();
    }
  });

  panel.addEventListener("mouseleave", () => {
    hideDetails();
  });

  renderCategories();
  renderDealBySub("RGB Led Panel");
}

