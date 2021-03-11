const questionItems = document.querySelectorAll('.questions__item');
const nextFlower = document.querySelector('.flowers__next');
const prevFlower = document.querySelector('.flowers__prev');
const flowersPage = document.querySelector('.flowers__page');
const flowers = document.querySelector('.flowers');
const flowersWrapper = document.querySelector('.flowers__wrapper');
const goToChooseBtn = document.querySelector('.top__goToChooseBtn');
const questionsBtn = document.querySelector('.question__btn');
const questionsWrapper = document.querySelector('.questions__wrapper');


let currentFlowerNumber = 1;

const flowersLeftValues = [504, 172, -172, -504];

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

questionsBtn.removeAttribute('href');

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
    if (currentFlowerNumber >= flowersLeftValues.length) {
        nextFlower.setAttribute('disabled', true);
    } else if (currentFlowerNumber <= 1) {
        prevFlower.setAttribute('disabled', true);
    } else {
        nextFlower.removeAttribute('disabled');
        prevFlower.removeAttribute('disabled');
    }
}

nextFlower.addEventListener('click', function() {
    currentFlowerNumber++;
    flowersPage.textContent = '0' + currentFlowerNumber.toString();
    flowersWrapper.style.left = flowersLeftValues[currentFlowerNumber - 1] + 'px';

    setButtonsDisabled();
});

prevFlower.addEventListener('click', function() {
    currentFlowerNumber--;
    flowersPage.textContent = '0' + currentFlowerNumber.toString();
    flowersWrapper.style.left = flowersLeftValues[currentFlowerNumber - 1] + 'px';

    setButtonsDisabled();
})