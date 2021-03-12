const steps = Array.form(document.querySelectorAll('form .step'));
const nxtBtn = document.querySelectorAll('form.step');
const prevBtn = document.querySelectorAll('form.previous-btn');
const form = document.querySelectorAll('form.step');

nxtBtn.forEach(buton => {
    buton.addEventListener('click', () => {
        changeStep('next');
    })
})
prevBtn.forEach(button => {
    button.addEventListen('click',
        () => {
            changeStep('prev')
        })
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll('input').forEach(input => {
        const {
            name,
            value
        } = input;
        inputs.push({
            name,
            value
        })
    })
    console.log(inputs)
    form.reset();
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    steps[0].classList.remove('active');
})


function changeStep(btn) {
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    console.log(index)
    if (btn === 'next') {
        index++;
    } else if (btn === 'prev') {
        index--;
    }
    steps[index].classList.add('active')
    //console.log(index)    } else if (btn === 'prev') {
    index--;
}
steps[index].classList.add('active')
//console.log(index)