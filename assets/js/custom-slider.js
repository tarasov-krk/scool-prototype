$(document).ready(() => {
  let odd = 2

  $('.ui-card:nth-child(' + odd + ')').addClass('active')
  $('.ui-card:nth-child(' + odd + ')').prev().addClass('prev')
  $('.ui-card:nth-child(' + odd + ')').next().addClass('next')

  $('.ui-card').click(function () {
    let slide = $('.active').width()
    let first = $('.ui-card.item-first')
    let prelast = $('.ui-card.item-prelast')

    if ($(this).hasClass('next')) {
      $('.container').stop(false, true).animate({ left: '-=' + slide })
    } else if ($(this).hasClass('prev')) {
      $('.container').stop(false, true).animate({ left: '+=' + slide })
    }

    $(this).removeClass('prev next')
    $(this).siblings().removeClass('prev active next')

    if ($(this).hasClass('item-last')) {
      $('.ui-card').hide()
      $('.container').stop(false, true).css({ left: 484 })
      $('.ui-card').show()
      first.addClass('active')
      first.prev().addClass('prev')
      first.next().addClass('next')
    }
    else if($(this).hasClass('item-zero')) {
      $('.ui-card').hide()
      $('.container').stop(false, true).css({ left: -484 })
      $('.ui-card').show()
      prelast.addClass('active')
      prelast.prev().addClass('prev')
      prelast.next().addClass('next')
    }
    else {
      $(this).addClass('active')
      $(this).prev().addClass('prev')
      $(this).next().addClass('next')
    }
  })

// Keyboard nav
  $('html body').keydown(function (e) {
    if (e.keyCode == 37) {// left
      $('.active').prev().trigger('click')
    } else if (e.keyCode == 39) {// right
      $('.active').next().trigger('click')
    }
  })
})
