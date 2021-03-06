function isMobile () {
  return window.innerWidth <= 991
}

$(document).ready(() => {
  if (isMobile()) {
    $('body').addClass('mobile')
  }

  if ($.fn.lightGallery) {
    $('#gallery').lightGallery({
      showThumbByDefault: false,
      hash: isMobile(),
    })
  }

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
  $('#open_form_add_photo').click(function (e) {
    e.preventDefault()
    $('#add-photo').show()
  })
  $('body:not(.mobile) #group-photo .photo-hover-layout__item').mouseenter(function () {
    $(this).append('<div id=\'people_name\'>' + $(this).data('name') + '</div>')
  }).mouseleave(function () {
    $('#people_name').remove()
  }).click(showPeopleInfo)

  $('body.mobile #group-photo .photo-hover-layout__item').click(function () {
    $('.people_name_mobile').hide().text($(this).data('name')).show()
  }).dblclick(showPeopleInfo)

  $('body.mobile').click(function (e) {
    let isRemove = false
    for (let i = 0; i < e.target.classList.length; i++) {
      if (e.target.classList[i] != 'photo-hover-layout__item') {
        isRemove = true
      }
    }

    if (isRemove) {
      $('.people_name_mobile').hide()
    }
  })

  $('.price-img-3__description').click(() => {
    showDemoModal(
      '<h5>ИЗГОТОВЛЕНИЕ ТРЁХСЛОЙНОГО ФОТО ФОРМАТА А4</h5>',
      '<img src="./assets/img/price/ff5e3687fc4ae510804a07d68659b6b9.png">' +
      '<p>Такое фото - более плотное, чем обычное. Его поверхность лучше защищена от внешних воздействий: УФ-лучей, нечаянно пролитой жидкости и т.д.</p>',
    )
  })

  if (isMobile()) {
    showSocial()
  }
  $('body').on('click', '#mm .mm_open', function () {
    $('#mm .mm_open img:first-child').toggle()
    $('#mm .mm_open img:last-child').toggle()
    $('#mm .mm_block_wrap').toggle()
  })

  var BASE_RIGHT = 42
  var BASE_BOTTOM = 18
  var BASE_WIDTH = 72
  var fixed_block = '.social_block'
  var buttonList = document.querySelector(fixed_block)
  var timeout
  var lock = false
  var buttonsTimer = null
  var windowWidth = $(window).width()
  var offsetTop = window.visualViewport.offsetTop
  var offsetLeft = window.visualViewport.offsetLeft

  window.visualViewport.addEventListener('resize', function () {
    if (window.visualViewport.width != windowWidth) {
      windowWidth = window.visualViewport.width
      delayViewportHandler()
      callbackToggler()
    }
  })
  window.visualViewport.addEventListener('scroll', function (event) {
    if (window.visualViewport.offsetTop != offsetTop || offsetLeft != window.visualViewport.offsetLeft) {
      offsetTop = window.visualViewport.offsetTop
      offsetLeft = window.visualViewport.offsetLeft
      viewportHandler(event)
      callbackToggler()
    }
  })

  viewportHandler({ target: window.visualViewport })

  function callbackToggler () {
    $(fixed_block).hide()
    if (buttonsTimer !== null) {
      clearTimeout(buttonsTimer)
    }
    buttonsTimer = setTimeout(function () {
      $(fixed_block).fadeIn()
    }, 300)
  }

  function delayViewportHandler () {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    lock = true
    timeout = setTimeout(function () {
      lock = false
      viewportHandler({ target: window.visualViewport })
    }, 100)
  }

  function viewportHandler (event) {
    if (lock || !isMobile()) {
      return
    }
    var scale = window.visualViewport.scale
    var rightDivider = 1

    if (window.outerWidth < 768) {
      scale = scale * 1.35
      rightDivider = 0.97
    }

    var moveRight = (BASE_RIGHT / scale + $(window).width() - event.target.width / rightDivider) -
      event.target.pageLeft
    var moveBottom = (BASE_BOTTOM / scale + $(window).height() - event.target.height) - event.target.pageTop
    buttonList.style.width = (BASE_WIDTH / scale) + 'px'
    buttonList.style.right = moveRight + 'px'
    buttonList.style.bottom = Math.max(moveBottom, BASE_BOTTOM) + 'px'
  }

  function showPeopleInfo () {
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
  }

  let demoMessage = 'В демо версии функция отключена'
  $('form:not(#search)').submit((e) => {
    e.preventDefault()
    showDemoModal(demoMessage)
    $('.window_popup').hide()
  })
  $('.nav-main .navigation nav a:not(:first-child)').click((e) => {
    e.preventDefault()
    showDemoModal(demoMessage)
  })
  $('.footer-nav a:not(:first-child)').click((e) => {
    e.preventDefault()
    showDemoModal(demoMessage)
  })
  $('form#search').submit((e) => {
    e.preventDefault()
    showDemoModal('В демо версии поиск отключен')
  })
  $('body').on('click', '#demo-modal .demo-modal-close', () => {
    $('#demo-modal').remove()
  })

  function showSocial () {
    $('body').append('<div id="mm" class="social_block">\n' +
      '        <div class="mm_block_wrap">\n' +
      '            <div class="mm_block">\n' +
      '                <a href="tel:+79913745577" class="mm_phone"><img src="./assets/img/TLF.png"></a>\n' +
      '                <a href="https://t.me/79913745577" class="mm_tg"><img src="./assets/img/TG.png"></a>\n' +
      '                <a href="https://wa.me/79913745577" class="mm_wa"><img src="./assets/img/WA.png"></a>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="mm_open"><img src="./assets/img/SV-1.png"><img src="./assets/img/SV.png"></div>\n' +
      '    </div>')
  }

  function showDemoModal (title, body) {
    let demoModal = '<div id="demo-modal" style="opacity: 1;transition: opacity 300ms ease 0s;"\n' +
      '         class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal">\n' +
      '        <div class="w-commerce-commercecartcontainer cart-container" style="transform: none;">\n' +
      '            <div class="w-commerce-commercecartheader cart-header">\n' +
      '                <h5 class="w-commerce-commercecartheading">\n' + title + '</h5>\n' +
      '                <a href="#"\n' +
      '                   class="demo-modal-close w-commerce-commercecartcloselink w-inline-block">\n' +
      '                    <svg width="16px" height="16px" viewBox="0 0 16 16">\n' +
      '                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
      '                            <g fill-rule="nonzero" fill="#333333">\n' +
      '                                <polygon\n' +
      '                                        points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>\n' +
      '                            </g>\n' +
      '                        </g>\n' +
      '                    </svg>\n' +
      '                </a>\n' +
      '            </div>\n'
    if (body) {
      demoModal += '<div class="w-commerce-commercecartformwrapper"><div class="w-commerce-commercecartfooter cart-footer">' +
        body + '</div></div>\n'
    }
    demoModal += '        </div>\n' +
      '    </div>'

    $('body').append(demoModal)
  }
})
