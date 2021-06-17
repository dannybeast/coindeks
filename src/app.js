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

  sliders();
  mobileNavigation();
  dropdown();
  copy();
  datatables();
  // Year
  let currentYear = new Date().getFullYear();
  $('.js-current-year').html(currentYear);
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



  hideLoader();
  animations();


  $('.header__nav > ul > li').each(function () {
    if($(this).find('ul').length){
      $(this).addClass('has-podmenu')
    }
  })
  $('.mobile-menu__nav > ul > li').each(function () {
    if($(this).find('ul').length){
      $(this).addClass('has-podmenu')
    }
  })


  $('body').on('click', '.has-podmenu', function(){
    $(this).toggleClass('is-open')

    $(this).find('ul').slideToggle()

  })

let dropdownElement= document.querySelectorAll('.header__nav .has-podmenu');
  document.addEventListener('click', e => {
    dropdownElement.forEach(element => {
        if (!element.contains(e.target)) {
            element.classList.remove('is-open');
            $(element).find('ul').slideOut()
        }
    })
});


})



$.fn.extend({
  toggleText: function (a, b) {
    return this.text(this.text() == b ? a : b);
  }
});