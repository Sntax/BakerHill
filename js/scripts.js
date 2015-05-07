/* ===================================================== */
/* Component:                       Global Functionality */
/* Project Name:                      Baker Hill Digital */
/* Project URL:                 www.bakerhilldigital.com */
/* Author(s):       Andrew Hill - andrewjrhill@gmail.com */
/* ===================================================== */

var bakerHill = {

  init: function() {
    bakerHill.logoSlide();
    bakerHill.buttonFade();
    bakerHill.smoothScroll();
  },

  logoSlide: function() {

    var logoText = $('div.logo h1.logo-text');
    var logoHome = $('div.logo h1.logo-home');

    $('.feature-overlay').hide();

    $('div.logo').on({
      mouseenter: function(){
        logoText.stop().animate({
          left: -250
        }, 400);
        logoHome.stop().animate({
          left: 0,
          color: '#fff'
        }, 400);
      },
      mouseleave: function(){
        logoText.stop().animate({
          left: 0
        }, 400, function(){
          $(this).removeAttr('style');
        });
        logoHome.stop().animate({
          left: 250,
          color: '#ff0051'
        }, 400, function(){
          $(this).removeAttr('style');
        });
      }
    }, logoText);
  },

  buttonFade: function() {
    $('.button-light').mouseover(
      function() {
        $(this).stop().animate({
          backgroundColor: '#ff0051',
          color: '#fff',
          width: '115px'
        }, 250);
      }
    ).mouseout(
      function() {
        $(this).stop().animate({
          backgroundColor: '#fff',
          color: '#ff0051',
          width: '100px'
        }, 250, function(){
          $(this).removeAttr('style');
        });
      }
    );
  },

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
  }
};

bakerHill.init();
