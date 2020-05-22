//login validate

let loginBtn = document.querySelector('.login__btn')
let loginInputs = document.querySelectorAll('.login__input')

loginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    loginInputs.forEach(item => {
        if (item.value === '') {
            item.style.border = '1px solid #fc4949'
        } else {
            item.style.border = '1px solid #E0E0E0'
        }
    })
})


let logingetSms = document.querySelector('.login__new')
logingetSms.addEventListener('click', () => {
    alert('Новый пароль выслан на почту')

})