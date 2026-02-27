import { initHeader } from './header.js';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

async function loadPartial(url, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    if (window.location.protocol === 'file:') {
      throw new Error('Bu layout hissələri file:// rejimində yüklənmir. Lokal server istifadə edin.');
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${url} yüklənmədi: ${response.status}`);
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    target.innerHTML = doc.body.innerHTML;
  } catch (error) {
    console.error('ERROR:', error);
  }
}

async function initApp() {
  await loadPartial('./assets/components/header.html', 'header-placeholder');
  if (document.getElementById('megaMenu')) {
    initHeader();
  }

  await loadPartial('./assets/components/footer.html', 'footer-placeholder');
}

initApp();
