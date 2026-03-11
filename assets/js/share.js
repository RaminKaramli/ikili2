const shareBtn = document.querySelector('.pd-btn--share');
let hideFeedbackTimer;

const createShareFeedback = (button) => {
  const container = button.closest('.pd-actions');
  if (!container) return null;
  container.classList.add('has-share-feedback');

  const feedback = document.createElement('div');
  feedback.className = 'pd-share-feedback';
  feedback.setAttribute('aria-live', 'polite');
  container.appendChild(feedback);
  return feedback;
};

const copyCurrentUrl = async (feedbackEl) => {
  const showFeedback = (text, type = 'success') => {
    feedbackEl.classList.remove('is-success', 'is-error');
    feedbackEl.classList.add(type === 'error' ? 'is-error' : 'is-success');
    feedbackEl.textContent = text;
    feedbackEl.classList.add('is-visible');

    window.clearTimeout(hideFeedbackTimer);
    hideFeedbackTimer = window.setTimeout(() => {
      feedbackEl.classList.remove('is-visible');
    }, 2500);
  };

  try {
    await navigator.clipboard.writeText(window.location.href);
    showFeedback('URL kopyalandı');
  } catch (error) {
    console.error('Link kopyalanmadı:', error);
    showFeedback('URL kopyalanmadı', 'error');
  }
};

if (shareBtn) {
  const feedbackEl = createShareFeedback(shareBtn);
  if (feedbackEl) {
    shareBtn.addEventListener('click', () => copyCurrentUrl(feedbackEl));
  }
}
