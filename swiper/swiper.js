new Swiper('.swiper-first', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

new Swiper('.swiper-second', {
    effect: 'cards',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    keyboard: {
        enabled: true
    }
});