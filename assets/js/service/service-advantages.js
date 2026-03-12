(() => {
  const tabs = document.querySelectorAll(".sa-tabs__btn");
  const panels = document.querySelectorAll(".sa-panel");
  if (!tabs.length || !panels.length) return;
  const hasGsap = typeof window.gsap !== "undefined";

  function activate(tabName) {
    tabs.forEach((button) => {
      const active = button.dataset.tab === tabName;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
    });

    panels.forEach((panel) => {
      const active = panel.dataset.panel === tabName;
      panel.classList.toggle("is-active", active);
      if (hasGsap) {
        window.gsap.set(panel, { clearProps: "all" });
      }
    });
  }

  tabs.forEach((button) => {
    button.addEventListener("click", () => activate(button.dataset.tab));
  });

  const tabFromQuery = new URLSearchParams(window.location.search).get("tab");
  if (tabFromQuery && [...tabs].some((button) => button.dataset.tab === tabFromQuery)) {
    activate(tabFromQuery);
  }
})();
