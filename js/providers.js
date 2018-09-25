$('.slide').slick({
    infinite: true,
    speed: 200,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true
});

$('.providersSlide').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
});