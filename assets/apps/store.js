/*
 * EZ杉浦 個人開発アプリ一覧サイト
 *
 * アプリを追加する方法:
 *   1. assets/apps/apps.json の "apps" 配列に新しいオブジェクトを1件追加する
 *      (id / name / package / category / shortDescription / description /
 *       features / icon / screenshots / rating / installs / updated /
 *       playUrl / privacyUrl / keywords を指定)
 *   2. このファイルやHTMLは変更不要。ページを開けば自動的にカードが増える。
 */

(function () {
  "use strict";

  var state = {
    apps: [],
    category: "すべて",
    query: "",
  };

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function starRow(rating) {
    if (!rating) {
      return '<span class="new-badge">NEW</span>';
    }
    return (
      '<span class="rating"><span class="star">★</span>' +
      rating.score.toFixed(1) +
      '<span>(' + rating.count + ')</span></span>'
    );
  }

  function isNew(updated) {
    if (!updated) return false;
    var d = new Date(updated);
    var now = new Date();
    var days = (now - d) / (1000 * 60 * 60 * 24);
    return days <= 45;
  }

  function cardHtml(app) {
    var kw = (app.keywords || []).slice(0, 4).map(function (k) {
      return '<span class="kw">#' + escapeHtml(k) + '</span>';
    }).join("");

    return (
      '<article class="app-card" data-id="' + app.id + '" tabindex="0" role="button" aria-label="' + escapeHtml(app.name) + ' の詳細を見る">' +
      '<div class="app-card-top">' +
      '<img class="app-icon" src="' + app.icon + '" alt="' + escapeHtml(app.name) + ' アイコン" loading="lazy">' +
      '<div class="app-info">' +
      '<h3 class="app-name">' + escapeHtml(app.name) + '</h3>' +
      '<div class="app-meta-row">' +
      '<span class="app-category-tag">' + escapeHtml(app.category) + '</span>' +
      "<span>・</span>" +
      (app.rating ? starRow(app.rating) : (isNew(app.updated) ? '<span class="new-badge">NEW</span>' : '<span>' + escapeHtml(app.installs || "") + " DL</span>")) +
      "</div>" +
      "</div>" +
      "</div>" +
      '<p class="app-short-desc">' + escapeHtml(app.shortDescription) + "</p>" +
      '<div class="keyword-chips">' + kw + "</div>" +
      "</article>"
    );
  }

  function render() {
    var grid = document.getElementById("app-grid");
    var q = state.query.trim().toLowerCase();

    var filtered = state.apps.filter(function (app) {
      var matchesCategory = state.category === "すべて" || app.category === state.category;
      if (!matchesCategory) return false;
      if (!q) return true;
      var haystack = [
        app.name,
        app.shortDescription,
        (app.description || []).join(" "),
        (app.keywords || []).join(" "),
        app.category,
      ].join(" ").toLowerCase();
      return haystack.indexOf(q) !== -1;
    });

    if (filtered.length === 0) {
      grid.innerHTML = "";
      document.getElementById("empty-state").style.display = "block";
      return;
    }
    document.getElementById("empty-state").style.display = "none";
    grid.innerHTML = filtered.map(cardHtml).join("");

    Array.prototype.forEach.call(grid.querySelectorAll(".app-card"), function (el) {
      el.addEventListener("click", function () {
        openModal(el.getAttribute("data-id"));
      });
      el.addEventListener("keypress", function (e) {
        if (e.key === "Enter" || e.key === " ") openModal(el.getAttribute("data-id"));
      });
    });
  }

  function renderChips() {
    var categories = ["すべて"].concat(
      state.apps.map(function (a) { return a.category; }).filter(function (v, i, arr) {
        return arr.indexOf(v) === i;
      })
    );
    var row = document.getElementById("chip-row");
    row.innerHTML = categories.map(function (c) {
      return '<button class="chip' + (c === state.category ? " active" : "") + '" data-cat="' + escapeHtml(c) + '">' + escapeHtml(c) + "</button>";
    }).join("");

    Array.prototype.forEach.call(row.querySelectorAll(".chip"), function (el) {
      el.addEventListener("click", function () {
        state.category = el.getAttribute("data-cat");
        renderChips();
        render();
      });
    });
  }

  function openModal(id) {
    var app = state.apps.find(function (a) { return a.id === id; });
    if (!app) return;

    var shots = (app.screenshots || []).map(function (s) {
      return '<img src="' + s + '" alt="' + escapeHtml(app.name) + ' スクリーンショット" loading="lazy">';
    }).join("");

    var desc = (app.description || []).map(function (p) {
      return "<p>" + escapeHtml(p) + "</p>";
    }).join("");

    var features = (app.features || []).map(function (f) {
      return "<li>" + escapeHtml(f) + "</li>";
    }).join("");

    var kw = (app.keywords || []).map(function (k) {
      return '<span class="kw">#' + escapeHtml(k) + '</span>';
    }).join("");

    var modalBody = document.getElementById("modal-body");
    modalBody.innerHTML =
      '<div class="modal-header">' +
      '<img class="modal-icon" src="' + app.icon + '" alt="' + escapeHtml(app.name) + ' アイコン">' +
      "<div>" +
      '<h2 class="modal-title">' + escapeHtml(app.name) + "</h2>" +
      '<div class="app-meta-row">' +
      "<span>" + escapeHtml(app.category) + "</span><span>・</span>" +
      starRow(app.rating) +
      "<span>・</span><span>" + escapeHtml(app.installs || "") + " ダウンロード</span>" +
      "</div>" +
      '<div class="modal-actions">' +
      '<a class="btn-primary" href="' + app.playUrl + '" target="_blank" rel="noopener">Google Playで見る</a>' +
      (app.privacyUrl ? '<a class="btn-secondary" href="' + app.privacyUrl + '" target="_blank" rel="noopener">プライバシーポリシー</a>' : "") +
      "</div>" +
      "</div>" +
      "</div>" +
      (shots ? '<div class="shot-row">' + shots + "</div>" : "") +
      '<div class="modal-desc">' + desc + "</div>" +
      (features ? '<div class="modal-section-title">主な機能</div><ul class="feature-list">' + features + "</ul>" : "") +
      '<div class="keyword-chips">' + kw + "</div>" +
      '<div class="modal-footer-meta">' +
      "<span>パッケージ名: " + escapeHtml(app.package) + "</span>" +
      "<span>最終更新日: " + escapeHtml(app.updated || "-") + "</span>" +
      "</div>";

    document.getElementById("modal-overlay").classList.add("open");
    history.replaceState(null, "", "#" + app.id);
  }

  function closeModal() {
    document.getElementById("modal-overlay").classList.remove("open");
    history.replaceState(null, "", location.pathname);
  }

  function injectStructuredData(apps) {
    var itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: apps.map(function (app, i) {
        return {
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "SoftwareApplication",
            name: app.name,
            applicationCategory: app.category === "ゲーム" ? "GameApplication" : "UtilitiesApplication",
            operatingSystem: "Android",
            description: app.shortDescription,
            url: app.playUrl,
            image: app.icon,
            offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
            aggregateRating: app.rating
              ? {
                  "@type": "AggregateRating",
                  ratingValue: app.rating.score,
                  ratingCount: app.rating.count,
                }
              : undefined,
          },
        };
      }),
    };
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(itemList);
    document.head.appendChild(script);
  }

  function init() {
    fetch("assets/apps/apps.json", { cache: "no-cache" })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        state.apps = data.apps || [];
        renderChips();
        render();
        injectStructuredData(state.apps);

        var hashId = location.hash.replace("#", "");
        if (hashId && state.apps.some(function (a) { return a.id === hashId; })) {
          openModal(hashId);
        }
      })
      .catch(function (err) {
        document.getElementById("app-grid").innerHTML =
          '<p style="color:#c5221f;padding:20px;">アプリ情報の読み込みに失敗しました。しばらくしてから再度お試しください。</p>';
        console.error(err);
      });

    document.getElementById("search-input").addEventListener("input", function (e) {
      state.query = e.target.value;
      render();
    });
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("modal-overlay").addEventListener("click", function (e) {
      if (e.target === document.getElementById("modal-overlay")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
