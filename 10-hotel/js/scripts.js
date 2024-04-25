import {hotels} from './hotels.js';

// inject current year to footer
const rightNow = new Date();
const year = rightNow.getFullYear();
document.querySelector('#year').textContent = year;

const ham = document.querySelector('.ham');
const pw = document.querySelector('.pageWrapper');

ham.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

const cards = document.querySelector('.cards');
hotels.forEach(hotel => {
    const sec = document.createElement('section');

    const img = document.createElement('img');
    img.src = `images/${hotel.photo}`;
    img.alt = hotel.name;
    
    const h2 = document.createElement('h2');
    h2.textContent = hotel.name;

    const address = document.createElement('address');
    address.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

    const phone = document.createElement('a');
    phone.href = `tel:${hotel.phone}`;
    phone.textContent = hotel.phone;

    sec.appendChild(img);
    sec.appendChild(h2);
    sec.appendChild(address);
    sec.appendChild(phone);

    cards.appendChild(sec);

});