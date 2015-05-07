/* ===================================================== */
/* Component:                       Global Functionality */
/* Project Name:                      Baker Hill Digital */
/* Project URL:                 www.bakerhilldigital.com */
/* Author(s):       Andrew Hill - andrewjrhill@gmail.com */
/* ===================================================== */

var bakerHill = {

  init: function() {
    bakerHill.logoFade();
    bakerHill.buttonFade();
  },

  logoFade: function() {

    var logoText = $('div.logo h1.logo-text');
    var logoHome = $('div.logo h1.logo-home');

    logoText.mouseover(
      function() {
        logoText.animate({
          left: -250
        }, 400);
        logoHome.animate({
          left: 0,
          color: '#fff'
        }, 400);
      }
    )
    logoHome.mouseout(
      function() {
        logoText.animate({
          left: 0
        }, 400, function(){
          $(this).removeAttr('style');
        });
        logoHome.animate({
          left: 250,
          color: '#ff0051'
        }, 400, function(){
          $(this).removeAttr('style');
        });
      }
    )
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
  }
};

bakerHill.init();
