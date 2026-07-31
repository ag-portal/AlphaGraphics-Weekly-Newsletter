/* =====================================================================
   FAQ Friday Newsletters — renderer
   buildArticle(week, format) -> <article> for 'digital' | 'print'
   mount(el, week, format)
   Depends on newsletter-data.js (window.AG_NEWSLETTERS / AG_CONTACT).
   ===================================================================== */
(function () {
  var C = window.AG_CONTACT;
  // path from a /digital or /print or /email page back to project root:
  // Overridable so a page can sit deeper than one level (pretty slug URLs).
  var ROOT = window.NL_ROOT || "../";
  var LIB  = window.NL_LIB  || "";

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  /* ---- DOM run rendering ---- */
  var CURRENT_FORMAT = "digital";
  // A bold run that reads like a short punchy figure ($/number-first, few words)
  // gets featured as a decorative red pill in the digital edition. Long bold
  // sentences that merely start with a number stay as normal bold.
  function isStatRun(t) {
    var s = String(t).trim();
    if (!/^\$?\d/.test(s)) return false;
    if (s.length > 30) return false;
    if (s.split(/\s+/).length > 5) return false;
    return true;
  }
  function runsToFrag(runs) {
    var frag = document.createDocumentFragment();
    (runs || []).forEach(function (r) {
      var node;
      if (r.b) {
        if (CURRENT_FORMAT === "digital" && isStatRun(r.t)) { node = document.createElement("span"); node.className = "nl-stat"; }
        else { node = document.createElement("strong"); }
        node.textContent = r.t;
      }
      else if (r.i) { node = document.createElement("em"); node.textContent = r.t; }
      else node = document.createTextNode(r.t);
      frag.appendChild(node);
    });
    return frag;
  }
  function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }
  function pFor(block) {
    var p = el("p", block.type === "source" ? "nl-source" : (block.type === "lead" ? "nl-p nl-lead" : "nl-p"));
    p.appendChild(runsToFrag(block.runs));
    return p;
  }
  function blocksToNodes(blocks, container) {
    blocks.forEach(function (b) {
      if (b.type === "ol") {
        var ol = el("ol", "nl-steps");
        b.items.forEach(function (item) { var li = el("li"); li.appendChild(runsToFrag(item)); ol.appendChild(li); });
        container.appendChild(ol);
      } else container.appendChild(pFor(b));
    });
  }

  // Split a string on **bold** spans into <strong> highlights.
  function pullFrag(text) {
    var frag = document.createDocumentFragment();
    String(text || "").split(/\*\*/).forEach(function (chunk, i) {
      if (!chunk) return;
      if (i % 2 === 1) { var b = el("strong"); b.textContent = chunk; frag.appendChild(b); }
      else frag.appendChild(document.createTextNode(chunk));
    });
    return frag;
  }
  function pullQuoteEl(s, compact) {
    var box = el("aside", "nl-pullquote" + (compact ? " nl-pullquote-compact" : ""));
    var q = el("p", "nl-pq-text"); q.appendChild(pullFrag(s.quote)); box.appendChild(q);
    if (s.source) { var src = el("p", "nl-pq-source"); src.textContent = s.source; box.appendChild(src); }
    return box;
  }
  function heroList(d) {
    var hs = window.AG_HEROSTAT && window.AG_HEROSTAT[d.week];
    if (!hs) return [];
    return Array.isArray(hs) ? hs : [hs];
  }
  function buildHeroTop(d, compact) {
    var tops = heroList(d).filter(function (s) { return !s.after; });
    if (!tops.length) return null;
    if (tops.length === 1) return pullQuoteEl(tops[0], compact);
    var wrap = el("div", "nl-pullquote-group");
    tops.forEach(function (s) { wrap.appendChild(pullQuoteEl(s, compact)); });
    return wrap;
  }
  function heroPlacedFor(d, heading) {
    return heroList(d).filter(function (s) {
      return s.after && new RegExp(s.after, "i").test(heading || "");
    });
  }
  function heroPlacedEl(s, compact) { return pullQuoteEl(s, compact); }

  function ctaHref(d, format) {
    // CTA button links to the AlphaGraphics Shavano Park quote request page.
    return SITE + "/get-a-quote";
  }

  var SITE = "https://www.alphagraphics.com/us-texas-san-antonio-us769";
  function articleUrl(d) {
    var slug = (d.slug || "").replace(/^\//, "");
    return SITE + "/" + slug;
  }
  function archiveUrl() { return SITE + "/faq-friday"; }

  // Sections to drop from the PRINT edition (the QR delivers the full read).
  // These are the long numbered "how-to / checklist" blocks.
  function printOmit(sec) {
    return /^(how to|if you're exhibiting)/i.test(sec.heading);
  }

  var PILLAR_LABELS = { signs: "Signs", print: "Print", marketing: "Marketing", technology: "Technology" };
  var PILLAR_ORDER = ["signs", "print", "marketing", "technology"];
  function pillCaret() {
    return '<svg class="nl-pill-caret" width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true"><path d="M1 1.5L5 5.5L9 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  function issuesGroupedByPillar(currentWeek) {
    var data = window.AG_NEWSLETTERS || {};
    var pub = (window.AG_PUBLISHED && window.AG_PUBLISHED.length) ? window.AG_PUBLISHED.slice() : Object.keys(data);
    // published only, newest first
    var keys = pub.filter(function (k) { return data[k]; }).sort().reverse();
    if (currentWeek && keys.indexOf(currentWeek) === -1 && data[currentWeek]) keys.unshift(currentWeek);
    var out = [];
    PILLAR_ORDER.forEach(function (pk) {
      var items = keys.filter(function (k) {
        return ((data[k].campaign && data[k].campaign.pillar) || "signs") === pk;
      }).map(function (k) {
        var dd = data[k];
        return { week: k, issue: dd.issue, question: dd.question };
      });
      if (items.length) out.push({ pillar: pk, label: PILLAR_LABELS[pk], items: items });
    });
    return out;
  }
  function buildPillNav(week, d) {
    var pillarKey = (d.campaign && d.campaign.pillar) || "signs";
    var pillLabel = (d.campaign && d.campaign.pillarLabel) || PILLAR_LABELS[pillarKey] || (d.campaign && d.campaign.topic) || "";
    var row = el("p", "nl-pill-row");
    if (CURRENT_FORMAT !== "digital") {
      row.innerHTML = '<span class="nl-pill">' + esc(pillLabel) + "</span>";
      return row;
    }
    var nav = el("span", "nl-pillnav");
    var btn = el("button", "nl-pill nl-pill-btn");
    btn.type = "button";
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("title", "Browse the FAQ Friday library");
    btn.innerHTML = '<span class="nl-pill-label">' + esc(pillLabel) + "</span>" + pillCaret();
    var menu = el("div", "nl-pillmenu");
    menu.setAttribute("role", "menu");
    var head = el("div", "nl-pillmenu-head"); head.textContent = "Browse the library"; menu.appendChild(head);
    issuesGroupedByPillar(week).forEach(function (g) {
      var grp = el("div", "nl-pillmenu-group"); grp.setAttribute("data-pillar", g.pillar);
      var cat = el("div", "nl-pillmenu-cat");
      cat.innerHTML = '<span class="nl-pillmenu-dot"></span>' + esc(g.label);
      grp.appendChild(cat);
      g.items.forEach(function (it) {
        var a = el("a", "nl-pillmenu-item" + (it.week === week ? " is-current" : ""));
        a.href = LIB + "Week" + it.week + ".html";
        if (it.week === week) a.setAttribute("aria-current", "true");
        a.innerHTML = '<span class="nl-pillmenu-issue">Issue ' + esc(it.issue) + "</span>" +
          '<span class="nl-pillmenu-q">' + esc(it.question) + "</span>";
        grp.appendChild(a);
      });
      menu.appendChild(grp);
    });
    function close() { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) { if (!nav.contains(e.target)) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    nav.appendChild(btn); nav.appendChild(menu);
    row.appendChild(nav);
    return row;
  }
  function buildArticle(week, format) {
    CURRENT_FORMAT = format;
    var d = window.AG_NEWSLETTERS[week];
    var art = el("article", "nl");
    art.setAttribute("data-pillar", (d.campaign && d.campaign.pillar) || "signs");

    /* masthead */
    var mh = el("header", "nl-mh");
    var top = el("div", "nl-mh-top");
    var logo = el("img"); logo.src = ROOT + "assets/alphagraphics-wordmark-reverse.png"; logo.alt = "AlphaGraphics";
    top.appendChild(logo); mh.appendChild(top);
    var loc = el("p", "nl-loc"); loc.textContent = "Shavano Park"; mh.appendChild(loc);

    var eb = el("p", "nl-eyebrow");
    eb.innerHTML = "FAQ Friday · Issue " + esc(d.issue);
    mh.appendChild(eb);
    var meta = el("p", "nl-mh-meta");
    meta.textContent = d.publish.replace(/^Friday,\s*/, "") + " · " + d.readTime + " read";
    mh.appendChild(meta);
    var q = el("h1", "nl-q"); q.textContent = d.question; mh.appendChild(q);
    mh.appendChild(buildPillNav(week, d));

    // Master photo in the black banner — faded into the black on its left edge, no text over it.
    var gm = window.AG_GALLERY && window.AG_GALLERY[week];
    if (gm && gm.src) {
      var photo = el("div", "nl-mh-photo");
      var pimg = el("img");
      pimg.alt = (gm.client || "") + " — featured work"; pimg.loading = "lazy";
      var applyFit = function () {
        var r = (pimg.naturalWidth && pimg.naturalHeight) ? pimg.naturalWidth / pimg.naturalHeight : 1.8;
        if (r < 1.15) {
          // Portrait master: fill the banner with a smart crop (favor the upper-
          // center subject) instead of letterboxing, with a shorter left fade so
          // the centered subject/logo stays bright. Tune framing per week via masterPos.
          pimg.style.objectFit = "cover";
          pimg.style.objectPosition = gm.masterPos || "50% 40%";
          var pmask = "linear-gradient(to right, transparent 0%, rgba(0,0,0,.4) 20%, #000 42%)";
          pimg.style.webkitMaskImage = pmask; pimg.style.maskImage = pmask;
        } else {
          // Landscape master: wider photo -> shorter transparent fade (shows more).
          var fadeEnd = r >= 2.2 ? 30 : r >= 1.7 ? 38 : r >= 1.25 ? 50 : 62;
          var mid = Math.round(fadeEnd * 0.5);
          var mask = "linear-gradient(to right, transparent 0%, rgba(0,0,0,.45) " + mid + "%, #000 " + fadeEnd + "%)";
          pimg.style.webkitMaskImage = mask; pimg.style.maskImage = mask;
          pimg.style.objectFit = "cover";
          pimg.style.objectPosition = gm.masterPos || "center";
        }
      };
      pimg.onload = applyFit;
      pimg.src = ROOT + gm.src;
      if (pimg.complete) applyFit();
      photo.appendChild(pimg);
      mh.insertBefore(photo, mh.firstChild);
    }
    art.appendChild(mh);

    /* iterate sections */
    var bodyWrap = null;
    d.sections.forEach(function (sec) {
      var isShort = /short answer/i.test(sec.heading);
      var isCatch = /honest catch/i.test(sec.heading);
      var isCTA = !!sec.ctaLabel;

      if (format === "print" && !isShort && !isCatch && !isCTA && printOmit(sec)) return;

      if (isShort) {
        var lede = el("div", "nl-lede");
        var k = el("p", "nl-kicker"); k.textContent = "The Short Answer"; lede.appendChild(k);
        sec.blocks.forEach(function (b, i) {
          if (i === 0) { var a = el("p", "nl-answer speakable-lead"); a.appendChild(runsToFrag(b.runs)); lede.appendChild(a); }
          else lede.appendChild(pFor(b));
        });
        art.appendChild(lede);
        return;
      }
      if (isCTA) {
        var cta = el("aside", "nl-cta");
        var tag = el("p", "nl-cta-tag"); tag.textContent = "AlphaGraphics Shavano Park"; cta.appendChild(tag);
        var h = el("h3"); h.textContent = sec.heading; cta.appendChild(h);
        blocksToNodes(sec.blocks, cta);
        if (format === "digital") {
          var btn = el("a", "nl-btn"); btn.href = ctaHref(d, format);
          btn.target = "_blank"; btn.rel = "noopener";
          btn.innerHTML = esc(sec.ctaLabel) + ' <span class="arw">&rarr;</span>';
          cta.appendChild(btn);
        }
        art.appendChild(cta);
        return;
      }
      // flowing body content (explainers + honest catch) share a padded column
      if (!bodyWrap) {
        bodyWrap = el("div", format === "print" ? "nl-colwrap" : "nl-body");
        art.appendChild(bodyWrap);
      }
      var wrap = el("section", isCatch ? "nl-catch" : "nl-section");
      if (isCatch) {
        var ct = el("p", "nl-catch-tag"); ct.textContent = "One Honest Catch"; wrap.appendChild(ct);
      } else {
        var hh = el("h3", "nl-h"); hh.textContent = sec.heading; wrap.appendChild(hh);
      }
      blocksToNodes(sec.blocks, wrap);
      bodyWrap.appendChild(wrap);
      if (format === "digital") {
        heroPlacedFor(d, sec.heading).forEach(function (s) { bodyWrap.appendChild(heroPlacedEl(s, false)); });
      }
    });

    /* print: split the flowing body into two explicit columns (deterministic order) */
    if (format === "print" && bodyWrap) {
      var flowKids = [].slice.call(bodyWrap.children);
      if (flowKids.length) {
        var colA = el("div", "nl-col"), colB = el("div", "nl-col");
        var split = Math.ceil(flowKids.length / 2);
        flowKids.forEach(function (n, i) { (i < split ? colA : colB).appendChild(n); });
        bodyWrap.appendChild(colA);
        bodyWrap.appendChild(colB);
      }
    }

    /* format-specific footer */
    if (format === "digital") {
      var gal = buildGallery(d);
      var ledeNode = art.querySelector(".nl-lede");
      var hero = buildHeroTop(d);
      if (hero && ledeNode) { ledeNode.after(hero); ledeNode = hero; }
      else if (hero) art.appendChild(hero);
      if (gal && ledeNode) ledeNode.after(gal);
      else if (gal) art.appendChild(gal);
      var ctaNode = art.querySelector(".nl-cta");
      if (ctaNode) art.insertBefore(buildLibLink(), ctaNode);
      else art.appendChild(buildLibLink());
      art.appendChild(buildSocial(d));
      art.appendChild(buildFooter(d));
      ensureLightbox();
    } else {
      art.appendChild(buildPrintEnd(d));
      art.appendChild(buildPrintContact());
    }
    return art;
  }

  function socialImgs(d) {
    var f = d.campaign && d.campaign.folder;
    if (!f) return [];
    var names = ["01-cover.jpg","02-answer.jpg","03-numbers.jpg","04-catch.jpg","05-ask.jpg"];
    return names.map(function (n) { return ROOT + "FAQ Friday Posts/" + f + "/" + n; });
  }

  /* ---- lightbox: click any .nl-zoom image to see it full ---- */
  function ensureLightbox() {
    if (document.getElementById("nl-lightbox")) return;
    var lb = document.createElement("div");
    lb.id = "nl-lightbox";
    lb.className = "nl-lightbox";
    lb.setAttribute("aria-hidden", "true");
    lb.innerHTML =
      '<button class="nl-lb-close" aria-label="Close">&times;</button>' +
      '<figure class="nl-lb-fig"><img alt=""><figcaption></figcaption></figure>';
    function close() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); }
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("nl-lb-close")) close();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    document.body.appendChild(lb);
  }
  function openLightbox(src, cap) {
    var lb = document.getElementById("nl-lightbox");
    if (!lb) { ensureLightbox(); lb = document.getElementById("nl-lightbox"); }
    var img = lb.querySelector("img"), fc = lb.querySelector("figcaption");
    img.src = src; img.alt = cap || "";
    fc.textContent = cap || ""; fc.style.display = cap ? "" : "none";
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
  }
  function curSrc(imgEl) { return imgEl.currentSrc || imgEl.src; }
  function makeZoomable(imgEl, cap) {
    imgEl.classList.add("nl-zoom");
    imgEl.tabIndex = 0;
    imgEl.setAttribute("role", "button");
    imgEl.setAttribute("aria-label", "Expand image" + (cap ? ": " + cap : ""));
    imgEl.addEventListener("click", function () { openLightbox(curSrc(imgEl), cap); });
    imgEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(curSrc(imgEl), cap); }
    });
  }

  /* ---- product gallery: four square tiles framed from the master ---- */
  function buildGallery(d) {
    var g = window.AG_GALLERY && window.AG_GALLERY[d.week];
    if (!g) return null;
    var band = el("div", "nl-gallery");
    var head = el("div", "nl-gallery-head");
    head.innerHTML = '<p class="nl-gallery-tag">See the work</p>' +
      "<h4>" + esc(g.client) + "</h4>" +
      '<p class="nl-gallery-sub">' + esc(g.work) + "</p>";
    band.appendChild(head);

    // Preferred: distinct spotlight images. Fallback: frame the master into tiles.
    var tiles = [];
    if (g.spots && g.spots.length) {
      tiles = g.spots.map(function (sp) { return { src: ROOT + sp.src, pos: sp.pos || "50% 50%", cap: sp.cap || (g.client + " — " + g.work) }; });
    } else {
      var src = ROOT + g.src;
      var cap = g.client + " — " + g.work;
      (g.pos || ["2% 50%","36% 50%","64% 50%","98% 50%"]).forEach(function (pos) {
        tiles.push({ src: src, pos: pos, cap: cap });
      });
    }
    var grid = el("div", "nl-gallery-grid nl-gallery-grid--" + tiles.length);
    tiles.forEach(function (t) {
      var tile = el("figure", "nl-tile");
      var img = el("img");
      img.src = t.src; img.alt = t.cap; img.loading = "lazy";
      img.style.objectPosition = t.pos;
      var cue = el("span", "nl-tile-cue"); cue.innerHTML = "&#10530;"; // expand glyph
      tile.appendChild(img); tile.appendChild(cue);
      if (t.cap && g.spots) { var fc = el("figcaption", "nl-tile-cap"); fc.textContent = t.cap; tile.appendChild(fc); }
      makeZoomable(img, t.cap);
      tile.addEventListener("click", function () { openLightbox(curSrc(img), t.cap); });
      grid.appendChild(tile);
    });
    band.appendChild(grid);
    return band;
  }
  function buildSocial(d) {
    var s = el("div", "nl-social");
    var tag = el("p", "nl-social-tag"); tag.textContent = "Also This Week"; s.appendChild(tag);
    var h = el("h4"); h.textContent = "The FAQ Friday series, on Instagram"; s.appendChild(h);
    var row = el("div", "nl-social-row");
    socialImgs(d).forEach(function (src) {
      var img = el("img"); img.src = src; img.alt = "FAQ Friday social post"; img.loading = "lazy";
      makeZoomable(img, "FAQ Friday · Issue " + d.issue);
      row.appendChild(img);
    });
    s.appendChild(row);
    return s;
  }
  function buildLibLink() {
    var wrap = el("div", "nl-liblink");
    wrap.setAttribute("style", "display:flex;justify-content:center;text-align:center;padding:22px 4px 6px;border-top:1px solid var(--ag-gray-200,#e3e3e0);margin-top:6px;");
    var a = el("a");
    a.href = ROOT + "index.html#faq-friday";
    a.setAttribute("style", "display:inline-flex;align-items:center;gap:12px;text-decoration:none;color:var(--ag-rich-black,#000);font-family:'Roboto',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.14em;font-size:12px;line-height:1.3;");
    a.innerHTML =
      '<svg width="30" height="14" viewBox="0 0 30 14" fill="none" style="flex:0 0 auto;display:block;"><path d="M29 7H3M3 7L9 2M3 7L9 12" stroke="var(--ag-red,#DA291C)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '<span>Explore our full Newsletter Library for more expert tips, ideas, and business insights</span>';
    wrap.appendChild(a);
    return wrap;
  }
  function buildFooter(d) {
    var f = el("footer", "nl-foot");
    var brand = el("div", "nl-foot-brand");
    var slog = el("p", "nl-foot-slogan"); slog.textContent = "Get Noticed. Get Business."; brand.appendChild(slog);
    var contact = el("div", "nl-contact");
    contact.innerHTML = "<div>" + esc(C.name) + "</div>" +
      "<div>" + esc(C.street) + " · " + esc(C.locale) + "</div>" +
      '<div><a href="tel:' + C.tel + '">' + esc(C.phone) + '</a> · <a href="mailto:' + C.email + '">' + esc(C.email) + "</a></div>" +
      "<div>" + esc(C.web) + "</div>";
    brand.appendChild(contact);
    var tag = el("div", "nl-foot-tag");
    tag.textContent = (d.tagline || "FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask.");
    f.appendChild(brand); f.appendChild(tag);
    var legal = el("div", "nl-foot-legal");
    legal.textContent = "The images and businesses featured in this series are generated design mockups for fictional companies, shown for design-concept purposes only. Any resemblance to actual companies, in name or logo, is coincidental and unintentional.";
    f.appendChild(legal);
    return f;
  }
  function qrBox(url, tag, label, dark) {
    var box = el("div", "nl-qr-box");
    var svg = (window.QR ? window.QR.svg(url, { ec: "M", border: 1, dark: dark || "#1A1A1C", light: "#ffffff" })
      : '<div class="nl-qr-missing">QR</div>');
    box.innerHTML = '<div class="nl-qr-img">' + svg + "</div>" +
      '<div class="nl-qr-txt"><span class="nl-qr-tag">' + esc(tag) + "</span>" +
      '<span class="nl-qr-label">' + esc(label) + "</span></div>";
    return box;
  }
  function buildPrintEnd(d) {
    var end = el("aside", "nl-print-end");
    var head = el("div", "nl-print-end-head");
    head.innerHTML = '<p class="nl-pe-tag">Read the whole thing</p>' +
      "<p class=\"nl-pe-lead\">This is the short version. Scan for the full edition &mdash; every stat, source, and the step-by-step how-to &mdash; plus every issue we&rsquo;ve published.</p>";
    end.appendChild(head);
    var codes = el("div", "nl-qr-row");
    codes.appendChild(qrBox(archiveUrl(), "Every FAQ Friday", "Scan for the archive"));
    end.appendChild(codes);
    return end;
  }
  function buildPrintContact() {
    var f = el("footer", "nl-print-contact");
    var img = el("img"); img.src = ROOT + "assets/ag-mark-reverse.png"; img.alt = "AlphaGraphics";
    var items = el("div", "pc-items");
    items.innerHTML = "<span><b>" + esc(C.name) + "</b></span>" +
      "<span>" + esc(C.street) + ", " + esc(C.locale) + "</span>" +
      "<span><b>" + esc(C.phone) + "</b></span>" +
      "<span>" + esc(C.email) + "</span>" +
      "<span>" + esc(C.web) + "</span>";
    var slog = el("span", "pc-slogan"); slog.textContent = "Get Noticed. Get Business.";
    f.appendChild(img); f.appendChild(items); f.appendChild(slog);
    var legal = el("span", "pc-legal");
    legal.textContent = "Businesses featured are fictional, shown for design concept only; any resemblance to actual companies in name or likeness is coincidental.";
    f.appendChild(legal);
    return f;
  }

  window.NL = {
    buildArticle: buildArticle,
    mount: function (elm, week, format) {
      elm.innerHTML = "";
      elm.appendChild(buildArticle(week, format));
    }
  };

})();
