function initTestimonialVideos() {
  const playButtons = document.querySelectorAll('[data-video-play]');
  if (!playButtons.length) return;

  function setCardState(card, isPlaying) {
    const button = card.querySelector('[data-video-play]');
    card.classList.toggle('is-playing', isPlaying);
    if (button) {
      button.setAttribute('aria-label', isPlaying ? 'Videonu dayandır' : 'Videonu oynat');
    }
  }

  function pauseAllExcept(activeCard) {
    document.querySelectorAll('.testimonials__card').forEach((card) => {
      if (card === activeCard) return;
      const video = card.querySelector('.testimonials__video');
      if (video) video.pause();
      setCardState(card, false);
    });
  }

  function toggleVideo(card, video) {
    if (video.paused) {
      pauseAllExcept(card);
      video.play().then(() => {
        setCardState(card, true);
      }).catch((error) => {
        console.warn('Video play error:', error);
      });
    } else {
      video.pause();
      setCardState(card, false);
    }
  }

  playButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.testimonials__card');
      const video = card?.querySelector('.testimonials__video');
      if (!card || !video) return;
      toggleVideo(card, video);
    });

    const card = button.closest('.testimonials__card');
    const video = card?.querySelector('.testimonials__video');
    if (!card || !video) return;

    video.addEventListener('pause', () => setCardState(card, false));
    video.addEventListener('play', () => setCardState(card, true));
    video.addEventListener('ended', () => setCardState(card, false));
  });
}

initTestimonialVideos();
