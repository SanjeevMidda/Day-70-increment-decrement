
let number = 0;
let buttonPlus = document.querySelector('.plus');
let buttonMinus = document.querySelector('.minus');
let update = document.querySelector('.number');

buttonPlus.addEventListener('click', increment);
buttonMinus.addEventListener('click', decrement);

function increment(){
    number++;
    update.innerHTML=number;
}

function decrement(){
    number--;
    console.log(number);
    update.innerHTML=number;
}