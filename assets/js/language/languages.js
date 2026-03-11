const LANG_STORAGE_KEY = "siteLanguage";

const AZ_FLAG = `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="#000000"><path fill="#E00034" d="M0 13h36v10H0z"></path><path fill="#0098C3" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path><g fill="#FFF"><path d="M17.844 21.333a3.333 3.333 0 1 1 2.475-5.565a4 4 0 1 0 .001 4.464a3.325 3.325 0 0 1-2.476 1.101z"></path><path d="M23.667 17.998l-1.196-.424l.544-1.146l-1.146.545l-.426-1.195l-.424 1.196l-.003-.002l-1.144-.542l.546 1.146l-1.196.426l1.196.424l-.544 1.146l1.141-.543l.005-.002l.426 1.195l.424-1.196l1.147.544l-.546-1.146z"></path></g><path fill="#00AE65" d="M4 31h28a4 4 0 0 0 4-4v-4H0v4a4 4 0 0 0 4 4z"></path></svg>`;
const EN_FLAG = `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="#000000"><path fill="#B22334" d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2h17.445zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2zM18 9h18v2H18z"></path><path fill="#EEE" d="M.068 27.679c.017.093.036.186.059.277c.026.101.058.198.092.296c.089.259.197.509.333.743L.555 29h34.89l.002-.004a4.22 4.22 0 0 0 .332-.741a3.75 3.75 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679zM0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM0 9zm.555-2l-.003.005L.555 7zM.128 8.044c.025-.102.06-.199.092-.297a3.78 3.78 0 0 0-.092.297zM18 9h18c0-.233-.028-.459-.069-.68a3.606 3.606 0 0 0-.153-.576A4.21 4.21 0 0 0 35.445 7H18v2z"></path><path fill="#3C3B6E" d="M18 5H4a4 4 0 0 0-4 4v10h18V5z"></path><path fill="#FFF" d="M2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449l-.236.725l.617-.448l.618.448l-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L5 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449l-.236.725L7 8.452l.618.448l-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448l-.236-.725l.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 11l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448l-.236-.725l.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 15l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 15l-.235.726z"></path></svg>`;
const RU_FLAG = `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="#000000"><path fill="#CE2028" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4h36v4z"></path><path fill="#22408C" d="M0 13h36v10H0z"></path><path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path></svg>`;

const LANGUAGES = [
  { code: "az", label: "Azərbaycan dili", flag: AZ_FLAG },
  { code: "en", label: "İngilis dili", flag: EN_FLAG },
  { code: "ru", label: "Rus dili", flag: RU_FLAG },
];

export function initLanguages() {
  const trigger = document.querySelector(".js-lang-trigger");
  const menu = document.querySelector(".js-lang-menu");
  const labelNode = trigger?.querySelector(".js-lang-label");
  const flagNode = trigger?.querySelector(".js-lang-flag");

  if (!trigger || !menu || !labelNode || !flagNode) return;

  menu.innerHTML = LANGUAGES.map(
    (lang) => `<li>
      <button class="header__lang-option" type="button" data-lang="${lang.code}">
        <span class="header__lang-flag" aria-hidden="true">${lang.flag}</span>
        <span>${lang.label}</span>
      </button>
    </li>`
  ).join("");

  function closeMenu() {
    trigger.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }

  function openMenu() {
    trigger.setAttribute("aria-expanded", "true");
    menu.hidden = false;
  }

  function syncActiveState(code) {
    menu.querySelectorAll(".header__lang-option").forEach((option) => {
      option.classList.toggle("is-active", option.dataset.lang === code);
    });
  }

  function applyLanguage(code, persist = true) {
    const selected = LANGUAGES.find((lang) => lang.code === code) || LANGUAGES[0];
    labelNode.textContent = selected.label;
    flagNode.innerHTML = selected.flag;
    document.documentElement.lang = selected.code;
    syncActiveState(selected.code);

    if (!persist) return;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, selected.code);
    } catch (error) {
      console.warn("Language storage error:", error);
    }
  }

  const savedLanguage = (() => {
    try {
      return localStorage.getItem(LANG_STORAGE_KEY);
    } catch (error) {
      return null;
    }
  })();

  const initialLanguage = LANGUAGES.some((lang) => lang.code === savedLanguage)
    ? savedLanguage
    : document.documentElement.lang;
  applyLanguage(initialLanguage, false);
  closeMenu();

  trigger.addEventListener("click", () => {
    const expanded = trigger.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeMenu();
      return;
    }
    openMenu();
  });

  menu.addEventListener("click", (event) => {
    const option = event.target.closest(".header__lang-option");
    if (!option) return;
    applyLanguage(option.dataset.lang);
    closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (trigger.contains(event.target) || menu.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
