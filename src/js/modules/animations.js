import { TimelineLite, TweenMax, Linear, gsap } from "gsap";
import ScrollMagic from "../libs/ScrollMagic";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function() {
 let animationSpeed = 0.3;
 let animationSize =  10;
 let ease = 'Power4.easeIn(4)'

 var controller = new ScrollMagic.Controller();

 // Scroll
 //-gsap.registerPlugin(ScrollTrigger);
 
 gsap.config({nullTargetWarn:false});


 function animate(triggerClass, tl) {
  let trigger = document.querySelector(triggerClass);

  if (!trigger) {
   return;
  }

  new ScrollMagic.Scene({
   triggerElement: triggerClass
  })
   .setTween(tl)
   .addTo(controller);

 }



 animate(".intro", new TimelineLite()
 .fromTo(
  ".intro .form-block",
  animationSpeed,
  { z: -50, autoAlpha: 0 },
  { z: 0, autoAlpha: 1 , ease: ease }
 )
 .fromTo(
  ".intro__content",
  animationSpeed,
  { x:animationSize, autoAlpha: 0 },
  { x: 0, autoAlpha: 1,ease: ease },
  "-=0.2"
 ));


 animate(".referral-intro", new TimelineLite()
 .fromTo(
  ".referral-intro__media",
  animationSpeed,
  { z: -50, autoAlpha: 0 },
  { z: 0, autoAlpha: 1 , ease: ease }
 )
 .fromTo(
  ".referral-intro__content",
  animationSpeed,
  { x:animationSize, autoAlpha: 0 },
  { x: 0, autoAlpha: 1,ease: ease },
  "-=0.2"
 ));

 animate(".about-intro", new TimelineLite()
 .fromTo(
  ".about-intro__media",
  animationSpeed,
  { z: -50, autoAlpha: 0 },
  { z: 0, autoAlpha: 1 , ease: ease }
 )
 .fromTo(
  ".about-intro__content",
  animationSpeed,
  { x:animationSize, autoAlpha: 0 },
  { x: 0, autoAlpha: 1,ease: ease },
  "-=0.2"
 ));


 animate(".referral", new TimelineLite()
 .fromTo(
  ".referral__col:first-child",
  animationSpeed,
  { y: animationSize, autoAlpha: 0,ease: ease },
  { y: 0, autoAlpha: 1,ease: ease }
 )
 .fromTo(
  ".referral__media",
  animationSpeed,
  { x: animationSize, autoAlpha: 0 ,ease: ease},
  { x: 0, autoAlpha: 1 ,ease: ease},
  "-=0.2"
 ).delay( 0 ));


 animate(".how-work", new TimelineLite()
 .fromTo(
  ".how-work__col:first-child",
  animationSpeed,
  { y: animationSize, autoAlpha: 0,ease: ease },
  { y: 0, autoAlpha: 1,ease: ease }
 )
 .fromTo(
  ".how-work__media",
  animationSpeed,
  { x: animationSize, autoAlpha: 0 ,ease: ease},
  { x: 0, autoAlpha: 1 ,ease: ease},
  "-=0.2"
 ).delay( 0 ));



 animate(".reviews", new TimelineLite()
 .fromTo(
  ".reviews .subtitle, .reviews .title",
  0.3,
  {  autoAlpha: 0,ease: ease },
  { autoAlpha: 1,ease: ease }
 )
 .fromTo(
  ".reviews .swiper-slide",
  animationSpeed,
  { y: animationSize, autoAlpha: 0 ,ease: ease},
  { y: 0, autoAlpha: 1 ,ease: ease,  stagger: {
    each: 0.1,
   },},
  "-=0.2"
 ).fromTo(
    ".reviews__bottom .btn",
    animationSpeed,
    { y: animationSize, autoAlpha: 0 ,ease: ease},
    { y: 0, autoAlpha: 1 ,ease: ease},
    "-=0.2"
   ).fromTo(
    ".reviews [ref='prev'], .reviews [ref='next']",
    animationSpeed,
    { autoAlpha: 0 ,ease: ease},
    {  autoAlpha: 1 ,ease: ease},
    "-=0.2"
   ).delay( 0 ));



animate(".media-about", new TimelineLite()
.fromTo(
".media-about",
animationSpeed*0.8,
{ y: animationSize, autoAlpha: 0,ease: ease },
{ y: 0, autoAlpha: 1,ease: ease }
).fromTo(
".media-about .swiper-slide",
animationSpeed,
{ y: animationSize, autoAlpha: 0 ,ease: ease},
{ y: 0, autoAlpha: 1 ,ease: ease,  stagger: {
    each: 0.1,
    },},
"-=0.2"
).fromTo(
    ".media-about__bottom .btn",
    animationSpeed,
    { y: animationSize, autoAlpha: 0 ,ease: ease},
    { y: 0, autoAlpha: 1 ,ease: ease},
    "-=0.2"
    ).delay( 0 ));


animate(".faq", new TimelineLite()
.fromTo(
".faq .accordion__item",
animationSpeed,
{ y: animationSize, autoAlpha: 0 ,ease: ease},
{ y: 0, autoAlpha: 1 ,ease: ease,  stagger: {
each: 0.1,
},},
"-=0.2"
));



animate(".auth-layout", new TimelineLite()
.fromTo(
".sign",
animationSpeed*0.8,
{ z: -50, autoAlpha: 0,ease: ease },
{ z: 0,  autoAlpha: 1,ease: ease }
).fromTo(
".sign__top, .sign__content",
animationSpeed,
{ z: -30,  autoAlpha: 0 ,ease: ease},
{ z:0, autoAlpha: 1 ,ease: ease,  stagger: {
each: 0.1,
},},
"-=0.2"
));



animate(".team", new TimelineLite()
.fromTo(
".team__col",
animationSpeed*0.8,
{  x: 30, autoAlpha: 0,ease: ease },
{  x: 0, autoAlpha: 1,ease: ease }
).fromTo(
".team .team-list li",
animationSpeed,
{ y: 30,  autoAlpha: 0 ,ease: ease},
{ y:0, autoAlpha: 1 ,ease: ease,  stagger: {
each: 0.1,
},},
"-=0.2"
).fromTo(
    ".team .team-list li img",
    animationSpeed,
    { scale: 1.2,  autoAlpha: 0 ,ease: ease},
    { scale:1, autoAlpha: 1 ,ease: ease,  stagger: {
    each: 0.1,
    },},
    "-=0.7"
    )
);


animate(".about-trade", new TimelineLite()
.fromTo(
".about-trade__content",
animationSpeed*0.8,
{ z: -50, autoAlpha: 0,ease: ease },
{ z: 0,  autoAlpha: 1,ease: ease }
).fromTo(
".about-trade__media img",
animationSpeed,
{ z: -30,  autoAlpha: 0 ,ease: ease},
{ z:0, autoAlpha: 1 ,ease: ease,  stagger: {
each: 0.1,
},},
"-=0.2"
));


animate(".invest", new TimelineLite()
.fromTo(
".invest .quote",
animationSpeed*0.8,
{ z: -50, autoAlpha: 0,ease: ease },
{ z: 0,  autoAlpha: 1,ease: ease }
).fromTo(
".invest .advantages-list li",
animationSpeed,
{ z: -30,  autoAlpha: 0 ,ease: ease},
{ z:0, autoAlpha: 1 ,ease: ease,  stagger: {
each: 0.15,
},},
"-=0.2"
));


animate(".contacts", new TimelineLite()
.fromTo(
".contacts__content",
animationSpeed*0.8,
{ z: -50, autoAlpha: 0,ease: ease },
{ z: 0,  autoAlpha: 1,ease: ease }
).fromTo(
".contacts .contacts-form",
animationSpeed,
{ z: -30,  autoAlpha: 0 ,ease: ease},
{ z:0, autoAlpha: 1 ,ease: ease},
"-=0.2"
));

}
