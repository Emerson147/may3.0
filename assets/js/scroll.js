const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
  ScrollTrigger.create ({
    trigger: text,
    toggleClass: 'active',
    start: "top 90%",
    end: "top 10%",
    //markers: true
  })
})

const images = gsap.utils.toArray('img');
images.forEach((img, i) => {
  ScrollTrigger.create ({
    trigger: img,
    toggleClass: 'active',
    start: "top 90%",
    end: "top 20%",
    //markers: true
  })
})


anime({
  targets: '.h1',
  keyframes: [
    {translateY: -40},
    {translateX: 10},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});