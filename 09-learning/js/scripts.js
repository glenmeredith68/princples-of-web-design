// inject current year to footer
const rightNow = new Date();
const year = rightNow.getFullYear();
document.querySelector('#year').textContent = year;

const ham = document.querySelector('#ham');
const nav = document.querySelector('#primaryNav');

ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    nav.classList.toggle('open');
})