$(document).ready(function() {

  // ANIMATION
  anime({
    targets: '.left-inner',
    opacity: [0, 1],
    duration: 2000,
    delay: 1000,
    easing: 'easeInOutQuad',
  });

  anime({
    targets: '.blob1',
    translateY: [-450, 0],
    duration: 2000,
  });

  anime({
    targets: '.blob2',
    translateY: [450, 0],
    duration: 3000,
    delay: 100,
  })

 anime({
    targets: '.overlay',
    width: 0,
    duration: 2000,
    easing: 'easeInOutQuad',
  })



  // SLIDER
  $(".slider").slick ({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
  })

})