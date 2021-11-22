/*-----------------------------------------------------------------------------------
    Template Name: #
    Template URI: #
    Author:
    Author URI:  #
    Version: 1.0

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    ## Main Menu
    ## Sticky Header
    ## Header Breakpoint Resize
    ## Counter Up
    ## Project Progress Bar
    ## Project Slider One
    ## Project Slider Two
    ## Team Slider
    ## Active Tooltip
    ## Image Block slider
    ## Preloader
-----------------------------------------------------------------------------------*/

(function ($) {
    'use strict';


 

    // ===== Main Menu
    function mainMenu() {
        const navbarToggler = $('.nav-toggler'),
            navMenu = $('.nav-menu'),
            mobilePanel = $('.mobile-menu-panel'),
            mobilePanelMenu = $('.mobile-menu-panel .panel-menu'),
            navClose = $('.panel-close');

        // Navbar toggler
        navbarToggler.on('click', function (e) {
            e.preventDefault();

            navbarToggler.toggleClass('panel-opened');
            mobilePanel.toggleClass('panel-opened');
        });

        // Close icon
        navClose.on('click', function (e) {
            e.preventDefault();

            mobilePanel.removeClass('panel-opened');
            navbarToggler.removeClass('panel-opened');
        });

        // Adds toggle button to li items that have children
        navMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>');
            }
        });

        mobilePanelMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>');
            }
        });

        // Expands the dropdown menu on each click
        mobilePanelMenu.find('.dd-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent('li').children('ul.submenu').stop(true, true).slideToggle(350);
            $(this).toggleClass('submenu-opened')
        });
    };

    // ===== Sticky Header
    function stickyHeader() {
        let scroll_top = $(window).scrollTop(),
            siteHeader = $('.site-header'),
            offsetTop = siteHeader.outerHeight(),
            offsetTopAnimation = offsetTop + 150;

        if (siteHeader.hasClass('sticky-header')) {
            if (scroll_top > offsetTopAnimation) {
                siteHeader.addClass('sticky-on');
            } else {
                siteHeader.removeClass('sticky-on');
            }
        }
    }

    // ===== Header Breakpoint Resize
    function headerBreakpointResize() {
        // Breakpoint Check
        const windowWidth = $(window).innerWidth(),
            navContainer = $('.navbar-wrapper'),
            breakpoint = 992;

        if (windowWidth <= breakpoint) {
            navContainer.addClass('breakpoint-on');
        } else {
            navContainer.removeClass('breakpoint-on');
        }

        // Header Height
        const siteHeader = $('.site-header');
        if (!siteHeader.hasClass('transparent-header')) {
            let newHeight = 0;
            siteHeader.removeAttr('style');
            newHeight = siteHeader.outerHeight();
            siteHeader.height(newHeight);
        }
    }
    /*---------------------
    === Document Ready  ===
    ----------------------*/
    /* Download PDF */
    $(document).ready(function($)
    {
        $(document).on('click', '.btn-pdf', function(event)
        {
            event.preventDefault();
            var element = document.getElementById('pdfContent');
            var opt = {
                margin:       0,
                filename:     'product_details.pdf',
                image:        { type: 'jpeg', quality: 1 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            

            // New Promise-based usage:
            html2pdf().set(opt).from(element).save(); 
        });
    });
  

    $(document).ready(function () {
        mainMenu();
        headerBreakpointResize();
    });

    /*--------------------
    === Window Resize  ===
    --------------------*/
    $(window).on('resize', function () {
        headerBreakpointResize();
    });

    /*--------------------
    === Window Scroll  ===
    ----------------------*/
    $(window).on('scroll', function () {
        stickyHeader();
    });


    const swiper = new Swiper('.slider-hero', {
        speed: 400,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 50,
        grabCursor: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        allowTouchMove: true,
        autoplay: true,
        autoplay: {
            delay: 5000,
        },
  
        // using "ratio" endpoints
        // breakpoints: {
        //   '@0.75': {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   '@1.00': {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   '@1.50': {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // }
    });
    
    new Swiper('.slider-category', {
        speed: 800,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 50,
        grabCursor: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        allowTouchMove: true,
        // autoplay: true,
        // autoplay: {
        //     delay: 5000,
        // },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // using "ratio" endpoints
        // breakpoints: {
        //   '@0.75': {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   '@1.00': {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   '@1.50': {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // }
    });
    
    new Swiper('.article-top-slider', {
        speed: 800,
        loop: true,
        // centeredSlides: true,
        slidesPerView: 4,
        spaceBetween: 50,
        // centeredSlidesBounds: true,
        grabCursor: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        allowTouchMove: true,
        autoplay: true,
        autoplay: {
            delay: 5000,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // using "ratio" endpoints
        // breakpoints: {
        //   '@0.75': {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   '@1.00': {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   '@1.50': {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // }
    });

    new Swiper('.slider-trending', {
        speed: 800,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 50,
        grabCursor: true,
        autoplay: true,
        autoplay: {
            delay: 4000,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // using "ratio" endpoints
        // breakpoints: {
        //   '@0.75': {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   '@1.00': {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   '@1.50': {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // }
    });

    new Swiper('.slider-blog', {
        speed: 1200,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 50,
        grabCursor: true,
        autoplay: true,
        autoplay: {
            delay: 5000,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
  
        // using "ratio" endpoints
        // breakpoints: {
        //   '@0.75': {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   '@1.00': {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   '@1.50': {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // }
    });




})(jQuery);
