(() => {
  const track = document.querySelector('[data-app-carousel]');
  if (!track) return;

  const cards = [...track.children];
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  track.replaceChildren(...cards);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let pausedUntil = 0;
  const pause = () => { pausedUntil = Date.now() + 7000; };
  ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach((eventName) => {
    track.addEventListener(eventName, pause, { passive: true });
  });
  track.addEventListener('mouseenter', pause);
  track.addEventListener('focusin', pause);

  window.setInterval(() => {
    if (Date.now() < pausedUntil || document.hidden || cards.length < 2) return;
    const card = track.querySelector('.jp-app-card');
    if (!card) return;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || '0');
    const end = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft + step >= end - 8) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: step, behavior: 'smooth' });
    }
  }, 5600);
})();
