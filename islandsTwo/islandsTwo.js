//box1

const boxOne = document.querySelector('boxOne');
const transparentOne = document.querySelector('.transparentOne');

boxOne.addEventListener('click', makeTextOne);

function makeTextOne(){
    gsap.to('.transparentOne', {opacity:1, duration: 0.7, delay: 0.5});
};

//box2

const boxTwo = document.querySelector('boxTwo');
const transparentTwo = document.querySelector('.transparentTwo');

boxTwo.addEventListener('click', makeTextTwo);

function makeTextTwo(){
    gsap.to('.transparentTwo', {opacity:1, duration: 0.7, delay: 0.5});
};

//box3

const boxThree = document.querySelector('boxThree');
const transparentThree = document.querySelector('.transparentThree');

boxThree.addEventListener('click', makeTextThree);

function makeTextThree(){
    gsap.to('.transparentThree', {opacity:1, duration: 0.7, delay: 0.5});
};

//box4

const boxFour = document.querySelector('boxFour');
const transparentFour = document.querySelector('.transparentFour');

boxFour.addEventListener('click', makeTextFour);

function makeTextFour(){
    gsap.to('.transparentFour', {opacity:1, duration: 0.7, delay: 0.5});
};

