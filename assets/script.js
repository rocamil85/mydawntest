window.addEventListener("load", () => {
  // menu toggle
  const button = document.querySelector("#menu-btn-action");
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");
    const currentControls = button.getAttribute("aria-controls");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
      document.querySelector(`#${currentControls}`).setAttribute("aria-expanded", "true");
      $('.menu-btn__text').text('Cerrar')
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
      document.querySelector(`#${currentControls}`).setAttribute("aria-expanded", "false");
      $('.menu-btn__text').text('Menú')
    }
  });

  // action toggle for the panels
  const panelControls = document.querySelectorAll('.panel-control')
  panelControls.forEach(control => {
    control.addEventListener('click', () => {
      const currentControls = control.getAttribute("aria-controls");
      const currentState = document.querySelector(`#${currentControls}`).getAttribute("aria-expanded")
      if (currentState === "false") {
        document.querySelector(`#${currentControls}`).setAttribute("aria-expanded", "true");
        document.querySelector('.main').classList.add('main-blur')
      } else {
        document.querySelector(`#${currentControls}`).setAttribute("aria-expanded", "false");
        document.querySelector('.main').classList.remove('main-blur')
      }
    })
  })

  // hide all the panels clicking the background
  const panelBackgrounds = document.querySelectorAll('.panel__background')
  panelBackgrounds.forEach(background => {
    background.addEventListener('click', () => {
      const currentState = background.parentNode.getAttribute("aria-expanded");
      if (currentState === "true") {
        background.parentNode.setAttribute("aria-expanded", "false");
        document.querySelector('.main').classList.remove('main-blur')
      }
    })
  })

  // hide all the panels clicking the colse button
  const panelCloseButons = document.querySelectorAll('.panel__header--close')
  panelCloseButons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      const currentState = closeButton.parentNode.parentNode.parentNode.getAttribute("aria-expanded");
      if (currentState === "true") {
        closeButton.parentNode.parentNode.parentNode.setAttribute("aria-expanded", "false");
        document.querySelector('.main').classList.remove('main-blur')
      }
    })
  })

  // expandable action clicking to open
  const apandableActions = document.querySelectorAll('.expandable__action')
  apandableActions.forEach(apandableAction => {
    apandableAction.addEventListener('click', () => {
      console.log('asf');
      const currentState = apandableAction.parentNode.getAttribute("aria-expanded");
      if (currentState === "true") {
        apandableAction.parentNode.setAttribute("aria-expanded", "false");
        apandableAction.parentNode.querySelector('.expandable__content').style.maxHeight = null;
      } else {
        apandableAction.parentNode.setAttribute("aria-expanded", "true");
        apandableAction.parentNode.querySelector('.expandable__content').style.maxHeight = apandableAction.parentNode.querySelector('.expandable__content').scrollHeight + "px";
      }
    })
  })

  // slick
  function initSlick() {
    // index section-1
    $('.index .section-1__carrousel').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      fade: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows: true,
          }
        },
      ]
    });
    $('.index .section-1__carrousel .slick-dots button').text('')
    $('.index .section-1__carrousel .slick-prev').html(`
    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.16507 10.4287C5.16507 7.83691 2.85264 5.73585 0 5.73585L9.11693e-08 4.69299C2.85264 4.69299 5.16507 2.59195 5.16507 0.00012207L6.31291 0.000122171C6.31291 1.94003 5.25295 3.65495 3.63061 4.69299L17.381 4.69299V5.73585L3.63061 5.73585C5.25295 6.77387 6.31291 8.48883 6.31291 10.4287H5.16507Z" fill="var(--color-white)"/>
    </svg>
    `)
    $('.index .section-1__carrousel .slick-next').html(`
    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2158 -1.40522e-06C12.2158 2.5918 14.5283 4.69286 17.3809 4.69286L17.3809 5.73572C14.5283 5.73572 12.2158 7.83676 12.2158 10.4286L11.068 10.4286C11.068 8.48868 12.128 6.77376 13.7503 5.73572L-6.06249e-05 5.73572L-6.05337e-05 4.69286L13.7503 4.69286C12.128 3.65484 11.068 1.93988 11.068 -1.50557e-06L12.2158 -1.40522e-06Z" fill="var(--color-white)"/>
    </svg>
    `)

    // index section 4 section-4__content
    $('.index .section-4__content').slick({
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.25,
            slidesToScroll: 1,
          }
        },
      ]
    });

    // list
    $('.list').slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.list .slick-dots button').text('')
    $('.list .slick-prev').html(`
    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.16507 10.4287C5.16507 7.83691 2.85264 5.73585 0 5.73585L9.11693e-08 4.69299C2.85264 4.69299 5.16507 2.59195 5.16507 0.00012207L6.31291 0.000122171C6.31291 1.94003 5.25295 3.65495 3.63061 4.69299L17.381 4.69299V5.73585L3.63061 5.73585C5.25295 6.77387 6.31291 8.48883 6.31291 10.4287H5.16507Z" fill="var(--color-black)"/>
    </svg>
    `)
    $('.list .slick-next').html(`
    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2158 -1.40522e-06C12.2158 2.5918 14.5283 4.69286 17.3809 4.69286L17.3809 5.73572C14.5283 5.73572 12.2158 7.83676 12.2158 10.4286L11.068 10.4286C11.068 8.48868 12.128 6.77376 13.7503 5.73572L-6.06249e-05 5.73572L-6.05337e-05 4.69286L13.7503 4.69286C12.128 3.65484 11.068 1.93988 11.068 -1.50557e-06L12.2158 -1.40522e-06Z" fill="var(--color-black)"/>
    </svg>
    `)

    // product gallery
    if (window.innerWidth < 768) {
      $('.product .section-1__galery').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      });
      $('.product .section-1__galery .slick-dots button').text('')
      $('.product .section-1__galery .slick-prev').html(`
      <
      `)
      $('.product .section-1__galery .slick-next').html(`
     >
      `)

    }
  }

  initSlick()

  // marquee
  document.querySelectorAll('.marquee').forEach(function (e) {
    var letter = e.querySelector('span');
    for (counter = 1; counter <= 20; ++counter) {
      var clone = letter.cloneNode(true);
      letter.after(clone);
    }
  })

  // product-list section 2
  function checkGrid() {
    const gridNumber = $('.product-list .section-2__grid--number.active').html();
    for (let i = 0; i < 20; i++) {
      $('.product-list .section-3').removeClass(`grid-${i}`)
    }
    $('.product-list .section-3').addClass(`grid-${gridNumber}`)
  }
  $('.product-list .section-2__grid--number.small').html(window.innerWidth < 768 ? '1' : '3')
  $('.product-list .section-2__grid--number.big').html(window.innerWidth < 768 ? '2' : '4')
  $('.product-list .section-2__grid').on('click', () => {
    if ($('.product-list .section-2__grid--number.small').hasClass('active')) {
      $('.product-list .section-2__grid--number.small').removeClass('active')
      $('.product-list .section-2__grid--number.big').addClass('active')
    } else {
      $('.product-list .section-2__grid--number.small').addClass('active')
      $('.product-list .section-2__grid--number.big').removeClass('active')
    }
    checkGrid();
  })
  checkGrid();

  // filters
  try {


    $('.filters-content__section--list--item').on('click', (event) => {
      if (event.target.classList.contains('active')) {
        event.target.classList.remove('active')
        return;
      }
      event.target.parentNode.querySelectorAll('.filters-content__section--list--item').forEach((e) => {
        e.classList.remove('active')
      })
      $(event.target).addClass('active')
    })
    $('#remove-filters').on('click', (event) => {
      $('.filters-content__section--list--item.active').removeClass('active')
    })
    if (window.innerWidth > 1280) {
      const filters = $('#panel-order .filters-content').clone(true)
      document.querySelector('#panel-order .filters-content').remove()
      document.querySelector('#panel-order').remove()
      $('.product-list .section-2__order .popover .popover__content')
        .append(filters)
    }
  } catch (error) {

  }

  try {
    // event click
    document.querySelectorAll('.product__img--favorite').forEach(p => {
      p.addEventListener('click', () => {
        if (p.classList.contains('active')) {
          p.classList.remove('active')
          return;
        }
        p.classList.add('active')
      })
    })
  } catch (error) {

  }

  try {
    // event click
    document.querySelectorAll('.button-favorite').forEach(p => {
      p.addEventListener('click', () => {
        if (p.classList.contains('button-favorite-active')) {
          p.classList.remove('button-favorite-active')
          return;
        }
        p.classList.add('button-favorite-active')
      })
    })
  } catch (error) {

  }
});

