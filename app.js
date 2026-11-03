try {
    // ===== Dynamic hero photo =====
    // The hero photo follows the "What's next" day-cards below: it is chosen
    // from the cards, never from a hard-coded date. On a PORT day the hero
    // shows that port's photo — unless the day's plan text names an attraction
    // in PLAN_HEROES, whose photo wins (a Naples day planned around the
    // Herculaneum excursion shows Herculaneum, not Naples). On a SEA day the
    // hero shows the NEXT port's photo with a "Next stop: …" caption. A port
    // with no photo falls back to HERO_FALLBACK, a generic ship at sea.
    //
    // PORT_HEROES maps a day-card title (port name) to its hero photo.
    // PLAN_HEROES maps an attraction keyword in the day's plan text to its
    // hero photo. When the daily refresh adds ports for a future trip, add
    // the new photos to these two objects (plus a HERO_CREDITS line) and the
    // day-cards do the rest. Keys are matched case-insensitively; a key that
    // appears inside a longer card title still matches (e.g. "Civitavecchia"
    // matches "Rome (Civitavecchia), Italy").
    const PORT_HEROES = {
      "Mykonos": "assets/hero-mykonos.jpg",
      "Naples": "assets/hero-naples.jpg",
      "Rome (Civitavecchia)": "assets/hero-rome.jpg",
      "Civitavecchia": "assets/hero-rome.jpg",
      "Rome": "assets/hero-rome.jpg",
      "La Spezia": "assets/hero-la-spezia.jpg",
      "Barcelona": "assets/hero-barcelona.jpg",
      "Cartagena": "assets/hero-cartagena.jpg",
      "Lisbon": "assets/hero-lisbon.jpg",
      "Ponta Delgada": "assets/hero-ponta-delgada.jpg"
    };
    const PLAN_HEROES = {
      "Cinque Terre": "assets/hero-cinque-terre.jpg",
      "Manarola": "assets/hero-cinque-terre.jpg"
    };
    // Generic fallback: a cruise ship at sea, used when a port has no photo.
    const HERO_FALLBACK = "assets/hero-at-sea.jpg";
    // Photo credits for the hero images above — every hero photo is freely
    // licensed via Wikimedia Commons; "url" is its Commons file page. The
    // credit line is rendered unobtrusively in the hero's corner.
    const HERO_CREDITS = {
      "assets/hero-mykonos.jpg": { text: "Photo: dronepicr, CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:The_windmills_in_Mykonos,_Greece_-_50661524068.jpg" },
      "assets/hero-naples.jpg": { text: "Photo: Wolfgang Moroder, CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Naples_from_the_Castello_Sant_Elmo_with_Abbazia_San_Martino_the_port_and_the_Vesuv.jpg" },
      "assets/hero-herculaneum.jpg": { text: "Photo: Michael Karavanov, CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Herculaneum%27s_ruins_-_panoramio.jpg" },
      "assets/hero-rome.jpg": { text: "Photo: Diliff, CC BY-SA 2.5", url: "https://commons.wikimedia.org/wiki/File:Colosseum_in_Rome,_Italy_-_April_2007.jpg" },
      "assets/hero-la-spezia.jpg": { text: "Photo: Aconcagua, CC BY-SA 3.0 (Porto Venere, on the Gulf of La Spezia)", url: "https://commons.wikimedia.org/wiki/File:Porto_Venere_from_Lerici.jpg" },
      "assets/hero-cinque-terre.jpg": { text: "Photo: Timothy A. Gonsalves, CC BY-SA 4.0 (Manarola)", url: "https://commons.wikimedia.org/wiki/File:Manarola_NW_Cinque_Terre_Sep23_A7C_07233.jpg" },
      "assets/hero-barcelona.jpg": { text: "Photo: Bernard Gagnon, CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Sagrada_Familia_01.jpg" },
      "assets/hero-cartagena.jpg": { text: "Photo: Diego Delso, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Teatro_romano_de_Cartagena,_Espa%C3%B1a,_2022-07-16,_DD_02.jpg" },
      "assets/hero-lisbon.jpg": { text: "Photo: Rodrigo Tetsuo Argenton, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Torre_de_Bel%C3%A9m_por_Rodrigo_Tetsuo_Argenton_(2).jpg" },
      "assets/hero-ponta-delgada.jpg": { text: "Photo: Diego Delso, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Portas_da_Cidade,_Ponta_Delgada,_isla_de_San_Miguel,_Azores,_Portugal,_2020-07-29,_DD_123-125_HDR.jpg" },
      "assets/hero-at-sea.jpg": { text: "Photo: Richard Mc Neil, CC BY 3.0", url: "https://commons.wikimedia.org/wiki/File:Oasis_of_the_seas_sailing_out_of_Port_Everglades_inlet._Le_plus_gros_paquebot_du_monde_sortant_du_port..._-_panoramio.jpg" }
    };

    (function () {
      var img = document.getElementById("hero-img");
      if (!img) { return; }
      var caption = document.getElementById("hero-next");
      var kicker = document.getElementById("hero-label-kicker");
      var placeEl = document.getElementById("hero-label-place");
      var coords = document.getElementById("hero-label-coords");
      var creditEl = document.getElementById("hero-credit");

      function norm(s) { return (s || "").toLowerCase().replace(/\s+/g, " ").trim(); }
      // Port photo for a day-card title: exact PORT_HEROES key first, then the
      // longest key contained in (or containing) the title.
      function portFile(title) {
        var t = norm(title), best = null, bestLen = -1;
        for (var key in PORT_HEROES) {
          var k = norm(key);
          if (t === k) { return PORT_HEROES[key]; }
          if ((t.indexOf(k) !== -1 || k.indexOf(t) !== -1) && k.length > bestLen) { best = PORT_HEROES[key]; bestLen = k.length; }
        }
        return best;
      }
      // Attraction photo for plan text: returns { key, file } or null.
      function planMatch(text) {
        var hay = norm(text);
        for (var key in PLAN_HEROES) {
          if (hay.indexOf(norm(key)) !== -1) { return { key: key, file: PLAN_HEROES[key] }; }
        }
        return null;
      }
      function isSea(title) { return /\b(at sea|cruising|sea day)\b/.test(norm(title)); }

      var MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
      // Day-cards carry dates like "Thu · Oct 22" (no year): read them as
      // this year's date so today can be matched without hard-coding it.
      function cardDate(card) {
        var el = card.querySelector(".date");
        var m = norm(el ? el.textContent : "").match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s+(\d{1,2})/);
        if (!m) { return null; }
        return new Date(new Date().getFullYear(), MONTHS[m[1]], +m[2]);
      }
      function titleOf(card) { var h = card.querySelector("h3"); return h ? h.textContent.trim() : ""; }
      function planOf(card) { var p = card.querySelector("p"); return p ? p.textContent : ""; }

      function show(file, place, kickerText, alt, nextCaption) {
        img.src = file;
        img.alt = alt;
        if (placeEl) { placeEl.textContent = place; }
        if (kicker) { kicker.textContent = kickerText; }
        if (coords) { coords.textContent = ""; }
        if (caption) {
          if (nextCaption) { caption.textContent = nextCaption; caption.hidden = false; }
          else { caption.textContent = ""; caption.hidden = true; }
        }
        if (creditEl) {
          creditEl.textContent = "";
          var c = HERO_CREDITS[file];
          if (c) {
            creditEl.appendChild(document.createTextNode(c.text + " · "));
            var a = document.createElement("a");
            a.href = c.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.textContent = "Wikimedia Commons";
            creditEl.appendChild(a);
          }
        }
      }

      var cards = Array.prototype.slice.call(document.querySelectorAll(".days .day"));
      if (!cards.length) { return; }
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var idx = -1;
      cards.forEach(function (card, i) {
        var d = cardDate(card);
        if (d && d.getTime() === today.getTime()) { idx = i; }
      });
      // The "What's next" strip always leads with today; if no card date
      // matches the viewer's clock, treat the first card as today's.
      if (idx === -1) { idx = 0; }

      var card = cards[idx];
      var title = titleOf(card);
      if (!isSea(title)) {
        // Port day: the fuller plan text in the hero copy counts too — it
        // names the day's sights (e.g. Herculaneum) the card only abbreviates.
        var heroPlan = document.querySelector(".hero-copy > div > p");
        var planText = planOf(card) + " " + (heroPlan ? heroPlan.textContent : "");
        var pm = planMatch(planText);
        if (pm) { show(pm.file, title, "Today in", "Iconic view of " + pm.key + ", the day's plan from " + title, null); }
        else {
          var pf = portFile(title);
          if (pf) { show(pf, title, "Today in", "Iconic view of " + title, null); }
          else { show(HERO_FALLBACK, title, "Today in", "A cruise ship at sea", null); }
        }
        return;
      }
      // Sea day: the next port card down the strip is the hero, captioned
      // with how far away it is.
      for (var j = idx + 1; j < cards.length; j++) {
        if (isSea(titleOf(cards[j]))) { continue; }
        var nextTitle = titleOf(cards[j]);
        var d0 = cardDate(card), d1 = cardDate(cards[j]);
        var away = (d0 && d1) ? Math.round((d1 - d0) / 86400000) : (j - idx);
        var when = away <= 1 ? "tomorrow" : away + " days away";
        var nf = portFile(nextTitle);
        show(nf || HERO_FALLBACK, nextTitle, "Next stop",
          nf ? "Iconic view of " + nextTitle + ", the next port" : "A cruise ship at sea",
          "Next stop: " + nextTitle + " · " + when);
        return;
      }
      // Sea day with no later port in the cards: stay with the ship at sea.
      show(HERO_FALLBACK, title, "Today", "A cruise ship at sea", null);
    })();

    // ===== Current-trip map data =====
    // TRIP_PORTS lists the ports of the sailing currently underway, in sailing
    // order, each with its port date and coordinates. The daily page refresh
    // updates this array (and the hero element's data-tz) when the trip changes.
    const TRIP_PORTS = [
      { port: "Civitavecchia (Rome), Italy", date: "Sun · Oct 25", lat: 42.0969, lng: 11.7898 },
      { port: "La Spezia, Italy", date: "Mon · Oct 26", lat: 44.1025, lng: 9.8241 },
      { port: "Barcelona, Spain", date: "Wed · Oct 28", lat: 41.3874, lng: 2.1686 },
      { port: "Cartagena, Spain", date: "Thu · Oct 29", lat: 37.6257, lng: -0.9966 },
      { port: "Lisbon, Portugal", date: "Sat · Oct 31", lat: 38.7223, lng: -9.1393 },
      { port: "Ponta Delgada, Azores, Portugal", date: "Mon · Nov 2", lat: 37.7394, lng: -25.6687 },
      { port: "Cape Liberty (Bayonne), New Jersey", date: "Sun · Nov 8", lat: 40.6650, lng: -74.1130 }
    ];

    // ----- Feature 1: live countdowns on the upcoming trips -----
    (function () {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      Array.prototype.forEach.call(document.querySelectorAll("[data-start]"), function (el) {
        var parts = el.getAttribute("data-start").split("-");
        var start = new Date(+parts[0], +parts[1] - 1, +parts[2]);
        var days = Math.round((start - today) / 86400000);
        var label;
        if (days > 1) { label = days + " days to go"; }
        else if (days === 1) { label = "1 day to go"; }
        else { label = "underway now"; }
        var slot = el.querySelector("[data-cd-slot]") || el;
        var span = document.createElement("span");
        span.className = "countdown";
        span.textContent = label;
        slot.appendChild(span);
      });
    })();

    // ----- Feature 2: local time where Patrick is (timezone from the hero's data-tz) -----
    (function () {
      var hero = document.getElementById("hero");
      var line = document.getElementById("local-time");
      if (!hero || !line) { return; }
      var tz = hero.getAttribute("data-tz");
      var place = document.getElementById("current-place").textContent.trim();
      function update() {
        try {
          var fmt = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", minute: "2-digit" });
          line.innerHTML = "It&rsquo;s currently <strong>" + fmt.format(new Date()) + "</strong> in " + place + ".";
        } catch (e) { line.textContent = ""; }
      }
      update();
      setInterval(update, 30000);
    })();

    // ----- Feature 3: interactive map of the current sailing -----
    (function () {
      if (!window.L) { return; }
      var el = document.getElementById("trip-map");
      if (!el) { return; }
      var map = L.map(el, { scrollWheelZoom: false });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      }).addTo(map);
      var pts = [];
      TRIP_PORTS.forEach(function (p) {
        L.marker([p.lat, p.lng]).addTo(map).bindPopup("<strong>" + p.port + "</strong><br>" + p.date);
        pts.push([p.lat, p.lng]);
      });
      L.polyline(pts, { color: "#1d585a", weight: 2, dashArray: "5 6" }).addTo(map);
      map.fitBounds(L.latLngBounds(pts).pad(0.12));
    })();

    // ----- Feature 5: journal search & filters (main journal history) -----
    (function () {
      var list = document.querySelector("#view-main .history-list");
      var tripSel = document.getElementById("filter-trip");
      var yearSel = document.getElementById("filter-year");
      var q = document.getElementById("filter-q");
      var empty = document.getElementById("filter-empty");
      if (!list || !tripSel || !yearSel || !q || !empty) { return; }
      var entries = Array.prototype.slice.call(list.querySelectorAll(".memory"));
      var labels = {
        "venice-transatlantic": "Venice & Transatlantic",
        "spain-transatlantic": "Spain & Transatlantic",
        "bayonne-miami": "New England, Bermuda & Virgin Voyages"
      };
      var trips = {}, years = {};
      entries.forEach(function (e) {
        var t = e.getAttribute("data-trip"), y = e.getAttribute("data-year");
        if (t) { trips[t] = true; }
        if (y) { years[y] = true; }
      });
      Object.keys(trips).sort().forEach(function (t) {
        var o = document.createElement("option");
        o.value = t;
        o.textContent = labels[t] || t;
        tripSel.appendChild(o);
      });
      Object.keys(years).sort().reverse().forEach(function (y) {
        var o = document.createElement("option");
        o.value = y;
        o.textContent = y;
        yearSel.appendChild(o);
      });
      function apply() {
        var t = tripSel.value, y = yearSel.value, needle = q.value.trim().toLowerCase();
        var shown = 0;
        entries.forEach(function (e) {
          var ok = (!t || e.getAttribute("data-trip") === t)
            && (!y || e.getAttribute("data-year") === y)
            && (!needle || e.textContent.toLowerCase().indexOf(needle) !== -1);
          e.style.display = ok ? "" : "none";
          if (ok) { shown++; }
        });
        empty.hidden = shown !== 0;
      }
      tripSel.addEventListener("change", apply);
      yearSel.addEventListener("change", apply);
      q.addEventListener("input", apply);
    })();

    // ----- Feature 6: a year ago today (renders only when a prior-year entry matches today's month & day) -----
    (function () {
      var host = document.getElementById("throwback");
      if (!host) { return; }
      var now = new Date();
      var mm = now.getMonth() + 1, dd = now.getDate(), yy = now.getFullYear();
      var match = null, matchYear = 0;
      Array.prototype.forEach.call(document.querySelectorAll(".memory[data-date]"), function (e) {
        var p = e.getAttribute("data-date").split("-");
        if (+p[1] === mm && +p[2] === dd && +p[0] < yy && +p[0] > matchYear) { match = e; matchYear = +p[0]; }
      });
      if (!match) { return; }
      var copy = match.querySelector(".memory-copy");
      var card = document.createElement("section");
      card.className = "throwback";
      card.setAttribute("aria-label", "Journal entry from a year ago today");
      var kicker = document.createElement("span");
      kicker.className = "date";
      kicker.textContent = "A year ago today";
      var h = document.createElement("h3");
      h.textContent = copy.querySelector("h3").textContent;
      var para = document.createElement("p");
      para.textContent = copy.querySelector("p").textContent;
      var link = document.createElement("a");
      link.href = "#" + match.id;
      link.textContent = "Read the " + copy.querySelector("time").textContent + " entry \u2192";
      link.addEventListener("click", function (ev) {
        ev.preventDefault();
        var view = match.closest(".view");
        if (view && view.id !== "view-main") { window.location.hash = view.id; }
        else if (window.location.hash) { window.location.hash = ""; }
        setTimeout(function () {
          match.scrollIntoView({ behavior: "smooth", block: "start" });
          match.classList.add("flash");
          setTimeout(function () { match.classList.remove("flash"); }, 2400);
        }, 60);
      });
      card.appendChild(kicker);
      card.appendChild(h);
      card.appendChild(para);
      card.appendChild(link);
      host.appendChild(card);
    })();

    (function () {
      var main = document.getElementById("view-main");
      var slugs = ["spain-transatlantic-jul-aug-2026", "bayonne-miami-sep-2026", "cape-cod-jul-2026", "alaska-may-jun-2026", "san-juan-rome-apr-may-2026", "miami-jan-feb-2026", "december-caribbean-nov-dec-2025", "fall-transatlantic-oct-nov-2025", "eastern-canada-sep-oct-2025", "star-cococay-aug-2025", "jewel-cococay-jul-2025", "cape-cod-jun-jul-2025", "odyssey-mediterranean-may-2025", "vision-baltimore-mar-2025", "adventure-caribbean-dec-2024", "oasis-transatlantic-oct-2024", "brilliance-alaska-may-2024", "symphony-caribbean-mar-2024", "adventure-caribbean-dec-2023", "oasis-caribbean-sep-2023", "harmony-caribbean-mar-2023", "allure-caribbean-oct-2022"];
      function route() {
        var slug = window.location.hash.replace(/^#/, "");
        var active = null;
        for (var i = 0; i < slugs.length; i++) {
          var view = document.getElementById(slugs[i]);
          view.hidden = slugs[i] !== slug;
          if (slugs[i] === slug) { active = view; }
        }
        main.hidden = !!active;
        document.title = active ? active.getAttribute("data-title") + " · Where's Patrick?" : "Where's Patrick?";
        window.scrollTo(0, 0);
      }
      window.addEventListener("hashchange", route);
      route();
    })();

    (function () {
      var galleries = document.querySelectorAll("[data-gallery]");
      Array.prototype.forEach.call(galleries, function (g) {
        var track = g.querySelector(".gallery-track");
        // Clicking a photo (not the prev/next buttons, dots or counter,
        // which sit outside the track) opens it full size in a new tab:
        // wrap each gallery image in a real link to its own file. This
        // runs for every [data-gallery] at load, so future galleries
        // built with the same markup get the behaviour automatically.
        // Video slides are left alone — they keep their own controls.
        Array.prototype.forEach.call(track.querySelectorAll("img"), function (img) {
          if (img.parentNode && img.parentNode.tagName === "A") { return; }
          var link = document.createElement("a");
          link.className = "gallery-open";
          link.href = img.getAttribute("src");
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.title = "Open full size in a new tab";
          link.setAttribute("aria-label", "Open full-size photo in a new tab" + (img.getAttribute("alt") ? ": " + img.getAttribute("alt") : ""));
          track.insertBefore(link, img);
          link.appendChild(img);
        });
        var total = track.children.length;
        var count = g.querySelector(".gallery-count");
        var dots = g.querySelectorAll(".gallery-dot");
        var i = 0;
        function go(n) {
          i = ((n % total) + total) % total;
          track.style.transform = "translateX(" + (-i * 100) + "%)";
          count.textContent = (i + 1) + " of " + total;
          Array.prototype.forEach.call(dots, function (d, di) {
            if (di === i) { d.setAttribute("aria-current", "true"); }
            else { d.removeAttribute("aria-current"); }
          });
        }
        g.querySelector(".gallery-btn.prev").addEventListener("click", function () { go(i - 1); });
        g.querySelector(".gallery-btn.next").addEventListener("click", function () { go(i + 1); });
        Array.prototype.forEach.call(dots, function (d, di) {
          d.addEventListener("click", function () { go(di); });
        });
        var x0 = null;
        var swiped = false;
        g.addEventListener("touchstart", function (e) {
          x0 = e.changedTouches[0].clientX;
        }, { passive: true });
        g.addEventListener("touchend", function (e) {
          if (x0 === null) { return; }
          var dx = e.changedTouches[0].clientX - x0;
          x0 = null;
          if (Math.abs(dx) > 40) {
            swiped = true;
            window.setTimeout(function () { swiped = false; }, 400);
            go(i + (dx < 0 ? 1 : -1));
          }
        }, { passive: true });
        // A swipe that navigated the carousel also fires a click on the
        // photo link — swallow that one click so swiping never opens a tab.
        g.addEventListener("click", function (e) {
          if (swiped && e.target && e.target.tagName === "IMG") {
            e.preventDefault();
            e.stopPropagation();
            swiped = false;
          }
        }, true);
      });
    })();

    // ===== Trip detail popups (upcoming trips longer than 7 days) =====
    // Detail content below was built at build time from the trip itineraries
    // in ~/workspace/goals/*/files/itinerary.md — specifically:
    //   goals/december-caribbean/files/itinerary.md
    //   goals/january-caribbean/files/itinerary.md
    //   goals/february-caribbean/files/itinerary.md
    //   goals/australia/files/itinerary.md
    //   goals/legend/files/itinerary.md
    //   goals/alaska-land-trip-and-cruise/files/itinerary.md
    //   goals/panama-canal/files/itinerary.md
    //   goals/2028-03-japan/files/itinerary.md
    //   goals/2028-08-iceland-greenland/files/itinerary.md
    // (goals/venice-transatlantic-trip/files/itinerary.md covers the current
    // sailing, which is not part of the upcoming-trips list.) When an
    // itinerary changes, refresh the matching entry here from that file.
    (function () {
      var TRIP_DETAILS = {
        "december-caribbean": {
          title: "Caribbean",
          range: "November 28 – December 19, 2026 · 21 days",
          bookings: [
            "JetBlue Boston → Ft Lauderdale (Nov 28), home Dec 19",
            "Bahia Mar, Ft Lauderdale — 1 night before the first sailing",
            "Adventure of the Seas — stateroom 4N 7506 Ocean View, three back-to-back sailings (6 + 8 + 6 nights), same cabin throughout",
            "Royal Beach Club day passes booked for all three Nassau stops"
          ],
          stops: [
            ["Nov 28", "Ft Lauderdale", "Fly in; night at Bahia Mar"],
            ["Nov 30", "Nassau, Bahamas", "Royal Beach Club day pass"],
            ["Dec 2", "Samaná, Dominican Republic", "Frontón Beach & snorkeling adventure"],
            ["Dec 3", "Puerto Plata, Dominican Republic", "Amber Beach Club getaway"],
            ["Dec 6", "Nassau, Bahamas", "Royal Beach Club day pass"],
            ["Dec 9", "Oranjestad, Aruba", "Sailaway snorkel cruise — in port until 11:00 PM"],
            ["Dec 10", "Willemstad, Curaçao", "Snorkel the Treasures of Caracas Bay"],
            ["Dec 15", "Cozumel, Mexico", "KUZA Beach day pass"],
            ["Dec 16", "Puerto Costa Maya, Mexico", "Tubing on Bacalar's Seven Color Lagoon"],
            ["Dec 18", "Nassau, Bahamas", "Royal Beach Club day pass"],
            ["Dec 19", "Ft Lauderdale", "Disembark; fly home to Boston"]
          ]
        },
        "january-caribbean": {
          title: "Eastern & Southern Caribbean",
          range: "January 2 – 25, 2027 · 23 days",
          bookings: [
            "Delta Boston → Newark (Jan 2); Fairfield Inn Newark Airport, 1 night",
            "Odyssey of the Seas, 11nt Eastern Caribbean — Studio Ocean View Balcony 2F 7650",
            "Odyssey of the Seas, 11nt Southern Caribbean — Studio Ocean View Balcony 2F 7250",
            "Delta home from Newark on Jan 25"
          ],
          stops: [
            ["Jan 3", "Cape Liberty, New Jersey", "Board Odyssey of the Seas"],
            ["Jan 7", "St Maarten", "Self-guided Philipsburg day — lunch at Marley's"],
            ["Jan 8", "Antigua", "Beach transfer by boat"],
            ["Jan 9", "St Kitts", "Snorkel St. Kitts excursion"],
            ["Jan 10", "St Thomas", "Double Dip snorkeling by fast cat"],
            ["Jan 14", "Cape Liberty", "Turn-around day — second sailing boards the same ship"],
            ["Jan 18", "St Maarten", "Walk-in day — Marley's, then Fort Amsterdam"],
            ["Jan 19", "St Lucia", "Open Fun Bus scenes & beach time"],
            ["Jan 20", "Barbados", "Turtle & shipwreck snorkel adventure"],
            ["Jan 21", "St Kitts", "Self-guided Basseterre walking loop"],
            ["Jan 25", "Cape Liberty", "Disembark; fly home to Boston"]
          ]
        },
        "february-caribbean": {
          title: "Florida & the Bahamas",
          range: "February 5 – 19, 2027 · 14 days",
          bookings: [
            "Delta Boston → Miami (Feb 5); citizenM Miami Brickell, 1 night",
            "Freedom of the Seas, 5nt Caribbean Getaway — Ocean View Balcony 2D 7544",
            "Avis Mustang Mach-E rental, Feb 11–15; staying with a friend in Estero Feb 13–14",
            "Wonder of the Seas, 4nt Bahamas & Perfect Day — Interior 4V 10103",
            "Delta home via Atlanta on Feb 19"
          ],
          stops: [
            ["Feb 5", "Miami", "Featured dinner at Joe's Stone Crab"],
            ["Feb 7", "Nassau, Bahamas", "Royal Beach Club day pass"],
            ["Feb 9", "Puerto Plata, Dominican Republic", "Port day — excursion still being decided"],
            ["Feb 11", "Miami", "Off the ship; featured lunch at Versailles, Little Havana"],
            ["Feb 13–14", "Estero, Florida", "Weekend with a friend — Super Bowl Sunday"],
            ["Feb 16", "Nassau, Bahamas", "Royal Beach Club day pass"],
            ["Feb 18", "Perfect Day at CocoCay", "Hideaway Beach (adults-only) day pass"],
            ["Feb 19", "Miami", "Disembark; fly home to Boston"]
          ]
        },
        "australia": {
          title: "Pacific crossing",
          range: "February 26 – May 5, 2027 · 68 days",
          bookings: [
            "Alaska Airlines Boston → Honolulu via Seattle, First (Feb 26); Prince Waikiki, 2 nights",
            "Qantas Honolulu → Sydney (Feb 28, crossing the date line); Shangri-La Sydney, 1 night",
            "Celebrity Edge, three back-to-back sailings from Sydney — Great Barrier Reef (11nt), New Zealand (11nt), Fiji & Vanuatu (14nt)",
            "InterContinental Sydney (Apr 7–9), then The Alva, Brisbane (Apr 9–11)",
            "Quantum of the Seas, 23nt transpacific Brisbane → Seattle — Ocean View Balcony",
            "Hotel Theodore, Seattle (May 3–5); Delta home May 5"
          ],
          stops: [
            ["Feb 26–27", "Honolulu, Hawaii", "Oahu Circle Island tour"],
            ["Mar 5", "Airlie Beach", "Viper trip to the Great Barrier Reef & Whitehaven"],
            ["Mar 6–7", "Cairns (Yorkeys Knob)", "Overnight in port — Kuranda jungle train & Skyrail, then the Reef"],
            ["Mar 8", "Port Douglas", "Mossman Gorge & Rainforest Habitat"],
            ["Mar 12", "Newcastle", "Self-guided east-end walking day"],
            ["Mar 16", "Milford, Doubtful & Dusky Sounds", "Scenic cruising the fiords"],
            ["Mar 17", "Dunedin", "Larnach Castle tour"],
            ["Mar 18", "Christchurch", "Lyttelton excursion with the Antarctic Center"],
            ["Mar 20", "Tauranga", "Hobbiton Tour Experience"],
            ["Mar 21", "Auckland", "Self-guided waterfront & CBD walk"],
            ["Mar 27", "Noumea, New Caledonia", "Self-guided downtown walk"],
            ["Mar 29", "Suva, Fiji", "Colo-i-Suva Forest Park & waterfalls"],
            ["Mar 30", "Lautoka, Fiji", "Snorkeling the Mamanuca waters"],
            ["Apr 1", "Mystery Island, Vanuatu", "Beach day"],
            ["Apr 2", "Lifou, New Caledonia", "Jinek Bay snorkel & Easo stalls"],
            ["Apr 3", "Port Vila, Vanuatu", "Glassbottom boat & snorkel safari (by tender)"],
            ["Apr 7–9", "Sydney", "InterContinental Sydney; the Rocks"],
            ["Apr 10", "Brisbane", "Lone Pine Koala Sanctuary"],
            ["Apr 18", "Papeete, Tahiti", "Waterfront walk; dinner at Les Roulottes food trucks"],
            ["Apr 19", "Moorea", "Snorkel Safari (by tender)"],
            ["Apr 20", "Raiatea", "Uturoa & the Taputapuātea marae (by tender)"],
            ["Apr 26–27", "Honolulu, Hawaii", "Overnight in port — Waikiki & Diamond Head, then Pearl Harbor"],
            ["May 3–5", "Seattle", "Hotel Theodore; Pike Place & the waterfront, then home"]
          ]
        },
        "legend": {
          title: "Spain & the Mediterranean",
          range: "May 12 – 29, 2027 · 17 days",
          bookings: [
            "Iberia Boston → Barcelona via Madrid (overnight May 12–13); H10 Port Vell, 3 nights",
            "Legend of the Seas, 7nt Western Mediterranean — Ocean View N4 9504",
            "Flight Barcelona → Málaga (May 23); staying at Sean's place in Málaga",
            "H10 Corregidor, Seville (May 25–27); H10 Palacio Colomera, Córdoba (May 27–29)",
            "iryo trains Seville → Córdoba and Córdoba → Madrid; Iberia home May 29"
          ],
          stops: [
            ["May 13–15", "Barcelona", "Palau de la Música & Modernisme; Girona & Dalí Museum day trip (May 15)"],
            ["May 17", "Palma de Mallorca", "Self-guided old-town walk — lunch at Celler Sa Premsa"],
            ["May 18", "Marseille, France", "Old Port & Le Panier — bouillabaisse at Le Miramar"],
            ["May 19", "La Spezia, Italy", "Pisa & Lucca by train"],
            ["May 20", "Civitavecchia, Italy", "Port-town day — Forte Michelangelo & the old harbor"],
            ["May 21", "Naples, Italy", "City day — Sansevero Chapel & pizza at L'Antica Pizzeria da Michele"],
            ["May 23–24", "Málaga", "Alcazaba, Atarazanas market & the Picasso Museum"],
            ["May 25–27", "Seville", "Cathedral, Real Alcázar & Plaza de España"],
            ["May 27–29", "Córdoba", "The Mezquita; train to Madrid and home on May 29"]
          ]
        },
        "alaska": {
          title: "Alaska",
          range: "August 20 – September 3, 2027 · 14 days",
          bookings: [
            "Alaska Airlines Boston → Fairbanks via Seattle (Aug 20); Enterprise rental SUV",
            "Sophie Station Suites, Fairbanks (2n); Denali Cabins (2n); Denali Fireside Cabin, Talkeetna (1n)",
            "Alaska Railroad Coastal Classic, Anchorage → Seward (Aug 27) — GoldStar Service",
            "Anthem of the Seas, 7nt Southbound Alaska & Hubbard Glacier — Ocean View Balcony Guarantee"
          ],
          stops: [
            ["Aug 20–21", "Fairbanks", "Chena Hot Springs self-drive day trip (Aug 21)"],
            ["Aug 22–23", "Denali", "Tundra Wilderness Tour (Aug 23)"],
            ["Aug 24", "Talkeetna", "Mahay's Devil's Canyon jet boat, then a K2 glacier-landing flight"],
            ["Aug 25–26", "Anchorage", "Anchorage Museum, Alaska Native Heritage Center & the Coastal Trail"],
            ["Aug 27", "Seward", "Train in by late morning; board Anthem of the Seas"],
            ["Aug 28", "Hubbard Glacier", "Scenic cruising, 1:00–5:00 PM"],
            ["Aug 29", "Juneau", "Self-guided downtown walk — Mount Roberts Tramway & Deckhand Dave's"],
            ["Aug 30", "Skagway", "Self-guided gold-rush town walk"],
            ["Aug 31", "Icy Strait Point", "Port day — excursion still being decided"],
            ["Sep 1", "Ketchikan", "Self-guided waterfront walk"],
            ["Sep 3", "Vancouver", "Disembark"]
          ]
        },
        "panama-canal": {
          title: "Panama Canal",
          range: "September 19 – October 30, 2027 · 41 days",
          bookings: [
            "Serenade of the Seas, 7nt Pacific Coastal Vancouver → San Diego — Ocean View Balcony Guarantee",
            "San Diego, 4 nights between sailings (Oct 3–7)",
            "Serenade of the Seas, 15nt Panama Canal eastward — Spacious Ocean View Balcony 2B 9570, Deluxe Beverage Package booked",
            "Amtrak Tampa → Miami (Oct 22); 1 night in Miami",
            "Hero of the Seas, 7nt Perfect Day CocoCay & East Caribbean — Ocean View N4 10120"
          ],
          stops: [
            ["Sep 28", "Astoria, Oregon", "Port day on the Columbia River"],
            ["Sep 30–Oct 1", "San Francisco", "Overnight in port"],
            ["Oct 3–6", "San Diego", "Old Town, Coronado & the Hotel del Coronado"],
            ["Oct 10", "Puerto Vallarta, Mexico", "Self-guided Malecón & Zona Romántica day"],
            ["Oct 13", "Puerto Quetzal, Guatemala", "Port day — excursion still being decided"],
            ["Oct 15", "Puntarenas, Costa Rica", "Forest Skywalks & Tarcoles River eco-cruise"],
            ["Oct 17", "Panama Canal", "Full-day transit through the locks"],
            ["Oct 18", "Cartagena, Colombia", "Self-guided walled-city day"],
            ["Oct 20", "George Town, Grand Cayman", "Self-guided day in George Town"],
            ["Oct 22", "Tampa → Miami", "Disembark; Amtrak down to Miami"],
            ["Oct 26", "Philipsburg, St Maarten", "Boardwalk & Great Bay Beach day"],
            ["Oct 27", "Charlotte Amalie, St Thomas", "Blackbeard's Castle, the 99 Steps & Magens Bay"],
            ["Oct 29", "Perfect Day at CocoCay", "Beach & waterpark day"],
            ["Oct 30", "Miami", "Disembark; fly home to Boston"]
          ]
        },
        "japan": {
          title: "Japan",
          range: "March 8 – May 3, 2028 · 56 days",
          bookings: [
            "Positioning: Boston → San Francisco → Shanghai, arriving Mar 12 (flights still to book)",
            "Spectrum of the Seas, 8nt Shanghai → Yokohama — Ocean View with Large Balcony 4C 10728",
            "Tokyo, 5 nights (Mar 23–28) and Kyoto, 4 nights (Mar 28–Apr 1) — peak cherry-blossom season",
            "Voyager of the Seas, 12nt Japan Cherry Blossoms roundtrip — Sunset Balcony SB 9690",
            "Voyager of the Seas, 16nt Yokohama → Seattle — Junior Suite J4 9318"
          ],
          stops: [
            ["Mar 12–14", "Shanghai", "Yu Garden, the Bund & Shanghai Tower"],
            ["Mar 17", "Kumamoto (Yatsushiro)", "Port day"],
            ["Mar 18", "Kagoshima", "Port day"],
            ["Mar 20–21", "Kobe", "Overnight in port"],
            ["Mar 23–28", "Tokyo", "Five nights — teamLab Planets, Shibuya Sky & Shinjuku Gyoen on the list"],
            ["Mar 28–Apr 1", "Kyoto", "Four nights among the temples at peak blossom"],
            ["Apr 3", "Osaka", "Port day"],
            ["Apr 5", "Jeju (Seogwipo), South Korea", "Port day"],
            ["Apr 6", "Fukuoka", "Port day"],
            ["Apr 8–9", "Okinawa", "Overnight in port"],
            ["Apr 10", "Kagoshima", "Second call, on the evening run north"],
            ["Apr 12", "Shimizu (Mt Fuji)", "Port day with Fuji views, weather permitting"],
            ["Apr 17–18", "Sapporo (Muroran)", "Overnight in port"],
            ["Apr 24", "International Date Line", "Eastbound crossing — the day happens twice"],
            ["Apr 28–May 1", "Seattle", "Arrive Apr 28 with a night aboard, then two nights in the city; home May 1"]
          ]
        },
        "iceland-greenland": {
          title: "Iceland & Greenland",
          range: "August 29 – September 15, 2028 · 17 nights",
          bookings: [
            "Jewel of the Seas, 17nt Copenhagen → Boston — Spacious Ocean View Balcony 2B 9604, My Time dining (waitlist)",
            "Copenhagen pre-stay, 3 nights before boarding (from Aug 26) — Kronborg Castle day trip to Helsingør"
          ],
          stops: [
            ["Aug 29", "Copenhagen, Denmark", "Board Jewel of the Seas; departs 4:00 PM"],
            ["Aug 30", "Aarhus, Denmark", "In port 7:00 AM–2:00 PM"],
            ["Aug 31–Sep 1", "At sea", "Two sea days"],
            ["Sep 2–3", "Reykjavik, Iceland", "Overnight in port — arrive 9:00 AM Sep 2, depart 6:00 PM Sep 3"],
            ["Sep 4", "Isafjordur, Iceland", "In port 8:00 AM–6:00 PM"],
            ["Sep 5", "Akureyri, Iceland", "In port 7:00 AM–5:00 PM"],
            ["Sep 6", "At sea", "Sea day"],
            ["Sep 7", "Prins Christian Sund, Greenland", "Scenic cruise-by, 9:00 AM–5:00 PM"],
            ["Sep 8", "Qaqortoq, Greenland", "In port 8:00 AM–8:00 PM"],
            ["Sep 9–10", "At sea", "Two sea days"],
            ["Sep 11", "St. John's, Newfoundland", "In port 8:00 AM–6:00 PM"],
            ["Sep 12", "At sea", "Sea day"],
            ["Sep 13", "Halifax, Nova Scotia", "In port 8:00 AM–6:00 PM"],
            ["Sep 14", "At sea", "Sea day"],
            ["Sep 15", "Boston", "Arrive 6:00 AM; disembark"]
          ]
        }
      };

      var modal = document.getElementById("trip-modal");
      var titleEl = document.getElementById("trip-modal-title");
      var datesEl = document.getElementById("trip-modal-dates");
      var bookingsEl = document.getElementById("trip-modal-bookings");
      var stopsEl = document.getElementById("trip-modal-stops");
      var lastTrigger = null;

      function fillList(ul, items, isStops) {
        ul.textContent = "";
        items.forEach(function (item) {
          var li = document.createElement("li");
          if (isStops) {
            var t = document.createElement("time");
            t.textContent = item[0];
            var span = document.createElement("span");
            var strong = document.createElement("strong");
            strong.textContent = item[1];
            span.appendChild(strong);
            if (item[2]) { span.appendChild(document.createTextNode(" — " + item[2])); }
            li.appendChild(t);
            li.appendChild(span);
          } else {
            li.textContent = item;
          }
          ul.appendChild(li);
        });
      }

      function openTrip(key, trigger) {
        var d = TRIP_DETAILS[key];
        if (!d) { return; }
        lastTrigger = trigger || null;
        titleEl.textContent = d.title;
        datesEl.textContent = d.range;
        fillList(bookingsEl, d.bookings, false);
        fillList(stopsEl, d.stops, true);
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        modal.querySelector(".trip-modal-card").scrollTop = 0;
        modal.querySelector(".trip-modal-x").focus();
      }

      function closeTrip() {
        if (modal.hidden) { return; }
        modal.hidden = true;
        document.body.style.overflow = "";
        if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
      }

      Array.prototype.forEach.call(modal.querySelectorAll("[data-trip-close]"), function (el) {
        el.addEventListener("click", closeTrip);
      });
      document.addEventListener("keydown", function (e) {
        if ((e.key === "Escape" || e.key === "Esc") && !modal.hidden) { closeTrip(); }
      });

      Array.prototype.forEach.call(document.querySelectorAll(".trip-row[data-start][data-end][data-trip]"), function (row) {
        var start = new Date(row.getAttribute("data-start") + "T00:00:00");
        var end = new Date(row.getAttribute("data-end") + "T00:00:00");
        var days = Math.round((end - start) / 86400000);
        var key = row.getAttribute("data-trip");
        if (!(days > 7) || !TRIP_DETAILS[key]) { return; }
        row.classList.add("clickable");
        row.setAttribute("tabindex", "0");
        row.setAttribute("role", "button");
        row.setAttribute("aria-haspopup", "dialog");
        var slot = row.querySelector("[data-cd-slot]") || row;
        var hint = document.createElement("span");
        hint.className = "trip-hint";
        hint.innerHTML = "Details <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 5l7 7-7 7\"/></svg>";
        slot.appendChild(hint);
        row.addEventListener("click", function () { openTrip(key, row); });
        row.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openTrip(key, row);
          }
        });
      });
    })();

    // ----- Day links: opening or following a #entry-YYYY-MM-DD anchor reveals
    // the view that holds that journal entry (the main page or a trip archive
    // view), then scrolls to the entry and flashes its outline. Day-link clicks
    // use pushState so the view router (which keys off archive slugs) does not
    // fight the scroll; direct arrivals and back/forward land here via
    // hashchange, after the router has run.
    (function () {
      var main = document.getElementById("view-main");
      var archiveIds = ["spain-transatlantic-jul-aug-2026", "bayonne-miami-sep-2026", "alaska-may-jun-2026", "san-juan-rome-apr-may-2026", "miami-jan-feb-2026", "december-caribbean-nov-dec-2025", "fall-transatlantic-oct-nov-2025", "eastern-canada-sep-oct-2025"];
      function showView(view) {
        archiveIds.forEach(function (id) {
          var v = document.getElementById(id);
          if (v) { v.hidden = v !== view; }
        });
        if (main) { main.hidden = view !== main; }
        document.title = (view && view !== main)
          ? view.getAttribute("data-title") + " · Where's Patrick?"
          : "Where's Patrick?";
      }
      function goToEntry(el, push) {
        var view = el.closest ? el.closest(".view") : null;
        if (view) { showView(view); }
        if (push) {
          try { history.pushState(null, "", "#" + el.id); } catch (e) { /* hash stays shareable via the href */ }
        }
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("flash");
        setTimeout(function () { el.classList.remove("flash"); }, 2400);
      }
      document.addEventListener("click", function (e) {
        var a = e.target && e.target.closest ? e.target.closest("a.day-link") : null;
        if (!a) { return; }
        var el = document.getElementById(a.getAttribute("href").slice(1));
        if (!el) { return; }
        e.preventDefault();
        goToEntry(el, true);
      });
      function fromHash() {
        var id = window.location.hash.replace(/^#/, "");
        if (id.indexOf("entry-") !== 0) { return; }
        var el = document.getElementById(id);
        if (el) { goToEntry(el, false); }
      }
      window.addEventListener("hashchange", fromHash);
      fromHash();
    })();

    // ----- Background popovers: every context note sits behind a
    // tap-friendly "Background" button so the card body stays readable.
    // Clicking toggles the panel in the flow of the card; opening one
    // closes the others, and Escape closes all of them.
    (function () {
      function closeAll(except) {
        document.querySelectorAll(".note-pop-btn[aria-expanded=\"true\"]").forEach(function (b) {
          if (b === except) { return; }
          b.setAttribute("aria-expanded", "false");
          var p = document.getElementById(b.getAttribute("aria-controls"));
          if (p) { p.hidden = true; }
        });
      }
      document.addEventListener("click", function (e) {
        var b = e.target && e.target.closest ? e.target.closest(".note-pop-btn") : null;
        if (!b) { return; }
        var panel = document.getElementById(b.getAttribute("aria-controls"));
        if (!panel) { return; }
        var open = b.getAttribute("aria-expanded") === "true";
        closeAll(b);
        b.setAttribute("aria-expanded", open ? "false" : "true");
        panel.hidden = open;
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") { closeAll(null); }
      });
    })();

    // ----- Place counters: tapping a country or city in the counters runs
    // the journal search for that place and lists every matching day on the
    // page — main journal, Spain and Bayonne archive journals, and the receipt-framework
    // trip archives — each row jumping to the day itself.
    (function () {
      var INDEX =
{"city:venice":{"name":"Venice","visits":1,"days":[{"v":"view-main","d":"2026-10-10","u":"past/view-main.html#entry-2026-10-10"},{"v":"view-main","d":"2026-10-09","u":"past/view-main.html#entry-2026-10-09"},{"v":"view-main","d":"2026-10-08","u":"past/view-main.html#entry-2026-10-08"},{"v":"view-main","d":"2026-10-07","u":"past/view-main.html#entry-2026-10-07"}]},"city:murano":{"name":"Murano","visits":1,"days":[{"v":"view-main","d":"2026-10-09","u":"past/view-main.html#entry-2026-10-09"}]},"city:burano":{"name":"Burano","visits":1,"days":[{"v":"view-main","d":"2026-10-09","u":"past/view-main.html#entry-2026-10-09"}]},"city:ravenna":{"name":"Ravenna","visits":3,"days":[{"v":"view-main","d":"2026-10-17","u":"past/view-main.html#entry-2026-10-17"},{"v":"view-main","d":"2026-10-10","u":"past/view-main.html#entry-2026-10-10"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-18","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-18"}]},"city:rome":{"name":"Rome","visits":1,"days":[{"v":"view-main","d":"2026-10-18","u":"past/view-main.html#entry-2026-10-18"},{"v":"view-main","d":"2026-10-17","u":"past/view-main.html#entry-2026-10-17"}]},"city:civitavecchia-rome":{"name":"Civitavecchia (Rome)","visits":6,"days":[{"v":"view-main","d":"2026-10-25","u":"past/view-main.html#entry-2026-10-25"},{"v":"view-main","d":"2026-10-18","u":"past/view-main.html#entry-2026-10-18"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-25","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-25"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-14","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-14"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-25","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-25"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-18","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-18"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-17","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-17"}]},"city:la-spezia":{"name":"La Spezia","visits":1,"days":[{"v":"view-main","d":"2026-10-26","u":"past/view-main.html#entry-2026-10-26"}]},"city:monterosso":{"name":"Monterosso","visits":1,"days":[{"v":"view-main","d":"2026-10-26","u":"past/view-main.html#entry-2026-10-26"}]},"city:vernazza":{"name":"Vernazza","visits":1,"days":[{"v":"view-main","d":"2026-10-26","u":"past/view-main.html#entry-2026-10-26"}]},"city:manarola":{"name":"Manarola","visits":1,"days":[{"v":"view-main","d":"2026-10-26","u":"past/view-main.html#entry-2026-10-26"}]},"city:riomaggiore":{"name":"Riomaggiore","visits":1,"days":[{"v":"view-main","d":"2026-10-26","u":"past/view-main.html#entry-2026-10-26"}]},"city:messina":{"name":"Messina","visits":2,"days":[{"v":"view-main","d":"2026-10-19","u":"past/view-main.html#entry-2026-10-19"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-16","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-16"}]},"city:taormina":{"name":"Taormina","visits":2,"days":[{"v":"view-main","d":"2026-10-19","u":"past/view-main.html#entry-2026-10-19"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-16","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-16"}]},"city:naples":{"name":"Naples","visits":3,"days":[{"v":"view-main","d":"2026-10-24","u":"past/view-main.html#entry-2026-10-24"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-15","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-15"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-24","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-24"}]},"city:trieste":{"name":"Trieste","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-19","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-19"}]},"city:salerno":{"name":"Salerno","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-24","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-24"}]},"city:kotor":{"name":"Kotor","visits":1,"days":[{"v":"view-main","d":"2026-10-11","u":"past/view-main.html#entry-2026-10-11"}]},"city:perast":{"name":"Perast","visits":1,"days":[{"v":"view-main","d":"2026-10-11","u":"past/view-main.html#entry-2026-10-11"}]},"city:santorini":{"name":"Santorini","visits":3,"days":[{"v":"view-main","d":"2026-10-21","u":"past/view-main.html#entry-2026-10-21"},{"v":"view-main","d":"2026-10-13","u":"past/view-main.html#entry-2026-10-13"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-20","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-20"}]},"city:athens":{"name":"Athens","visits":1,"days":[{"v":"view-main","d":"2026-10-14","u":"past/view-main.html#entry-2026-10-14"}]},"city:mykonos":{"name":"Mykonos","visits":2,"days":[{"v":"view-main","d":"2026-10-22","u":"past/view-main.html#entry-2026-10-22"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-22","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-22"}]},"city:split":{"name":"Split","visits":2,"days":[{"v":"view-main","d":"2026-10-16","u":"past/view-main.html#entry-2026-10-16"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-20","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-20"}]},"city:trogir":{"name":"Trogir","visits":1,"days":[{"v":"view-main","d":"2026-10-16","u":"past/view-main.html#entry-2026-10-16"}]},"city:dubrovnik":{"name":"Dubrovnik","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-21","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-21"}]},"city:madrid":{"name":"Madrid","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-25","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-25","date":"Sat \u00b7 Jul 25, 2026","title":"Madrid \u2192 Barcelona, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-24","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-24","date":"Fri \u00b7 Jul 24, 2026","title":"Madrid, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-23","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-23","date":"Thu \u00b7 Jul 23, 2026","title":"Segovia, \u00c1vila &amp; Toledo, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-22","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-22","date":"Wed \u00b7 Jul 22, 2026","title":"Madrid, Spain"}]},"city:segovia":{"name":"Segovia","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-23","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-23","date":"Thu \u00b7 Jul 23, 2026","title":"Segovia, \u00c1vila &amp; Toledo, Spain"}]},"city:avila":{"name":"\u00c1vila","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-23","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-23","date":"Thu \u00b7 Jul 23, 2026","title":"Segovia, \u00c1vila &amp; Toledo, Spain"}]},"city:toledo":{"name":"Toledo","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-23","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-23","date":"Thu \u00b7 Jul 23, 2026","title":"Segovia, \u00c1vila &amp; Toledo, Spain"}]},"city:barcelona":{"name":"Barcelona","visits":4,"days":[{"v":"view-main","d":"2026-10-28","u":"past/view-main.html#entry-2026-10-28"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-26","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-26","date":"Sun \u00b7 Jul 26, 2026","title":"Barcelona, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-25","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-25","date":"Sat \u00b7 Jul 25, 2026","title":"Madrid \u2192 Barcelona, Spain"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-11","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-11"},{"v":"oasis-transatlantic-oct-2024","d":"2024-10-24","u":"past/oasis-transatlantic-oct-2024.html#entry-2024-10-24"}]},"city:palma-de-mallorca":{"name":"Palma de Mallorca","visits":2,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-27","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-27","date":"Mon \u00b7 Jul 27, 2026","title":"Palma de Mallorca, Spain"},{"v":"oasis-transatlantic-oct-2024","p":"palma-de-mallorca","u":"past/oasis-transatlantic-oct-2024.html#entry-"}]},"city:valldemossa":{"name":"Valldemossa","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-27","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-27","date":"Mon \u00b7 Jul 27, 2026","title":"Palma de Mallorca, Spain"}]},"city:cartagena":{"name":"Cartagena","visits":3,"days":[{"v":"view-main","d":"2026-10-29","u":"past/view-main.html#entry-2026-10-29"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-28","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-28","date":"Tue \u00b7 Jul 28, 2026","title":"Cartagena, Spain"},{"v":"oasis-transatlantic-oct-2024","p":"cartagena","u":"past/oasis-transatlantic-oct-2024.html#entry-"}]},"city:murcia":{"name":"Murcia","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-28","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-28","date":"Tue \u00b7 Jul 28, 2026","title":"Cartagena, Spain"}]},"city:malaga":{"name":"M\u00e1laga","visits":3,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-29","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-29","date":"Wed \u00b7 Jul 29, 2026","title":"M\u00e1laga, Spain"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-08","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-08"},{"v":"oasis-transatlantic-oct-2024","p":"malaga","u":"past/oasis-transatlantic-oct-2024.html#entry-"}]},"city:nerja":{"name":"Nerja","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-29","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-29","date":"Wed \u00b7 Jul 29, 2026","title":"M\u00e1laga, Spain"}]},"city:frigiliana":{"name":"Frigiliana","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-29","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-29","date":"Wed \u00b7 Jul 29, 2026","title":"M\u00e1laga, Spain"}]},"city:cadiz":{"name":"C\u00e1diz","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-30","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-30","date":"Thu \u00b7 Jul 30, 2026","title":"C\u00e1diz, Spain"}]},"city:alicante":{"name":"Alicante","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-09","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-09"}]},"city:valencia":{"name":"Valencia","visits":2,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-10","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-10"},{"v":"oasis-transatlantic-oct-2024","p":"valencia","u":"past/oasis-transatlantic-oct-2024.html#entry-"}]},"city:la-coruna":{"name":"La Coru\u00f1a","visits":1,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-18","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-18"}]},"city:vigo":{"name":"Vigo","visits":1,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-19","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-19"}]},"city:orlando":{"name":"Orlando","visits":2,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-09","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-09","date":"Sun \u00b7 Aug 9, 2026","title":"Universal Studios, Orlando"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-08","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-08","date":"Sat \u00b7 Aug 8, 2026","title":"Orlando, Florida"},{"v":"star-cococay-aug-2025","d":"2025-08-26","u":"past/star-cococay-aug-2025.html#entry-2025-08-26"}]},"city:nassau":{"name":"Nassau","visits":11,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-11","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-11","date":"Tue \u00b7 Aug 11, 2026","title":"Nassau, Bahamas"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-25","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-25"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-15","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-15"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-01","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-01"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-29","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-29"},{"v":"vision-baltimore-mar-2025","d":"2025-03-26","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-26"},{"v":"oasis-transatlantic-oct-2024","p":"nassau","u":"past/oasis-transatlantic-oct-2024.html#entry-"},{"v":"symphony-caribbean-mar-2024","p":"nassau","u":"past/symphony-caribbean-mar-2024.html#entry-"},{"v":"adventure-caribbean-dec-2023","p":"nassau","u":"past/adventure-caribbean-dec-2023.html#entry-"},{"v":"oasis-caribbean-sep-2023","p":"nassau","u":"past/oasis-caribbean-sep-2023.html#entry-"},{"v":"allure-caribbean-oct-2022","p":"nassau","u":"past/allure-caribbean-oct-2022.html#entry-"}]},"city:cococay":{"name":"CocoCay","visits":12,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-12","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-12","date":"Wed \u00b7 Aug 12, 2026","title":"CocoCay, Bahamas"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-27","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-27"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-08","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-08"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-02","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-02"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-20","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-20"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-15","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-15"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-07","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-07"},{"v":"star-cococay-aug-2025","d":"2025-08-29","u":"past/star-cococay-aug-2025.html#entry-2025-08-29"},{"v":"jewel-cococay-jul-2025","d":"2025-07-27","u":"past/jewel-cococay-jul-2025.html#entry-2025-07-27"},{"v":"oasis-caribbean-sep-2023","p":"cococay","u":"past/oasis-caribbean-sep-2023.html#entry-"},{"v":"harmony-caribbean-mar-2023","p":"cococay","u":"past/harmony-caribbean-mar-2023.html#entry-"},{"v":"allure-caribbean-oct-2022","p":"cococay","u":"past/allure-caribbean-oct-2022.html#entry-"}]},"city:san-juan":{"name":"San Juan","visits":6,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-29","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-29","date":"Sat \u00b7 Aug 29, 2026","title":"San Juan, Puerto Rico"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-22","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-22","date":"Sat \u00b7 Aug 22, 2026","title":"San Juan, Puerto Rico"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-15","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-15"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-14","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-14"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-19","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-19"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-12","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-12"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-11","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-11"},{"v":"adventure-caribbean-dec-2024","d":"2024-12-30","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-30"}]},"city:philipsburg-st-maarten":{"name":"Philipsburg (St. Maarten)","visits":5,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-25","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-25","date":"Tue \u00b7 Aug 25, 2026","title":"St Maarten"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-17","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-17"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-20","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-20"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-12","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-12"},{"v":"adventure-caribbean-dec-2024","d":"2025-01-01","u":"past/adventure-caribbean-dec-2024.html#entry-2025-01-01"}]},"city:roseau":{"name":"Roseau","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-27","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-27","date":"Thu \u00b7 Aug 27, 2026","title":"Dominica Favorite port"}]},"city:st-johns-antigua":{"name":"St. John\u2019s (Antigua)","visits":2,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-26","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-26"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-18","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-18"}]},"city:st-croix":{"name":"St. Croix","visits":3,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-24","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-24"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-20","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-20"},{"v":"adventure-caribbean-dec-2024","d":"2024-12-31","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-31"}]},"city:newark":{"name":"Newark","visits":1,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-02","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-02"}]},"city:bayonne":{"name":"Bayonne","visits":5,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-17","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-17","date":"Thu \u00b7 Sep 17, 2026","title":"Bayonne \u2192 Miami"},{"v":"bayonne-miami-sep-2026","d":"2026-09-12","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-12","date":"Sat \u00b7 Sep 12, 2026","title":"Bayonne, New Jersey"},{"v":"bayonne-miami-sep-2026","d":"2026-09-03","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-03","date":"Thu \u00b7 Sep 3, 2026","title":"Bayonne \u2192 New York"},{"v":"oasis-caribbean-sep-2023","d":"2023-09-10","u":"past/oasis-caribbean-sep-2023.html#entry-2023-09-10"},{"v":"oasis-caribbean-sep-2023","d":"2023-09-03","u":"past/oasis-caribbean-sep-2023.html#entry-2023-09-03"}]},"city:boston":{"name":"Boston","visits":4,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-05","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-05","date":"Sat \u00b7 Sep 5, 2026","title":"Boston"},{"v":"eastern-canada-sep-oct-2025","d":"2025-10-05","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-10-05"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-28","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-28"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-21","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-21"}]},"city:portland":{"name":"Portland","visits":3,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-06","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-06","date":"Sun \u00b7 Sep 6, 2026","title":"Portland, Maine"},{"v":"eastern-canada-sep-oct-2025","d":"2025-10-04","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-10-04"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-22","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-22"}]},"city:saint-john":{"name":"Saint John","visits":3,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-08","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-08","date":"Tue \u00b7 Sep 8, 2026","title":"Saint John, New Brunswick \u00b7 Day 2"},{"v":"bayonne-miami-sep-2026","d":"2026-09-07","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-07","date":"Mon \u00b7 Sep 7, 2026","title":"Saint John, New Brunswick"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-29","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-29"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-23","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-23"}]},"city:sydney":{"name":"Sydney","visits":3,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-10","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-10","date":"Thu \u00b7 Sep 10, 2026","title":"Sydney, Nova Scotia"},{"v":"eastern-canada-sep-oct-2025","d":"2025-10-02","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-10-02"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-26","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-26"}]},"city:charlottetown":{"name":"Charlottetown","visits":1,"days":[{"v":"eastern-canada-sep-oct-2025","d":"2025-09-25","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-25"}]},"city:halifax":{"name":"Halifax","visits":1,"days":[{"v":"eastern-canada-sep-oct-2025","d":"2025-10-01","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-10-01"}]},"city:harwich":{"name":"Harwich","visits":1,"days":[{"v":"cape-cod-jul-2026","d":"2026-07-18","u":"past/cape-cod-jul-2026.html#entry-2026-07-18"},{"v":"cape-cod-jul-2026","d":"2026-07-17","u":"past/cape-cod-jul-2026.html#entry-2026-07-17"},{"v":"cape-cod-jul-2026","d":"2026-07-16","u":"past/cape-cod-jul-2026.html#entry-2026-07-16"},{"v":"cape-cod-jul-2026","d":"2026-07-15","u":"past/cape-cod-jul-2026.html#entry-2026-07-15"},{"v":"cape-cod-jul-2026","d":"2026-07-14","u":"past/cape-cod-jul-2026.html#entry-2026-07-14"},{"v":"cape-cod-jul-2026","d":"2026-07-13","u":"past/cape-cod-jul-2026.html#entry-2026-07-13"},{"v":"cape-cod-jul-2026","d":"2026-07-12","u":"past/cape-cod-jul-2026.html#entry-2026-07-12"},{"v":"cape-cod-jul-2026","d":"2026-07-11","u":"past/cape-cod-jul-2026.html#entry-2026-07-11"}]},"city:eastham":{"name":"Eastham","visits":1,"days":[{"v":"cape-cod-jun-jul-2025","d":"2025-07-05","u":"past/cape-cod-jun-jul-2025.html#entry-2025-07-05"},{"v":"cape-cod-jun-jul-2025","d":"2025-07-04","u":"past/cape-cod-jun-jul-2025.html#entry-2025-07-04"},{"v":"cape-cod-jun-jul-2025","d":"2025-07-03","u":"past/cape-cod-jun-jul-2025.html#entry-2025-07-03"},{"v":"cape-cod-jun-jul-2025","d":"2025-07-02","u":"past/cape-cod-jun-jul-2025.html#entry-2025-07-02"},{"v":"cape-cod-jun-jul-2025","d":"2025-07-01","u":"past/cape-cod-jun-jul-2025.html#entry-2025-07-01"},{"v":"cape-cod-jun-jul-2025","d":"2025-06-30","u":"past/cape-cod-jun-jul-2025.html#entry-2025-06-30"},{"v":"cape-cod-jun-jul-2025","d":"2025-06-29","u":"past/cape-cod-jun-jul-2025.html#entry-2025-06-29"},{"v":"cape-cod-jun-jul-2025","d":"2025-06-28","u":"past/cape-cod-jun-jul-2025.html#entry-2025-06-28"}]},"city:bermuda-royal-naval-dockyard":{"name":"Bermuda (Royal Naval Dockyard)","visits":2,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-15","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-15","date":"Tue \u00b7 Sep 15, 2026","title":"Bermuda / Hamilton"},{"v":"bayonne-miami-sep-2026","d":"2026-09-14","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-14","date":"Mon \u00b7 Sep 14, 2026","title":"Bermuda"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-30","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-30"}]},"city:hamilton":{"name":"Hamilton","visits":1,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-15","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-15","date":"Tue \u00b7 Sep 15, 2026","title":"Bermuda / Hamilton"}]},"city:miami":{"name":"Miami","visits":16,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-28","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-28","date":"Mon \u00b7 Sep 28, 2026","title":"Miami \u2192 Boston"},{"v":"bayonne-miami-sep-2026","d":"2026-09-24","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-24","date":"Thu \u00b7 Sep 24, 2026","title":"Miami turnaround"},{"v":"bayonne-miami-sep-2026","d":"2026-09-19","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-19","date":"Sat \u00b7 Sep 19, 2026","title":"Miami \u2192 Virgin"},{"v":"bayonne-miami-sep-2026","d":"2026-09-18","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-18","date":"Fri \u00b7 Sep 18, 2026","title":"Miami"},{"v":"bayonne-miami-sep-2026","d":"2026-09-17","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-17","date":"Thu \u00b7 Sep 17, 2026","title":"Bayonne \u2192 Miami"},{"v":"miami-jan-feb-2026","d":"2026-02-04","u":"past/miami-jan-feb-2026.html#entry-2026-02-04"},{"v":"miami-jan-feb-2026","d":"2026-01-30","u":"past/miami-jan-feb-2026.html#entry-2026-01-30"},{"v":"miami-jan-feb-2026","d":"2026-01-25","u":"past/miami-jan-feb-2026.html#entry-2026-01-25"},{"v":"miami-jan-feb-2026","d":"2026-01-18","u":"past/miami-jan-feb-2026.html#entry-2026-01-18"},{"v":"miami-jan-feb-2026","d":"2026-01-17","u":"past/miami-jan-feb-2026.html#entry-2026-01-17"},{"v":"miami-jan-feb-2026","d":"2026-01-10","u":"past/miami-jan-feb-2026.html#entry-2026-01-10"},{"v":"miami-jan-feb-2026","d":"2026-01-03","u":"past/miami-jan-feb-2026.html#entry-2026-01-03"},{"v":"miami-jan-feb-2026","d":"2026-01-02","u":"past/miami-jan-feb-2026.html#entry-2026-01-02"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-14","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-14"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-07","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-07"},{"v":"december-caribbean-nov-dec-2025","d":"2025-11-30","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-11-30"},{"v":"december-caribbean-nov-dec-2025","d":"2025-11-29","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-11-29"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-08","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-08"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-01","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-01"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-31","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-31"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-30","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-30"},{"v":"harmony-caribbean-mar-2023","d":"2023-04-01","u":"past/harmony-caribbean-mar-2023.html#entry-2023-04-01"},{"v":"harmony-caribbean-mar-2023","d":"2023-03-25","u":"past/harmony-caribbean-mar-2023.html#entry-2023-03-25"}]},"city:ft-lauderdale":{"name":"Ft Lauderdale","visits":13,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-04-26","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-26"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-20","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-20"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-14","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-14"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-21","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-21"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-17","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-17"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-16","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-16"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-08","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-08"},{"v":"jewel-cococay-jul-2025","d":"2025-07-28","u":"past/jewel-cococay-jul-2025.html#entry-2025-07-28"},{"v":"jewel-cococay-jul-2025","d":"2025-07-25","u":"past/jewel-cococay-jul-2025.html#entry-2025-07-25"},{"v":"jewel-cococay-jul-2025","d":"2025-07-24","u":"past/jewel-cococay-jul-2025.html#entry-2025-07-24"},{"v":"oasis-transatlantic-oct-2024","d":"2024-11-07","u":"past/oasis-transatlantic-oct-2024.html#entry-2024-11-07"},{"v":"symphony-caribbean-mar-2024","d":"2024-03-23","u":"past/symphony-caribbean-mar-2024.html#entry-2024-03-23"},{"v":"symphony-caribbean-mar-2024","d":"2024-03-17","u":"past/symphony-caribbean-mar-2024.html#entry-2024-03-17"},{"v":"allure-caribbean-oct-2022","d":"2022-11-05","u":"past/allure-caribbean-oct-2022.html#entry-2022-11-05"},{"v":"allure-caribbean-oct-2022","d":"2022-10-29","u":"past/allure-caribbean-oct-2022.html#entry-2022-10-29"}]},"city:grand-turk":{"name":"Grand Turk","visits":1,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-21","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-21","date":"Mon \u00b7 Sep 21, 2026","title":"Grand Turk"}]},"city:bimini":{"name":"Bimini","visits":7,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-27","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-27","date":"Sun \u00b7 Sep 27, 2026","title":"Bimini"},{"v":"bayonne-miami-sep-2026","d":"2026-09-23","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-23","date":"Wed \u00b7 Sep 23, 2026","title":"Bimini"},{"v":"miami-jan-feb-2026","d":"2026-02-03","u":"past/miami-jan-feb-2026.html#entry-2026-02-03"},{"v":"miami-jan-feb-2026","d":"2026-01-29","u":"past/miami-jan-feb-2026.html#entry-2026-01-29"},{"v":"miami-jan-feb-2026","d":"2026-01-16","u":"past/miami-jan-feb-2026.html#entry-2026-01-16"},{"v":"miami-jan-feb-2026","d":"2026-01-09","u":"past/miami-jan-feb-2026.html#entry-2026-01-09"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-18","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-18"}]},"city:key-west":{"name":"Key West","visits":1,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-25","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-25","date":"Fri \u00b7 Sep 25, 2026","title":"Key West &amp; sail-away"}]},"city:seattle":{"name":"Seattle","visits":1,"days":[{"v":"alaska-may-jun-2026","d":"2026-05-28","u":"past/alaska-may-jun-2026.html#entry-2026-05-28"},{"v":"alaska-may-jun-2026","d":"2026-05-27","u":"past/alaska-may-jun-2026.html#entry-2026-05-27"}]},"city:vancouver":{"name":"Vancouver","visits":5,"days":[{"v":"alaska-may-jun-2026","d":"2026-06-26","u":"past/alaska-may-jun-2026.html#entry-2026-06-26"},{"v":"alaska-may-jun-2026","d":"2026-06-12","u":"past/alaska-may-jun-2026.html#entry-2026-06-12"},{"v":"alaska-may-jun-2026","d":"2026-06-11","u":"past/alaska-may-jun-2026.html#entry-2026-06-11"},{"v":"alaska-may-jun-2026","d":"2026-05-29","u":"past/alaska-may-jun-2026.html#entry-2026-05-29"},{"v":"alaska-may-jun-2026","d":"2026-05-28","u":"past/alaska-may-jun-2026.html#entry-2026-05-28"},{"v":"brilliance-alaska-may-2024","d":"2024-06-02","u":"past/brilliance-alaska-may-2024.html#entry-2024-06-02"},{"v":"brilliance-alaska-may-2024","d":"2024-05-26","u":"past/brilliance-alaska-may-2024.html#entry-2024-05-26"}]},"city:ketchikan":{"name":"Ketchikan","visits":2,"days":[{"v":"alaska-may-jun-2026","d":"2026-05-31","u":"past/alaska-may-jun-2026.html#entry-2026-05-31"},{"v":"brilliance-alaska-may-2024","p":"ketchikan","u":"past/brilliance-alaska-may-2024.html#entry-"}]},"city:icy-strait-point":{"name":"Icy Strait Point","visits":3,"days":[{"v":"alaska-may-jun-2026","d":"2026-06-23","u":"past/alaska-may-jun-2026.html#entry-2026-06-23"},{"v":"alaska-may-jun-2026","d":"2026-06-09","u":"past/alaska-may-jun-2026.html#entry-2026-06-09"},{"v":"alaska-may-jun-2026","d":"2026-06-01","u":"past/alaska-may-jun-2026.html#entry-2026-06-01"}]},"city:sitka":{"name":"Sitka","visits":3,"days":[{"v":"alaska-may-jun-2026","d":"2026-06-15","u":"past/alaska-may-jun-2026.html#entry-2026-06-15"},{"v":"alaska-may-jun-2026","d":"2026-06-02","u":"past/alaska-may-jun-2026.html#entry-2026-06-02"},{"v":"brilliance-alaska-may-2024","p":"sitka","u":"past/brilliance-alaska-may-2024.html#entry-"}]},"city:skagway":{"name":"Skagway","visits":4,"days":[{"v":"alaska-may-jun-2026","d":"2026-06-22","u":"past/alaska-may-jun-2026.html#entry-2026-06-22"},{"v":"alaska-may-jun-2026","d":"2026-06-17","u":"past/alaska-may-jun-2026.html#entry-2026-06-17"},{"v":"alaska-may-jun-2026","d":"2026-06-08","u":"past/alaska-may-jun-2026.html#entry-2026-06-08"},{"v":"alaska-may-jun-2026","d":"2026-06-03","u":"past/alaska-may-jun-2026.html#entry-2026-06-03"}]},"city:juneau":{"name":"Juneau","visits":4,"days":[{"v":"alaska-may-jun-2026","d":"2026-06-21","u":"past/alaska-may-jun-2026.html#entry-2026-06-21"},{"v":"alaska-may-jun-2026","d":"2026-06-16","u":"past/alaska-may-jun-2026.html#entry-2026-06-16"},{"v":"alaska-may-jun-2026","d":"2026-06-07","u":"past/alaska-may-jun-2026.html#entry-2026-06-07"},{"v":"brilliance-alaska-may-2024","p":"juneau","u":"past/brilliance-alaska-may-2024.html#entry-"}]},"city:seward":{"name":"Seward","visits":2,"days":[{"v":"alaska-may-jun-2026","d":"2026-06-19","u":"past/alaska-may-jun-2026.html#entry-2026-06-19"},{"v":"alaska-may-jun-2026","d":"2026-06-05","u":"past/alaska-may-jun-2026.html#entry-2026-06-05"}]},"city:tortola":{"name":"Tortola","visits":2,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-16","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-16"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-13","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-13"}]},"city:oranjestad-aruba":{"name":"Oranjestad (Aruba)","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-04-15","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-15"}]},"city:willemstad-curacao":{"name":"Willemstad (Cura\u00e7ao)","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-04-16","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-16"}]},"city:kralendijk-bonaire":{"name":"Kralendijk (Bonaire)","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-04-17","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-17"}]},"city:charlotte-amalie-st-thomas":{"name":"Charlotte Amalie (St. Thomas)","visits":4,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-23","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-23"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-21","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-21"},{"v":"miami-jan-feb-2026","d":"2026-01-21","u":"past/miami-jan-feb-2026.html#entry-2026-01-21"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-13","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-13"}]},"city:basseterre-st-kitts":{"name":"Basseterre (St. Kitts)","visits":3,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-19","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-19"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-22","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-22"},{"v":"miami-jan-feb-2026","d":"2026-01-22","u":"past/miami-jan-feb-2026.html#entry-2026-01-22"}]},"city:ponta-delgada":{"name":"Ponta Delgada","visits":3,"days":[{"v":"view-main","d":"2026-11-02","u":"past/view-main.html#entry-2026-11-02"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-05","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-05"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-22","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-22"}]},"city:lisbon":{"name":"Lisbon","visits":2,"days":[{"v":"view-main","d":"2026-10-31","u":"past/view-main.html#entry-2026-10-31"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-20","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-20"}]},"city:toulon":{"name":"Toulon","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-12","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-12"}]},"city:ajaccio":{"name":"Ajaccio","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-13","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-13"}]},"city:sarande":{"name":"Sarand\u00eb","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-22","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-22"}]},"city:george-town":{"name":"George Town","visits":3,"days":[{"v":"miami-jan-feb-2026","d":"2026-01-12","u":"past/miami-jan-feb-2026.html#entry-2026-01-12"},{"v":"miami-jan-feb-2026","d":"2026-01-05","u":"past/miami-jan-feb-2026.html#entry-2026-01-05"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-10","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-10"}]},"city:cozumel":{"name":"Cozumel","visits":6,"days":[{"v":"miami-jan-feb-2026","d":"2026-01-27","u":"past/miami-jan-feb-2026.html#entry-2026-01-27"},{"v":"miami-jan-feb-2026","d":"2026-01-07","u":"past/miami-jan-feb-2026.html#entry-2026-01-07"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-18","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-18"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-12","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-12"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-05","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-05"},{"v":"harmony-caribbean-mar-2023","p":"cozumel","u":"past/harmony-caribbean-mar-2023.html#entry-"}]},"city:puerto-costa-maya":{"name":"Puerto Costa Maya","visits":2,"days":[{"v":"december-caribbean-nov-dec-2025","d":"2025-12-17","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-17"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-03","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-03"}]},"city:ocho-rios":{"name":"Ocho Rios","visits":1,"days":[{"v":"miami-jan-feb-2026","d":"2026-01-13","u":"past/miami-jan-feb-2026.html#entry-2026-01-13"}]},"city:puerto-plata":{"name":"Puerto Plata","visits":5,"days":[{"v":"miami-jan-feb-2026","d":"2026-02-01","u":"past/miami-jan-feb-2026.html#entry-2026-02-01"},{"v":"miami-jan-feb-2026","d":"2026-01-20","u":"past/miami-jan-feb-2026.html#entry-2026-01-20"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-04","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-04"},{"v":"adventure-caribbean-dec-2023","p":"puerto-plata","u":"past/adventure-caribbean-dec-2023.html#entry-"},{"v":"allure-caribbean-oct-2022","p":"puerto-plata","u":"past/allure-caribbean-oct-2022.html#entry-"}]},"city:southampton":{"name":"Southampton","visits":2,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-16","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-16"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-11","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-11"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-10","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-10"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-09","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-09"}]},"city:hamburg":{"name":"Hamburg","visits":1,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-13","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-13"}]},"city:rotterdam":{"name":"Rotterdam","visits":1,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-15","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-15"}]},"city:roatan":{"name":"Roat\u00e1n","visits":2,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-04","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-04"},{"v":"harmony-caribbean-mar-2023","p":"roatan","u":"past/harmony-caribbean-mar-2023.html#entry-"}]},"country:italy":{"name":"Italy","visits":16,"days":[{"v":"view-main","d":"2026-10-26","u":"past/view-main.html#entry-2026-10-26"},{"v":"view-main","d":"2026-10-25","u":"past/view-main.html#entry-2026-10-25"},{"v":"view-main","d":"2026-10-24","u":"past/view-main.html#entry-2026-10-24"},{"v":"view-main","d":"2026-10-19","u":"past/view-main.html#entry-2026-10-19"},{"v":"view-main","d":"2026-10-18","u":"past/view-main.html#entry-2026-10-18"},{"v":"view-main","d":"2026-10-17","u":"past/view-main.html#entry-2026-10-17"},{"v":"view-main","d":"2026-10-10","u":"past/view-main.html#entry-2026-10-10"},{"v":"view-main","d":"2026-10-09","u":"past/view-main.html#entry-2026-10-09"},{"v":"view-main","d":"2026-10-08","u":"past/view-main.html#entry-2026-10-08"},{"v":"view-main","d":"2026-10-07","u":"past/view-main.html#entry-2026-10-07"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-25","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-25"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-24","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-24"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-19","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-19"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-18","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-18"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-16","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-16"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-15","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-15"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-14","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-14"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-25","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-25"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-24","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-24"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-24","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-24"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-24","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-24"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-18","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-18"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-17","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-17"}]},"country:montenegro":{"name":"Montenegro","visits":1,"days":[{"v":"view-main","d":"2026-10-11","u":"past/view-main.html#entry-2026-10-11"}]},"country:greece":{"name":"Greece","visits":6,"days":[{"v":"view-main","d":"2026-10-22","u":"past/view-main.html#entry-2026-10-22"},{"v":"view-main","d":"2026-10-21","u":"past/view-main.html#entry-2026-10-21"},{"v":"view-main","d":"2026-10-14","u":"past/view-main.html#entry-2026-10-14"},{"v":"view-main","d":"2026-10-13","u":"past/view-main.html#entry-2026-10-13"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-22","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-22"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-20","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-20"}]},"country:croatia":{"name":"Croatia","visits":3,"days":[{"v":"view-main","d":"2026-10-16","u":"past/view-main.html#entry-2026-10-16"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-21","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-21"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-20","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-20"}]},"country:spain":{"name":"Spain","visits":18,"days":[{"v":"view-main","d":"2026-10-29","u":"past/view-main.html#entry-2026-10-29"},{"v":"view-main","d":"2026-10-28","u":"past/view-main.html#entry-2026-10-28"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-30","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-30","date":"Thu \u00b7 Jul 30, 2026","title":"C\u00e1diz, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-29","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-29","date":"Wed \u00b7 Jul 29, 2026","title":"M\u00e1laga, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-28","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-28","date":"Tue \u00b7 Jul 28, 2026","title":"Cartagena, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-27","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-27","date":"Mon \u00b7 Jul 27, 2026","title":"Palma de Mallorca, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-26","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-26","date":"Sun \u00b7 Jul 26, 2026","title":"Barcelona, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-25","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-25","date":"Sat \u00b7 Jul 25, 2026","title":"Madrid \u2192 Barcelona, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-24","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-24","date":"Fri \u00b7 Jul 24, 2026","title":"Madrid, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-23","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-23","date":"Thu \u00b7 Jul 23, 2026","title":"Segovia, \u00c1vila &amp; Toledo, Spain"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-22","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-22","date":"Wed \u00b7 Jul 22, 2026","title":"Madrid, Spain"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-11","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-11"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-10","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-10"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-09","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-09"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-08","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-08"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-19","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-19"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-18","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-18"},{"v":"oasis-transatlantic-oct-2024","d":"2024-10-24","u":"past/oasis-transatlantic-oct-2024.html#entry-2024-10-24"},{"v":"oasis-transatlantic-oct-2024","p":"palma-de-mallorca","u":"past/oasis-transatlantic-oct-2024.html#entry-"},{"v":"oasis-transatlantic-oct-2024","p":"valencia","u":"past/oasis-transatlantic-oct-2024.html#entry-"},{"v":"oasis-transatlantic-oct-2024","p":"cartagena","u":"past/oasis-transatlantic-oct-2024.html#entry-"},{"v":"oasis-transatlantic-oct-2024","p":"malaga","u":"past/oasis-transatlantic-oct-2024.html#entry-"}]},"country:united-states":{"name":"United States","visits":77,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-28","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-28","date":"Mon \u00b7 Sep 28, 2026","title":"Miami \u2192 Boston"},{"v":"bayonne-miami-sep-2026","d":"2026-09-25","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-25","date":"Fri \u00b7 Sep 25, 2026","title":"Key West &amp; sail-away"},{"v":"bayonne-miami-sep-2026","d":"2026-09-24","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-24","date":"Thu \u00b7 Sep 24, 2026","title":"Miami turnaround"},{"v":"bayonne-miami-sep-2026","d":"2026-09-19","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-19","date":"Sat \u00b7 Sep 19, 2026","title":"Miami \u2192 Virgin"},{"v":"bayonne-miami-sep-2026","d":"2026-09-18","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-18","date":"Fri \u00b7 Sep 18, 2026","title":"Miami"},{"v":"bayonne-miami-sep-2026","d":"2026-09-17","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-17","date":"Thu \u00b7 Sep 17, 2026","title":"Bayonne \u2192 Miami"},{"v":"bayonne-miami-sep-2026","d":"2026-09-12","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-12","date":"Sat \u00b7 Sep 12, 2026","title":"Bayonne, New Jersey"},{"v":"bayonne-miami-sep-2026","d":"2026-09-06","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-06","date":"Sun \u00b7 Sep 6, 2026","title":"Portland, Maine"},{"v":"bayonne-miami-sep-2026","d":"2026-09-05","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-05","date":"Sat \u00b7 Sep 5, 2026","title":"Boston"},{"v":"bayonne-miami-sep-2026","d":"2026-09-03","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-03","date":"Thu \u00b7 Sep 3, 2026","title":"Bayonne \u2192 New York"},{"v":"bayonne-miami-sep-2026","d":"2026-09-02","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-02"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-09","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-09","date":"Sun \u00b7 Aug 9, 2026","title":"Universal Studios, Orlando"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-08","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-08","date":"Sat \u00b7 Aug 8, 2026","title":"Orlando, Florida"},{"v":"cape-cod-jul-2026","d":"2026-07-18","u":"past/cape-cod-jul-2026.html#entry-2026-07-18"},{"v":"cape-cod-jul-2026","d":"2026-07-17","u":"past/cape-cod-jul-2026.html#entry-2026-07-17"},{"v":"cape-cod-jul-2026","d":"2026-07-16","u":"past/cape-cod-jul-2026.html#entry-2026-07-16"},{"v":"cape-cod-jul-2026","d":"2026-07-15","u":"past/cape-cod-jul-2026.html#entry-2026-07-15"},{"v":"cape-cod-jul-2026","d":"2026-07-14","u":"past/cape-cod-jul-2026.html#entry-2026-07-14"},{"v":"cape-cod-jul-2026","d":"2026-07-13","u":"past/cape-cod-jul-2026.html#entry-2026-07-13"},{"v":"cape-cod-jul-2026","d":"2026-07-12","u":"past/cape-cod-jul-2026.html#entry-2026-07-12"},{"v":"cape-cod-jul-2026","d":"2026-07-11","u":"past/cape-cod-jul-2026.html#entry-2026-07-11"},{"v":"alaska-may-jun-2026","d":"2026-06-23","u":"past/alaska-may-jun-2026.html#entry-2026-06-23"},{"v":"alaska-may-jun-2026","d":"2026-06-22","u":"past/alaska-may-jun-2026.html#entry-2026-06-22"},{"v":"alaska-may-jun-2026","d":"2026-06-21","u":"past/alaska-may-jun-2026.html#entry-2026-06-21"},{"v":"alaska-may-jun-2026","d":"2026-06-19","u":"past/alaska-may-jun-2026.html#entry-2026-06-19"},{"v":"alaska-may-jun-2026","d":"2026-06-17","u":"past/alaska-may-jun-2026.html#entry-2026-06-17"},{"v":"alaska-may-jun-2026","d":"2026-06-16","u":"past/alaska-may-jun-2026.html#entry-2026-06-16"},{"v":"alaska-may-jun-2026","d":"2026-06-15","u":"past/alaska-may-jun-2026.html#entry-2026-06-15"},{"v":"alaska-may-jun-2026","d":"2026-06-09","u":"past/alaska-may-jun-2026.html#entry-2026-06-09"},{"v":"alaska-may-jun-2026","d":"2026-06-08","u":"past/alaska-may-jun-2026.html#entry-2026-06-08"},{"v":"alaska-may-jun-2026","d":"2026-06-07","u":"past/alaska-may-jun-2026.html#entry-2026-06-07"},{"v":"alaska-may-jun-2026","d":"2026-06-05","u":"past/alaska-may-jun-2026.html#entry-2026-06-05"},{"v":"alaska-may-jun-2026","d":"2026-06-03","u":"past/alaska-may-jun-2026.html#entry-2026-06-03"},{"v":"alaska-may-jun-2026","d":"2026-06-02","u":"past/alaska-may-jun-2026.html#entry-2026-06-02"},{"v":"alaska-may-jun-2026","d":"2026-06-01","u":"past/alaska-may-jun-2026.html#entry-2026-06-01"},{"v":"alaska-may-jun-2026","d":"2026-05-31","u":"past/alaska-may-jun-2026.html#entry-2026-05-31"},{"v":"alaska-may-jun-2026","d":"2026-05-28","u":"past/alaska-may-jun-2026.html#entry-2026-05-28"},{"v":"alaska-may-jun-2026","d":"2026-05-27","u":"past/alaska-may-jun-2026.html#entry-2026-05-27"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-26","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-26"},{"v":"miami-jan-feb-2026","d":"2026-02-04","u":"past/miami-jan-feb-2026.html#entry-2026-02-04"},{"v":"miami-jan-feb-2026","d":"2026-01-30","u":"past/miami-jan-feb-2026.html#entry-2026-01-30"},{"v":"miami-jan-feb-2026","d":"2026-01-25","u":"past/miami-jan-feb-2026.html#entry-2026-01-25"},{"v":"miami-jan-feb-2026","d":"2026-01-18","u":"past/miami-jan-feb-2026.html#entry-2026-01-18"},{"v":"miami-jan-feb-2026","d":"2026-01-17","u":"past/miami-jan-feb-2026.html#entry-2026-01-17"},{"v":"miami-jan-feb-2026","d":"2026-01-10","u":"past/miami-jan-feb-2026.html#entry-2026-01-10"},{"v":"miami-jan-feb-2026","d":"2026-01-03","u":"past/miami-jan-feb-2026.html#entry-2026-01-03"},{"v":"miami-jan-feb-2026","d":"2026-01-02","u":"past/miami-jan-feb-2026.html#entry-2026-01-02"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-20","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-20"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-14","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-14"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-07","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-07"},{"v":"december-caribbean-nov-dec-2025","d":"2025-11-30","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-11-30"},{"v":"december-caribbean-nov-dec-2025","d":"2025-11-29","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-11-29"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-21","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-21"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-17","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-17"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-16","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-16"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-08","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-08"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-01","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-01"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-31","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-31"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-30","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-30"},{"v":"eastern-canada-sep-oct-2025","d":"2025-10-05","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-10-05"},{"v":"eastern-canada-sep-oct-2025","d":"2025-10-04","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-10-04"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-28","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-28"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-22","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-22"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-21","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-21"},{"v":"star-cococay-aug-2025","d":"2025-08-31","u":"past/star-cococay-aug-2025.html#entry-2025-08-31"},{"v":"star-cococay-aug-2025","d":"2025-08-27","u":"past/star-cococay-aug-2025.html#entry-2025-08-27"},{"v":"star-cococay-aug-2025","d":"2025-08-26","u":"past/star-cococay-aug-2025.html#entry-2025-08-26"},{"v":"jewel-cococay-jul-2025","d":"2025-07-28","u":"past/jewel-cococay-jul-2025.html#entry-2025-07-28"},{"v":"jewel-cococay-jul-2025","d":"2025-07-25","u":"past/jewel-cococay-jul-2025.html#entry-2025-07-25"},{"v":"jewel-cococay-jul-2025","d":"2025-07-24","u":"past/jewel-cococay-jul-2025.html#entry-2025-07-24"},{"v":"cape-cod-jun-jul-2025","d":"2025-07-05","u":"past/cape-cod-jun-jul-2025.html#entry-2025-07-05"},{"v":"cape-cod-jun-jul-2025","d":"2025-07-04","u":"past/cape-cod-jun-jul-2025.html#entry-2025-07-04"},{"v":"cape-cod-jun-jul-2025","d":"2025-07-03","u":"past/cape-cod-jun-jul-2025.html#entry-2025-07-03"},{"v":"cape-cod-jun-jul-2025","d":"2025-07-02","u":"past/cape-cod-jun-jul-2025.html#entry-2025-07-02"},{"v":"cape-cod-jun-jul-2025","d":"2025-07-01","u":"past/cape-cod-jun-jul-2025.html#entry-2025-07-01"},{"v":"cape-cod-jun-jul-2025","d":"2025-06-30","u":"past/cape-cod-jun-jul-2025.html#entry-2025-06-30"},{"v":"cape-cod-jun-jul-2025","d":"2025-06-29","u":"past/cape-cod-jun-jul-2025.html#entry-2025-06-29"},{"v":"cape-cod-jun-jul-2025","d":"2025-06-28","u":"past/cape-cod-jun-jul-2025.html#entry-2025-06-28"},{"v":"vision-baltimore-mar-2025","d":"2025-03-29","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-29"},{"v":"vision-baltimore-mar-2025","d":"2025-03-24","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-24"},{"v":"vision-baltimore-mar-2025","d":"2025-03-24","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-24"},{"v":"vision-baltimore-mar-2025","d":"2025-03-23","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-23"},{"v":"vision-baltimore-mar-2025","d":"2025-03-21","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-21"},{"v":"vision-baltimore-mar-2025","d":"2025-03-20","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-20"},{"v":"adventure-caribbean-dec-2024","d":"2025-01-06","u":"past/adventure-caribbean-dec-2024.html#entry-2025-01-06"},{"v":"adventure-caribbean-dec-2024","d":"2025-01-05","u":"past/adventure-caribbean-dec-2024.html#entry-2025-01-05"},{"v":"adventure-caribbean-dec-2024","d":"2025-01-04","u":"past/adventure-caribbean-dec-2024.html#entry-2025-01-04"},{"v":"adventure-caribbean-dec-2024","d":"2025-01-04","u":"past/adventure-caribbean-dec-2024.html#entry-2025-01-04"},{"v":"adventure-caribbean-dec-2024","d":"2024-12-27","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-27"},{"v":"adventure-caribbean-dec-2024","d":"2024-12-27","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-27"},{"v":"adventure-caribbean-dec-2024","d":"2024-12-26","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-26"},{"v":"oasis-transatlantic-oct-2024","d":"2024-11-07","u":"past/oasis-transatlantic-oct-2024.html#entry-2024-11-07"},{"v":"brilliance-alaska-may-2024","p":"sitka","u":"past/brilliance-alaska-may-2024.html#entry-"},{"v":"brilliance-alaska-may-2024","p":"juneau","u":"past/brilliance-alaska-may-2024.html#entry-"},{"v":"brilliance-alaska-may-2024","p":"haines","u":"past/brilliance-alaska-may-2024.html#entry-"},{"v":"brilliance-alaska-may-2024","p":"ketchikan","u":"past/brilliance-alaska-may-2024.html#entry-"},{"v":"symphony-caribbean-mar-2024","d":"2024-03-23","u":"past/symphony-caribbean-mar-2024.html#entry-2024-03-23"},{"v":"symphony-caribbean-mar-2024","d":"2024-03-17","u":"past/symphony-caribbean-mar-2024.html#entry-2024-03-17"},{"v":"adventure-caribbean-dec-2023","d":"2024-01-05","u":"past/adventure-caribbean-dec-2023.html#entry-2024-01-05"},{"v":"adventure-caribbean-dec-2023","d":"2023-12-30","u":"past/adventure-caribbean-dec-2023.html#entry-2023-12-30"},{"v":"oasis-caribbean-sep-2023","d":"2023-09-10","u":"past/oasis-caribbean-sep-2023.html#entry-2023-09-10"},{"v":"oasis-caribbean-sep-2023","p":"port-canaveral","u":"past/oasis-caribbean-sep-2023.html#entry-"},{"v":"oasis-caribbean-sep-2023","d":"2023-09-03","u":"past/oasis-caribbean-sep-2023.html#entry-2023-09-03"},{"v":"harmony-caribbean-mar-2023","d":"2023-04-01","u":"past/harmony-caribbean-mar-2023.html#entry-2023-04-01"},{"v":"harmony-caribbean-mar-2023","d":"2023-03-25","u":"past/harmony-caribbean-mar-2023.html#entry-2023-03-25"},{"v":"allure-caribbean-oct-2022","d":"2022-11-05","u":"past/allure-caribbean-oct-2022.html#entry-2022-11-05"},{"v":"allure-caribbean-oct-2022","d":"2022-10-29","u":"past/allure-caribbean-oct-2022.html#entry-2022-10-29"}]},"country:bahamas":{"name":"Bahamas","visits":31,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-27","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-27","date":"Sun \u00b7 Sep 27, 2026","title":"Bimini"},{"v":"bayonne-miami-sep-2026","d":"2026-09-23","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-23","date":"Wed \u00b7 Sep 23, 2026","title":"Bimini"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-12","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-12","date":"Wed \u00b7 Aug 12, 2026","title":"CocoCay, Bahamas"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-11","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-11","date":"Tue \u00b7 Aug 11, 2026","title":"Nassau, Bahamas"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-27","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-27"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-25","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-25"},{"v":"miami-jan-feb-2026","d":"2026-02-03","u":"past/miami-jan-feb-2026.html#entry-2026-02-03"},{"v":"miami-jan-feb-2026","d":"2026-01-29","u":"past/miami-jan-feb-2026.html#entry-2026-01-29"},{"v":"miami-jan-feb-2026","d":"2026-01-16","u":"past/miami-jan-feb-2026.html#entry-2026-01-16"},{"v":"miami-jan-feb-2026","d":"2026-01-09","u":"past/miami-jan-feb-2026.html#entry-2026-01-09"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-15","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-15"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-08","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-08"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-02","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-02"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-01","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-01"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-20","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-20"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-18","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-18"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-15","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-15"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-07","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-07"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-29","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-29"},{"v":"star-cococay-aug-2025","d":"2025-08-29","u":"past/star-cococay-aug-2025.html#entry-2025-08-29"},{"v":"jewel-cococay-jul-2025","d":"2025-07-27","u":"past/jewel-cococay-jul-2025.html#entry-2025-07-27"},{"v":"vision-baltimore-mar-2025","d":"2025-03-26","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-26"},{"v":"vision-baltimore-mar-2025","d":"2025-03-25","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-25"},{"v":"oasis-transatlantic-oct-2024","p":"nassau","u":"past/oasis-transatlantic-oct-2024.html#entry-"},{"v":"symphony-caribbean-mar-2024","p":"nassau","u":"past/symphony-caribbean-mar-2024.html#entry-"},{"v":"adventure-caribbean-dec-2023","p":"nassau","u":"past/adventure-caribbean-dec-2023.html#entry-"},{"v":"oasis-caribbean-sep-2023","p":"cococay","u":"past/oasis-caribbean-sep-2023.html#entry-"},{"v":"oasis-caribbean-sep-2023","p":"nassau","u":"past/oasis-caribbean-sep-2023.html#entry-"},{"v":"harmony-caribbean-mar-2023","p":"cococay","u":"past/harmony-caribbean-mar-2023.html#entry-"},{"v":"allure-caribbean-oct-2022","p":"cococay","u":"past/allure-caribbean-oct-2022.html#entry-"},{"v":"allure-caribbean-oct-2022","p":"nassau","u":"past/allure-caribbean-oct-2022.html#entry-"}]},"country:puerto-rico":{"name":"Puerto Rico","visits":6,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-29","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-29","date":"Sat \u00b7 Aug 29, 2026","title":"San Juan, Puerto Rico"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-22","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-22","date":"Sat \u00b7 Aug 22, 2026","title":"San Juan, Puerto Rico"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-15","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-15"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-14","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-14"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-19","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-19"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-12","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-12"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-11","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-11"},{"v":"adventure-caribbean-dec-2024","d":"2024-12-30","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-30"}]},"country:st-maarten":{"name":"St. Maarten","visits":5,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-25","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-25","date":"Tue \u00b7 Aug 25, 2026","title":"St Maarten"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-17","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-17"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-20","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-20"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-12","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-12"},{"v":"adventure-caribbean-dec-2024","d":"2025-01-01","u":"past/adventure-caribbean-dec-2024.html#entry-2025-01-01"}]},"country:dominica":{"name":"Dominica","visits":1,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-27","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-27","date":"Thu \u00b7 Aug 27, 2026","title":"Dominica Favorite port"}]},"country:antigua-and-barbuda":{"name":"Antigua & Barbuda","visits":2,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-26","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-26"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-18","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-18"}]},"country:canada":{"name":"Canada","visits":13,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-10","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-10","date":"Thu \u00b7 Sep 10, 2026","title":"Sydney, Nova Scotia"},{"v":"bayonne-miami-sep-2026","d":"2026-09-08","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-08","date":"Tue \u00b7 Sep 8, 2026","title":"Saint John, New Brunswick \u00b7 Day 2"},{"v":"bayonne-miami-sep-2026","d":"2026-09-07","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-07","date":"Mon \u00b7 Sep 7, 2026","title":"Saint John, New Brunswick"},{"v":"alaska-may-jun-2026","d":"2026-06-26","u":"past/alaska-may-jun-2026.html#entry-2026-06-26"},{"v":"alaska-may-jun-2026","d":"2026-06-12","u":"past/alaska-may-jun-2026.html#entry-2026-06-12"},{"v":"alaska-may-jun-2026","d":"2026-06-11","u":"past/alaska-may-jun-2026.html#entry-2026-06-11"},{"v":"alaska-may-jun-2026","d":"2026-05-29","u":"past/alaska-may-jun-2026.html#entry-2026-05-29"},{"v":"alaska-may-jun-2026","d":"2026-05-28","u":"past/alaska-may-jun-2026.html#entry-2026-05-28"},{"v":"eastern-canada-sep-oct-2025","d":"2025-10-02","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-10-02"},{"v":"eastern-canada-sep-oct-2025","d":"2025-10-01","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-10-01"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-29","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-29"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-26","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-26"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-25","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-25"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-23","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-23"},{"v":"brilliance-alaska-may-2024","d":"2024-06-02","u":"past/brilliance-alaska-may-2024.html#entry-2024-06-02"},{"v":"brilliance-alaska-may-2024","d":"2024-05-26","u":"past/brilliance-alaska-may-2024.html#entry-2024-05-26"}]},"country:bermuda":{"name":"Bermuda","visits":2,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-15","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-15","date":"Tue \u00b7 Sep 15, 2026","title":"Bermuda / Hamilton"},{"v":"bayonne-miami-sep-2026","d":"2026-09-14","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-14","date":"Mon \u00b7 Sep 14, 2026","title":"Bermuda"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-30","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-30"}]},"country:turks-and-caicos":{"name":"Turks & Caicos","visits":1,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-21","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-21","date":"Mon \u00b7 Sep 21, 2026","title":"Grand Turk"}]},"country:british-virgin-islands":{"name":"British Virgin Islands","visits":2,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-16","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-16"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-13","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-13"}]},"country:aruba":{"name":"Aruba","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-04-15","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-15"}]},"country:curacao":{"name":"Cura\u00e7ao","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-04-16","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-16"}]},"country:bonaire":{"name":"Bonaire","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-04-17","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-17"}]},"country:us-virgin-islands":{"name":"US Virgin Islands","visits":7,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-24","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-24"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-23","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-23"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-20","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-20"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-21","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-21"},{"v":"miami-jan-feb-2026","d":"2026-01-21","u":"past/miami-jan-feb-2026.html#entry-2026-01-21"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-13","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-13"},{"v":"adventure-caribbean-dec-2024","d":"2024-12-31","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-31"}]},"country:st-kitts-and-nevis":{"name":"St. Kitts & Nevis","visits":3,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-19","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-19"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-22","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-22"},{"v":"miami-jan-feb-2026","d":"2026-01-22","u":"past/miami-jan-feb-2026.html#entry-2026-01-22"}]},"country:portugal":{"name":"Portugal","visits":5,"days":[{"v":"view-main","d":"2026-11-02","u":"past/view-main.html#entry-2026-11-02"},{"v":"view-main","d":"2026-10-31","u":"past/view-main.html#entry-2026-10-31"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-05","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-05"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-22","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-22"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-20","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-20"}]},"country:france":{"name":"France","visits":2,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-13","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-13"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-12","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-12"}]},"country:albania":{"name":"Albania","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-22","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-22"}]},"country:cayman-islands":{"name":"Cayman Islands","visits":3,"days":[{"v":"miami-jan-feb-2026","d":"2026-01-12","u":"past/miami-jan-feb-2026.html#entry-2026-01-12"},{"v":"miami-jan-feb-2026","d":"2026-01-05","u":"past/miami-jan-feb-2026.html#entry-2026-01-05"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-10","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-10"}]},"country:mexico":{"name":"Mexico","visits":8,"days":[{"v":"miami-jan-feb-2026","d":"2026-01-27","u":"past/miami-jan-feb-2026.html#entry-2026-01-27"},{"v":"miami-jan-feb-2026","d":"2026-01-07","u":"past/miami-jan-feb-2026.html#entry-2026-01-07"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-18","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-18"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-17","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-17"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-12","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-12"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-05","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-05"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-03","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-03"},{"v":"harmony-caribbean-mar-2023","p":"cozumel","u":"past/harmony-caribbean-mar-2023.html#entry-"}]},"country:jamaica":{"name":"Jamaica","visits":2,"days":[{"v":"miami-jan-feb-2026","d":"2026-01-13","u":"past/miami-jan-feb-2026.html#entry-2026-01-13"},{"v":"symphony-caribbean-mar-2024","p":"falmouth","u":"past/symphony-caribbean-mar-2024.html#entry-"}]},"country:dominican-republic":{"name":"Dominican Republic","visits":5,"days":[{"v":"miami-jan-feb-2026","d":"2026-02-01","u":"past/miami-jan-feb-2026.html#entry-2026-02-01"},{"v":"miami-jan-feb-2026","d":"2026-01-20","u":"past/miami-jan-feb-2026.html#entry-2026-01-20"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-04","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-04"},{"v":"adventure-caribbean-dec-2023","p":"puerto-plata","u":"past/adventure-caribbean-dec-2023.html#entry-"},{"v":"allure-caribbean-oct-2022","p":"puerto-plata","u":"past/allure-caribbean-oct-2022.html#entry-"}]},"country:united-kingdom":{"name":"United Kingdom","visits":2,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-16","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-16"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-11","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-11"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-10","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-10"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-09","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-09"}]},"country:germany":{"name":"Germany","visits":1,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-13","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-13"}]},"country:netherlands":{"name":"Netherlands","visits":1,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-15","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-15"}]},"country:honduras":{"name":"Honduras","visits":2,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-04","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-04"},{"v":"harmony-caribbean-mar-2023","p":"roatan","u":"past/harmony-caribbean-mar-2023.html#entry-"}]},"city:lubeck":{"name":"L\u00fcbeck","visits":1,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-13","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-13"}]},"city:santiago-de-compostela":{"name":"Santiago de Compostela","visits":1,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-19","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-19"}]},"city:peggys-cove":{"name":"Peggy\u2019s Cove","visits":1,"days":[{"v":"eastern-canada-sep-oct-2025","d":"2025-10-01","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-10-01"}]},"city:sete-cidades":{"name":"Sete Cidades","visits":2,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-05","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-05"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-22","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-22"}]},"city:cassis":{"name":"Cassis","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-12","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-12"}]},"city:positano":{"name":"Positano","visits":1,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-24","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-24"}]},"city:port-canaveral":{"name":"Port Canaveral","visits":8,"days":[{"v":"star-cococay-aug-2025","d":"2025-08-31","u":"past/star-cococay-aug-2025.html#entry-2025-08-31"},{"v":"star-cococay-aug-2025","d":"2025-08-27","u":"past/star-cococay-aug-2025.html#entry-2025-08-27"},{"v":"vision-baltimore-mar-2025","d":"2025-03-24","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-24"},{"v":"adventure-caribbean-dec-2024","d":"2025-01-04","u":"past/adventure-caribbean-dec-2024.html#entry-2025-01-04"},{"v":"adventure-caribbean-dec-2024","d":"2024-12-27","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-27"},{"v":"adventure-caribbean-dec-2023","d":"2024-01-05","u":"past/adventure-caribbean-dec-2023.html#entry-2024-01-05"},{"v":"adventure-caribbean-dec-2023","d":"2023-12-30","u":"past/adventure-caribbean-dec-2023.html#entry-2023-12-30"},{"v":"oasis-caribbean-sep-2023","p":"port-canaveral","u":"past/oasis-caribbean-sep-2023.html#entry-"}]},"city:kusadasi":{"name":"Kusadasi","visits":1,"days":[{"v":"odyssey-mediterranean-may-2025","d":"2025-05-21","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-21"}]},"city:sorrento":{"name":"Sorrento","visits":1,"days":[{"v":"odyssey-mediterranean-may-2025","d":"2025-05-24","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-24"}]},"city:capri":{"name":"Capri","visits":1,"days":[{"v":"odyssey-mediterranean-may-2025","d":"2025-05-24","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-24"}]},"city:baltimore":{"name":"Baltimore","visits":2,"days":[{"v":"vision-baltimore-mar-2025","d":"2025-03-29","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-29"},{"v":"vision-baltimore-mar-2025","d":"2025-03-21","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-21"},{"v":"vision-baltimore-mar-2025","d":"2025-03-20","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-20"}]},"city:charleston":{"name":"Charleston","visits":1,"days":[{"v":"vision-baltimore-mar-2025","d":"2025-03-23","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-23"}]},"city:cocoa-beach":{"name":"Cocoa Beach","visits":1,"days":[{"v":"vision-baltimore-mar-2025","d":"2025-03-24","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-24"}]},"city:grand-bahama":{"name":"Grand Bahama","visits":1,"days":[{"v":"vision-baltimore-mar-2025","d":"2025-03-25","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-25"}]},"city:cape-canaveral":{"name":"Cape Canaveral","visits":1,"days":[{"v":"adventure-caribbean-dec-2024","d":"2024-12-27","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-27"},{"v":"adventure-caribbean-dec-2024","d":"2024-12-26","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-26"}]},"city:labadee":{"name":"Labadee","visits":3,"days":[{"v":"adventure-caribbean-dec-2024","d":"2024-12-29","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-29"},{"v":"adventure-caribbean-dec-2023","p":"labadee","u":"past/adventure-caribbean-dec-2023.html#entry-"},{"v":"allure-caribbean-oct-2022","p":"labadee","u":"past/allure-caribbean-oct-2022.html#entry-"}]},"city:fort-myers":{"name":"Fort Myers","visits":1,"days":[{"v":"adventure-caribbean-dec-2024","d":"2025-01-06","u":"past/adventure-caribbean-dec-2024.html#entry-2025-01-06"},{"v":"adventure-caribbean-dec-2024","d":"2025-01-05","u":"past/adventure-caribbean-dec-2024.html#entry-2025-01-05"},{"v":"adventure-caribbean-dec-2024","d":"2025-01-04","u":"past/adventure-caribbean-dec-2024.html#entry-2025-01-04"}]},"city:haines":{"name":"Haines","visits":1,"days":[{"v":"brilliance-alaska-may-2024","p":"haines","u":"past/brilliance-alaska-may-2024.html#entry-"}]},"city:falmouth":{"name":"Falmouth","visits":1,"days":[{"v":"symphony-caribbean-mar-2024","p":"falmouth","u":"past/symphony-caribbean-mar-2024.html#entry-"}]},"country:turkey":{"name":"Turkey","visits":1,"days":[{"v":"odyssey-mediterranean-may-2025","d":"2025-05-21","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-21"}]},"country:haiti":{"name":"Haiti","visits":3,"days":[{"v":"adventure-caribbean-dec-2024","d":"2024-12-29","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-29"},{"v":"adventure-caribbean-dec-2023","p":"labadee","u":"past/adventure-caribbean-dec-2023.html#entry-"},{"v":"allure-caribbean-oct-2022","p":"labadee","u":"past/allure-caribbean-oct-2022.html#entry-"}]},"ship:brilliance-of-the-seas":{"name":"Brilliance of the Seas","visits":8,"nights":64,"days":[{"v":"san-juan-rome-apr-may-2026","d":"2026-05-18","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-18"},{"v":"san-juan-rome-apr-may-2026","d":"2026-05-11","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-05-11"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-26","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-26"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-19","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-19"},{"v":"san-juan-rome-apr-may-2026","d":"2026-04-12","u":"past/san-juan-rome-apr-may-2026.html#entry-2026-04-12"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-28","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-28"},{"v":"eastern-canada-sep-oct-2025","d":"2025-09-21","u":"past/eastern-canada-sep-oct-2025.html#entry-2025-09-21"},{"v":"brilliance-alaska-may-2024","d":"2024-05-26","u":"past/brilliance-alaska-may-2024.html#entry-2024-05-26"}]},"ship:ovation-of-the-seas":{"name":"Ovation of the Seas","visits":4,"nights":28,"days":[{"v":"alaska-may-jun-2026","d":"2026-06-19","u":"past/alaska-may-jun-2026.html#entry-2026-06-19"},{"v":"alaska-may-jun-2026","d":"2026-06-12","u":"past/alaska-may-jun-2026.html#entry-2026-06-12"},{"v":"alaska-may-jun-2026","d":"2026-06-05","u":"past/alaska-may-jun-2026.html#entry-2026-06-05"},{"v":"alaska-may-jun-2026","d":"2026-05-29","u":"past/alaska-may-jun-2026.html#entry-2026-05-29"}]},"ship:independence-of-the-seas":{"name":"Independence of the Seas","visits":5,"nights":40,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-12","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-12","date":"Sat \u00b7 Sep 12, 2026","title":"Bayonne, New Jersey"},{"v":"bayonne-miami-sep-2026","d":"2026-09-03","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-03","date":"Thu \u00b7 Sep 3, 2026","title":"Bayonne \u2192 New York"},{"v":"december-caribbean-nov-dec-2025","d":"2025-12-07","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-07"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-16","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-16"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-10-11","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-10-11"}]},"ship:allure-of-the-seas":{"name":"Allure of the Seas","visits":3,"nights":21,"days":[{"v":"december-caribbean-nov-dec-2025","d":"2025-12-14","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-12-14"},{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-08","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-08"},{"v":"allure-caribbean-oct-2022","d":"2022-10-29","u":"past/allure-caribbean-oct-2022.html#entry-2022-10-29"}]},"ship:odyssey-of-the-seas":{"name":"Odyssey of the Seas","visits":3,"nights":16,"days":[{"v":"view-main","d":"2026-10-25","u":"past/view-main.html#entry-2026-10-25"},{"v":"view-main","d":"2026-10-18","u":"past/view-main.html#entry-2026-10-18"},{"v":"odyssey-mediterranean-may-2025","d":"2025-05-18","u":"past/odyssey-mediterranean-may-2025.html#entry-2025-05-18"}]},"ship:oasis-of-the-seas":{"name":"Oasis of the Seas","visits":2,"nights":21,"days":[{"v":"oasis-transatlantic-oct-2024","d":"2024-10-24","u":"past/oasis-transatlantic-oct-2024.html#entry-2024-10-24"},{"v":"oasis-caribbean-sep-2023","d":"2023-09-03","u":"past/oasis-caribbean-sep-2023.html#entry-2023-09-03"}]},"ship:harmony-of-the-seas":{"name":"Harmony of the Seas","visits":2,"nights":20,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-07-26","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-07-26","date":"Sun \u00b7 Jul 26, 2026","title":"Barcelona, Spain"},{"v":"harmony-caribbean-mar-2023","d":"2023-03-25","u":"past/harmony-caribbean-mar-2023.html#entry-2023-03-25"}]},"ship:adventure-of-the-seas":{"name":"Adventure of the Seas","visits":2,"nights":14,"days":[{"v":"adventure-caribbean-dec-2024","d":"2024-12-27","u":"past/adventure-caribbean-dec-2024.html#entry-2024-12-27"},{"v":"adventure-caribbean-dec-2023","d":"2023-12-30","u":"past/adventure-caribbean-dec-2023.html#entry-2023-12-30"}]},"ship:resilient-lady":{"name":"Resilient Lady","visits":4,"nights":23,"days":[{"v":"bayonne-miami-sep-2026","d":"2026-09-24","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-24","date":"Thu \u00b7 Sep 24, 2026","title":"Miami turnaround"},{"v":"bayonne-miami-sep-2026","d":"2026-09-19","u":"past/bayonne-miami-sep-2026.html#entry-2026-09-19","date":"Sat \u00b7 Sep 19, 2026","title":"Miami \u2192 Virgin"},{"v":"miami-jan-feb-2026","d":"2026-01-10","u":"past/miami-jan-feb-2026.html#entry-2026-01-10"},{"v":"miami-jan-feb-2026","d":"2026-01-03","u":"past/miami-jan-feb-2026.html#entry-2026-01-03"}]},"ship:rhapsody-of-the-seas":{"name":"Rhapsody of the Seas","visits":2,"nights":14,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-22","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-22","date":"Sat \u00b7 Aug 22, 2026","title":"San Juan, Puerto Rico"},{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-15","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-15"}]},"ship:symphony-of-the-seas":{"name":"Symphony of the Seas","visits":2,"nights":13,"days":[{"v":"december-caribbean-nov-dec-2025","d":"2025-11-30","u":"past/december-caribbean-nov-dec-2025.html#entry-2025-11-30"},{"v":"symphony-caribbean-mar-2024","d":"2024-03-17","u":"past/symphony-caribbean-mar-2024.html#entry-2024-03-17"}]},"ship:scarlet-lady":{"name":"Scarlet Lady","visits":2,"nights":10,"days":[{"v":"miami-jan-feb-2026","d":"2026-01-30","u":"past/miami-jan-feb-2026.html#entry-2026-01-30"},{"v":"miami-jan-feb-2026","d":"2026-01-25","u":"past/miami-jan-feb-2026.html#entry-2026-01-25"}]},"ship:vision-of-the-seas":{"name":"Vision of the Seas","visits":1,"nights":8,"days":[{"v":"vision-baltimore-mar-2025","d":"2025-03-21","u":"past/vision-baltimore-mar-2025.html#entry-2025-03-21"}]},"ship:celebrity-beyond":{"name":"Celebrity Beyond","visits":1,"nights":7,"days":[{"v":"miami-jan-feb-2026","d":"2026-01-18","u":"past/miami-jan-feb-2026.html#entry-2026-01-18"}]},"ship:explorer-of-the-seas":{"name":"Explorer of the Seas","visits":1,"nights":7,"days":[{"v":"view-main","d":"2026-10-10","u":"past/view-main.html#entry-2026-10-10"}]},"ship:icon-of-the-seas":{"name":"Icon of the Seas","visits":1,"nights":7,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-01","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-01"}]},"ship:radiance-of-the-seas":{"name":"Radiance of the Seas","visits":1,"nights":4,"days":[{"v":"fall-transatlantic-oct-nov-2025","d":"2025-11-17","u":"past/fall-transatlantic-oct-nov-2025.html#entry-2025-11-17"}]},"ship:star-of-the-seas":{"name":"Star of the Seas","visits":1,"nights":4,"days":[{"v":"star-cococay-aug-2025","d":"2025-08-27","u":"past/star-cococay-aug-2025.html#entry-2025-08-27"}]},"ship:utopia-of-the-seas":{"name":"Utopia of the Seas","visits":1,"nights":4,"days":[{"v":"spain-transatlantic-jul-aug-2026","d":"2026-08-10","u":"past/spain-transatlantic-jul-aug-2026.html#entry-2026-08-10","date":"Mon \u00b7 Aug 10, 2026","title":"Utopia of the Seas"}]},"ship:jewel-of-the-seas":{"name":"Jewel of the Seas","visits":1,"nights":3,"days":[{"v":"jewel-cococay-jul-2025","d":"2025-07-25","u":"past/jewel-cococay-jul-2025.html#entry-2025-07-25"}]}}
;
      var TRIPS = {
        "view-main": "Venice & Transatlantic — current trip",
        "spain-transatlantic-jul-aug-2026": "Spain & Transatlantic",
        "bayonne-miami-sep-2026": "New England, Bermuda & Virgin Voyages",
        "cape-cod-jul-2026": "Annual Summer Vacation 2026",
        "alaska-may-jun-2026": "Alaska 2026",
        "san-juan-rome-apr-may-2026": "San Juan to Rome 2026",
        "miami-jan-feb-2026": "Miami 2026",
        "december-caribbean-nov-dec-2025": "December Caribbean 2025",
        "fall-transatlantic-oct-nov-2025": "Fall Transatlantic 2025",
        "eastern-canada-sep-oct-2025": "Eastern Canada 2025",
        "star-cococay-aug-2025": "Star of the Seas, Aug 2025",
        "jewel-cococay-jul-2025": "Jewel of the Seas, Jul 2025",
        "cape-cod-jun-jul-2025": "Annual Summer Vacation 2025",
        "odyssey-mediterranean-may-2025": "Odyssey of the Seas, May 2025",
        "vision-baltimore-mar-2025": "Vision of the Seas, Mar 2025",
        "adventure-caribbean-dec-2024": "Adventure of the Seas, Dec 2024",
        "oasis-transatlantic-oct-2024": "Oasis of the Seas, Oct 2024",
        "brilliance-alaska-may-2024": "Brilliance of the Seas, May 2024",
        "symphony-caribbean-mar-2024": "Symphony of the Seas, Mar 2024",
        "adventure-caribbean-dec-2023": "Adventure of the Seas, Dec 2023",
        "oasis-caribbean-sep-2023": "Oasis of the Seas, Sep 2023",
        "harmony-caribbean-mar-2023": "Harmony of the Seas, Mar 2023",
        "allure-caribbean-oct-2022": "Allure of the Seas, Oct 2022"
      };
      var ARCHIVES = ["spain-transatlantic-jul-aug-2026", "bayonne-miami-sep-2026", "cape-cod-jul-2026", "alaska-may-jun-2026", "san-juan-rome-apr-may-2026", "miami-jan-feb-2026", "december-caribbean-nov-dec-2025", "fall-transatlantic-oct-nov-2025", "eastern-canada-sep-oct-2025", "star-cococay-aug-2025", "jewel-cococay-jul-2025", "cape-cod-jun-jul-2025", "odyssey-mediterranean-may-2025", "vision-baltimore-mar-2025", "adventure-caribbean-dec-2024", "oasis-transatlantic-oct-2024", "brilliance-alaska-may-2024", "symphony-caribbean-mar-2024", "adventure-caribbean-dec-2023", "oasis-caribbean-sep-2023", "harmony-caribbean-mar-2023", "allure-caribbean-oct-2022"];
      // ----- Most-recent dates: a subtle line under each counter entry,
      // read from the newest dated day in the index above — "Last visited"
      // for countries and cities, "Last cruised" for ships. Entries whose
      // only days are undated framework stops (Haines, Falmouth) get none.
      (function () {
        var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function fmt(iso) {
          var p = iso.split("-");
          return MONTHS[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10) + ", " + p[0];
        }
        Array.prototype.forEach.call(document.querySelectorAll(".place-item"), function (btn) {
          var kind = btn.getAttribute("data-kind");
          var rec = INDEX[kind + ":" + btn.getAttribute("data-key")];
          if (!rec) { return; }
          var latest = null;
          rec.days.forEach(function (ref) { if (ref.d && (!latest || ref.d > latest)) { latest = ref.d; } });
          if (!latest) { return; }
          var host = btn.querySelector(".place-name") || btn;
          var s = document.createElement("span");
          s.className = "place-last";
          s.textContent = (kind === "ship" ? "Last cruised " : "Last visited ") + fmt(latest);
          host.appendChild(s);
        });
      })();
      // ----- Year trackers: always exactly two lines — the current year
      // (the year of the newest dated day on the page) and the year before
      // it, never older years. Each line gives distinct travel days
      // versus the days in that year — for the current year, the days
      // elapsed so far (the day-of-year number of the newest dated day);
      // for the completed prior year, its full day count — plus the
      // unique countries, cities and ships counted from the index. A day
      // counts when a journal entry or a dated framework day carries it.
      (function () {
        var el = document.getElementById("year-tracker");
        var elPrior = document.getElementById("year-tracker-prior");
        if (!el) { return; }
        var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function fmt(iso) {
          var p = iso.split("-");
          return MONTHS[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10) + ", " + p[0];
        }
        var seen = {}, latest = null;
        function add(iso) {
          if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) { return; }
          seen[iso] = true;
          if (!latest || iso > latest) { latest = iso; }
        }
        Array.prototype.forEach.call(document.querySelectorAll("[id^=\"entry-\"]"), function (n) { add(n.id.slice(6)); });
        Array.prototype.forEach.call(document.querySelectorAll(".framework-day time[datetime]"), function (n) { add(n.getAttribute("datetime")); });
        if (!latest) { return; }
        function plural(n, one, many) { return n + (n === 1 ? one : many); }
        function render(target, year, isCurrent) {
          if (!target) { return; }
          var count = 0, yearLatest = null, k;
          for (k in seen) {
            if (k.slice(0, 4) === year) {
              count++;
              if (!yearLatest || k > yearLatest) { yearLatest = k; }
            }
          }
          if (!count || !yearLatest) { target.hidden = true; return; }
          var y = parseInt(year, 10);
          var denom, span;
          if (isCurrent) {
            var lp = latest.split("-");
            denom = Math.round((Date.UTC(parseInt(lp[0], 10), parseInt(lp[1], 10) - 1, parseInt(lp[2], 10)) - Date.UTC(parseInt(lp[0], 10), 0, 0)) / 86400000);
            span = " days so far this year";
          } else {
            denom = Math.round((Date.UTC(y + 1, 0, 1) - Date.UTC(y, 0, 1)) / 86400000);
            span = " days in the year";
          }
          var pct = (100 * count / denom).toFixed(1);
          var uniq = { country: 0, city: 0, ship: 0 };
          for (k in INDEX) {
            var kind = k.split(":")[0];
            if (!(kind in uniq)) { continue; }
            var inYear = INDEX[k].days.some(function (ref) { return ref.d && ref.d.slice(0, 4) === year; });
            if (inYear) { uniq[kind]++; }
          }
          target.innerHTML = "<strong>" + year + ":</strong> " + count + " travel days of " + denom +
            span + " · <strong>" + pct + "%</strong> of the year traveling · " +
            plural(uniq.country, " country", " countries") + " · " +
            plural(uniq.city, " city", " cities") + " · " +
            plural(uniq.ship, " ship", " ships") + " " +
            "<span class=\"year-tracker-note\">(counted from this page, through " + fmt(yearLatest) + ")</span>";
        }
        var curYear = latest.slice(0, 4);
        render(el, curYear, true);
        render(elPrior, String(parseInt(curYear, 10) - 1), false);
      })();
      var panel = document.getElementById("place-results");
      var titleEl = document.getElementById("place-results-title");
      var subEl = document.getElementById("place-results-sub");
      var listEl = document.getElementById("place-results-list");
      var clearBtn = document.getElementById("place-results-clear");
      var q = document.getElementById("filter-q");
      var main = document.getElementById("view-main");
      if (!panel || !titleEl || !listEl || !clearBtn) { return; }
      var programmatic = false;

      function findDay(ref) {
        if (ref.hero) { return { el: document.getElementById("hero"), date: "Mon · Oct 26, 2026", title: "La Spezia, Italy — Cinque Terre by train" }; }
        var view = document.getElementById(ref.v);
        if (!view) { return null; }
        var entry = view.querySelector("#entry-" + ref.d);
        if (entry) {
          var t = entry.querySelector("time"), h = entry.querySelector("h3");
          return { el: entry, date: t ? t.textContent : ref.d, title: h ? h.textContent : "" };
        }
        if (ref.p) {
          var pd = view.querySelector(".framework-day[data-port=\"" + ref.p + "\"]");
          if (pd) {
            var pt = pd.querySelector("time"), ph = pd.querySelector("h3");
            return { el: pd, date: pt ? pt.textContent : ref.p, title: ph ? ph.textContent : "" };
          }
        }
        var days = view.querySelectorAll(".framework-day");
        for (var i = 0; i < days.length; i++) {
          var tm = days[i].querySelector("time");
          if (tm && tm.getAttribute("datetime") === ref.d) {
            var hh = days[i].querySelector("h3");
            return { el: days[i], date: tm.textContent, title: hh ? hh.textContent : "" };
          }
        }
        return null;
      }
      function showView(view) {
        ARCHIVES.forEach(function (id) {
          var v = document.getElementById(id);
          if (v) { v.hidden = v !== view; }
        });
        if (main) { main.hidden = view !== main; }
        document.title = (view && view !== main)
          ? view.getAttribute("data-title") + " · Where's Patrick?"
          : "Where's Patrick?";
      }
      function goToDay(ref) {
        if (ref.u) {
          var _a = document.createElement("a"); _a.href = ref.u;
          if (_a.href.split("#")[0] !== location.href.split("#")[0]) { location.href = ref.u; return; }
        }
        var found = findDay(ref);
        if (!found || !found.el) { return; }
        var view = ref.hero ? main : (found.el.closest ? found.el.closest(".view") : null);
        if (view) { showView(view); }
        try { history.pushState(null, "", ref.hero ? "#hero" : (ref.v === "view-main" ? "#entry-" + ref.d : "#" + ref.v)); } catch (e) { /* in-page only */ }
        setTimeout(function () {
          found.el.scrollIntoView({ behavior: "smooth", block: "start" });
          found.el.classList.add("flash");
          setTimeout(function () { found.el.classList.remove("flash"); }, 2400);
        }, 60);
      }
      function clearSearch() {
        panel.hidden = true;
        if (q && q.value) {
          programmatic = true;
          q.value = "";
          q.dispatchEvent(new Event("input", { bubbles: true }));
          programmatic = false;
        }
      }
      function runSearch(kind, key) {
        var rec = INDEX[kind + ":" + key];
        if (!rec) { return; }
        if (kind === "ship") {
          titleEl.textContent = "Sailings on " + rec.name;
          subEl.textContent = rec.visits + (rec.visits === 1 ? " sailing" : " sailings") + " · " + rec.nights + (rec.nights === 1 ? " night" : " nights") + " on board. Tap a sailing to jump to its first day.";
        } else {
          titleEl.textContent = "Days in " + rec.name;
          subEl.textContent = rec.days.length + (rec.days.length === 1 ? " day" : " days") + " · " + rec.visits + (rec.visits === 1 ? " visit" : " visits") + " counted. Tap a day to jump to it.";
        }
        listEl.innerHTML = "";
        rec.days.forEach(function (ref) {
          var found = findDay(ref);
          var li = document.createElement("li");
          var b = document.createElement("button");
          b.type = "button";
          b.className = "place-day";
          var dEl = document.createElement("span"); dEl.className = "place-day-date"; dEl.textContent = found ? found.date : (ref.date || ref.d);
          var tEl = document.createElement("span"); tEl.className = "place-day-title"; tEl.textContent = found ? found.title : (ref.title || rec.name);
          var trEl = document.createElement("span"); trEl.className = "place-day-trip"; trEl.textContent = TRIPS[ref.v] || "";
          b.appendChild(dEl); b.appendChild(tEl); b.appendChild(trEl);
          b.addEventListener("click", function () { goToDay(ref); });
          li.appendChild(b);
          listEl.appendChild(li);
        });
        panel.hidden = false;
        // Run the page's own journal search too, then align the main
        // journal list with this place's counted days (its text search
        // alone would miss days that never name the place in prose).
        if (q) {
          programmatic = true;
          q.value = rec.name;
          q.dispatchEvent(new Event("input", { bubbles: true }));
          programmatic = false;
          var keep = {};
          rec.days.forEach(function (r) { if (r.v === "view-main" && !r.hero) { keep[r.d] = true; } });
          Array.prototype.forEach.call((main ? main.querySelectorAll(".history-list .memory") : []), function (e) {
            e.style.display = keep[e.getAttribute("data-date")] ? "" : "none";
          });
          var empty = document.getElementById("filter-empty");
          if (empty) { empty.hidden = Object.keys(keep).length !== 0; }
        }
        panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      document.addEventListener("click", function (e) {
        var b = e.target && e.target.closest ? e.target.closest(".place-item") : null;
        if (!b) { return; }
        runSearch(b.getAttribute("data-kind"), b.getAttribute("data-key"));
      });
      clearBtn.addEventListener("click", clearSearch);
      if (q) {
        q.addEventListener("input", function () {
          if (!programmatic && !panel.hidden) { panel.hidden = true; }
        });
      }
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !panel.hidden) { clearSearch(); }
      });
    })();

  // ----- Multi-page router: Today / Next / Future / Past, plus the current
  // trip's journal page (past/venice-transatlantic). The main view's blocks
  // carry data-page groups; archive trip views keep their own hash routing
  // above. This runs last so it settles state after the other routers.
  (function () {
    var main = document.getElementById("view-main");
    if (!main) { return; }
    var PAGES = { "": "today", today: "today", next: "next", future: "future", past: "past", "venice-transatlantic": "history" };
    var TITLES = { today: "Where's Patrick?", next: "Next · Where's Patrick?", future: "Future · Where's Patrick?", past: "Past trips · Where's Patrick?", history: "Venice & Transatlantic — day by day · Where's Patrick?" };
    var groups = main.querySelectorAll("[data-page]");
    var navLinks = document.querySelectorAll(".nav-links a[data-nav]");
    var toggle = document.getElementById("nav-toggle");
    var linksBox = document.getElementById("nav-links");
    function activate(page) {
      groups.forEach(function (g) { g.hidden = g.getAttribute("data-page") !== page; });
      var navKey = page === "history" ? "past" : page;
      navLinks.forEach(function (a) {
        if (a.getAttribute("data-nav") === navKey) { a.setAttribute("aria-current", "page"); }
        else { a.removeAttribute("aria-current"); }
      });
      document.title = TITLES[page] || "Where's Patrick?";
      try { window.dispatchEvent(new Event("resize")); } catch (e) { /* Leaflet re-measures on window resize */ }
    }
    function isArchiveSlug(slug) { return !!document.querySelector(".archive-view[id='" + slug + "']"); }
    function route() {
      var slug = window.location.hash.replace(/^#/, "");
      if (slug.indexOf("entry-") === 0) { return; }
      if (Object.prototype.hasOwnProperty.call(PAGES, slug)) {
        if (main.hidden) { main.hidden = false; }
        activate(PAGES[slug]);
        window.scrollTo(0, 0);
      } else if (isArchiveSlug(slug)) {
        navLinks.forEach(function (a) {
          if (a.getAttribute("data-nav") === "past") { a.setAttribute("aria-current", "page"); }
          else { a.removeAttribute("aria-current"); }
        });
      }
      if (linksBox) { linksBox.classList.remove("open"); }
      if (toggle) { toggle.setAttribute("aria-expanded", "false"); }
    }
    window.addEventListener("hashchange", route);
    route();
    if (toggle && linksBox) {
      toggle.addEventListener("click", function () {
        var open = linksBox.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      linksBox.addEventListener("click", function (e) {
        if (e.target && e.target.closest && e.target.closest("a")) {
          linksBox.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }
    // Jump-to-day flows (day links, place search, throwback) flash the target
    // entry; if it lives in a hidden page group inside the main view, reveal
    // that group and scroll to it once visible.
    if (window.MutationObserver) {
      var mo = new MutationObserver(function (records) {
        records.forEach(function (r) {
          var el = r.target;
          if (!el.classList || !el.classList.contains("flash")) { return; }
          if (!main.contains(el) || main.hidden) { return; }
          var grp = el.closest ? el.closest("[data-page]") : null;
          if (grp && grp.hidden) {
            activate(grp.getAttribute("data-page"));
            setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60);
          }
        });
      });
      mo.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["class"] });
    }
  })();

} catch (e) { if (window.console) console.warn('page script:', e); }