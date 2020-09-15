(function ($) {
  "use_strict";


  // PRELOADER
  $(window).on('load', function () {
    $('#page-loader').fadeOut('slow', function () {
      $(this).remove();
    });
  });


  // SCROLL TO TOP

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.scroll-to-top').addClass('reveal');
    } else {
      $('.scroll-to-top').removeClass('reveal');
    }
  });


  /* ----------------------------------------------------------- */
  /*  Fixed header
  /* ----------------------------------------------------------- */


  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.site-navigation,.trans-navigation').addClass('header-white');
    } else {
      $('.site-navigation,.trans-navigation').removeClass('header-white');
    }

  });



  // Smooth scrolling using jQuery easing
  // jQuery for page scrolling feature - requires jQuery Easing plugin


  $('a.js-scroll-trigger').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function (event) {
    $('.navbar-collapse').collapse('hide');
  });



  /*START GOOGLE MAP
   ***************************************/
  let map = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.994506769025!2d-54.6160401!3d-20.4654188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e618a1483461%3A0xd41437c5f22b86ee!2zNsKwIFNlcnZpw6dvIE5vdGFyaWFs!5e0!3m2!1spt-BR!2sbr!4v1563823748125!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen></iframe>`;

  $(document).ready(function () {
    $('#map').load(map);
  });

  
  /*END GOOGLE MAP*/



})(jQuery); // End of use strict