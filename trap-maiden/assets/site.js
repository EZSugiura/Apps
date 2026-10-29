// Small helpers: hamburger menu toggle. (No dependencies.)
(function () {
  var btn = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// Spoilers: the first tap on a blurred element only reveals it (per element).
(function () {
  function reveal(el) {
    el.classList.add('revealed');
    var info = el.getAttribute('data-title');
    if (info && el.namespaceURI === 'http://www.w3.org/2000/svg' && !el.querySelector('title')) {
      var t = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      t.textContent = info;
      el.insertBefore(t, el.firstChild);
    }
  }
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest ? ev.target.closest('.spoiler:not(.revealed)') : null;
    if (!el) return;
    ev.preventDefault();
    ev.stopPropagation();
    reveal(el);
  }, true);
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Enter' && ev.key !== ' ') return;
    var el = ev.target.closest ? ev.target.closest('.spoiler:not(.revealed)') : null;
    if (!el) return;
    ev.preventDefault();
    reveal(el);
  });
})();

// Mission checklist: checkboxes saved in this browser only (localStorage).
// The page works without storage (private mode, blocked): then the boxes just do not persist.
(function () {
  var KEY = 'trapMaidenMissions';
  var boxes = document.querySelectorAll('input.mc');
  if (!boxes.length) return;
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
  function mark(box) {
    var tr = box.closest ? box.closest('tr') : null;
    if (tr) tr.classList.toggle('mc-done', box.checked);
  }
  boxes.forEach(function (box) {
    var k = box.getAttribute('data-k');
    if (saved[k]) box.checked = true;
    mark(box);
    box.addEventListener('change', function () {
      if (box.checked) saved[k] = 1; else delete saved[k];
      mark(box);
      try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) { /* storage unavailable */ }
    });
  });
})();
