$(document).ready(() => {
  $('#profile-slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true
  });
  $('.product-slider__item').show();
  $('.profile-slider__preloader').hide();
})
