$('.partners__list').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1124,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5
            }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              autoplay: true
            }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              autoplay: true
            }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
            }
        },
    ]
});


$('.partners__slider-prev').on('click', function() {
    $('.partners__list').slick('slickPrev');
});

$('.partners__slider-next').on('click', function() {
    $('.partners__list').slick('slickNext');
});
