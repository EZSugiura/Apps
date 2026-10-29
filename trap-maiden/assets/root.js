// Root page: send the visitor to the best language folder.
(function () {
  var supported = (document.documentElement.getAttribute('data-langs') || '').split(',');
  var fallback = document.documentElement.getAttribute('data-default') || 'en';
  var base = document.documentElement.getAttribute('data-base') || '';
  function pick(tag) {
    tag = (tag || '').toLowerCase();
    if (tag.indexOf('zh') === 0) {
      return /-(tw|hk|mo)\b|hant/.test(tag) ? 'zh-Hant' : 'zh-Hans';
    }
    var primary = tag.split('-')[0];
    for (var i = 0; i < supported.length; i++) {
      if (supported[i].toLowerCase() === primary) return supported[i];
    }
    return null;
  }
  var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  var target = fallback;
  for (var i = 0; i < list.length; i++) {
    var p = pick(list[i]);
    if (p) { target = p; break; }
  }
  location.replace(base + '/' + target + '/index.html');
})();
