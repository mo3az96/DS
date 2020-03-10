
$(window).on("load", function () {
    $(".loader").fadeOut(1000, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
    });


    //map
    var adresse = "";


    var location = [adresse[0], $("#map").attr("lat"), $("#map").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        overviewMapControl: false,

        center: new google.maps.LatLng(24.8629889, 46.5980617),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: "images/pin.png"
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));
    /////////////////////////////////////

});
$(document).ready(function () {


    $('.filters').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        rtl: document.dir == 'rtl' ? true : false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
                nav: true,
                navText: ["<span class='icon-arrow-right'></span>", "<span class='icon-arrow-left'></span>"],
            },
            600: {
                items: 5,
                nav: false
            },
            1000: {
                items: 8,
                loop: false
            }
        }
    })

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
    $('.new-slider').owlCarousel({
        items: 3,
        margin: 30,
        autoplay: false,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        dots: false,
        nav: true,
        navText: ["<span class='icon-arrow-right'></span>", "<span class='icon-arrow-left'></span>"],
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

    /////////news Slider/////////
    $('.news-slider').owlCarousel({
        items: 3,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        rewind: false,
        autoplay: false,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                loop: true,
                rewind: true,
            },
            500: {
                items: 2,
                dots: true,
            },
            1000: {
                items: 3,
            },
        }
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
        $(".sec-sec .news .new").wrap("<div class='item'></div>");
        $(".sec-sec .news").addClass("owl-carousel");
        $('.sec-sec .news').owlCarousel({
            items: 1,
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            rewind: true,
            autoplay: false,
            nav: false,
            dots: true,
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

    $('.join,.model-open').click(function () {
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