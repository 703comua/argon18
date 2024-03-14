("use strict");

var state = true;

$(document).ready(function () {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        closeExisting: true,
    });

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
            $(this).parent("li").toggleClass("active");
        }
    });
    
    
    // $(document).click(function (event) {
    //     // если мы кликнули в любом месте сайта, кроме иконки текущего выбранного языка
    //     if (!$(event.target).closest($(".фышву")).length) {
    //         $("body").removeClass("sidebar-collapse");
    //     }
    // });
});