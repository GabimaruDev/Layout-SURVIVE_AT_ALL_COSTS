const body = document.querySelector('.body'),
    headerMenu = document.querySelector('.header__menu'),
    headerList = document.querySelector('.header__list'),
    headerButton = document.querySelector('.header__button'),
    thirdLine = headerButton.querySelector('.third-line');

headerButton.addEventListener('click', () => {
    body.classList.toggle('lock-screen')
    headerButton.classList.toggle('width-line')
    headerMenu.classList.toggle('header__menu-active')
    headerList.classList.toggle('header__list-active')
})




const language = document.querySelector('.language');

document.addEventListener('click', e => {
    if (e.target == language) {
        language.classList.toggle('open')
    } else if (language.classList.contains('open')) {
        language.classList.remove('open')
    }
})


const accordions = document.querySelectorAll('.accordion'),
    titles = document.querySelectorAll('.accordion__title'),
    contents = document.querySelectorAll('.accordion__content');

accordions.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab)

    if (activeContent.classList.contains('content__active')) {
        activeContent.classList.remove('content__active')
        item.classList.remove('accordion__active')
        activeContent.style.maxHeight = 0
    } else {
        contents.forEach(element => {
            element.classList.remove('content__active')
            element.style.maxHeight = 0
        })

        accordions.forEach(
            element => element.classList.remove('accordion__active')
        )

        item.classList.add('accordion__active')
        activeContent.classList.add('content__active')
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px'
    }
}))

document.querySelector('[data-tab="tab-1"]').classList.add('accordion__active')
document.querySelector('#tab-1').classList.add('content__active')
document.querySelector('#tab-1').style.maxHeight = document.querySelector('#tab-1').scrollHeight + 'px'