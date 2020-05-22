//registration validate

let regBtn = document.querySelector('.registration__btn')
let regInputs = document.querySelectorAll('.registration__input', '.registration__pass')

regBtn.addEventListener('click', (event) => {
    event.preventDefault()
    regInputs.forEach(item => {
        if (item.value === '') {
            item.style.border = '1px solid #fc4949'
        } else {
            item.style.border = '1px solid #E0E0E0'
        }
    })
})

let passViewBtn = document.querySelector('.pass_eye')
passViewBtn.addEventListener('click', () => {
    let x = document.querySelector(".registration__pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

})

let getSms = document.querySelector('.registration__btn-w')
getSms.addEventListener('click', () => {
    alert('Код выслан на почту')

})


