// Site search: loads the per-language index on first focus, substring match
// (case- and width-insensitive, no word splitting so Japanese/Thai work).
(function () {
  var box = document.querySelector('.search');
  if (!box) return;
  var input = box.querySelector('input');
  var list = box.querySelector('.search-results');
  var base = box.getAttribute('data-base') || '';
  var index = null;
  var loading = false;

  box.hidden = false; // the box needs JavaScript, so it stays hidden without it

  function norm(s) {
    s = String(s || '');
    try { s = s.normalize('NFKC'); } catch (e) { /* old browser */ }
    return s.toLowerCase();
  }
  function load(done) {
    if (index) { done(); return; }
    if (loading) return;
    loading = true;
    fetch(box.getAttribute('data-index')).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    }).then(function (rows) {
      index = rows.map(function (e) {
        return { e: e, t: norm(e.t), s: norm(e.s), k: norm(e.k) };
      });
      loading = false;
      done();
    }).catch(function () {
      loading = false;
      show([], box.getAttribute('data-error'));
    });
  }
  function show(items, message) {
    list.innerHTML = '';
    if (message) {
      var li = document.createElement('li');
      li.className = 'none';
      li.textContent = message;
      list.appendChild(li);
    }
    items.forEach(function (e) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = base + e.u;
      var t = document.createElement('span');
      t.className = 'rt';
      t.textContent = e.t;
      a.appendChild(t);
      if (e.s) {
        var s = document.createElement('span');
        s.className = 'rs';
        s.textContent = e.s;
        a.appendChild(s);
      }
      li.appendChild(a);
      list.appendChild(li);
    });
    list.hidden = !message && !items.length;
  }
  function run() {
    var q = norm(input.value).trim();
    if (!q) { show([], ''); list.hidden = true; return; }
    if (!index) { load(run); return; }
    var tokens = q.split(/\s+/);
    var hits = [];
    for (var i = 0; i < index.length; i++) {
      var r = index[i];
      var score = 0, ok = true;
      for (var j = 0; j < tokens.length; j++) {
        var tk = tokens[j];
        if (r.t.indexOf(tk) === 0) score += 4;
        else if (r.t.indexOf(tk) > 0) score += 3;
        else if (r.s.indexOf(tk) >= 0) score += 2;
        else if (r.k.indexOf(tk) >= 0) score += 1;
        else { ok = false; break; }
      }
      if (ok) hits.push({ score: score, i: i, e: r.e });
    }
    hits.sort(function (a, b) { return b.score - a.score || a.i - b.i; });
    var items = hits.slice(0, 30).map(function (h) { return h.e; });
    show(items, items.length ? '' : box.getAttribute('data-none'));
  }

  input.addEventListener('focus', function () { load(function () {}); });
  input.addEventListener('input', run);
  input.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') { input.value = ''; list.hidden = true; }
    else if (ev.key === 'ArrowDown') {
      var a = list.querySelector('a');
      if (a) { ev.preventDefault(); a.focus(); }
    }
  });
  list.addEventListener('keydown', function (ev) {
    var cur = document.activeElement;
    var li = cur && cur.closest ? cur.closest('li') : null;
    if (!li) return;
    var next = ev.key === 'ArrowDown' ? li.nextElementSibling : ev.key === 'ArrowUp' ? li.previousElementSibling : null;
    if (ev.key === 'ArrowUp' && !next) { ev.preventDefault(); input.focus(); return; }
    var a = next && next.querySelector('a');
    if (a) { ev.preventDefault(); a.focus(); }
  });
})();
