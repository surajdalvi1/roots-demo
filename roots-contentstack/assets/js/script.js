// add your code here
(function ($) {
    "use strict;"

    $(document).ready(function() {

        // prevent the # links to scroll to the top of the page
        $("[href=#]").click(function(e) {
            e.preventDefault();
        });

        $("[data-toggle=popover]").popover();

        $("[data-toggle=tooltip]").tooltip();

        // flexslider
        $('.flex-bullet-slider').flexslider({
            slideshowSpeed: 5000,
            directionNav: false,
            animation: "fade"
        });

        $('.flex-arrow-slider').flexslider({
            slideshowSpeed: 3000,
            directionNav: true,
            controlNav: false,
            animation: "fade"
        });

        $('.vertical-center').flexVerticalCenter('padding-top');

        //Portfolio page functionalities
        $('#grid').mixitup();

        // Lightbox
        $('.venobox').venobox();

        //Sticky Header
        if ($().waypoint) {
            $('header').waypoint('sticky', {
                offset: "-25px"
            });
        }


        /*Add class when scroll down*/
        $(window).scroll(function(event){
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $("#back-to-top").addClass("show");
            } else {
                $("#back-to-top").removeClass("show");
            }
        });

        //$(window).scroll(function() {
        //    if ($(this).scrollTop() > 200) {
        //        $('#back-to-top').fadeIn();
        //    } else {
        //        $('#back-to-top').fadeOut();
        //    }
        //});

        $("#back-to-top").click(function () {
            $("html, body").animate({scrollTop: 0}, 300);
        });

        //$("ul.nav li:has(ul)").hover(function(){
        //  $('ul.dropdown-menu').slideDown();
        //}, function(){
        //  $('ul.dropdown-menu').slideUp();
        //});

        //$(function(){
        //  $(".nav ul li a").on("click", function() {
        //    console.log('clicked');
        //    $(".nav ul li a").removeClass("active");
        //    $(this).addClass("active");
        //  });
        //});

        //$('.nav ul li').click(function() {
        //  $(this).addClass('active').siblings().removeClass('active');
        //});

        $( "ul.nav > li" ).each(function() {
            $('ul.nav > li:has(ul)').addClass('dropdown');
        });

        var urlPath = location.pathname;
        $( "ul.nav a" ).each(function() {
            $(this).parent().removeClass("active");
            var hrefVal = $(this).attr("href");
            if(urlPath == hrefVal){
                $(this).parent().addClass("active");
                if($(this).parents("ul").parent().is("li")){
                    $(this).parents(".dropdown").addClass("active");
                }
            }
        });


    });

})(jQuery);




jQuery(window).load(function() {
    "use strict";

    // Parallax
    if ($(window).width() >= 991 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
        $(window).stellar({
            horizontalScrolling: false,
            horizontalOffset: 0
        });
    }

    $(window).resize(function() {
        ($(window).width() < 991 || navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) ? $(window).stellar('destroy') : $(window).stellar({ horizontalScrolling: false, horizontalOffset: 0 });
    });

    // Google Maps Goodness

});