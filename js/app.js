const body = document.querySelector('body');
const questionItems = document.querySelectorAll('.questions__item');
const nextFlower = document.querySelector('.flowers__next');
const prevFlower = document.querySelector('.flowers__prev');
const flowersPage = document.querySelector('.flowers__page');
const flowers = document.querySelector('.flowers');
const flower = document.querySelector('.flowers__flower');
const flowersOrderBtn = document.querySelector('.flowers__order_btn');
const flowersWrapper = document.querySelector('.flowers__wrapper');
const goToChooseBtn = document.querySelector('.top__goToChooseBtn');
const questionsBtn = document.querySelector('.question__btn');
const questionsWrapper = document.querySelector('.questions__wrapper');
const form = document.querySelector('.form');
const formRequiredInputs = document.querySelectorAll('.form__input[required]');
const formCloseBtn = document.querySelector('.form__close_btn');
const formSubmit = document.querySelector('.form__submit');
const successPopup = document.querySelector('.success');
const successOk = document.querySelector('.success__ok');

const windowWidth = body.offsetWidth;
let flowersWrapperPosition = windowWidth * 1.5;

let currentFlowerNumber = 1;

function showAnswer (evt) {
    evt.currentTarget.classList.toggle('questions__item--opened');
}

goToChooseBtn.removeAttribute('href');

goToChooseBtn.addEventListener('click', function() {
    window.scrollTo({
        top: flowers.offsetTop,
        behavior: "smooth"
    });
});

function hideSuccessPopup() {
    successPopup.classList.add('success__hidden');
}

function showSuccessPopup() {
    successPopup.classList.remove('success__hidden');
    successOk.addEventListener('click', hideSuccessPopup);
}

function showForm() {
    form.classList.remove('form__hidden');
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        showSuccessPopup();
        hideForm();
    });
}

function hideForm() {
    form.classList.add('form__hidden');
    form.reset();
}

flowersOrderBtn.addEventListener('click', function() {
    showForm();
    formCloseBtn.addEventListener('click', hideForm);
});

questionsBtn.addEventListener('click', function() {
    window.scrollTo({
        top: questionsWrapper.offsetTop,
        behavior: "smooth"
    });
});

questionItems.forEach(function(qItem) {
    qItem.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('questions__question')) {
            showAnswer(evt);
        }
    })
});

function setButtonsDisabled() {
    if (currentFlowerNumber >= flowersWrapper.children.length) {
        nextFlower.setAttribute('disabled', true);
    } else if (currentFlowerNumber <= 1) {
        prevFlower.setAttribute('disabled', true);
    } else {
        nextFlower.removeAttribute('disabled');
        prevFlower.removeAttribute('disabled');
    }
}

nextFlower.addEventListener('click', function() {
    console.log(flowers.offsetWidth, flower.offsetWidth, flowersWrapper.offsetWidth);
    currentFlowerNumber++;
    flowersPage.textContent = '0' + currentFlowerNumber.toString();
    flowersWrapperPosition -= windowWidth;
    flowersWrapper.style.left = flowersWrapperPosition + 'px';
    
    setButtonsDisabled();
});

prevFlower.addEventListener('click', function() {
    currentFlowerNumber--;
    flowersPage.textContent = '0' + currentFlowerNumber.toString();
    flowersWrapperPosition += windowWidth;
    flowersWrapper.style.left = flowersWrapperPosition + 'px';
    setButtonsDisabled();
});

