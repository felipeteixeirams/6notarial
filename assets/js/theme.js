(function($) {
    "use_strict";


  // PRELOADER
    $(window).on('load', function() {
        $('#page-loader').fadeOut('slow', function() {
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


    $('a.js-scroll-trigger').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function(event) {
    $('.navbar-collapse').collapse('hide');
  });



          /*START GOOGLE MAP*/
          function initialize() {
            var uluru = {lat: -25.344, lng: 131.036};
            // The map, centered at Uluru
            var map = new google.maps.Map(
              document.getElementById('map'), {zoom: 4, center: uluru});
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({position: uluru, map: map});
          }
          google.maps.event.addDomListener(window, 'load', initialize);
          /*END GOOGLE MAP*/



})(jQuery); // End of use strict
