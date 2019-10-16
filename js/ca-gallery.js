(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });





})(jQuery); // End of use strict


var gNextId = 100;

function createObject(id, name, img, txt, link) {
  return { id, name, img, txt, publishAt: Date.now(), link }
}
function createObjects() {
  return [createObject('pacman-modal', 'pac-man', 'img/portfolio/packman.png', 'run away from the ghosts and take the coins', 'https://adipinhas.github.io/pack-man/'),
  createObject('minesweeper', 'minesweeper', 'img/portfolio/mines.jpg', 'Be careful of the bombs near you', 'https://adipinhas.github.io/mines-weaper/'),
  createObject('guss-me', 'guss-me', 'img/portfolio/guss-who.png', 'think of someone', 'https://adipinhas.github.io/guess-me/'),
  ]
}
function getObjects() {
  return createObjects(

  )
}
