var swiper = new Swiper(".mainVisual", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
     
    }, loop:true,
   
});

var swiper = new Swiper(".swiper-product", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },loop:true,

});

var swiper = new Swiper(".swiper-brand", {
  // slidesPerView: "auto",
  // centeredSlides: true,
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: false,
  // },
  loop:true,
});