$(document).ready(function() {
    "use strict";

    $('.mobile-btn').on('click', function() {
        $('.header .list').slideToggle();
        $('.mobile-btn i').toggleClass('fa-times fa-bars');
    })

    $('.pros .slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            }
          ]
    });

    $('.steeps .slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
   

    $('.brands .slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 2,
                arrows: false,
              }
            }
          ]
    });
   

    $('.we-are .slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });

    $('.faq-page .tab-content .faq-item a').on('click', function() {
      $(this).toggleClass('active');
    })

});