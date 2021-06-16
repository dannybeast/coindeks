// SVG
var __svg__ = {
  path: "./assets/icons/**/*.svg",
  name: "assets/icons/sprite.svg",
  filename: "/assets/icons/sprite.svg"
};

require("webpack-svgstore-plugin/src/helpers/svgxhr")(__svg__);

// SCSS
import "./assets/scss/app.scss";

// Modules
import $ from "jquery";
import '@fancyapps/fancybox';
import "./js/libs/jquery.scrollbar";
import Accordion from "./js/modules/accordion";
import hideLoader from "./js/modules/loader";
import mobileNavigation from "./js/modules/mobileNavigation";
import dropdown from "./js/modules/dropdown";
import copy from "./js/modules/copy";
import Modal from "./js/modules/modals";
import sliders from "./js/modules/sliders";
import animations from "./js/modules/animations";
import datatables from "./js/modules/datatables";
import animText from "./js/modules/animText";
import "autoresize-textarea";
import  "./js/modules/awesome-notifications";
import "./js/modules/materialInputs";
import {
  gsap,
  TimelineLite,
  TweenMax,
  Back
} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";



$(document).ready(function () {

  animText();
  // mega menu
  var timeline = new TimelineLite({
    paused: true
  });
  let menu = $('.mega-menu');
  var open = false;

  TweenMax.set(menu, {
    x: '120%'
  });

  TweenMax.set(menu.find('.mega-menu__row'), {
    x: '30%'
  });

  TweenMax.set(menu.find('.mega-menu__top, .mega-menu__right'), {
    opacity: 0
  });

  TweenMax.set(menu.find('.icon-list li'), {
    x: 50,
    opacity: 0
  });

  TweenMax.set(menu.find('.mega-menu__nav li'), {
    x: 50,
    opacity: 0
  });

  timeline
    .to(menu, 0.6, {
      x: '0%'
    }).to(menu.find('.mega-menu__row'), 0.5, {
      x: '0%',
      ease: Back.easeOut
    }, '-=0.3')
    .to(menu.find('.mega-menu__top, .mega-menu__right'), 0.5, {
      opacity: 1
    }, '-=0.3')
    .to(menu.find('.icon-list li'), 0.2, {
      x: 0,
      opacity: 1,
      stagger: {
        each: 0.1,
      }
    }, '-=0.5')
    .to(menu.find('.mega-menu__nav li'), 0.2, {
      x: 0,
      opacity: 1,
      stagger: {
        each: 0.1,
      }
    }, '-=0.5')

  $('.bar__menu-btn').click(function () {
    $(this).find('.hamburger').toggleClass('is-active')

    if (open) {
      timeline.reverse();
      open = false;
    } else {
      timeline.play();
      open = true;
    }

  });

  //-


  sliders();
  mobileNavigation();
  dropdown();
  copy();
  datatables();
  // Year
  let currentYear = new Date().getFullYear();
  $('.js-current-year').html(currentYear);
  //

  // Reviews
  $('.js-show-reviews').click(function () {
    $('.reviews__hidden').slideToggle();
    let textShow = $(this).data('text-show');
    let textHide = $(this).data('text-hide');
    $(this).find('span:first-child').toggleText(textShow, textHide);


    gsap.registerPlugin(ScrollToPlugin)
    gsap.to(window, 0.3, {
      scrollTo: {
        y: '.reviews',
        offsetY: 0
      },
      ease: 'power2',
    })


  })
  //

  // Accordion
  for (const e of document.querySelectorAll('[data-accordion="trigger"]')) {
    const newAccordion = new Accordion(e);
    newAccordion;
  }

  window.Modal = new Modal();

  $(".js-textarea").autoResize();

  $(".scrollbar-inner").scrollbar();


  if ($('.intro').length) {
    $('body').addClass('is-page-index')
  }



//
$(".labels-list__button").click(function(){
  let val = +$(this).data('val');


  $(this).parents('.block-yellow').find('input').val(val)


})

//



  hideLoader();
  animations();

})



$.fn.extend({
  toggleText: function (a, b) {
    return this.text(this.text() == b ? a : b);
  }
});