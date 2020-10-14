$(document).ready(function(){
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.sidenav').sidenav().on('click tap', 'li a', () => {
    $('.sidenav').sidenav('close');
  });
});
    

AOS.init({
  // Global settings:
  disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


var width = $(window).width();
$(window).resize(function () {
    if (600 <= width) {
        $('#services > .container').addClass('container_border');
    }
});


$(window).on('scroll', function () {
  var windowHeight = $(window).height(),
      gridTop = windowHeight * .01,
      gridBottom = windowHeight * 1.1;
  $('body section div').each(function () {
      var thisTop = $(this).offset().top - $(window).scrollTop();

      if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
          $(this).addClass("change");
      } else {
          $(this).removeClass("change");
      }
  });

  var $nav = $(".nav-wrapper");
  var $sec = $("section");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $sec.height());


});
$(window).trigger('scroll');


  
 
  
  