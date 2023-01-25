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







