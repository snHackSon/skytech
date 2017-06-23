$("body").scrollspy({
  target: '.navbar-fixed-top',
  offset: 10,
})

$("mainNav").affix({
  offset: {
    top: 100
  }
})

$('.navbar-collapse ul li a').click(function(){ 
    $('.navbar-toggle:visible').click();
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#b1", 
  duration: 300,
})
  .setPin("#b1")
  .addTo(controller)




