document.querySelector('.burger').addEventListener('click', toggleShowNav)

function toggleShowNav() {
    let navList = document.querySelector('.nav__list'),
        navBtn = document.querySelector('.nav__btn')

    document.querySelector('menu').classList.toggle('active-b')
    document.querySelector('.burger').classList.toggle('active-b')
    navBtn.classList.toggle('active-b')
    navList.classList.toggle('active-b')
    document.body.classList.toggle('lock')
}