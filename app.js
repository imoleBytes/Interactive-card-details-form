const nameInput = document.querySelector('#holder-name');
const numberInput = document.querySelector('#holder-number');
const cvcInput = document.querySelector('#cvc');
const monthInput = document.querySelector('#mm');
const yearInput = document.querySelector('#yy');

const cardNumber = document.querySelector('.number');
const cardName = document.querySelector('.name');
const cardCVC = document.querySelector('.cvc-number');
const cardmonth = document.querySelector('#month');
const cardYear = document.querySelector('#year');



nameInput.addEventListener('input', (e)=>{
    cardName.innerText = e.target.value;
    if (cardName.innerText ==""){
        cardName.innerText = "Jane Appleseed"
    }
});

numberInput.addEventListener('input', (e)=>{
    cardNumber.innerText = e.target.value;
    if (cardNumber.innerText ==""){
        cardNumber.innerText = "0000 0000 0000 0000"
    }
});

cvcInput.addEventListener('input', (e)=>{
    cardCVC.innerText = e.target.value;
    if (cardCVC.innerText ==""){
        cardCVC.innerText = "000"
    }
});

monthInput.addEventListener('input', (e)=>{
    cardmonth.innerText = e.target.value;
    if (cardmonth.innerText ==""){
        cardmonth.innerText = "00"
    }
});

yearInput.addEventListener('input', (e)=>{
    cardYear.innerText = e.target.value;
    if (cardYear.innerText ==""){
        cardYear.innerText = "00"
    }
});






