("use strict");

var state = true;

$(document).ready(function () {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        closeExisting: true,
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

    // лента распродажа
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
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });

    // лента популярных брендов
    const popularBrandsContent = new Swiper(".popular-brands__content", {
        // If we need pagination
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        slidesPerView: 5,
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
            // when window width is >= 360px
            480: {
                slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 4,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 5,
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

    // лента топ продаж в aside
    const asideTopSaleSwiper = new Swiper(".aside__top-sale-swiper", {
        // If we need pagination
        pagination: {
            el: ".aside-top-sale__pagination",
            clickable: true,
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true, // безконечный слайдер
        autoplay: {
            delay: 4000,
            disableOnInteraction: true, // отключить после ручной прокрутки
            pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        },
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

    $(".cabinet__auth-btn.login").on("click", function () {
        $(".header__mob-menu").toggleClass("active");
        $("body").toggleClass("no-scroll");
        $(".backdrop").toggle();
    });

    $(".backdrop").on("click", function () {
        $(".header__mob-menu").removeClass("active");
        $("body").removeClass("no-scroll");
        $(".aside").removeClass("is-open");
        $(".backdrop").hide();
    });

    $(".aside__close-btn").on("click", function () {
        $(".aside").toggleClass("is-open");
        $("body").toggleClass("no-scroll");
        $(".backdrop").toggle();
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
            // console.log('removeClass("active")');
        }
        // если мы кликнули в любом месте сайта, кроме кнопки сортирвоки товара
        if (!$(event.target).closest($(".sorter__btn")).length) {
            $(".sorter__dropdownmenu").slideUp();
        }
    });

    // sorter__btn
    $(".sorter__btn").on("click", () => {
        $(".sorter__dropdownmenu").slideToggle();
    });

    // product sorting
    $(".sorter__dropdownmenu .dropdownmenu__item").on("click", function () {
        $(".sorter__dropdownmenu .dropdownmenu__item").removeClass("active");
        $(this).toggleClass("active");
        $(".sorter__dropdownmenu").slideToggle();
        // $('.backdrop').hide();
        $(".sorter__current-value").text($(this).attr("data-text"));

        var $layerId = $(this).data("layerid");
        var $layerLink = $(this).data("layerlink");
        var $from = $(this).data("from");
        var $till = $(this).data("till");
        var $sortValue = $(this).data("sortvalue");

        // alert('layerId = ' + $layerId);
        // alert('layerLink = ' + $layerLink);
        // alert('sortValue = ' + $sortValue);
        filter_products_list($layerId, $from, $till, $sortValue);
    });

    // aside__label
    $(".aside__label").on("click", function (event) {
        event.preventDefault(); // Будут отменен переход по ссылке
        // console.log(event);
        // $(this).toggleClass('active');
        // $(this).parent().parent().toggleClass('active');
        $(this).next(".aside__content").slideToggle();
        $(this).closest(".aside__item").toggleClass("active");
        // $($(this).parent().parent().children(".submenu")).toggle();
    });

    // filterbox__head
    $(".filterbox__head").on("click", function (event) {
        $(this).next(".filterbox__content").slideToggle();
        $(this).toggleClass("is-close");
        // $($(this).parent().parent().children(".submenu")).toggle();
    });

    // price-slider
    if ($("div").is(".price-slider")) {
        // alert('price slider exist');
        let price_from_min = $("#price_from_min").val();
        // console.log('price_from_min = ' + price_from_min);
        let price_till_max = $("#price_till_max").val();
        // console.log('price_till_max = ' + price_till_max);
        let price_from = $("#price_from").val();
        // console.log('price_from = ' + price_from);
        let price_till = $("#price_till").val();
        // console.log('price_till = ' + price_till);
        $(".price-slider").slider({
            range: true,
            step: 1,
            min: Number(price_from_min),
            max: Number(price_till_max),
            values: [Number(price_from), Number(price_till)],
            slide: function (event, ui) {
                // Поле минимального значения
                $("#price_from").val(ui.values[0]);
                // Поле максимального значения
                $("#price_till").val(ui.values[1]);
            },
            // отслеживаем событие перетаскивания бегунков мышкой
            change: function (event, ui) {
                // console.log('event = ' + event);
                // console.log('min = ' + ui.values[ 0 ]);
                // console.log('max = ' + ui.values[ 1 ]);
                // getMatchBlock();
            },
        });
        // Записываем значения ползунков в момент загрузки страницы
        // То есть значения по умолчанию
        $("#price_from").val($(".price-slider").slider("values", 0));
        $("#price_till").val($(".price-slider").slider("values", 1));

        // при смене значений текстового поля
        $(".price").on("change paste keyup", function () {
            // console.log($(ev.target).val());
            // console.log('changed price range');
            // обновляем слайдер
            clearTimeout(timer);
            var ms = 1500; // milliseconds
            timer = setTimeout(function () {
                generatePriceRangeSlider();
            }, ms);
        });
    }

    // filter-show-btn
    $(".filter-show-btn").on("click", function () {
        $(".aside").addClass("is-open");
        $("body").addClass("no-scroll");
        $(".backdrop").show();
    });

    ////////////////////////////////////
    // product-gallery
    ////////////////////////////////////
    var product_slider = new Swiper(".product-slider", {
        slidesPerView: 1,
        thumbs: {
            // свайпер с миниатюрами
            // и его настройки
            swiper: {
                el: ".product-thumbs-slider",
                slidesPerView: 4,
                direction: "vertical",
                // slideToClickedSlide: true,
            },
        },
        navigation: {
            nextEl: ".product-gallery-thumbs-prev-btn",
            prevEl: ".product-gallery-thumbs-next-btn",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true, // отключить после ручной прокрутки
            pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        },
        breakpoints: {
            // when window width is >= 360px
            360: {
                pagination: {
                    el: ".product-slider-swiper-pagination",
                    type: "bullets",
                    clickable: true,
                },
            },
            // when window width is >= 990px
            768: {},
        },
    });

    // summary__tab
    $(".summary__tab").on("click", function () {
        $(".summary__tab").removeClass("active");
        $(this).addClass("active");
        $(".summary__item").removeClass("active");
        $(".summary__item-" + $(this).data("target")).addClass("active");
    });

    // product payments tabs
    $(".payments-info-tabs-item").on("click", function () {
        $(".payments-info-tabs-item").removeClass("active");
        $(this).addClass("active");
        $(".payments-info-tabs-content-item").removeClass("active");
        $(".payments-info-tabs-content-item").hide();
        $(".tab-content-" + $(this).data("target")).fadeIn();
    });

    // product payments tabs items-mobile
    $(".payments-info-tabs-item-mobile").on("click", function () {
        // $(this).next().toggleClass;
        $(this).next(".payments-info-tabs-content-item").slideToggle("fast");
        $(this).toggleClass("active");
    });

    // rating__scroll-btn
    $(".rating__scroll-btn").on("click", function () {
        $(".summary__tab").removeClass("active");
        $(".summary__tab.reviews").addClass("active");
        $(".summary__item").removeClass("active");
        $(".summary__item.reviews").addClass("active");

        var $fullDescription = $(".summary");
        var $fullDescriptionTop = $fullDescription.position().top - 10;
        // console.log('commentsTop = ' + $commentsTop);

        $("body,html").animate(
            {
                scrollTop: $fullDescriptionTop,
            },
            800
        );
    });

    ////////////
    // plus
    ////////////
    $(".quantity__btn.plus").on("click", function () {
        let qty = $(".quantity__input").val();
        $(".quantity__input").val(parseInt(qty) + 1);
    });

    ////////////
    // minus
    ////////////
    $(".quantity__btn.minus").on("click", function () {
        let qty = $(".quantity__input").val();
        let newValue = parseInt(qty) - 1;
        if (newValue < 1) {
            newValue = 1;
        }
        $(".quantity__input").val(newValue);
    });

    // interest-lenta
    const interest_lenta = new Swiper(".swiper-interest-lenta", {
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        loop: false, // безконечный слайдер
        // autoplay: {
        // 	delay: 3000,
        // 	disableOnInteraction: true, // отключить после ручной прокрутки
        // 	pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        // },
        // loopedSlides: 1,
        touchAngle: 10, // Allowable angle (in degrees) to trigger touch move
        // slidesPerView: 'auto',
        // centeredSlides: true,
        slidesPerView: 3,

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            360: {
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 4,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
            },
            // when window width is >= 1150px
            1150: {
                slidesPerView: 6,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: ".interest-lenta-swiper-button-next",
            prevEl: ".interest-lenta-swiper-button-prev",
        },

        watchOverflow: true, // отключается слайдер, если слайдов меньше чем нужно
        slidesPerGroup: 2, // кол-во пролистываемых слайдов

        // And if we need scrollbar
        // scrollbar: {
        // 	el: '.swiper-scrollbar',
        // },
    });

    ///////////////////////////////////////////////////////
    // validation
    ///////////////////////////////////////////////////////
    var setDefault = function (elem) {
        elem.parent().removeClass("has-error");
        elem.parent().removeClass("has-success");
        //elem.next().next().removeClass('glyphicon-remove');
        //elem.next().next().removeClass('glyphicon-ok');
    };
    var setOk = function (elem) {
        elem.parent().removeClass("has-error");
        elem.parent().addClass("has-success");
        //elem.next().next().removeClass('glyphicon-remove');
        //elem.next().next().addClass('glyphicon-ok');
    };
    var setError = function (elem) {
        elem.parent().removeClass("has-success");
        elem.parent().addClass("has-error");
        //elem.next().next().removeClass('glyphicon-ok');
        //elem.next().next().addClass('glyphicon-remove');
    };
    var checkMob = function (elem) {
        var value = elem.val();
        //console.log("Value = (" + value + ")");
        if (value === "") {
            setError(elem);
            //console.log("Error: value = ''");
            return false;
        } else if (!/^\+7\((039|985|050|063|073|066|067|068|091|092|093|094|095|096|097|098|099)\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(value)) {
            setError(elem);
            //console.log("Error: incorrect format phone ''");
            return false;
        } else {
            setOk(elem);
            //console.log("Ok");
            return true;
        }
    };
    var checkEmail = function (elem) {
        var value = elem.val();
        //console.log("Value = (" + value + ")");
        if (value === "") {
            setError(elem);
            //console.log("Error: value = ''");
            return false;
        } else if (
            !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(
                value
            )
        ) {
            setError(elem);
            // console.log("Error: incorrect format email ''");
            return false;
        } else {
            setOk(elem);
            //console.log("Ok");
            return true;
        }
    };
    var checkPswd = function (pasw, pasw2) {
        var pasw_value = pasw.val();
        var pasw2_value = pasw2.val();
        //console.log("Value = (" + value + ")");
        if (pasw_value !== pasw2_value) {
            setError(pasw2);
            // console.log("Error: pasw_value != pasw2_value");
            alert("Пароли не совпадают");
            return false;
        } else {
            setOk(pasw2);
            //console.log("Ok");
            return true;
        }
    };
    var checkPswdPattern = function (elem) {
        var value = elem.val();

        let regexp = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}/g; // (regexp только что создан: regexp.lastIndex=0)
        if (!regexp.test(value)) {
            setError(elem);
            //console.log("Error: value = ''");
            return false;
        } else {
            setOk(elem);
            //console.log("Ok");
            return true;
        }
    };

    var checkText = function (elem) {
        var value = elem.val();
        //console.log("Value = (" + value + ")");
        if (value === "") {
            setError(elem);
            // console.log("Error: value = ''");
            return false;
        } else if (value.length < 3) {
            setError(elem);
            // console.log("Error: length less 3 symbols");
            return false;
        } else {
            setOk(elem);
            //console.log("Ok");
            return true;
        }
    };

    $(".phone").mask("+7(999) 999-99-99", {
        completed: function () {
            checkMob(this);
            //console.log('checker after complete');
        },
    });
    $("body").on("focus", ".phone", function (event) {
        $(".phone").mask("+7(999) 999-99-99", {
            completed: function () {
                checkMob(this);
                //console.log('checker after complete');
            },
        });
    });
});
