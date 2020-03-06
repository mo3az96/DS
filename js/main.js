
$(window).on("load", function () { });
$(document).ready(function () {
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        autoplay: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
    });
    /////////Main Slider/////////
    $('.services-slider').owlCarousel({
        items: 3,
        center: true,
        margin: 30,
        // autoplay: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<span class='icon-arrow-right'></span>", "<span class='icon-arrow-left'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3
            }
        }
    });
    $('.news-slider').owlCarousel({
        items: 1,
        margin: 30,
        // autoplay: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false
    });


    $('.menubtn').click(function () {
        $(this).toggleClass('open');
        $("nav").fadeToggle("500");
        $("body").toggleClass("overflow");
    });


    if ($(window).width() <= 767) {
        $(".gallery .item-cont").unwrap();
        $(".gallery").addClass("owl-carousel");
        // $(".item-cont").addClass("swiper-slide");
        $('.gallery').owlCarousel({
            items: 1,
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false
        });
    }
});