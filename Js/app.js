let inputElem = document.querySelectorAll('#input')
let calculateAge = document.querySelector('#submit')
let userYear = null;
let userMonth = null;
let userDay = null;

let showUserDays = document.querySelector('#show-day')
let showUserMonth = document.querySelector('#show-month')
let showUserYear = document.querySelector('#show-year')


const date = new Date()
const daysUntilNow = (date.getFullYear() * 365) + ((date.getMonth() + 1) * 30) + date.getDate()

console.log(daysUntilNow);



inputElem.forEach(input => {
    input.addEventListener('focus', (e) => {
        let divider = e.target.nextElementSibling

        divider.classList.remove('hidden')
        divider.classList.add('bg-purple')


    })

    input.addEventListener('blur', (e) => {
        let divider = e.target.nextElementSibling

        divider.classList.add('hidden')

    })

    input.addEventListener('input', (e) => {
        // console.log(e.target.placeholder);

        switch (e.target.placeholder) {
            case 'DD': {
                userDay = Number(e.target.value)
                break;
            }
            case 'MM': {
                userMonth = Number(e.target.value)
                break;
            }
            case 'YY': {
                userYear = Number(e.target.value)
                console.log(userYear);
                break;
            }
        }
    })
})



calculateAge.addEventListener('click', () => {
    let userDateDays = (userYear * 365) + (userMonth * 30) + userDay

    let diffDays = daysUntilNow - userDateDays

    if (diffDays) {

        let userAgeYear = Math.trunc(diffDays / 365)
        let userAgeMonth = Math.trunc((diffDays % 365) / 30)
        let userAgeDays = Math.trunc((diffDays % 365) % 30)

        showUserYear.innerHTML = userAgeYear
        showUserMonth.innerHTML = userAgeMonth
        showUserDays.innerHTML = userAgeDays

    } else {

        alert('please enter number')

    }


    inputElem.forEach(input => {

        input.value = ''

        if (input.placeholder === 'DD') {

            input.focus()

        }
    })


})

