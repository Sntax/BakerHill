/* ===================================================== */
/* Component:                       Global Functionality */
/* Project Name:                      Baker Hill Digital */
/* Project URL:                 www.bakerhilldigital.com */
/* Author(s):       Andrew Hill - andrewjrhill@gmail.com */
/* ===================================================== */

var bakerHill = {

  // Initialize all functions.
  init: function(){
    bakerHill.hamburgerMenu($('.mobile .button'));
    bakerHill.animateSticky(
      $('.navigation'),
      $('.navigation > .wrapper'),
      $('.navigation > .wrapper > .desktop li.contact > a')
    );
    bakerHill.tabs($('.services ul li'));
    bakerHill.smoothScroll();
    bakerHill.zoomBackgroundImage($('.intro'));
  }, 

  // Mobile navigation button and menu functionality.
  hamburgerMenu: function(toggleButton){

    // Opens hamburger menu.
    function openHamburger(){
      toggleButton.next('ul').slideDown();
      toggleButton.addClass('open').removeClass('close');
      $('.content').animate({
        marginTop: '320px'
      });
    };

    // Closes hamburger menu.
    function closeHamburger(){
      toggleButton.next('ul').slideUp();
      toggleButton.addClass('close').removeClass('open');
      $('.content').animate({
        marginTop: '155px'
      }, {
        complete: function(){
          $(this).removeAttr('style');
        }
      });
    }

    // Opens and closes hamburger menu on togglebutton click.
    toggleButton.on('click', function(){
      if (toggleButton.hasClass('close')){
        openHamburger(toggleButton);
      } else if(toggleButton.hasClass('open')) {
        closeHamburger(toggleButton);
      }
    });
  },

  // Sticky nav functionality.
  animateSticky: function(stickyNav, children, custom) {

    stickyNav.data('size', 'large');

    // Animates sticky nav on scroll.
    $(window).on('scroll', function(){
      if ($(document).scrollTop() > 0 && $('body').innerWidth() > 960 ) {
        if (stickyNav.data('size') == 'large') {
          stickyNav.data('size', 'small');
          stickyNav.stop().animate(
            { height: '80px',
              backgroundColor: 'rgba(255, 0, 81, 0.9)' },
            { duration: 600, queue: false }
          );
          children.stop().animate(
            { paddingTop: '18px' },
            { duration: 600, queue: false }
          );
          custom.stop().animate(
            { backgroundColor: 'rgba(187, 16, 55, 1)',
              borderColor: 'rgba(187, 16, 55, 1)' },
            { duration: 600, queue: false }
          );
        };
      } else {
        if (stickyNav.data('size') == 'small') {
          stickyNav.data('size', 'large');
          stickyNav.stop().animate(
            { height: '120px',
              backgroundColor: 'rgba(255, 0, 81, 0)' },
            { duration: 600,
              queue: false,
              complete: function() {
                $(this).removeAttr('style')
              }
            }
          );
          children.stop().animate(
            { paddingTop: '40px' },
            { duration: 600,
              queue: false,
              complete: function() {
                $(this).removeAttr('style')
              }
            }
          );
          custom.stop().animate(
            { backgroundColor: 'rgba(255, 0, 81, 0)',
              borderColor: 'rgba(255, 0, 81, 1)' },
            { duration: 600,
              queue: false,
              complete: function() {
                $(this).removeAttr('style')
              }
            }
          );
        }
      }
    });
  },

  // Tabs functionality.
  tabs: function(tab) {

    // Tabs activate on tab element click.
    $(tab).on('click', function(){
      if (!$(this).hasClass('active')) {

        var contentData = '.' + $(this).attr('class').split(' ')[0];

        // Adjust LivIcon SVG colors on click.
        tab.removeClass('active active-svg').find('path').attr('style', 'fill: #393939');
        $(this).addClass('active active-svg').find('path').attr('style', 'fill: #ff0051');;

        $('.tabs-content').removeClass('active');
        $('.visible').removeClass('visible').addClass('not-visible').removeAttr('style');
        $(contentData).addClass('active').find('.not-visible').animate(
          { opacity: '1' },
          { duration: 700,
            queue: false,
            complete: function() { 
              $(this).removeClass('not-visible').addClass('visible').removeAttr('style')
            }
          }
        );
      }
      if ($(this).parent().hasClass('tabs-mobile')) {
        $('html, body').animate({
          scrollTop: ($('.tabs-content.active').offset().top) - 126
        }, 500);
      }
    });
  },

  // Smooth Scroll functionality.
  smoothScroll: function() {

    $(document).scrollTop(0)
    $('.smooth-scroll').on('click', function() {

      var clickedLink = $(this);
      var destination = clickedLink.data();
      var toString = JSON.stringify(destination);
      var secondString = toString.replace('{"loc":"', '');
      var finalString = secondString.replace('"}', '');
      var element = document.getElementById(finalString);

      if ($(this).hasClass('hamburger')) {
        closeHamburgerAndScroll();
      } else {
        animateScroll($(element).offset().top - 85);
      }

      // Primary smooth scroll animation.
      function animateScroll(scrollTop) {
        $('html, body').animate({
        scrollTop: scrollTop
        }, 800);
      }

      // Close hamburger menu and scroll on mobile devices.
      function closeHamburgerAndScroll(){
        $('.mobile .button').next('ul').slideUp();
        $('.mobile .button').addClass('close').removeClass('open');
        $('.content').animate({
          marginTop: '0px'
        }, {
          complete: function(){
            $(this).removeAttr('style');
            animateScroll($(element).offset().top - 125);
          }
        });
      }
    });
  },

  // Zoom fullscreen image on page load
  zoomBackgroundImage: function(zoomElement) {

    $(document).ready(
      function(){
        zoomElement.animate({
          backgroundSize: '100%'
        }, 2000, 'linear');
      }
    );
  }
}

bakerHill.init();
