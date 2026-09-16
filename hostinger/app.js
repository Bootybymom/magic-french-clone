// Interactions de la page NeuroEnfants (version statique)
(function () {
  "use strict";

  // ---- Galerie produit ----
  var gallery = document.querySelector("[data-gallery]");
  if (gallery) {
    var main = gallery.querySelector("[data-gallery-main]");
    var thumbs = Array.prototype.slice.call(gallery.querySelectorAll("[data-gallery-thumb]"));
    var slides = thumbs.map(function (t) {
      return { url: t.getAttribute("data-url"), alt: t.getAttribute("data-alt") || "" };
    });
    var idx = 0;
    function render() {
      if (!main || !slides.length) return;
      main.src = slides[idx].url;
      main.alt = slides[idx].alt;
      thumbs.forEach(function (t, i) {
        t.classList.toggle("border-primary", i === idx);
        t.classList.toggle("border-border", i !== idx);
      });
    }
    thumbs.forEach(function (t, i) {
      t.addEventListener("click", function () {
        idx = i;
        render();
      });
    });
    gallery.querySelectorAll("[data-gallery-prev]").forEach(function (b) {
      b.addEventListener("click", function () {
        idx = (idx - 1 + slides.length) % slides.length;
        render();
      });
    });
    gallery.querySelectorAll("[data-gallery-next]").forEach(function (b) {
      b.addEventListener("click", function () {
        idx = (idx + 1) % slides.length;
        render();
      });
    });
    render();
  }

  // ---- Notifications d'achat ----
  var notif = document.querySelector("[data-notification]");
  if (notif) {
    var people = [
      { name: "Élodie T.", time: "il y a 2 min" },
      { name: "Chloé B.", time: "il y a 5 min" },
      { name: "Inès M.", time: "il y a 7 min" },
      { name: "Clara D.", time: "il y a 9 min" },
      { name: "Mathilde G.", time: "il y a 12 min" },
    ];
    var nName = notif.querySelector("[data-notification-name]");
    var nMeta = notif.querySelector("[data-notification-meta]");
    var n = 0;
    setInterval(function () {
      notif.classList.remove("opacity-100");
      notif.classList.add("opacity-0");
      setTimeout(function () {
        n = (n + 1) % people.length;
        if (nName) nName.textContent = people[n].name + " vient d'acheter";
        if (nMeta) nMeta.textContent = "le plan à 12,90 € · " + people[n].time;
        notif.classList.remove("opacity-0");
        notif.classList.add("opacity-100");
      }, 400);
    }, 10000);
  }

  // ---- Choix du plan + redirection checkout ----
  var LINKS = {
    focus: "https://pay.hotmart.com/F107521759I?checkoutMode=10",
    complete: "https://pay.hotmart.com/R107614911I?checkoutMode=10",
  };
  function selectedPlan() {
    var checked = document.querySelector('input[name="plan"]:checked');
    return checked && LINKS[checked.value] ? checked.value : "complete";
  }
  document.querySelectorAll("[data-checkout]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.location.href = LINKS[selectedPlan()];
    });
  });
})();
