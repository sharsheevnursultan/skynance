window.addEventListener('DOMContentLoaded', () => {
    // Slider *****************
    //
    // const slideItem = [
    //     {img: 1, title: "Выгодно", text: "поможем получить кредит по самой выгодной процентной ставке!"},
    //     {img: 2, title: "Надежно", text: "нет необходимости искать знакомых в банках!"},
    //     {img: 3, title: "Быстро", text: "заявки рассмотрим в течение нескольких дней!"},
    //     {img: 4, title: "Конфиденциально", text: "вся информация о вас хранится строго конфиденциально."}
    // ]
    //
    // let controlSlide = document.querySelectorAll('.header__line')
    // let image = document.querySelector('.header__img img')
    // let title = document.querySelector('.header__title')
    // let desc = document.querySelector('.header__desc')


    // controlSlide.forEach((item) => {
    //
    //     item.addEventListener('click', () => {
    //         let target = event.target
    //         let id = target.id
    //         console.log(target)
    //         title.textContent = slideItem[id].title
    //
    //         desc.textContent = slideItem[id].text
    //         image.src = `./images/slides/slide${slideItem[id].img}.png`
    //
    //         controlSlide.forEach((item) => {
    //             item.classList.remove('active')
    //         })
    //
    //         controlSlide[id].classList.add('active')
    //
    //     })
    // })


    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("header__body");
        // let dots = document.getElementsByClassName("header__line");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex-1].style.display = "flex";
        // dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 4000); // Change image every 2 seconds
    }




    // Valid ********************

    let emailBtn = document.querySelector('.email__btn')
    let emailInputs = document.querySelectorAll('.email__field')

    emailBtn.addEventListener('click', (event) => {
        event.preventDefault()
        emailInputs.forEach(item => {
            if (item.value === '') {
                item.style.border = '1px solid #fc4949'
            } else {
                item.style.border = '1px solid #E0E0E0'
            }
        })
    })


    // Menu 

    let navPos, navHeight

    function freshNavPosition() {
        navPos = document.querySelector('menu').offsetTop
        navHeight = document.querySelector('menu').offsetHeight
    }


    freshNavPosition()
    window.addEventListener('resize', freshNavPosition)

    let div = document.createElement('div')
    div.style.height = navHeight + 'px'
    document.querySelector('menu').before(div)
    div.hidden = true

    window.addEventListener('scroll', () => {
        let scrollPos = window.pageYOffset

        if (scrollPos >= navPos) {
            document.querySelector('menu').classList.add('fixed')
            div.hidden = false
        } else {
            document.querySelector('menu').classList.remove('fixed')
            div.hidden = true
        }
    })

    // Burger 

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

    // Slide *******************
    let slideImgs = document.querySelectorAll('.partners__img')
    let btnRight = document.querySelector('.arrow__btn-right')
    let btnLeft = document.querySelector('.arrow__btn-left')
    let pos = 0

    btnRight.addEventListener('click', () => moveRight(2))

    function moveRight(n) {
        if (pos === (slideImgs.length - n) * 100) {
            return
        }
        pos += 100
        slideImgs.forEach(item => {
            item.style.transform = `translateX(-${pos}%)`
        })
    }

    btnLeft.addEventListener('click', moveLeft)

    function moveLeft() {
        if (pos === 0) {
            return
        }
        pos -= 100
        slideImgs.forEach(item => {
            item.style.transform = `translateX(-${pos}%)`
        })
    }

    window.onresize = () => {
        if (window.innerWidth >= 768) {
            slideImgs.forEach(item => {
                item.style.transform = `translateX(-${0}%)`
            })
        }


    }

})