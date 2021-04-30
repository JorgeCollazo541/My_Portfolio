// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 4,
//     spaceBetween: 25,
//     centeredSlides: true,
//     autoplay: {
//       delay: 1500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

// var swiper = new Swiper('.swiper-container', {
//     effect: 'flip',
//     grabCursor: true,
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});