$(document).ready(() => {
  $('#profile-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
  })
  $('.product-slider__item').show()
  $('.profile-slider__preloader').hide()
  $('.window_popup-close').click(function () {
    $(this).closest('.window_popup').hide()
  })
  $('#open_form_add_year').click(function (e) {
    e.preventDefault()
    $('#add-year').show()
  })
  $('#open_form_add_event').click(function (e) {
    e.preventDefault()
    $('#add-event').show()
  })
  $('.photo-hover-layout__item').click(function () {
    let name = $(this).data('name')
    let img = $(this).data('img')
    let desc = $(this).data('desc')
    let window = $('#popup-photo')

    window.find('.pupup-full_name').text(name)
    if (!img) {
      window.find('.pupup-photo').hide()
    } else {
      window.find('.pupup-photo').show().attr('src', img)
    }
    window.find('.pupup-desc').text(desc)
    window.show()
  })
})
