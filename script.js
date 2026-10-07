/* Pink Rodeo Tattoo Club: consent choice and click tracking. */

/* ==========================================================================
   REPLACE THE ID BELOW with your GA4 measurement ID (it starts with G-).
   Find it in GA4: Admin > Data streams > your web stream > Measurement ID.
   Leave it as G-XXXXXXXXXX and Google Analytics will simply not load.
   This is the only place the ID appears in the code.
   ========================================================================== */
var GA_MEASUREMENT_ID = 'G-WEJ9S352CD';
/* ========================================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'prtc-analytics-consent'; // stores "granted" or "denied"

  var banner = document.getElementById('consent');
  var acceptButton = document.getElementById('consent-accept');
  var declineButton = document.getElementById('consent-decline');
  var reopenButton = document.getElementById('consent-reopen');

  var analyticsOn = false;
  var scriptRequested = false;

  // gtag() and the denied-by-default consent state are set up in index.html.
  function gtag() { window.dataLayer.push(arguments); }

  function idIsReal() {
    return /^G-[A-Z0-9]{6,}$/.test(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX';
  }

  function readChoice() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function saveChoice(value) {
    try { window.localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* choice just won't be remembered */ }
  }

  function clearAnalyticsCookies() {
    var names = document.cookie.split(';').map(function (c) { return c.split('=')[0].trim(); });
    var hostParts = window.location.hostname.split('.');
    var domains = [window.location.hostname];
    for (var i = 1; i < hostParts.length - 1; i++) {
      domains.push('.' + hostParts.slice(i).join('.'));
    }
    names.forEach(function (name) {
      if (name.indexOf('_ga') !== 0) { return; }
      domains.forEach(function (domain) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + domain;
      });
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    });
  }

  function enableAnalytics() {
    analyticsOn = true;
    if (!idIsReal()) { return; }
    window['ga-disable-' + GA_MEASUREMENT_ID] = false;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    if (scriptRequested) { return; }
    scriptRequested = true;
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(tag);
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
  }

  function disableAnalytics() {
    analyticsOn = false;
    if (!idIsReal()) { return; }
    window['ga-disable-' + GA_MEASUREMENT_ID] = true;
    gtag('consent', 'update', { analytics_storage: 'denied' });
    clearAnalyticsCookies();
  }

  function showBanner(moveFocus) {
    banner.hidden = false;
    if (moveFocus) { acceptButton.focus(); }
  }

  function hideBanner(returnFocus) {
    banner.hidden = true;
    if (returnFocus) { reopenButton.focus(); }
  }

  var reopened = false;

  acceptButton.addEventListener('click', function () {
    saveChoice('granted');
    enableAnalytics();
    hideBanner(reopened);
    reopened = false;
  });

  declineButton.addEventListener('click', function () {
    saveChoice('denied');
    disableAnalytics();
    hideBanner(reopened);
    reopened = false;
  });

  reopenButton.addEventListener('click', function () {
    reopened = true;
    showBanner(true);
  });

  // Click tracking. Buttons and links carry data-event and data-location
  // attributes in index.html; nothing is sent unless the visitor has accepted.
  document.addEventListener('click', function (event) {
    var link = event.target.closest ? event.target.closest('[data-event]') : null;
    if (!link || !analyticsOn || !idIsReal()) { return; }
    gtag('event', link.getAttribute('data-event'), {
      link_location: link.getAttribute('data-location') || 'page'
    });
  });

  // On load: apply a saved choice, or ask.
  var saved = readChoice();
  if (saved === 'granted') {
    enableAnalytics();
  } else if (saved === 'denied') {
    analyticsOn = false;
  } else {
    showBanner(false);
  }
})();

/* Photo viewer: clicking a photo in "My recent work" opens a larger copy.
   Arrow buttons or the left and right arrow keys move between photos, Escape closes it.
   Without JavaScript the photo link simply opens the large photo. */
(function () {
  'use strict';

  var links = document.querySelectorAll('.photo-link');
  var dialog = document.getElementById('lightbox');
  if (!links.length || !dialog || typeof dialog.showModal !== 'function') { return; }

  var bigImage = document.getElementById('lightbox-img');
  var count = document.getElementById('lightbox-count');
  var current = 0;

  function show(index) {
    current = (index + links.length) % links.length;
    var link = links[current];
    bigImage.src = link.getAttribute('href');
    bigImage.alt = link.querySelector('img').alt;
    count.textContent = (current + 1) + ' of ' + links.length;
  }

  function preloadNeighbours() {
    [current - 1, current + 1].forEach(function (i) {
      var near = links[(i + links.length) % links.length];
      new Image().src = near.getAttribute('href');
    });
  }

  Array.prototype.forEach.call(links, function (link, index) {
    link.addEventListener('click', function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) { return; }
      event.preventDefault();
      show(index);
      dialog.showModal();
      preloadNeighbours();
    });
  });

  document.getElementById('lightbox-prev').addEventListener('click', function () { show(current - 1); preloadNeighbours(); });
  document.getElementById('lightbox-next').addEventListener('click', function () { show(current + 1); preloadNeighbours(); });
  document.getElementById('lightbox-close').addEventListener('click', function () { dialog.close(); });

  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) { dialog.close(); }   // a click on the dark area
  });

  dialog.addEventListener('close', function () {
    links[current].focus();   // put keyboard focus back on the photo that was last viewed
  });

  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') { show(current - 1); preloadNeighbours(); }
    if (event.key === 'ArrowRight') { show(current + 1); preloadNeighbours(); }
  });
})();
