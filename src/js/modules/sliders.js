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


    var swiperDocuments = new Swiper(".js-documents-slider", {
      loop: false,
      freeMode: true,
      noSwiping: false,
      spaceBetween: 100,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: document.querySelector('.documents [ref="next"]'),
        prevEl: document.querySelector('.documents [ref="prev"]'),
       },
      breakpoints: {
        0: {
          slidesPerView: 1.5,  
           spaceBetween: 15,
        }, 
        768: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        1024: {
          slidesPerView: 2, 
          spaceBetween: 100,
          noSwiping: true,
        },
      },
    });

    var swiperTeam = new Swiper(".js-team-slider", {
      loop: false,
      freeMode: true,
      noSwiping: false,
      spaceBetween: 40,    
      watchSlidesVisibility: true,
      navigation: {
        nextEl: document.querySelector('.team [ref="next"]'),
        prevEl: document.querySelector('.team [ref="prev"]'),
       },
      breakpoints: {
        0: {
          slidesPerView: 1.8, 
        }, 
        768: {
          slidesPerView: 3,
        }, 
        1024: {
          slidesPerView: 4,
          noSwiping: true,
        },
        1204: {
          slidesPerView: 5,
          noSwiping: true,
        },
      },
    });



}
