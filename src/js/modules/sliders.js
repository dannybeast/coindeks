import Swiper from "swiper/swiper-bundle";


export default function() {
  
  document.querySelectorAll('.reviews-block').forEach((el, index)=>{

    let slider = el.querySelector('.js-reviews-slider')

    var swiperReviews = new Swiper(slider, {
      loop: false,
      noSwiping: false,
      spaceBetween: 0,
      slidesPerView: 1, 
      watchSlidesVisibility: true,
      navigation: {
        nextEl: el.querySelector('[ref="next"]'),
        prevEl: el.querySelector('[ref="prev"]'),
       },
   
    });

  })


    var swiperMedia = new Swiper(".js-what-slider", {
      loop: false,
      freeMode: true,
      noSwiping: false,
      spaceBetween: 25,
      breakpoints: {
        0: {
          slidesPerView: 1.5, 
        }, 
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 4,
          noSwiping: true,
        },
        1025: {
          slidesPerView: 4,
          noSwiping: true,
        },
      },
    });

    var swiperStatistics = new Swiper(".js-swiper-statistics", {
      loop: false,
      freeMode: true,
      noSwiping: false,
      spaceBetween: 25,
      breakpoints: {
        0: {
          slidesPerView: 1.5, 
        }, 
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 4,
          noSwiping: true,
        },
      },
    });


    var swiperProtocol = new Swiper(".js-swiper-protocol", {
      loop: false,
      freeMode: true,
      noSwiping: false,
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1.5, 
        }, 
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3,
          noSwiping: true,
        },
      },
    });

}
