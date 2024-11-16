const body = document.querySelector('.body'),
    headerMenu = document.querySelector('.header__menu'),
    headerList = document.querySelector('.header__list'),
    headerItem = document.querySelectorAll('.header__item'),
    headerButton = document.querySelector('.header__button');

headerButton.addEventListener('click', () => {
    body.classList.toggle('lock-screen')
    headerButton.classList.toggle('width-line')
    headerMenu.classList.toggle('header__menu-active')
    headerList.classList.toggle('header__list-active')
})

headerItem.forEach(item => item.addEventListener('click', () => {
    body.classList.toggle('lock-screen')
    headerButton.classList.remove('width-line')
    headerMenu.classList.remove('header__menu-active')
    headerList.classList.remove('header__list-active')
}))


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