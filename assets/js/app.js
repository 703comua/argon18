"use strict";

$(document).ready(function () {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    // slider-mainpage
    const photosSlides = new Swiper(".photos__slides", {
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        loop: true, // безконечный слайдер
        autoplay: {
            delay: 3000,
            disableOnInteraction: true, // отключить после ручной прокрутки
            pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        },
        // loopedSlides: 1,
        touchAngle: 10, // Allowable angle (in degrees) to trigger touch move
        // slidesPerView: 'auto',
        // centeredSlides: true,

        // Responsive breakpoints
        // breakpoints: {
        //     // when window width is >= 360px
        //     360: {
        //         navigation: false,
        //     },
        //     // when window width is >= 640px
        //     768: {

        //     },
        // },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next-slide",
            prevEl: ".swiper-button-prev-slide",
        },

        // And if we need scrollbar
        // scrollbar: {
        // 	el: '.swiper-scrollbar',
        // },
    });

    // лента брендов
    const brandsSlides = new Swiper(".brands__slides", {
        // If we need pagination
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        slidesPerView: 6,
        slidesPerGroup: 2,
        // loop: true, // безконечный слайдер
        autoplay: {
            delay: 4000,
            disableOnInteraction: true, // отключить после ручной прокрутки
            pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        },
        // loopedSlides: 1,
        touchAngle: 10, // Allowable angle (in degrees) to trigger touch move
        // slidesPerView: 'auto',
        // centeredSlides: true,

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 4,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 6,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next-slide.transparent",
            prevEl: ".swiper-button-prev-slide.transparent",
        },

        // And if we need scrollbar
        // scrollbar: {
        // 	el: '.swiper-scrollbar',
        // },
    });

    // лента топ продаж
    const topProducts = new Swiper(".top-products", {
        // If we need pagination
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        slidesPerView: 4,
        slidesPerGroup: 2,
        // loop: true, // безконечный слайдер
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: true, // отключить после ручной прокрутки
        //     pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        // },
        // loopedSlides: 1,
        touchAngle: 10, // Allowable angle (in degrees) to trigger touch move
        // slidesPerView: 'auto',
        // centeredSlides: true,

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
            },
            // when window width is >= 1280px
            1280: {
                slidesPerView: 5,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next-slide",
            prevEl: ".swiper-button-prev-slide",
        },

        // And if we need scrollbar
        // scrollbar: {
        // 	el: '.swiper-scrollbar',
        // },
    });

    // лента новинок
    const newsProducts = new Swiper(".news-products", {
        // If we need pagination
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        slidesPerView: 4,
        slidesPerGroup: 2,
        // loop: true, // безконечный слайдер
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: true, // отключить после ручной прокрутки
        //     pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        // },
        // loopedSlides: 1,
        touchAngle: 10, // Allowable angle (in degrees) to trigger touch move
        // slidesPerView: 'auto',
        // centeredSlides: true,

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
            },
            // when window width is >= 1280px
            1280: {
                slidesPerView: 5,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next-slide",
            prevEl: ".swiper-button-prev-slide",
        },

        // And if we need scrollbar
        // scrollbar: {
        // 	el: '.swiper-scrollbar',
        // },
    });

    // лента новинок
    const salesProducts = new Swiper(".sales-products", {
        // If we need pagination
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        slidesPerView: 4,
        slidesPerGroup: 2,
        // loop: true, // безконечный слайдер
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: true, // отключить после ручной прокрутки
        //     pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        // },
        // loopedSlides: 1,
        touchAngle: 10, // Allowable angle (in degrees) to trigger touch move
        // slidesPerView: 'auto',
        // centeredSlides: true,

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
            },
            // when window width is >= 1280px
            1280: {
                slidesPerView: 5,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next-slide",
            prevEl: ".swiper-button-prev-slide",
        },

        // And if we need scrollbar
        // scrollbar: {
        // 	el: '.swiper-scrollbar',
        // },
    });

    $(".header__menu-burger").on("click", function () {
        $(".header__mob-menu").toggleClass("active");
        $("body").toggleClass("no-scroll");
        $(".backdrop").toggle();
    });
    $(".mob-menu__close").on("click", function () {
        $(".header__mob-menu").toggleClass("active");
        $("body").toggleClass("no-scroll");
        $(".backdrop").toggle();
    });
    $(".backdrop").on("click", function () {
        $(".header__mob-menu").removeClass("active");
        $("body").removeClass("no-scroll");
        $(".backdrop").hide();
    });

    $(".mob-menu-catalog__btn").on("click", function () {
        let $thisArrow = $(this);
        let $parentLi = $(this).parent();
        // если список есть
        if ($(this).next("ul").length == 1) {
            $(this).next("ul").slideToggle();
            // $prevLink.toggleClass('active');
            $(this).parent("li").toggleClass("active");
        }
    });

    // Fixed Nav
    var lastScrollTop = 0;
    $(window).on("scroll", function () {
        var wScroll = $(this).scrollTop();
        if (wScroll > $(".header").height() + 74) {
            $(".header__menu").addClass("sticky");
        } else {
            $(".header__menu").removeClass("sticky");
        }
        if (wScroll > 450) {
            if (wScroll < lastScrollTop) {
                $(".header__menu").removeClass("slide-up").addClass("slide-down");
            } else {
                $(".header__menu").removeClass("slide-down").addClass("slide-up");
            }
        }
        lastScrollTop = wScroll;

        // up-btn
        if ($(this).scrollTop() > 400) {
            // $('.up').fadeIn();
            $(".up").addClass("active");
        } else {
            // $('.up').fadeOut(400);
            $(".up").removeClass("active");
        }
        // if($(this).scrollTop() > 120) {
        // 	$('.search').addClass('fixed');
        // } else {
        // 	$('.search').removeClass('fixed');
        // }
    });

    // up btn
    $(".up").click(function () {
        $("body, html").animate(
            {
                scrollTop: 0,
            },
            800
        );
        return false;
    });
});
