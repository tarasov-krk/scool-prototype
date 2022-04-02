$(document).ready(() => {
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
  $('.photo-hover-layout__item').mouseenter(function () {
    $(this).append('<div id=\'people_name\'>' + $(this).data('name') + '</div>')
  }).mouseleave(function () {
    $('#people_name').remove()
  }).click(function () {
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
