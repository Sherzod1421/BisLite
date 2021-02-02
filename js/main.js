$(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
    infinity: true,
    slideToScroll: 1,
  });

  $(".works__inner").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/works-prev.svg" alt=""></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/works-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 455,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu > ul").slideToggle();
  });

  $(".header__drop-down.drop-down").on("click", function () {
    $(this).children("a + .drop-down__list").toggleClass("active");
  });
});
