"use strict";

$(document).ready(function () {
    // slider-mainpage
    const photos__slides = new Swiper(".photos__slides", {
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
        centeredSlides: true,

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
});
