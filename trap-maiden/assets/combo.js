// COMBO calculator. Every number comes from the JSON the build embeds
// (#combo-data); this file only applies the same formula as the game engine:
//   damage = round(power x COMBO multiplier x CHAIN multiplier) - armor, at least minDamage.
(function () {
  var el = document.getElementById('combo-data');
  var out = document.getElementById('combo-out');
  if (!el || !out) return;
  var D = JSON.parse(el.textContent);
  var L = D.labels;
  var trapSel = document.getElementById('cc-trap');
  var levelIn = document.getElementById('cc-level');
  var comboSel = document.getElementById('cc-combo');
  var chainSel = document.getElementById('cc-chain');
  var armorIn = document.getElementById('cc-armor');
  var note = document.getElementById('cc-levelnote');

  function pick(table, n) { // same as ComboDef._pick: 1-based, the last entry is the cap
    if (!table.length) return 1;
    return table[Math.min(Math.max(n - 1, 0), table.length - 1)];
  }
  function fmt(x) { return String(parseFloat(x.toFixed(2))); }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function trap() {
    for (var i = 0; i < D.traps.length; i++) if (D.traps[i].id === trapSel.value) return D.traps[i];
    return D.traps[0];
  }

  function render() {
    var t = trap();
    var max = t.levels.length;
    var lv = parseInt(levelIn.value, 10);
    if (!(lv >= 1)) lv = 1;
    if (lv > max) { lv = max; levelIn.value = max; }
    levelIn.max = max;
    note.textContent = L['combo.level.max'].replace('{max}', max);
    var armor = Math.max(0, parseInt(armorIn.value, 10) || 0);
    var n = parseInt(comboSel.value, 10);
    var chain = parseInt(chainSel.value, 10);
    var hits = t.levels[lv - 1];
    if (!hits.length) {
      out.innerHTML = '<p class="note">' + esc(L['combo.nodamage']) + '</p>';
      return;
    }
    var cm = pick(D.chain, chain);
    var rows = '';
    var total = 0;
    for (var i = 1; i <= n; i++) {
      var m = pick(D.combo, i);
      var dmg = 0;
      var parts = [];
      for (var h = 0; h < hits.length; h++) {
        var raw = hits[h] * m * cm;
        var r = Math.round(raw);
        var text = hits[h] + ' × ' + fmt(m) + ' × ' + fmt(cm) + ' = ' + fmt(raw);
        if (fmt(raw) !== String(r)) text += ' → ' + r;
        var d = r;
        if (armor > 0) { d = r - armor; text += ' − ' + armor; }
        if (d < D.minDamage) { d = D.minDamage; text += ' (' + L['combo.min'].replace('{min}', D.minDamage) + ')'; }
        text += ' = ' + d;
        parts.push(text);
        dmg += d;
      }
      total += dmg;
      rows += '<tr><td class="num">' + i + '</td><td class="num">×' + fmt(m) + '</td><td class="num">×' + fmt(cm) +
        '</td><td>' + parts.map(esc).join('<br>') + '</td><td class="num"><strong>' + dmg + '</strong></td></tr>';
    }
    out.innerHTML = '<div class="table-wrap"><table><thead><tr><th class="num">' + esc(L['combo.th.n']) + '</th><th>' +
      esc(L['combo.th.combo']) + '</th><th>' + esc(L['combo.th.chain']) + '</th><th>' + esc(L['combo.th.calc']) +
      '</th><th class="num">' + esc(L['combo.th.damage']) + '</th></tr></thead><tbody>' + rows +
      '<tr class="total"><td colspan="4">' + esc(L['combo.total']) + '</td><td class="num"><strong>' + total +
      '</strong></td></tr></tbody></table></div>';
  }

  [trapSel, levelIn, comboSel, chainSel, armorIn].forEach(function (x) {
    x.addEventListener('input', render);
    x.addEventListener('change', render);
  });
  render();
})();
