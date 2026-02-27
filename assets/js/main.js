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

  const cacheKey = `partial:${url}`;
  let cachedHtml = null;
  try {
    cachedHtml = localStorage.getItem(cacheKey);
  } catch (error) {
    console.warn('Cache read error:', error);
  }

  if (cachedHtml) {
    target.innerHTML = cachedHtml;
  }

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
    const nextHtml = doc.body.innerHTML;

    if (target.innerHTML !== nextHtml) {
      target.innerHTML = nextHtml;
    }

    try {
      localStorage.setItem(cacheKey, nextHtml);
    } catch (error) {
      console.warn('Cache write error:', error);
    }
  } catch (error) {
    console.error('ERROR:', error);
  }
}

async function initApp() {
  const headerLoad = loadPartial('./assets/components/header.html', 'header-placeholder');
  const footerLoad = loadPartial('./assets/components/footer.html', 'footer-placeholder');

  await headerLoad;
  if (document.getElementById('megaMenu')) {
    initHeader();
  }

  await footerLoad;
}

initApp();
