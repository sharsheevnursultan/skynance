window.addEventListener('DOMContentLoaded', () => {
    

    // Question  *****************
    let arrowBtns = document.querySelectorAll('.question__item')
    let arrowImages = document.querySelectorAll('.question__arrow img ')
    let texts = document.querySelectorAll('.question__text')

    arrowBtns.forEach(item => {
        item.addEventListener('click', changeStateText)
    })

    
    function hideText(classNameCurrent, currentItem) {

        texts.forEach(item => {
            if (item.classList.contains(classNameCurrent)) {
                item.style.display = 'none'
            }
        })

        arrowImages.forEach(item => {
            if (item.classList.contains(classNameCurrent)) {
                item.src = '../images/arrow/arrowDown.png'
            }
        })

        currentItem.addEventListener('click', changeStateText)
    }

    function changeStateText() {
        let className = event.currentTarget.classList[event.currentTarget.classList.length - 1]
        console.log(className)
        texts.forEach(item => {
            item.style.display = 'none'
            console.log(item)
            if (item.classList.contains(className)) {
                item.style.display = 'block'
            }
        })

        arrowImages.forEach(item => {
            item.src = '../images/arrow/arrowDown.png'
            if (item.classList.contains(className)) {
                item.src = '../images/arrow/arrowUp.png'
            }
        })
        event.currentTarget.removeEventListener('click', changeStateText)
        event.currentTarget.addEventListener('click', () => hideText(className, event.currentTarget))
    }


})