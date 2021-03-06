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

    $('.testimonial-slide .sliders').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        arrows: false,
        autoplay: true,
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

   

    $('.reviews .reviews-slide').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      fade: true,
  });

    $('.faq-page .tab-content .faq-item a').on('click', function() {
      $(this).toggleClass('active');
    })

    if($('#playVideo').length > 0) {
      let button = document.getElementById('playVideo');
      button.addEventListener('click', () => {
        let videoPlayer = document.getElementById('video');
        videoPlayer.play();
      })

    }


    $(window).on('scroll', function() {
      let scrollTop = $(this).scrollTop();

      if(scrollTop > 150) {
        $('.header').addClass('active');
        $('.back-to-top').addClass('active')
      } else {
        $('.header').removeClass('active');
        $('.back-to-top').removeClass('active');
      }
    })

    $('.back-to-top').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      });
    })

    $('.reviews-images-2 .item .img').beforeAfter();


});