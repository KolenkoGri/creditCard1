import {el, setChildren} from 'redom';

const card = document.querySelector('.card');

const renderPage = () => {
    const cardInfo = el('div',{className: 'credit-card'}, 
    el('span', 'xxxx xxxx xxxx xxxx',{className: 'card__number'}), 
    el('div', {className: 'card__personal'},
    el('span', 'John Doe', {className: 'card__name'}),
    el('span', '04/24',{className: 'card__date'})));

    const cardHolder = el('form',{action: '#', className: 'form', id: 'form'},
    el('div',{className: 'form__input-wrap form__input-wrap_holder'},
    el('label', 'Card Holder', {className: 'form__label form__holder-label'}),
    el('input', {className: 'input input__holder', type: 'text'})));

    const cardNumber = 
    el('div',{className: 'form__input-wrap form__input-wrap_number'},
    el('label', 'Card Number', {className: 'form__label form__number-label'}),
    el('input', {className: 'input input__number', id: 'cardNumber'}));

    const cardExpiry = 
    el('div',{className: 'form__input-wrap form__input-wrap_date'},
    el('label', 'Card Expiry', {className: 'form__label form__number-label'}),
    el('input', {className: 'input input__date', type: 'text'}));

    const cvv = el('div',{className: 'form__input-wrap form__input-wrap_cvv'},
    el('label', 'CVV', {className: 'form__label form__number-label'}),
    el('input', {className: 'input input__cvv', type: 'text'}));

    const btnSumbit = el('button', 'CHECK OUT', {className: 'form__button'});

    cardHolder.append(cardNumber,cardExpiry,cvv,btnSumbit);
    return [cardInfo,cardHolder];
};

setChildren(card,renderPage());

const cardHold = document.querySelector('.input__holder');
const cardName = document.querySelector('.card__name');

cardHold.addEventListener('input', () => {
    cardName.textContent = cardHold.value;
    if(cardHold.value.length === 0) {
        cardName.textContent = 'John Doe';
    }
});

const inputNumber = document.querySelector('.input__number');
const cardNumber = document.querySelector('.card__number');

inputNumber.addEventListener('input', () => {
    cardNumber.textContent = inputNumber.value;
    if(inputNumber.value.length === 0) {
        cardNumber.textContent = 'xxxx xxxx xxxx xxxx';
    }
});

const inputDate = document.querySelector('.input__date');
const cardDate = document.querySelector('.card__date');

inputDate.addEventListener('input', () => {
    cardDate.textContent = inputDate.value;
    if(inputDate.value.length === 0) {
        cardDate.textContent = '04/24';
    }
});