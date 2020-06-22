$(document).ready( function() {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $('.m-menu');
  const tab = $('.tab');

  mMenuBtn.on('click', function () {
    mMenu.toggleClass('active');
    $('body').toggleClass('no-scroll')
  });

  tab.on('click', function () {
    tab.removeClass('active');
    $(this).toggleClass('active');
    let activeTabContent = $(this).attr('data-target');
    $('.tabs-content').removeClass('visible')
    $(activeTabContent).toggleClass('visible')
  })
  $('.swiper-wrapper').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
});

