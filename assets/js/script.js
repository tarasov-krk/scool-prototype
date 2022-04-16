$(document).ready(() => {
  if (window.innerWidth <= 991) {
    $('body').addClass('mobile')
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
  });

  function showPeopleInfo() {
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

  function showDemoModal (text) {
    const demoModal = '<div id="demo-modal" style="opacity: 1;transition: opacity 300ms ease 0s;"\n' +
      '         class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal">\n' +
      '        <div class="w-commerce-commercecartcontainer cart-container" style="transform: none;">\n' +
      '            <div class="w-commerce-commercecartheader cart-header">\n' +
      '                <h5 class="w-commerce-commercecartheading">\n' + text + '</h5>\n' +
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
      '            </div>\n' +
      '        </div>\n' +
      '    </div>'

    $('body').append(demoModal)
  }
})
