
(function ($) {
    "use strict";
    $(document).ready(function () {

        // Header Style and Scroll to Top

        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        // dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        //Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }

        //mobile menu background
        $('.navbar-toggle').click(function () {
            $('.main-header').toggleClass('mobile-bg');
        });

        //LightBox
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'alwaysShowNavOnTouchDevices': true,
            'positionFromTop': 300
        })


        // Slick Js

        $('.slider-Area').slick({
            infinite: true,
            arrows: false,
            dots: false,
            autoplay: true,
            pauseOnHover: false,
            slidesToScroll: 1,
            slidesToShow: 1,
        });
        
        

        $('.latest-news-item').slick({
            slidesToShow: 3,
            autoplaySpeed: 2000,
            infinite: true,
            arrows: true,
            dots: false,
            autoplay: true,
            pauseOnHover: false,
            slidesToScroll: 1,
            prevArrow: '<span class="arrow-prev"><i class="fas fa-angle-left"></i>',
            nextArrow: '<span class="arrow-next"><i class="fas fa-angle-right"></i>',
        });
        
        
        //Product Carousel
        
        $("#img_01").elevateZoom();
        $("#img_02").elevateZoom();
        $("#img_03").elevateZoom();
        $("#img_04").elevateZoom();
        $("#img_05").elevateZoom();
        $("#img_06").elevateZoom();
        $("#img_07").elevateZoom();
        $("#img_08").elevateZoom();
        $("#img_09").elevateZoom();
        $("#img_10").elevateZoom();
        $("#img_11").elevateZoom();
        $("#img_12").elevateZoom();

        

        //Cursor pointer JS
        $(document).on("mousemove", function (event) {
            $(".cursor").css({
                "left": +event.pageX,
                "top": +event.pageY
            });
        });
        
    });
    

    // Scroll to Top Button 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 300) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    // Preloader
    $(window).on('load', function () {
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();

        //Cursor pointer JS
        $(document).on("mousemove", function (event) {
            $(".cursor").css({
                "left": +event.pageX,
                "top": +event.pageY
            });
        });

        // Isotope masonry 
        $('.itop-masonry').isotope({
            itemSelector: '.itop-masonry-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        })
    });


})(window.jQuery);


// SideBar Nav
function myFunction() {
            var checkBox = document.getElementById("myCheck");
            var text = document.getElementById("checkBoxClick");
            if (checkBox.checked == true) {
                text.style.left = "0";
            } else {
                text.style.left = "230px";
            }
        }



