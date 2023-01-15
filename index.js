let info = document.forms.example_form
let inp = document.querySelectorAll('.box-required input')
let all = document.querySelector('.all')
let need = document.querySelector('.need')
let input = document.querySelectorAll('input')
let error = document.querySelector('.error')
let success = document.querySelector('.success')

info.onsubmit = (event) => {
    event.preventDefault()
    let isError = false

    all.innerHTML = input.length
    inp.forEach((el) => {
        if (el.value.length === 0) {
            el.style.backgroundColor = 'red'
            error.innerHTML++
        }

        if (el.value.length >= 1) {
            success.innerHTML++
        }

        need.innerHTML = inp.length
    })



    submit()
}

function submit() {
    let user = {}
    let fm = new FormData(example_form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}