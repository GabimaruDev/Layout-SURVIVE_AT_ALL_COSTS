const body = document.body;
const headerMenu = document.querySelector(".header__menu");
const headerList = document.querySelector(".header__list");
const headerItem = document.querySelectorAll(".header__item");
const headerButton = document.querySelector(".header__button");

headerButton.addEventListener("click", () => {
    body.classList.toggle("lock-screen");
    headerButton.classList.toggle("width-line");
    headerMenu.classList.toggle("header__menu-active");
    headerList.classList.toggle("header__list-active");
});

headerItem.forEach((item) =>
    item.addEventListener("click", () => {
        body.classList.toggle("lock-screen");
        headerButton.classList.remove("width-line");
        headerMenu.classList.remove("header__menu-active");
        headerList.classList.remove("header__list-active");
    })
);

new Swiper('.swiper-first', {
    loop: true,
    allowTouchMove: false,
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
    },
    keyboard: {
        enabled: true
    }
});