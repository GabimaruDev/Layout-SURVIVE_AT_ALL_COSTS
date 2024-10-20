const headerButton = document.querySelector('.header__button'),
    thirdLine = headerButton.querySelector('.third-line');

headerButton.addEventListener('click', () => {
    headerButton.classList.toggle('width-line')
})