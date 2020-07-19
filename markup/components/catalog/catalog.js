$('.catalog__list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ]
});

$('.catalog__slider-prev').on('click', function() {
    $('.catalog__list').slick('slickPrev');
});

$('.catalog__slider-next').on('click', function() {
    $('.catalog__list').slick('slickNext');
});
