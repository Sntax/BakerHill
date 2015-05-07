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
    // bakerHill.featureFade();
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

    // logoText.mouseover(
    //   function() {
    //     logoText.animate({
    //       left: -250
    //     }, 400);
    //     logoHome.animate({
    //       left: 0,
    //       color: '#fff'
    //     }, 400);
    //   }
    // )
    // logoHome.mouseout(
    //   function() {
    //     logoText.animate({
    //       left: 0
    //     }, 400, function(){
    //       $(this).removeAttr('style');
    //     });
    //     logoHome.animate({
    //       left: 250,
    //       color: '#ff0051'
    //     }, 400, function(){
    //       $(this).removeAttr('style');
    //     });
    //   }
    // )
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

  featureFade: function(){
    $(window).scroll( function(){
      $('.feature-overlay').each( function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
        bottom_of_window = bottom_of_window + 200;  
      
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},500);
        } else if( bottom_of_window < bottom_of_object ){
          $(this).animate({'opacity':'0'},500);
        }
      }); 
    });
  }
};

bakerHill.init();
