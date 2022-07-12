(function ($) {
  "use strict";

  $(window).scroll(function () {
    var $scrolling = $(this).scrollTop();
    var stickyMenu = $(".sticky-menu");
    if ($scrolling >= 400) {
      stickyMenu.addClass("sticky");
    } else {
      stickyMenu.removeClass("sticky");
    }
  });

  $(".slider-area").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    dots: false,
    speed: 2500,
    pauseOnHover: false,
    cssEase: "linear",
    rtl: true,
    autoplaySpeed: 10,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
  let mm = new MagnetMouse({
    magnet: {
      element: ".magnet_cursor",
      distance: 10,
    },
  });

  mm.init();
  //initialize wow js
  new WOW({}).init();
})(jQuery);
