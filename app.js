(function () {
  "use strict";
  var D = window.REVIVE, app = document.getElementById("app"), offen = 0;

  // ---------- Hilfen ----------
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function t(s) {
    return esc(s).replace(/\[\[([\s\S]*?)\]\]/g, function (_, x) { offen++; return D.config.entwurf ? '<mark class="platzhalter">' + x + "</mark>" : x; });
  }
  function roh(s) { return String(s || "").replace(/\[\[|\]\]/g, ""); }
  function istPh(s) { return /\[\[/.test(String(s || "")); }
  function link(u) { u = String(u || ""); return /^https:\/\//.test(u) && !istPh(u) ? esc(u) : ""; }
  function pfad(p) { p = String(p || ""); return !p || istPh(p) ? "" : esc(p.replace(/^\/+/, "")); }
  function farbe(f) { return /^#[0-9a-f]{3,8}$/i.test(f || "") ? f : "#10B981"; }
  function laufende() { return D.staffeln.filter(function (s) { return s.status === "laufend"; })[0]; }
  function staffel(id) { return D.staffeln.filter(function (s) { return s.id === id; })[0]; }

  // ---------- Symbole (Strich-Icons) ----------
  var I = {
    hacke: '<path d="M14.5 12.5 6.6 20.4a1.4 1.4 0 0 1-2-2l7.9-7.9"/><path d="M15.7 4.3A12.5 12.5 0 0 0 5.5 3a1 1 0 0 0 .1 1.7 22 22 0 0 1 6.3 3.4"/><path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"/><path d="M19.7 8.3a12.5 12.5 0 0 1 1.3 10.2 1 1 0 0 1-1.7-.1 22 22 0 0 0-3.4-6.3"/>',
    schloss: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    blitz: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    leute: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    paket: '<path d="m7.5 4.3 9 5.1"/><path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    globus: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    laden: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    platte: '<path d="M22 12H2"/><path d="M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z"/><path d="M6 16h.01M10 16h.01"/>',
    tv: '<rect width="20" height="15" x="2" y="7" rx="2"/><path d="m17 2-5 5-5-5"/>',
    extern: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    menue: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    zu: '<path d="M18 6 6 18M6 6l12 12"/>',
    buch: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    zeitung: '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/>',
    pfeil: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    flagge: '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 8 2a6 6 0 0 0 3.6-1.2.5.5 0 0 1 .4.4V15a1 1 0 0 1-.4.8A6 6 0 0 1 16 17c-3 0-5-2-8-2a8 8 0 0 0-4 1"/>'
  };
  function ic(n) { return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">' + (I[n] || "") + "</svg>"; }

  // ---------- Pixel-Gesichter (aus dem Namen erzeugt) ----------
  var HAUT = ["#F2D0A9", "#E8B98F", "#C68B5E", "#8D5A3B", "#F5DCC0"];
  var HAAR = ["#3B2414", "#6B4423", "#C9A46A", "#1F1F1F", "#9A3B1E", "#7A7A7A", "#D9C27A"];
  var HEMD = ["#10B981", "#3B82F6", "#F59E0B", "#A855F7", "#EF4444", "#14B8A6", "#64748B"];
  var AUGE = ["#3B6FB6", "#5B3A22", "#2F7A4B", "#4A4A4A"];
  function hash(s) { var h = 2166136261; s = roh(s); for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function skinPfad(name) { var m = D.skins || {}, k = roh(name); for (var x in m) if (x.toLowerCase() === k.toLowerCase()) return pfad(m[x]); return ""; }
  function gesicht(name, gross) {
    var sp = skinPfad(name);
    if (sp) return '<canvas class="skin-canvas" width="8" height="8" data-skin="' + sp + '" data-teil="kopf" aria-hidden="true"></canvas>';
    var h = hash(name), w = function (l, n) { return l[(h >>> n) % l.length]; };
    var haut = w(HAUT, 1), haar = w(HAAR, 5), hemd = w(HEMD, 9), auge = w(AUGE, 13), stil = (h >>> 17) % 4, brille = (h >>> 21) % 6 === 0;
    var r = "", px = function (x, y, c, bw) { r += '<rect x="' + x + '" y="' + y + '" width="' + (bw || 1) + '" height="1" fill="' + c + '"/>'; };
    for (var y = 1; y < 8; y++) px(1, y, haut, 6);            // Kopf
    px(1, 0, haar, 6); px(1, 1, haar, 6);                       // Haare oben
    if (stil === 1 || stil === 3) { px(1, 2, haar); px(6, 2, haar); }
    if (stil === 2) { px(1, 2, haar); px(1, 3, haar); px(6, 2, haar); px(6, 3, haar); }
    if (stil === 3) { px(1, 3, haar); px(6, 3, haar); px(1, 4, haar); px(6, 4, haar); }
    px(2, 3, "#FFFFFF"); px(3, 3, auge); px(4, 3, "#FFFFFF"); px(5, 3, auge);   // Augen
    if (brille) { px(2, 3, "#2B2B2B", 2); px(4, 3, "#2B2B2B", 2); }
    px(3, 5, "#B5715B", 2);                                     // Mund
    px(0, 7, hemd, 8); px(0, 6, hemd); px(7, 6, hemd);          // Schultern
    var hg = gross ? '<rect width="8" height="8" fill="' + hemd + '" opacity=".35"/>' : "";
    return '<svg viewBox="-0.5 -0.5 9 9" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" aria-hidden="true">' + hg + r + "</svg>";
  }
  function figur(name) { // Kopf, Oberkörper mit Armen, Beine – 16 x 32 Pixel
    var sp = skinPfad(name);
    if (sp) return '<canvas class="figur skin-canvas" width="16" height="32" data-skin="' + sp + '" data-teil="figur" aria-hidden="true"></canvas>';
    var h = hash(name), w = function (l, n) { return l[(h >>> n) % l.length]; };
    var haut = w(HAUT, 1), haar = w(HAAR, 5), hemd = w(HEMD, 9), auge = w(AUGE, 13), hose = w(["#1E3A5F", "#2B2B2B", "#4B3621", "#334155", "#3F2A56"], 19), schuh = "#1A1A1A";
    var r = "", px = function (x, y, c, bw, bh) { r += '<rect x="' + x + '" y="' + y + '" width="' + (bw || 1) + '" height="' + (bh || 1) + '" fill="' + c + '"/>'; };
    px(4, 0, haut, 8, 8); px(4, 0, haar, 8, 2); px(4, 2, haar, 1, 2); px(11, 2, haar, 1, 2);       // Kopf
    px(5, 4, "#FFFFFF"); px(6, 4, auge); px(9, 4, "#FFFFFF"); px(10, 4, auge); px(7, 6, "#B5715B", 2, 1);
    px(4, 8, hemd, 8, 12); px(0, 8, hemd, 4, 4); px(12, 8, hemd, 4, 4); px(0, 12, haut, 4, 8); px(12, 12, haut, 4, 8); // Körper, Arme
    px(6, 9, "rgba(0,0,0,.12)", 4, 1);
    px(4, 20, hose, 4, 10); px(8, 20, hose, 4, 10); px(8, 20, "rgba(0,0,0,.15)", 1, 10); px(4, 30, schuh, 4, 2); px(8, 30, schuh, 4, 2);
    return '<svg class="figur" viewBox="0 0 16 32" shape-rendering="crispEdges" aria-hidden="true">' + r + "</svg>";
  }
  // Zeichnet die Vorderansicht aus einer Minecraft-Skin-Datei (64x64 oder altes 64x32)
  function zeichneSkins() {
    document.querySelectorAll("canvas[data-skin]").forEach(function (c) {
      var img = new Image();
      img.onload = function () {
        var g = c.getContext("2d"), neu = img.height >= 64, k = function (sx, sy, w, h, dx, dy, spiegel) {
          if (spiegel) { g.save(); g.translate(dx + w, dy); g.scale(-1, 1); g.drawImage(img, sx, sy, w, h, 0, 0, w, h); g.restore(); }
          else g.drawImage(img, sx, sy, w, h, dx, dy, w, h);
        };
        g.imageSmoothingEnabled = false; g.clearRect(0, 0, c.width, c.height);
        if (c.getAttribute("data-teil") === "kopf") { k(8, 8, 8, 8, 0, 0); k(40, 8, 8, 8, 0, 0); return; }
        k(8, 8, 8, 8, 4, 0); k(40, 8, 8, 8, 4, 0);                       // Kopf + Hut
        k(20, 20, 8, 12, 4, 8); if (neu) k(20, 36, 8, 12, 4, 8);          // Körper + Jacke
        k(44, 20, 4, 12, 0, 8); if (neu) k(44, 36, 4, 12, 0, 8);          // rechter Arm
        if (neu) { k(36, 52, 4, 12, 12, 8); k(52, 52, 4, 12, 12, 8); } else k(44, 20, 4, 12, 12, 8, true); // linker Arm
        k(4, 20, 4, 12, 4, 20); if (neu) k(4, 36, 4, 12, 4, 20);          // rechtes Bein
        if (neu) { k(20, 52, 4, 12, 8, 20); k(4, 52, 4, 12, 8, 20); } else k(4, 20, 4, 12, 8, 20, true);   // linkes Bein
      };
      img.src = c.getAttribute("data-skin");
    });
  }
  function alleSpieler() { // Crew zuerst, dann Teilnehmer, ohne Doppelte
    var n = D.crew.map(function (p) { return p.name; }).concat(D.teilnehmer || []), seen = {};
    return n.filter(function (x) { var k = roh(x).toLowerCase(); if (!k || seen[k]) return false; seen[k] = 1; return true; });
  }
  function avatar(p, klasse) {
    var bild = pfad(p.kopf);
    return '<div class="avatar ' + (klasse || "") + '">' + (bild ? '<img src="' + bild + '" alt="">' : gesicht(p.name || p)) + "</div>";
  }

  // ---------- Bausteine ----------
  function abschnittKopf(nr, wort, titel, text) {
    return '<div class="kopfteil"><div class="marke-zeile"><span class="nr">' + nr + '</span><span class="strich"></span><span class="wort">' + wort + "</span></div>" +
      "<h2>" + titel + "</h2>" + (text ? "<p>" + text + "</p>" : "") + "</div>";
  }
  function statusMarker(s) {
    return s === "online" ? '<span class="marker" id="live-marker">ONLINE</span>' : s === "pause" ? '<span class="marker pause">PAUSE</span>' : '<span class="marker aus">OFFLINE</span>';
  }


  // ---------- Seiten & Links ----------
  var MODUS = document.body.getAttribute("data-seite") || "start"; // "einzeln" = alles in einer Datei (Vorschau)
  var SEITEN = [
    { id: "archiv", datei: "archiv.html", name: "Archiv", nr: "01", icon: "buch", text: "Alle Staffeln, ihre Geschichte und die Welten zum Download." },
    { id: "events", datei: "events.html", name: "Events", nr: "02", icon: "blitz", text: "Was auf Revive los ist." },
    { id: "presse", datei: "presse.html", name: "Presse", nr: "03", icon: "zeitung", text: "Nachrichten der Zeitungen und Sender." },
    { id: "mitglieder", datei: "mitglieder.html", name: "Mitglieder", nr: "04", icon: "leute", text: "Die Crew und alle Teilnehmer." },
    { id: "creator", datei: "creator.html", name: "Creator", nr: "05", icon: "tv", text: "Kanäle der Spieler, die Revive zeigen." },
    { id: "regeln", datei: "regeln.html", name: "Regeln", nr: "06", icon: "flagge", text: "Server- und Rollenspielregeln." },
    { id: "faq", datei: "faq.html", name: "FAQ", nr: "07", icon: "zeitung", text: "Antworten auf häufige Fragen." }
  ];
  function seite(id) { return SEITEN.filter(function (x) { return x.id === id; })[0]; }
  function href(id, anker) {
    if (MODUS === "einzeln") return "#" + (id === "staffel" ? anker : id === "start" ? "" : anker && id === "impressum" ? anker : id);
    var datei = id === "start" ? "index.html" : id === "staffel" ? "staffel.html" : id === "impressum" ? "impressum.html" : seite(id).datei;
    return datei + (anker ? "#" + anker : "");
  }
  function seitenKopf(nr, wort, titel, text) {
    return '<header class="seiten-kopf"><div class="breite">' + abschnittKopf(nr, wort, titel, text) + "</div></header>";
  }

  // ---------- Startseite ----------
  function start() {
    var jetzt = laufende(), S = D.server, dc = link(D.config.discord), h = "", spieler = alleSpieler();
    // Held
    h += '<section class="held"><div class="breite held-raster"><div>' +
      (jetzt ? '<a class="pille" href="' + href("staffel", jetzt.id) + '"><span class="punkt"></span>Staffel ' + esc(jetzt.nummer) + " · " + t(jetzt.titel) + " läuft gerade</a>" : "") +
      '<h1 class="riesen">REVIVE</h1><p class="kurz">' + t(D.projekt.kurz) + "</p>" +
      '<div class="knoepfe">' +
        (dc ? '<a class="knopf knopf-haupt" href="' + dc + '" rel="noopener">' : '<span class="knopf knopf-haupt" style="cursor:default">') +
        ic("schloss") + '<span class="pixel">PRIVATER SERVER</span><span class="chip">' + (dc ? "DISCORD" : "NUR AUF EINLADUNG") + "</span>" + (dc ? "</a>" : "</span>") +
        '<a class="knopf knopf-rand" href="' + href("mitglieder") + '">' + ic("leute") + "Wer ist dabei?</a>" +
      "</div>" +
      (spieler.length ? '<a class="held-skins" href="' + href("mitglieder") + '" aria-label="Alle Spieler ansehen">' + spieler.slice(0, 6).map(function (n) { return '<span class="held-skin">' + figur(n) + "</span>"; }).join("") + "</a>" : "") +
      "</div>" +
      '<div class="status-karte"><div class="status-kopf"><span class="pixel">SERVER_STATUS.txt</span>' + statusMarker(S.status) + "</div>" +
        zeile("Name", "Revive") + zeile("IP", "Privat 🔒") + zeile("Version", t(S.version)) + zeile("Modus", t(S.modus)) + zeile("Slots", t(S.slots)) + zeile("Region", t(S.region)) +
        (jetzt ? zeile("Staffel", esc(jetzt.nummer) + " · " + t(jetzt.titel)) : "") +
        '<div class="status-hinweis"><b>»</b> ' + t(S.hinweis) + "</div></div>" +
      "</div></section>";

    // Laufband
    var band = ["Revive", jetzt ? "Staffel " + jetzt.nummer + ": " + roh(jetzt.titel) : "", "Nur auf Einladung", "Minecraft " + roh(S.version), "Eine Welt pro Staffel", "Welt-Downloads"].filter(Boolean);
    var bandHtml = band.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join('<b>✦</b>') + "<b>✦</b>";
    h += '<div class="band" aria-hidden="true"><div class="band-lauf">' + bandHtml + bandHtml + "</div></div>";

    // Live-Ticker der Presse: nur Schlagzeilen der laufenden Staffel
    var neu = aktuelleArtikel();
    var zeilen = neu.length ? neu.map(function (x) { return "<span><b>" + esc(roh(medium(x.medium).kurz || medium(x.medium).name)) + ":</b> " + t(x.titel) + "</span>"; })
      : ["<span>Noch keine Meldungen" + (jetzt ? " aus Staffel " + esc(jetzt.nummer) + ": " + t(jetzt.titel) : "") + "</span>", "<span>Die Presse von Revive berichtet bald live</span>"];
    var tickerHtml = zeilen.join("<i>+++</i>") + "<i>+++</i>";
    h += '<a class="news-ticker" href="' + href("presse") + '" aria-label="Zur Presse"><span class="news-label"><span class="live">LIVE</span></span>' +
      '<span class="news-lauf-wrap"><span class="news-lauf">' + tickerHtml + tickerHtml + "</span></span></a>";

    // Events
    var ev = (D.events || []).slice(0, 3);
    if (ev.length) h += '<section class="abschnitt"><div class="breite"><div class="kopf-mit-link"><h2>Events</h2><a class="link-gruen" href="' + href("events") + '">Alle Events ' + ic("pfeil") + "</a></div>" +
      '<div class="events">' + ev.map(eventKarte).join("") + "</div></div></section>";

    // Crew
    if (spieler.length) h += '<section class="abschnitt"><div class="breite"><div class="kopf-mit-link"><div><h2>Die Crew</h2><p class="leise">Skins sagen mehr als Logos. Hier ist die Truppe von Revive.</p></div>' +
      '<a class="link-gruen" href="' + href("mitglieder") + '">Alle ansehen ' + ic("pfeil") + "</a></div>" +
      '<div class="skin-raster">' + spieler.slice(0, 8).map(skinKarte).join("") + "</div></div></section>";

    // Zahlen
    var staaten = D.staffeln.reduce(function (n, x) { return n + (x.staaten || []).filter(function (y) { return !istPh(y.name); }).length; }, 0);
    var ereignisse = D.staffeln.reduce(function (n, x) { return n + (x.ereignisse || []).filter(function (y) { return !istPh(y.titel); }).length; }, 0);
    h += '<section class="abschnitt"><div class="breite"><div class="kopf-mit-link"><div><h2>Revive in Zahlen</h2><p class="leise">Was bisher auf dem Server passiert ist.</p></div></div>' +
      '<div class="zahlen">' + [[D.staffeln.length, "Staffeln"], [staaten, "Staaten gegründet"], [ereignisse, "große Ereignisse"], [roh(S.version), "Minecraft-Version"]].map(function (z) {
        return '<div class="zahl"><strong class="pixel">' + esc(z[0]) + "</strong><span>" + z[1] + "</span></div>"; }).join("") + "</div></div></section>";

    // Staffeln
    h += '<section class="abschnitt"><div class="breite"><div class="kopf-mit-link"><div><h2>' + D.staffeln.length + " Staffeln zum Nachlesen</h2>" +
      '<p class="leise">Von der Testphase im Sommer 2026 bis heute. Abgeschlossene Welten kannst du herunterladen und selbst erkunden.</p></div>' +
      '<a class="link-gruen" href="' + href("archiv") + '">Zum Archiv ' + ic("pfeil") + "</a></div>" +
      '<div class="staffel-streifen">' + D.staffeln.map(function (x) {
        var logo = pfad(x.logo), bild = x.bauten && x.bauten[0] ? pfad(x.bauten[0].bild) : "";
        return '<a class="streifen-karte" href="' + href("staffel", x.id) + '" style="--f:' + farbe(x.farbe) + '">' + (bild ? '<img src="' + bild + '" alt="" loading="lazy">' : "") +
          (logo ? '<img class="logo" src="' + logo + '" alt="">' : '<span class="gross">' + esc(x.nummer) + "</span>") +
          '<span class="streifen-name">' + t(x.titel) + "</span></a>"; }).join("") + "</div></div></section>";

    return h;
  }

  function skinKarte(n) {
    var p = D.crew.filter(function (c) { return roh(c.name) === roh(n); })[0];
    return '<div class="skin-karte"><div class="skin-kopf">' + gesicht(n) + '</div><div class="skin-name">' + t(n) + "</div>" +
      (p ? '<span class="rollen"><span class="rolle rolle-' + (p.rolle || "spieler") + '">' + ({ owner: "Owner", admin: "Admin", moderator: "Mod", builder: "Builder", spieler: "Spieler" }[p.rolle] || "Spieler") + "</span>" + (p.extra ? '<span class="rolle rolle-extra">' + t(p.extra) + "</span>" : "") + "</span>" : "") + "</div>";
  }

  function eventKarte(e) {
    var d = new Date(e.datum + "T" + (e.von || "00:00")), ok = !isNaN(d), vorbei = ok && d < new Date();
    var tag = ok ? d.toLocaleDateString("de-DE", { weekday: "short", day: "numeric", month: "long", year: "numeric" }) : t(e.datum);
    var zeit = e.von ? esc(e.von) + (e.bis ? " bis " + esc(e.bis) : "") + " Uhr" : "";
    return '<div class="event"><div class="event-datum"><span class="pixel">' + (ok ? d.getDate() : "?") + '</span><span>' + (ok ? d.toLocaleDateString("de-DE", { month: "short" }) : "") + "</span></div>" +
      '<div class="event-text"><div class="event-meta">' + tag + (zeit ? " · " + zeit : "") + (vorbei ? ' <span class="fertig">Vorbei</span>' : ' <span class="marker">Geplant</span>') + "</div>" +
      "<h3>" + t(e.titel) + "</h3><p>" + t(e.text) + "</p>" +
      ((e.mit || []).length ? '<div class="event-mit">' + e.mit.slice(0, 6).map(function (n) { return '<span class="mini-kopf" title="' + esc(roh(n)) + '">' + gesicht(n) + "</span>"; }).join("") + (e.mit.length > 6 ? "<span>+" + (e.mit.length - 6) + "</span>" : "") + "</div>" : "") +
      "</div></div>";
  }

  function presse() { return (D.presse && D.presse.artikel) || []; }
  function medium(id) { return ((D.presse && D.presse.medien) || []).filter(function (m) { return m.id === id; })[0] || { name: id, farbe: "#B91C1C" }; }
  function liveBanner(artikel, mitLink) {
    if (!artikel.length) return "";
    var a = artikel[0], m = medium(a.medium), tick = artikel.map(function (x) { return esc(roh(medium(x.medium).kurz || medium(x.medium).name)) + ": " + t(x.titel); }).join(" +++ ");
    return '<div class="cnn" style="margin-top:0;--m:' + farbe(m.farbe) + '"><div class="cnn-kopf">' + ic("zeitung") + t(m.name) + ' <span class="live" style="margin-left:auto">LIVE</span></div>' +
      '<div class="cnn-inhalt"><h3>' + t(a.titel) + "</h3><p>" + t(erster(a.text)) + "</p>" +
      (mitLink ? '<p style="margin-top:1rem"><a class="link-gruen" href="' + href("presse") + '">Zur Presse ' + ic("pfeil") + "</a></p>" : "") + "</div>" +
      (artikel.length > 1 || tick ? '<div class="ticker"><span>+++ ' + tick + " +++</span></div>" : "") + "</div>";
  }
  function absaetzeVon(text) { return Array.isArray(text) ? text : String(text || "").split(/\n\n+/); }
  function erster(text) { var l = absaetzeVon(text).filter(function (x) { return !/^(##|>|-)\s/.test(x); }); return l[0] || ""; }
  function artikelText(text) { // ## Zwischentitel, > Zitat, - Listenpunkt
    var h = "", liste = false;
    absaetzeVon(text).forEach(function (z) {
      var ist = /^-\s/.test(z);
      if (ist && !liste) { h += "<ul>"; liste = true; }
      if (!ist && liste) { h += "</ul>"; liste = false; }
      if (/^##\s/.test(z)) h += "<h4>" + t(z.slice(3)) + "</h4>";
      else if (/^>\s/.test(z)) h += "<blockquote>" + t(z.slice(2)) + "</blockquote>";
      else if (ist) h += "<li>" + t(z.slice(2)) + "</li>";
      else h += "<p>" + t(z) + "</p>";
    });
    return h + (liste ? "</ul>" : "");
  }
  function artikelKarte(a) {
    var m = medium(a.medium), st = staffel(a.staffel);
    var bilder = (a.bilder || (a.bild ? [a.bild] : [])).map(pfad).filter(Boolean);
    var rest = absaetzeVon(a.text).length > 1;
    return '<article class="artikel" data-medium="' + esc(a.medium) + '" style="--m:' + farbe(m.farbe) + '">' +
      (bilder.length ? '<img src="' + bilder[0] + '" alt="' + esc(roh(a.titel)) + '" loading="lazy" data-zoom data-titel="Abb. 1">' : "") +
      '<div class="artikel-text"><div class="artikel-meta"><span class="medium-marke">' + t(m.kurz || m.name) + "</span>" +
      (a.datum ? "<span>" + t(a.datum) + "</span>" : "") + (st ? '<a href="' + href("staffel", st.id) + '">Staffel ' + esc(st.nummer) + "</a>" : "") + "</div>" +
      "<h3>" + t(a.titel) + "</h3>" + (a.untertitel ? '<p class="artikel-unter">' + t(a.untertitel) + "</p>" : "") +
      (rest ? '<details class="artikel-voll"><summary><span class="teaser">' + t(erster(a.text)) + '</span><span class="weiter">Ganzen Artikel lesen ' + ic("chev") + '</span><span class="weiter-zu">Einklappen ' + ic("chev") + "</span></summary>" +
          '<div class="artikel-body">' + artikelText(a.text) + (bilder.length > 1 ? '<div class="artikel-bilder">' + bilder.slice(1).map(function (b, i) { return '<figure><img src="' + b + '" alt="Abb. ' + (i + 2) + '" loading="lazy" data-zoom data-titel="Abb. ' + (i + 2) + '"><figcaption>Abb. ' + (i + 2) + "</figcaption></figure>"; }).join("") + "</div>" : "") +
          '<button class="einklappen" type="button" data-zuklappen>' + ic("chev") + "Artikel einklappen</button></div></details>"
        : '<div class="artikel-body">' + artikelText(a.text) + "</div>") +
      '<div class="artikel-fuss">' + (a.autor ? '<span class="autor">von ' + t(a.autor) + "</span>" : "") + (a.rubrik ? '<span class="rubrik">' + t(a.rubrik) + "</span>" : "") + "</div></div></article>";
  }
  function istAktuell(a) { var st = staffel(a.staffel); return !!st && st.status === "laufend"; }
  function aktuelleArtikel() { return presse().filter(istAktuell); }
  function pressSeite() {
    var art = presse(), neu = art.filter(istAktuell), alt = art.filter(function (a) { return !istAktuell(a); });
    var medien = (D.presse && D.presse.medien) || [], jetzt = laufende();
    var leer = '<div class="cnn" style="margin-top:0"><div class="cnn-kopf">' + ic("zeitung") + 'Revive Live <span class="live" style="margin-left:auto">LIVE</span></div>' +
      '<div class="cnn-inhalt"><h3>Noch keine Meldungen' + (jetzt ? " aus Staffel " + esc(jetzt.nummer) + ": " + t(jetzt.titel) : "") + '</h3><p>Sobald die Zeitungen über die neue Staffel berichten, läuft es hier live. Ältere Artikel findest du im Archiv.</p></div></div>';
    var archivNachStaffel = D.staffeln.filter(function (st) { return st.status !== "laufend"; }).map(function (st) {
      var liste = alt.filter(function (a) { return a.staffel === st.id; });
      return liste.length ? '<h3 class="unter-titel archiv-titel">' + ic("buch") + "Staffel " + esc(st.nummer) + ": " + t(st.titel) + '</h3><div class="artikel-liste">' + liste.map(artikelKarte).join("") + "</div>" : "";
    }).join("");
    return '<div class="presse-live"><div class="breite">' + (neu.length ? liveBanner(neu, false) : leer) + "</div></div>" +
      seitenKopf("03", "Presse", "Nachrichten aus Revive", "Was die Zeitungen und Sender der Welt berichten.") +
      '<section class="inhalt"><div class="breite">' +
      '<div class="medien">' + medien.map(function (m) {
        var n = art.filter(function (a) { return a.medium === m.id; }).length;
        return '<div class="medium-karte" style="--m:' + farbe(m.farbe) + '"><span class="medium-marke">' + t(m.kurz || m.name) + "</span><h3>" + t(m.name) + "</h3><p>" + t(m.text) + '</p><span class="leise">' + n + " Artikel</span></div>";
      }).join("") + "</div>" +
      '<div class="tabs" role="tablist" style="margin-top:2.5rem">' +
        '<button class="tab" aria-selected="true" data-zeit="aktuell">Aktuell (' + neu.length + ")</button>" +
        '<button class="tab" aria-selected="false" data-zeit="archiv">Archiv (' + alt.length + ")</button></div>" +
      (medien.length > 1 ? '<div class="filter-zeile"><button class="filter" aria-pressed="true" data-filter="">Alle Medien</button>' + medien.map(function (m) {
        return '<button class="filter" aria-pressed="false" data-filter="' + esc(m.id) + '" style="--m:' + farbe(m.farbe) + '">' + t(m.kurz || m.name) + "</button>"; }).join("") + "</div>" : "") +
      '<div data-zeitbereich="aktuell">' + (neu.length ? '<div class="artikel-liste">' + neu.map(artikelKarte).join("") + "</div>" : '<p class="leise" style="margin-top:1.5rem">Noch keine Artikel aus der laufenden Staffel.</p>') + "</div>" +
      '<div data-zeitbereich="archiv" hidden>' + (archivNachStaffel || '<p class="leise" style="margin-top:1.5rem">Noch nichts im Archiv.</p>') + "</div>" +
      "</div></section>";
  }

  function events() {
    var liste = D.events || [];
    return seitenKopf("02", "Events", "Was auf Revive los ist", "Konzerte, Wahlen, Turniere und alles, was die Welt zusammenbringt.") +
      '<section class="inhalt"><div class="breite"><div class="event-leiste"><button class="knopf knopf-haupt" type="button" data-event-neu>' + ic("blitz") + "Event erstellen</button>" +
      '<span class="leise">Für das Revive-Team: erstellt den Eintrag für die Website.</span></div>' +
      (liste.length ? '<div class="events">' + liste.slice().sort(function (a, b) { return (b.datum || "").localeCompare(a.datum || ""); }).map(eventKarte).join("") + "</div>" : '<p class="leise">Gerade sind keine Events geplant.</p>') + "</div></section>";
  }

  // ---------- Archiv ----------
  function downloads() {
    return seitenKopf("01", "Archiv", "Die Geschichte von Revive", "Jede Staffel mit allem, was passiert ist, und ihrer Welt zum Herunterladen.") +
      '<section class="inhalt"><div class="breite"><div class="staffeln">' + D.staffeln.map(staffelKarte).join("") + "</div></div></section>";
  }

  // ---------- Mitglieder ----------
  function mitglieder() {
    var jetzt = laufende();
    var h = seitenKopf("04", "Mitglieder", "Die Crew hinter Revive", "Die Leute, die das Projekt am Leben halten.") + '<section class="inhalt"><div class="breite">' +
      '<div class="crew">' + D.crew.map(function (p) {
        var r = /^(owner|admin|moderator|builder|spieler)$/.test(p.rolle) ? p.rolle : "spieler";
        var label = { owner: "Server Owner", admin: "Admin", moderator: "Moderator", builder: "Builder", spieler: "Spieler" }[r];
        return '<div class="karte person"><div class="person-kopf">' + avatar(p) + "<div><h3>" + t(p.name) + '</h3><span class="rollen"><span class="rolle rolle-' + r + '">' + label + "</span>" + (p.extra ? '<span class="rolle rolle-extra">' + t(p.extra) + "</span>" : "") + "</span></div></div>" +
          (p.text ? "<p>" + t(p.text) + "</p>" : "") + "</div>";
      }).join("") + "</div>";
    if (D.teilnehmer && D.teilnehmer.length) h += '<h3 class="unter-titel" style="margin-top:3.5rem">' + ic("leute") + "Teilnehmer" + (jetzt ? " Staffel " + esc(jetzt.nummer) : "") + "</h3>" +
      '<div class="skin-raster">' + D.teilnehmer.map(skinKarte).join("") + "</div>";
    return h + "</div></section>";
  }

  // ---------- Creator ----------
  function creator() {
    var liste = D.streamer || [];
    return seitenKopf("05", "Creator", "Creator auf Revive", "Schau den Spielern beim Spielen zu. Tippe auf einen Kanal, um zu wechseln.") +
      '<section class="inhalt"><div class="breite">' + (liste.length ? '<div class="gitter">' + liste.map(function (s) {
        var u = link(s.url);
        return '<div class="karte stream"><div class="stream-bild"><span class="ecke">' + (s.live ? '<span class="live">LIVE</span>' : '<span class="plattform">' + t(s.plattform) + "</span>") + "</span>" + gesicht(s.name, true) + "</div>" +
          '<div class="stream-text"><h3>' + t(s.name) + ic("tv") + '</h3><span class="handle">' + t(s.handle) + "</span><p>" + t(s.text) + "</p>" +
          (u ? '<a class="link-gruen" href="' + u + '" rel="noopener">Auf ' + esc(roh(s.plattform)) + " ansehen " + ic("extern") + "</a>" : "") + "</div></div>";
      }).join("") + "</div>" : '<p class="leise">Hier stehen bald die Kanäle der Spieler.</p>') + "</div></section>";
  }

  // ---------- Regeln ----------
  function regeln() {
    return seitenKopf("06", "Regeln", "So spielen wir", "Damit die Geschichte für alle funktioniert.") + '<section class="inhalt"><div class="breite">' +
      '<div class="tabs" role="tablist">' + D.regeln.map(function (r, i) { return '<button class="tab" role="tab" aria-selected="' + (i === 0) + '" data-tab="' + i + '">' + t(r.titel) + "</button>"; }).join("") + "</div>" +
      D.regeln.map(function (r, i) { return '<div class="akk" data-panel="' + i + '"' + (i ? " hidden" : "") + ">" + r.kapitel.map(akk).join("") + "</div>"; }).join("") +
      "</div></section>";
  }

  // ---------- FAQ ----------
  function faq() {
    return '<div class="zentriert">' + seitenKopf("07", "FAQ", "Häufige Fragen", "Alles, was du über Revive wissen musst.") +
      '<section class="inhalt"><div class="breite"><div class="akk">' + D.fragen.map(function (f) { return akk({ titel: f.frage, text: f.antwort }); }).join("") + "</div></div></section></div>";
  }
  function zeile(a, b) { return '<div class="zeile"><span>' + a + "</span><span>" + b + "</span></div>"; }
  function akk(k) { return '<details><summary><span class="pfeile">»</span>' + t(k.titel) + '<span class="chev">' + ic("chev") + '</span></summary><div class="antwort">' + (Array.isArray(k.text) ? artikelText(k.text) : t(k.text)) + "</div></details>"; }
  function dlKarte(icon, ecke, titel, text, version, groesse, url) {
    return '<div class="karte"><div class="karte-kopf"><div class="icon-box">' + ic(icon) + "</div>" + (ecke ? '<span class="pixel">' + ecke + "</span>" : "") + "</div>" +
      "<h3>" + titel + "</h3><p>" + text + '</p><div class="dl-meta">' + version + "<span>" + ic("platte") + groesse + "</span></div>" +
      (url ? '<a class="knopf knopf-voll" href="' + url + '">' + ic("laden") + "Download</a>" : '<span class="knopf knopf-aus">' + ic("laden") + "Bald verfügbar</span>") + "</div>";
  }
  function weltInfo(s) {
    var d = s.download, fertig = s.status !== "laufend" && d, u = fertig ? link(d.url) : "";
    return { fertig: !!fertig, url: u,
      meta: fertig ? '<span class="pixel">' + t(d.version) + "</span><span>" + ic("platte") + t(d.groesse) + "</span>" : '<span class="pixel">Coming Soon</span><span>Welt nach Staffelende</span>',
      knopf: u ? '<a class="knopf knopf-voll" href="' + u + '">' + ic("laden") + "Welt herunterladen</a>" : '<span class="knopf knopf-aus">' + ic("laden") + (fertig ? "Bald verfügbar" : "Nach Staffelende") + "</span>" };
  }
  function weltBox(s) {
    var w = weltInfo(s), packs = (s.packs || []).filter(function (p) { return p.titel; });
    return '<div class="welt-box"><div class="welt-box-kopf"><div class="icon-box">' + ic("globus") + '</div><div><h3>Welt dieser Staffel</h3><div class="dl-meta">' + w.meta + "</div></div></div>" + w.knopf +
      (packs.length ? '<div class="packs">' + packs.map(function (p) { var u = link(p.url);
        return '<div class="pack">' + ic("paket") + "<span><strong>" + t(p.titel) + "</strong> " + t(p.version) + " · " + t(p.groesse) + "</span>" +
          (u ? '<a class="link-gruen" href="' + u + '">' + ic("laden") + "Laden</a>" : "") + "</div>"; }).join("") + "</div>" : "") + "</div>";
  }
  function staffelKarte(s) {
    var logo = pfad(s.logo), bild = s.bauten && s.bauten[0] ? pfad(s.bauten[0].bild) : "", w = weltInfo(s), ziel = href("staffel", s.id);
    return '<div class="staffel" style="--f:' + farbe(s.farbe) + '"><a class="staffel-link" href="' + ziel + '"><div class="staffel-bild">' +
      (bild ? '<img src="' + bild + '" alt="" loading="lazy">' : "") +
      (logo ? '<img class="logo" src="' + logo + '" alt="Logo Staffel ' + esc(s.nummer) + '">' : bild ? "" : '<span class="gross">' + esc(s.nummer) + "</span>") +
      '<span class="ecke">' + (s.status === "laufend" ? '<span class="live">LÄUFT</span>' : '<span class="fertig">Abgeschlossen</span>') + "</span></div>" +
      '<div class="staffel-text"><span class="pixel">Staffel ' + esc(s.nummer) + "</span><h3>" + t(s.titel) + "</h3><p>" + t(s.zeitraum) + "</p>" +
      '<span class="link-gruen" style="margin-top:.8rem">Geschichte lesen ' + ic("pfeil") + "</span></div></a>" +
      '<div class="staffel-fuss"><div class="dl-meta">' + w.meta + "</div>" + w.knopf + "</div></div>";
  }

  // ---------- Staffel-Unterseite ----------
  function staffelSeite(s) {
    var f = farbe(s.farbe), logo = pfad(s.logo), h = '<div style="--f:' + f + '">';
    h += '<section class="sub-held"><div class="breite"><a class="zurueck" href="' + href("archiv") + '">' + ic("chev") + "Zurück zum Archiv</a>" +
      (logo ? '<img class="logo" src="' + logo + '" alt="">' : "") +
      '<div class="marke-zeile"><span class="nr">' + String(s.nummer).padStart(2, "0") + '</span><span class="strich"></span><span class="wort">Staffel</span></div>' +
      "<h1>" + t(s.titel) + '</h1><div class="meta">' + (s.status === "laufend" ? '<span class="live">LÄUFT</span>' : '<span class="fertig">Abgeschlossen</span>') +
      "<span>" + t(s.zeitraum) + '</span></div><p class="einleitung">' + t(s.einleitung) + "</p>" + weltBox(s) + "</div></section>";
    if (s.staaten && s.staaten.length) h += '<section class="abschnitt"><div class="breite"><h3 class="unter-titel">' + ic("flagge") + 'Staaten &amp; Fraktionen</h3><div class="gitter">' +
      s.staaten.map(function (x) { return '<div class="karte"><h3>' + t(x.name) + "</h3><p>" + t(x.text) + "</p></div>"; }).join("") + "</div></div></section>";
    if (s.ereignisse && s.ereignisse.length) h += '<section class="abschnitt"><div class="breite"><h3 class="unter-titel">' + ic("blitz") + 'Was passiert ist</h3><ol class="zeitstrahl">' +
      s.ereignisse.map(function (x) { return '<li><span class="wann">' + t(x.wann) + "</span><h3>" + t(x.titel) + "</h3><p>" + t(x.text) + "</p></li>"; }).join("") + "</ol></div></section>";
    if (s.bauten && s.bauten.length) h += '<section class="abschnitt"><div class="breite"><h3 class="unter-titel">' + ic("hacke") + 'Bauten</h3><div class="gitter">' +
      s.bauten.map(function (x) { var b = pfad(x.bild); return '<div class="karte"><div class="bau-bild">' + (b ? '<img src="' + b + '" alt="' + esc(roh(x.name)) + '" loading="lazy" data-zoom data-titel="' + esc(roh(x.name)) + '">' : "Screenshot folgt") + "</div><h3>" + t(x.name) + "</h3><p>" + t(x.text) + "</p></div>"; }).join("") + "</div></div></section>";
    var art = presse().filter(function (x) { return x.staffel === s.id; });
    if (art.length) h += '<section class="abschnitt"><div class="breite"><h3 class="unter-titel">' + ic("zeitung") + 'Aus der Presse</h3><div class="artikel-liste">' + art.map(artikelKarte).join("") + "</div></div></section>";
    return h + "</div>";
  }

  // ---------- Impressum & Datenschutz ----------
  function impressum() {
    var i = D.impressum, live = !!D.config.serverAdresse;
    return seitenKopf("08", "Impressum", "Rechtliche Hinweise", "Angaben gemäß § 5 DDG und § 18 Abs. 1 MStV für das Minecraft-Projekt Revive.") +
      '<section class="recht inhalt"><div class="breite">' +
      '<div class="karte"><h3>Anbieter</h3><p>' + t(i.name) + "<br>" + t(i.anschrift) + "<br>" + t(i.ort) + "<br>Deutschland</p></div>" +
      '<div class="karte"><h3>Kontakt</h3><p>E-Mail: ' + t(i.email) + "</p></div>" +
      '<div class="karte"><h3>Haftungsausschluss</h3><p>Revive ist ein nicht-kommerzielles Hobby-Projekt. Es steht in keiner Verbindung zu Mojang AB oder Microsoft und ist kein offizielles Minecraft-Produkt. Minecraft® ist eine Marke von Mojang Synergies AB. Für Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.</p></div>' +
      '<div class="karte" id="datenschutz"><h3>Datenschutz</h3>' +
        "<p><strong>Verantwortlich</strong> im Sinne der DSGVO ist der oben genannte Anbieter.</p>" +
        "<p><strong>Hosting.</strong> Diese Website wird über GitHub Pages bereitgestellt (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browser-Informationen, um die Seite auszuliefern und abzusichern. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und kostenlosen Bereitstellung (Art. 6 Abs. 1 lit. f DSGVO). Dabei können Daten in die USA übertragen werden; GitHub stützt solche Übermittlungen auf die EU-Standardvertragsklauseln. Mehr dazu in der Datenschutzerklärung von GitHub.</p>" +
        "<p><strong>Keine Cookies, kein Tracking.</strong> Die Seite setzt keine Cookies, nutzt keine Analyse-Dienste und lädt keine Schriften oder Skripte von fremden Servern. Wählst du helles oder dunkles Design, wird diese Einstellung nur lokal in deinem Browser gespeichert (§ 25 Abs. 2 Nr. 2 TDDDG); sie verlässt dein Gerät nicht.</p>" +
        (live ? "<p><strong>Serverstatus.</strong> Für die Live-Anzeige fragt die Startseite den Dienst mcsrvstat.us ab. Dabei wird deine IP-Adresse an diesen Dienst übertragen (Art. 6 Abs. 1 lit. f DSGVO).</p>" : "") +
        "<p><strong>Externe Links</strong> (z. B. YouTube, Discord) führen auf Seiten Dritter. Erst wenn du sie anklickst, gelten deren Datenschutzbestimmungen.</p>" +
        "<p><strong>Deine Rechte.</strong> Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO) sowie auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO), in Nordrhein-Westfalen bei der LDI NRW.</p></div>" +
      '<p class="leise" style="text-align:center;padding-bottom:4rem">Stand: ' + new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" }) + ". Diese Texte sind eine sorgfältig erstellte Vorlage, aber keine Rechtsberatung.</p></div></section>";
  }

  // ---------- Kopf & Fuß (auf jeder Seite gleich) ----------
  function kopfUndFuss(aktiv) {
    document.getElementById("kopf").innerHTML = '<div class="kopf-innen">' +
      '<a class="marke" href="' + href("start") + '"><span class="marke-box">' + ic("hacke") + '</span><span><span class="marke-name">REVIVE</span><span class="marke-unter">' + esc(roh(D.projekt.untertitel)) + "</span></span></a>" +
      '<button class="menue-knopf" id="menue" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menü">' + ic("menue") + "</button>" +
      '<nav class="nav" id="nav" aria-label="Hauptmenü">' + SEITEN.map(function (x) {
        return '<a href="' + href(x.id) + '"' + (x.id === aktiv ? ' aria-current="page"' : "") + ">" + x.name + "</a>"; }).join("") + "</nav></div>";
    var dc = link(D.config.discord);
    document.getElementById("fuss").innerHTML = '<div class="breite"><div class="fuss-raster"><div>' +
      '<a class="marke" href="' + href("start") + '"><span class="marke-box">' + ic("hacke") + '</span><span class="marke-name">REVIVE</span></a><p>Das Minecraft-Projekt, seit 2026. ' + t(D.projekt.fussText) + "</p></div>" +
      "<div><h4>Navigation</h4><ul>" + [{ id: "start", name: "Start" }].concat(SEITEN).map(function (x) { return '<li><a href="' + href(x.id) + '">' + x.name + "</a></li>"; }).join("") + "</ul></div>" +
      "<div><h4>Rechtliches</h4><ul><li><a href=\"" + href("impressum") + '">Impressum</a></li><li><a href="' + href("impressum", "datenschutz") + '">Datenschutz</a></li>' +
      (dc ? '<li><a href="' + dc + '" rel="noopener">Discord</a></li>' : "") + '</ul><button class="thema-knopf" id="thema" type="button"></button></div></div>' +
      '<div class="fuss-unten">© ' + new Date().getFullYear() + " Revive. Kein offizielles Minecraft-Produkt. Nicht von Mojang oder Microsoft genehmigt oder mit ihnen verbunden." +
      '<div class="spruch">' + esc(D.projekt.spruch) + "</div></div></div>";
    document.getElementById("menue").addEventListener("click", function () { menue(!document.getElementById("nav").classList.contains("offen")); });
    themaKnopf();
  }

  // ---------- Steuerung ----------
  var RENDER = { start: start, archiv: downloads, downloads: downloads, events: events, presse: pressSeite, mitglieder: mitglieder, creator: creator, regeln: regeln, faq: faq, impressum: impressum };
  var aktuell = null;
  function zeige() {
    var hash = (location.hash || "").replace(/^#/, ""), name, anker = "";
    if (MODUS === "einzeln") {
      name = staffel(hash) ? "staffel" : hash === "datenschutz" ? "impressum" : RENDER[hash] ? hash : "start";
      if (hash === "datenschutz") anker = "datenschutz";
    } else {
      name = MODUS; anker = hash;
    }
    var schluessel = name === "staffel" ? "staffel:" + (MODUS === "einzeln" ? hash : hash || D.staffeln[0].id) : name;
    if (schluessel !== aktuell) {
      offen = 0;
      var s = name === "staffel" ? (staffel(MODUS === "einzeln" ? hash : hash) || laufende() || D.staffeln[0]) : null;
      app.innerHTML = s ? staffelSeite(s) : RENDER[name]();
      kopfUndFuss(s ? "archiv" : name);
      document.title = s ? "Staffel " + s.nummer + " – Revive" : name === "start" ? "Revive – Minecraft Project" : (name === "impressum" ? "Impressum" : seite(name).name) + " – Revive";
      aktuell = schluessel; leiste(); zeichneSkins();
      if (name === "start") liveStatus();
      window.scrollTo(0, 0);
    }
    if (anker && name !== "staffel") { var el = document.getElementById(anker); if (el) el.scrollIntoView(); }
    menue(false);
  }
  function leiste() {
    var l = document.getElementById("entwurf");
    if (!D.config.entwurf) { l.hidden = true; return; }
    l.hidden = false;
    l.textContent = offen ? "Entwurf: " + offen + " Platzhalter auf dieser Seite – in daten.js ausfüllen, dann entwurf: false." : "Entwurf: keine Platzhalter mehr auf dieser Seite.";
  }
  function liveStatus() {
    var adr = D.config.serverAdresse; if (!adr) return;
    fetch("https://api.mcsrvstat.us/3/" + encodeURIComponent(adr)).then(function (r) { return r.json(); }).then(function (d) {
      var w = document.getElementById("live-wort"), m = document.getElementById("live-marker");
      if (w) w.textContent = d.online ? "online · " + d.players.online + " Spieler" : "offline";
      if (m && !d.online) { m.textContent = "OFFLINE"; m.className = "marker aus"; }
    }).catch(function () {});
  }
  function menue(auf) {
    var n = document.getElementById("nav"), k = document.getElementById("menue"); if (!n || !k) return;
    n.classList.toggle("offen", auf); k.setAttribute("aria-expanded", auf); k.innerHTML = ic(auf ? "zu" : "menue");
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-event-neu]")) { eventDialog(); return; }
    var zu = e.target.closest("[data-zuklappen]");
    if (zu) { var d = zu.closest("details"); d.open = false; var art = d.closest(".artikel"); if (art && art.getBoundingClientRect().top < 0) art.scrollIntoView({ block: "start" }); return; }
    var zb = e.target.closest("img[data-zoom]");
    if (zb) { e.preventDefault(); zoomAuf(zb); return; }
    var z = e.target.closest("[data-zeit]");
    if (z) {
      document.querySelectorAll("[data-zeit]").forEach(function (x) { x.setAttribute("aria-selected", x === z); });
      document.querySelectorAll("[data-zeitbereich]").forEach(function (b) { b.hidden = b.getAttribute("data-zeitbereich") !== z.getAttribute("data-zeit"); });
    }
    var f = e.target.closest("[data-filter]");
    if (f) {
      var id = f.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach(function (x) { x.setAttribute("aria-pressed", x === f); });
      document.querySelectorAll(".artikel").forEach(function (a) { a.hidden = !!id && a.getAttribute("data-medium") !== id; });
    }
    var tab = e.target.closest("[data-tab]");
    if (tab) {
      var n = tab.getAttribute("data-tab");
      document.querySelectorAll("[data-tab]").forEach(function (x) { x.setAttribute("aria-selected", x === tab); });
      document.querySelectorAll("[data-panel]").forEach(function (p) { p.hidden = p.getAttribute("data-panel") !== n; });
    }
  });

  // Event-Generator: baut den Eintrag für daten.js (die Seite ist statisch und kann selbst nichts speichern)
  function eventDialog() {
    var dlg = document.getElementById("event-dialog");
    if (!dlg) {
      dlg = document.createElement("div"); dlg.id = "event-dialog"; dlg.className = "dialog-hg"; dlg.hidden = true;
      dlg.innerHTML = '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="ev-titel-h"><button class="lb-zu" type="button" data-dialog-zu aria-label="Schließen">' + ic("zu") + "</button>" +
        '<h2 id="ev-titel-h">Event erstellen</h2><p class="leise">Ausfüllen, Vorschau prüfen, dann den fertigen Eintrag kopieren.</p>' +
        '<div class="feld"><label for="ev-titel">Titel</label><input id="ev-titel" maxlength="80" placeholder="z. B. Wochenabschlusskonzert"></div>' +
        '<div class="feld-reihe"><div class="feld"><label for="ev-datum">Datum</label><input id="ev-datum" type="date"></div>' +
        '<div class="feld"><label for="ev-von">Von</label><input id="ev-von" type="time" value="19:00"></div><div class="feld"><label for="ev-bis">Bis</label><input id="ev-bis" type="time"></div></div>' +
        '<div class="feld"><label for="ev-text">Beschreibung</label><textarea id="ev-text" rows="3" maxlength="400" placeholder="Worum geht es, wo findet es statt?"></textarea></div>' +
        '<div class="feld"><label for="ev-mit">Wer ist dabei? <span class="leise">(Spielernamen, mit Komma getrennt)</span></label><input id="ev-mit" placeholder="LuciusLucarnus, Lord_Simple"></div>' +
        '<h3 style="margin-top:1.4rem">Vorschau</h3><div id="ev-vorschau"></div>' +
        '<h3 style="margin-top:1.4rem">Eintrag für daten.js</h3><pre class="code" id="ev-code"></pre>' +
        '<div class="dialog-knoepfe"><button class="knopf knopf-voll" type="button" id="ev-kopieren">' + ic("laden") + 'Eintrag kopieren</button><a class="knopf knopf-rand" id="ev-github" target="_blank" rel="noopener" hidden>' + ic("extern") + "In GitHub einfügen</a></div>" +
        '<ol class="schritte"><li>Eintrag kopieren.</li><li><code>daten.js</code> öffnen' + (D.config.githubRepo ? " (der GitHub-Knopf öffnet sie direkt)" : "") + " und bei <code>events: [</code> direkt nach der eckigen Klammer einfügen.</li><li>Speichern bzw. auf GitHub „Commit changes“ – nach ca. einer Minute ist das Event online.</li></ol></div>";
      document.body.appendChild(dlg);
      dlg.addEventListener("input", aktualisiere);
      dlg.addEventListener("click", function (e) {
        if (e.target === dlg || e.target.closest("[data-dialog-zu]")) zuDialog();
        if (e.target.closest("#ev-kopieren")) {
          var txt = document.getElementById("ev-code").textContent, k = e.target.closest("#ev-kopieren");
          (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function () { k.lastChild.textContent = "Kopiert!"; setTimeout(function () { k.lastChild.textContent = "Eintrag kopieren"; }, 1800); })
            .catch(function () { var r = document.createRange(); r.selectNodeContents(document.getElementById("ev-code")); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); });
        }
      });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !dlg.hidden) zuDialog(); });
      var heute = new Date(); document.getElementById("ev-datum").value = heute.toISOString().slice(0, 10);
    }
    function wert(id) { return document.getElementById(id).value.trim(); }
    function aktualisiere() {
      var ev = { datum: wert("ev-datum"), von: wert("ev-von"), bis: wert("ev-bis"), titel: wert("ev-titel") || "Titel des Events", text: wert("ev-text") || "Beschreibung",
        mit: wert("ev-mit").split(",").map(function (x) { return x.trim(); }).filter(Boolean) };
      if (!ev.bis) delete ev.bis;
      var alt = D.config.entwurf; D.config.entwurf = false;
      document.getElementById("ev-vorschau").innerHTML = '<div class="events">' + eventKarte(ev) + "</div>";
      D.config.entwurf = alt; zeichneSkins();
      document.getElementById("ev-code").textContent = "    { " + Object.keys(ev).map(function (k) { return k + ": " + JSON.stringify(ev[k]); }).join(", ") + " },";
      var gh = document.getElementById("ev-github"), repo = String(D.config.githubRepo || "");
      if (/^[\w.-]+\/[\w.-]+$/.test(repo)) { gh.href = "https://github.com/" + repo + "/edit/main/daten.js"; gh.hidden = false; }
    }
    function zuDialog() { dlg.hidden = true; document.body.style.overflow = ""; }
    aktualisiere(); dlg.hidden = false; document.body.style.overflow = "hidden"; document.getElementById("ev-titel").focus();
  }

  // Bilder groß ansehen (Lightbox)
  var lb = document.createElement("div"), lbBilder = [], lbIndex = 0;
  lb.className = "lightbox"; lb.hidden = true; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Bild vergrößert");
  lb.innerHTML = '<button class="lb-zu" type="button" aria-label="Schließen">' + ic("zu") + '</button><button class="lb-pfeil lb-zurueck" type="button" aria-label="Vorheriges Bild">' + ic("chev") +
    '</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-pfeil lb-vor" type="button" aria-label="Nächstes Bild">' + ic("chev") + "</button>";
  document.body.appendChild(lb);
  function lbZeige() {
    var b = lbBilder[lbIndex]; lb.querySelector("img").src = b.src; lb.querySelector("img").alt = b.alt;
    lb.querySelector("figcaption").textContent = (b.getAttribute("data-titel") || "") + (lbBilder.length > 1 ? " · " + (lbIndex + 1) + " von " + lbBilder.length : "");
    lb.querySelectorAll(".lb-pfeil").forEach(function (p) { p.hidden = lbBilder.length < 2; });
  }
  function zoomAuf(img) {
    var gruppe = img.closest(".artikel, .karte") || document.body;
    lbBilder = [].slice.call(gruppe.querySelectorAll("img[data-zoom]")); lbIndex = Math.max(0, lbBilder.indexOf(img));
    lbZeige(); lb.hidden = false; document.body.style.overflow = "hidden"; lb.querySelector(".lb-zu").focus();
  }
  function zoomZu() { lb.hidden = true; document.body.style.overflow = ""; }
  function zoomSchritt(n) { lbIndex = (lbIndex + n + lbBilder.length) % lbBilder.length; lbZeige(); }
  lb.addEventListener("click", function (e) {
    if (e.target.closest(".lb-vor")) return zoomSchritt(1);
    if (e.target.closest(".lb-zurueck")) return zoomSchritt(-1);
    if (e.target.tagName !== "IMG") zoomZu();
  });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") zoomZu(); else if (e.key === "ArrowRight") zoomSchritt(1); else if (e.key === "ArrowLeft") zoomSchritt(-1);
  });
  var tx = null;
  lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) { if (tx === null || lbBilder.length < 2) return; var d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) zoomSchritt(d < 0 ? 1 : -1); tx = null; });

  // Hell / Dunkel
  try { var g = localStorage.getItem("revive-thema"); if (g) document.documentElement.setAttribute("data-theme", g); } catch (e) {}
  function hell() { var a = document.documentElement.getAttribute("data-theme"); return a ? a === "light" : matchMedia("(prefers-color-scheme: light)").matches; }
  function themaKnopf() {
    var k = document.getElementById("thema"); k.textContent = hell() ? "Dunkles Design" : "Helles Design";
    k.addEventListener("click", function () {
      var neu = hell() ? "dark" : "light"; document.documentElement.setAttribute("data-theme", neu); k.textContent = hell() ? "Dunkles Design" : "Helles Design";
      try { localStorage.setItem("revive-thema", neu); } catch (e) {}
    });
  }

  addEventListener("hashchange", zeige);
  zeige();
})();
