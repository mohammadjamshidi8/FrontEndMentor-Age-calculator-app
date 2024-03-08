let inputElem = document.querySelectorAll('#input')
let calculateAge = document.querySelector('#submit')
let userYear = null;
let userMonth = null;
let userDay = null;



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
                userDay = e.target.value
                break;
            }
            case 'MM': {
                userMonth = e.target.value
                break;
            }
            case 'YY': {
                userYear = e.target.value
                break;
            }
        }
    })
})

calculateAge.addEventListener('click', () => {
    inputElem.forEach(input => {
        input.value = ''

        if (input.placeholder === 'DD') {

            input.focus()
            
        }
    })
})