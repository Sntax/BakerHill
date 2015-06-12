/* ===================================================== */
/* Component:                       Global Functionality */
/* Project Name:                      Baker Hill Digital */
/* Project URL:                 www.bakerhilldigital.com */
/* Author(s):       Andrew Hill - andrewjrhill@gmail.com */
/* ===================================================== */

var bakerHill = {

  // Initialize all functions.
  init: function() {
    bakerHill.logoSlide();
    bakerHill.smoothScroll();
    bakerHill.centerSlogan();
  },

  // Slides between BakerHill Logo and Home button on mouse over.
  logoSlide: function() {

    var primaryElement = $('div.logo h1.slide-first');
    var primaryElementWidth = primaryElement.width();
    var secondaryElement = $('div.logo h1.slide-second');
    var secondaryElementWidth = secondaryElement.width();

    $('.feature-overlay').hide();

    $('div.logo h1').on({
      mouseenter: function(){
        primaryElement.stop().animate({
          left: -primaryElementWidth
        }, 400);
        secondaryElement.stop().animate({
          left: 0,
          color: '#fff'
        }, 400);
      },
      mouseleave: function(){
        primaryElement.stop().animate({
          left: 0
        }, 400, function(){
          $(this).removeAttr('style');
        });
        secondaryElement.stop().animate({
          left: primaryElementWidth,
          color: '#ff0051'
        }, 400, function(){
          $(this).removeAttr('style');
        });
      }
    }, primaryElement);
  },

  // Smooth scrolls to sections with appropriate data-loc attribute.
  smoothScroll: function() {

    $('.smooth-scroll').on('click', function() {

      var clickedLink = $(this);
      var destination = clickedLink.data();
      var toString = JSON.stringify(destination);
      var secondString = toString.replace('{"loc":"', '');
      var finalString = secondString.replace('"}', '');
      var element = document.getElementById(finalString);

      $('html, body').animate({
      scrollTop: $(element).offset().top
      }, 800);
    });
  },

  // Keeps slogan centered on page.
  centerSlogan: function() {

    $(window).on('resize', function () {
      $('div#landing div.tagline h1').css('margin-top', function () {
        return (($(window).height() - $('div#landing div.logo').height()) - $(this).height()) / 2;
      });
    }).resize();
  }
};

bakerHill.init();
