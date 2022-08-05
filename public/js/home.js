$(document).ready(function(){
    $('#carousel-home').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            }
        }
    });
});