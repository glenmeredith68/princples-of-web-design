import {hotels} from 'hotels.js';

// inject current year to footer
const rightNow = new Date();
const year = rightNow.getFullYear();
document.querySelector('#year').textContent = year;

const ham = document.querySelector('.ham');
const pw = document.querySelector('.pageWrapper');

ham.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

const 