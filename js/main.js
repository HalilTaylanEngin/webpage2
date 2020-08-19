
/**** OWL CAROUSEL ****/



 $(document).ready(function(){
let owl =  $(".owl-carousel").owlCarousel({
    autoplay: false ,
    dots: true ,
    dotsData: true,
    nav:false,
    items: 1 ,
    loop: false
  });

  $('.owl-dot').click(function(){
    owl.trigger('to.owl.carousel', [$(this).index() , 800]);
  });

  /**** transform scale img ***/
  $(".gallery .gallery-pictures ").hover(
  function() {
    // img gets three times bigger
    $(this).css({
      "transform": "scale(.9)"
    });
  },
  function() {
    // img returns to original size
    $(this).css({
      "transform": "scale(1)"
    });
  });
});
