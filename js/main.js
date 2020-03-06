
$(window).on("load", function () {
    $(".loader").fadeOut(1000, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
        new WOW().init();
    });
});
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
    $('.clients-slider').owlCarousel({
        items: 7,
        stagePadding: 1,
        margin: 31,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        // autoplay: false,
        nav: true,
        dots: false,
        navText: ["<span class='icon-arrow-right'></span>", "<span class='icon-arrow-left'></span>"],
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 7
            }
        }
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
    $(' .input').focus(function () {
        // console.log($(this).parent().find(".floating-label"));
        $(this).parent().find(".floating-label").addClass('label-active');
    });

    $(".input").focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().find(".floating-label").removeClass('label-active');
        };
    });

    $('.join').click(function () {
        $(".model-fixed").fadeIn(400)
        $(".have-modal").addClass("show-modal");
        $("body").addClass("overflow");
    });
    $('.model-fixed').click(function () {
        $(".model-fixed").fadeOut(500)
        $(".have-modal").removeClass("show-modal");
        $("body").removeClass("overflow");
    });
    $('.have-modal').click(function (e) {
        e.stopPropagation();
    });
});