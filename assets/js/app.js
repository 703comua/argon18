"use strict";

var state = true;

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

    // лента отзывов
    const customerReviewsContent = new Swiper(".customer-reviews__content", {
        // If we need pagination
        pagination: {
            el: ".customer-reviews__pagination",
            clickable: true,
        },
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 24,
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
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
            },
            // when window width is >= 1280px
            1280: {
                slidesPerView: 3,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: ".arrows__btn.arrow-rigth",
            prevEl: ".arrows__btn.arrow-left",
        },

        // And if we need scrollbar
        // scrollbar: {
        // 	el: '.swiper-scrollbar',
        // },
    });

    // breadcrumbs
    const breadcrumbsContainer = new Swiper(".breadcrumbs__container", {
        slidesPerView: "auto",
        freeMode: true, // при перетаскивании превью ведет себя как при скролле
        grabCursor: true, // Если установлено значение true, указатель изменится на форму ладони, когда мышь накрывает Swiper, а указатель изменится на форму ручки при перетаскивании. (Зависит от формы браузера)
        speed: 1000,
        touchAngle: 10, // Allowable angle (in degrees) to trigger touch move
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

    $(".mob-menu__callback-btn").on("click", function () {
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

    // text-block open
    $(".text__open-btn").on("click", function () {
        const target = $(this).attr("data-target");
        // console.log($(target));
        // console.log(state);
        let btn = $(this);
        let btnSpan = $(this).find("span");
        let textBlockTitleHeight = $(".text__title").height();
        let textBlockContentHeight = $(".text__content").height();

        if (state && !$(this).hasClass("open")) {
            // разворачиваем текстовый блок
            $(target).addClass("open");
            $(target).animate(
                {
                    maxHeight: textBlockTitleHeight + textBlockContentHeight + 100, // ширина элемента
                },
                {
                    duration: 300, // продолжительность анимации
                    easing: "linear", // скорость анимации
                    complete: function () {
                        // callback
                        // alert("текстовый блок развернут");
                        btnSpan.text("Свернуть");
                        btn.addClass("active");
                    },
                }
            );
        } else {
            // сворачиваем текстовый блок
            $(target).animate(
                {
                    maxHeight: 500, // ширина элемента
                },
                {
                    duration: 300, // продолжительность анимации
                    easing: "linear", // скорость анимации
                    complete: function () {
                        // callback
                        // alert("текстовый блок свернут");
                        btnSpan.text("Читать далее");
                        btn.removeClass("active");
                        $(target).removeClass("open");
                    },
                }
            );
        }
        state = !state;
    });

    $(".header__menu-list-btn").on("click", function () {
        $(".header__menu-list-item").not($(this).parent()).removeClass("active");
        $(this).parent().toggleClass("active");
    });

    $(document).click(function (event) {
        // если мы кликнули в любом месте сайта, кроме иконки текущего выбранного языка
        if (!$(event.target).closest($(".header__menu-list-item")).length) {
            $(".header__menu-list-item").removeClass("active");
            console.log('removeClass("active")');
        }
    });
});
