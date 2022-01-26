"use strict";

// HEADER

const nav = document.querySelector('.js-nav'),
        main = document.querySelector('.main');

nav.onclick = () => nav.classList.toggle('js-nav--on');
main.onclick = () => nav.classList.remove('js-nav--on');

// MAIN MIDDLE

const statusBtn = document.querySelectorAll('.js-status__button');

statusBtn.forEach((statusBtn) => statusBtn.onclick = () => statusBtn.classList.add('js-status__button--active'));

// 2-2-4 MIDDLE GRADE

const grade = document.querySelectorAll('.grade--active');

grade.forEach((grade) => grade.onclick = () => grade.classList.add('grade--active--on'));

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