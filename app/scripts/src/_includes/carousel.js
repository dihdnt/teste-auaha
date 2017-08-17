$(document).ready(function(){
    $('.owl-vitrine').owlCarousel({
        autoplay:true,
        dots:false,
        autoplayHoverPause:true,
        autoplayTimeout:5000,
        loop:true,
        margin:10,
        nav: true,
        navText:[
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5,
                loop:true,
            }
        },
    });

    $('.owl-main').owlCarousel({
        autoplay:true,
        dots:false,
        autoplayHoverPause:true,
        autoplayTimeout:5000,
        loop:true,
        margin:10,
        nav: true,
        navText:[
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });

    $('.owl-marcas').owlCarousel({
        autoplay:true,
        dots:false,
        autoplayHoverPause:true,
        autoplayTimeout:5000,
        loop:true,
        margin:10,
        nav: true,
        navText:[
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"],
        responsiveClass:true,
        responsive:{
             0:{
                items:3,
                nav:true,
            },
            600:{
                items:3,
                nav:true,
            },
            1000:{
                items:6,
                nav:true,
                loop:true
            }
        }
    });

});