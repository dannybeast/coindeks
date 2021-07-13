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
import "autoresize-textarea";
import "./js/libs/datepicker";
import  "./js/modules/awesome-notifications";
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
  $('.js-datepicker').datepicker();
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

  //


  hideLoader();
  animations();


 // pormenu
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

  // let dropdownElement= document.querySelectorAll('.header__nav .has-podmenu');
  //   document.addEventListener('click', e => {
  //     dropdownElement.forEach(element => {
  //         if (!element.contains(e.target)) {
  //             element.classList.remove('is-open');
  //             $(element).find('ul').slideOut()
  //         }
  //     })
  // });

  //-

  //-
  $('.field__cross').click(function(){
    $(this).parents('.field').find('input').val('')
    classesCrossField();
  })
  $('.field__cross').parents('.field').keyup(function(){
    classesCrossField();
  })
  
  classesCrossField();

  function classesCrossField(){
    $('.field__cross').each(function(){
      let field = $(this).parents('.field')
      let val = field.find('input').val()
      if(!val){
        field.removeClass('is-has-value')
      }else{
        field.addClass('is-has-value')
      }

    })
   

  }

  //-


//
  let $protocolInfo = $('.protocol-info');

  if($protocolInfo.length){
    $('body').addClass('is-profile-account')
  }

  //-


$('.js-continue').click(function(e){
  e.preventDefault()
  
  if($('.crypto-token > .field input').val() != ''){
    $('.crypto-token > .field').removeClass('field--error')
    $('.js-payment-address-block').slideDown();
    $(this).hide()
  }else{
    $('.crypto-token > .field').addClass('field--error')
  }





})

$('.radio-button').click(function(){
  let val = $(this).children('input').val();
  $('.crypto-token > .field input').val(val)
})
  



})



$.fn.extend({
  toggleText: function (a, b) {
    return this.text(this.text() == b ? a : b);
  }
});