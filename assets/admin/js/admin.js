("use strict");

var state = true;

$(document).ready(function () {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        closeExisting: true,
    });

    $('.select2').select2();

    $(".nav__burger-btn").on("click", function () {
        $("body").toggleClass("sidebar-collapse");
        $(".dropdown-menu").removeClass("is-open");
    });

    $(".content").on("click", function () {
        $("body").removeClass("sidebar-collapse");
        $(".dropdown-menu").removeClass("is-open");
    });

    $(".navlist__btn-user").on("click", function () {
        console.log($(this).next(".dropdown-menu"));
        $(this).next(".dropdown-menu").toggleClass('is-open');
    });
    $(".menu-aside__row-btn").on("click", function () {
        // если список есть
        if ($(this).next("ul").length == 1) {
            $(this).next("ul").slideToggle();
            // $(this).parent("li").toggleClass("active");
            $(this).toggleClass("active");
        }
    });
    
    // breadcrumbs
    const contentBreadcrumbsWrap = new Swiper(".content__breadcrumbs-wrap", {
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

    // $(document).click(function (event) {
    //     // если мы кликнули в любом месте сайта, кроме иконки текущего выбранного языка
    //     if (!$(event.target).closest($(".фышву")).length) {
    //         $("body").removeClass("sidebar-collapse");
    //     }
    // });
});