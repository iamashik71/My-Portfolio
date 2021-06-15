$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 20,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 1000,
    stagePadding: 50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})