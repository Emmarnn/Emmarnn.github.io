/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });
});

// function dark mode
// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");

//     // Obtenir le bouton
//     var button = document.querySelector('.btn-changeMode');

//     // Vérifier si la classe dark-mode est présente sur le body
//     var isDarkMode = element.classList.contains("dark-mode");

//     // Mettre à jour le texte du bouton en conséquence
//     button.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
// }

// function textTyped
var words = [
    "1) qui je suis.",
    "2) ce que je fais.",
    "3) comment me contacter.",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 20,
  speed = 80;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".textTyped").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

// function clignotement logos contact
function highlightButton() {
  var buttons = document.querySelectorAll(".logoFooter");

  buttons.forEach(function (button) {
    button.classList.add("highlight");

    setTimeout(function () {
      button.classList.remove("highlight");
    }, 3000);
  });
}

// hide anchor
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez tous les liens avec des ancres
  var links = document.querySelectorAll('a[href^="#"]');

  // Ajoutez un gestionnaire d'événements à chaque lien
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Annule le comportement par défaut du lien
      event.preventDefault();

      // Récupère l'ancien et le nettoie
      var targetId = this.getAttribute("href").substring(1);

      // Fait défiler jusqu'à l'élément cible
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
