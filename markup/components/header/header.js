$('.header__btn-nav').on("click", function(e) {
    e.preventDefault();
    $(".header__nav").toggleClass("header__nav--active");
});


$('.header__btn-close').on("click", function(e) {
    e.preventDefault();
    $(".header__nav").toggleClass("header__nav--active");
});
