"use strict";

// HEADER

const nav = document.querySelector('.js-nav'),
        main = document.querySelector('.main');

nav.onclick = () => nav.classList.toggle('js-nav--on');
main.onclick = () => nav.classList.remove('js-nav--on');

// MAIN MIDDLE

const statusBtn1 = document.querySelector('.js-button-1'),
        statusBtn2 = document.querySelector('.js-button-2'),
        statusBtn3 = document.querySelector('.js-button-3'),
        statusBtn4 = document.querySelector('.js-button-4');

statusBtn1.onclick = () => {
        statusBtn1.classList.add('js-button--active');
        statusBtn2.classList.remove('js-button--active');
        statusBtn3.classList.remove('js-button--active');
        statusBtn4.classList.remove('js-button--active');
};
statusBtn2.onclick = () => {
        statusBtn2.classList.add('js-button--active');
        statusBtn1.classList.remove('js-button--active');
        statusBtn3.classList.remove('js-button--active');
        statusBtn4.classList.remove('js-button--active');
};
statusBtn3.onclick = () => {
        statusBtn3.classList.add('js-button--active');
        statusBtn1.classList.remove('js-button--active');
        statusBtn2.classList.remove('js-button--active');
        statusBtn4.classList.remove('js-button--active');
};
statusBtn4.onclick = () => {
        statusBtn4.classList.add('js-button--active');
        statusBtn1.classList.remove('js-button--active');
        statusBtn2.classList.remove('js-button--active');
        statusBtn3.classList.remove('js-button--active');
};

// 2-2-4 MIDDLE GRADE

const grade1 = document.querySelector('.js-grade-1'),
        grade2 = document.querySelector('.js-grade-2'),
        grade3 = document.querySelector('.js-grade-3'),
        grade4 = document.querySelector('.js-grade-4'),
        grade5 = document.querySelector('.js-grade-5');

grade1.onclick = () => {
        grade1.classList.add('js-grade--on');
        grade2.classList.remove('js-grade--on');
        grade3.classList.remove('js-grade--on');
        grade4.classList.remove('js-grade--on');
        grade5.classList.remove('js-grade--on');
};
grade2.onclick = () => {
        grade2.classList.add('js-grade--on');
        grade1.classList.remove('js-grade--on');
        grade3.classList.remove('js-grade--on');
        grade4.classList.remove('js-grade--on');
        grade5.classList.remove('js-grade--on');
};
grade3.onclick = () => {
        grade3.classList.add('js-grade--on');
        grade1.classList.remove('js-grade--on');
        grade2.classList.remove('js-grade--on');
        grade4.classList.remove('js-grade--on');
        grade5.classList.remove('js-grade--on');
};
grade4.onclick = () => {
        grade4.classList.add('js-grade--on');
        grade1.classList.remove('js-grade--on');
        grade2.classList.remove('js-grade--on');
        grade3.classList.remove('js-grade--on');
        grade5.classList.remove('js-grade--on');
};
grade5.onclick = () => {
        grade5.classList.add('js-grade--on');
        grade1.classList.remove('js-grade--on');
        grade2.classList.remove('js-grade--on');
        grade3.classList.remove('js-grade--on');
        grade4.classList.remove('js-grade--on');
};
// 2-2-6 MIDDLE NOTE

const textarea = document.querySelector('.js-note__textarea'),
        note = document.querySelector('.js-note'),
        areaBtn = document.querySelectorAll('.js-textarea__button');

note.onclick = () => textarea.classList.add('js-note__textarea--on');
areaBtn.forEach((areaBtn) => areaBtn.onclick = () => textarea.classList.remove('js-note__textarea--on'));

// 2-2-7 MIDDLE DESCRIPTION + ACTORS

const descrList = document.querySelector('.js-description__list'),
        actorsList = document.querySelector('.js-actors__list'),
        descrBtn = document.getElementById('js-description__button'),
        actorsBtn = document.getElementById('js-actors__button');

descrBtn.onclick = () => {
        descrList.classList.add('js-description__list--on');
        actorsList.classList.remove('js-actors__list--on');
};    
actorsBtn.onclick = () => {
        actorsList.classList.add('js-actors__list--on');
        descrList.classList.remove('js-description__list--on');
};