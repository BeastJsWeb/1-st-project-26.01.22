"use strict";
/* jslint node: true */
/* jshint browser: true */

// HEADER

const nav = document.getElementById('js-nav');
const navOff = document.getElementById('js-nav--off');
const main = document.getElementById('js-main');

navOff.addEventListener('click', () => nav.classList.toggle('js-nav--on'));

main.addEventListener('click', () => nav.classList.remove('js-nav--on'));

// MAIN MIDDLE

const statusBtn1 = document.getElementById('js-button-1');
const statusBtn2 = document.getElementById('js-button-2');
const statusBtn3 = document.getElementById('js-button-3');
const statusBtn4 = document.getElementById('js-button-4');

statusBtn1.addEventListener('click', () => {
  statusBtn1.classList.add('js-button--active');
  statusBtn2.classList.remove('js-button--active');
  statusBtn3.classList.remove('js-button--active');
  statusBtn4.classList.remove('js-button--active');
});
statusBtn2.addEventListener('click', () => {
  statusBtn2.classList.add('js-button--active');
  statusBtn1.classList.remove('js-button--active');
  statusBtn3.classList.remove('js-button--active');
  statusBtn4.classList.remove('js-button--active');
});
statusBtn3.addEventListener('click', () => {
  statusBtn3.classList.add('js-button--active');
  statusBtn1.classList.remove('js-button--active');
  statusBtn2.classList.remove('js-button--active');
  statusBtn4.classList.remove('js-button--active');
});
statusBtn4.addEventListener('click', () => {
  statusBtn4.classList.add('js-button--active');
  statusBtn1.classList.remove('js-button--active');
  statusBtn2.classList.remove('js-button--active');
  statusBtn3.classList.remove('js-button--active');
});

// 2-2-4 MIDDLE GRADE

const grade = document.querySelector('.middle__grade'),
  grade1 = grade.querySelector('.js-grade-1'),
  grade2 = grade.querySelector('.js-grade-2'),
  grade3 = grade.querySelector('.js-grade-3'),
  grade4 = grade.querySelector('.js-grade-4'),
  grade5 = grade.querySelector('.js-grade-5');

grade1.addEventListener('click', () => {
  grade1.classList.add('js-grade--on');
  grade2.classList.remove('js-grade--on');
  grade3.classList.remove('js-grade--on');
  grade4.classList.remove('js-grade--on');
  grade5.classList.remove('js-grade--on');
});
grade2.addEventListener('click', () => {
  grade2.classList.add('js-grade--on');
  grade1.classList.remove('js-grade--on');
  grade3.classList.remove('js-grade--on');
  grade4.classList.remove('js-grade--on');
  grade5.classList.remove('js-grade--on');
});
grade3.addEventListener('click', () => {
  grade3.classList.add('js-grade--on');
  grade1.classList.remove('js-grade--on');
  grade2.classList.remove('js-grade--on');
  grade4.classList.remove('js-grade--on');
  grade5.classList.remove('js-grade--on');
});
grade4.addEventListener('click', () => {
  grade4.classList.add('js-grade--on');
  grade1.classList.remove('js-grade--on');
  grade2.classList.remove('js-grade--on');
  grade3.classList.remove('js-grade--on');
  grade5.classList.remove('js-grade--on');
});
grade5.addEventListener('click', () => {
  grade5.classList.add('js-grade--on');
  grade1.classList.remove('js-grade--on');
  grade2.classList.remove('js-grade--on');
  grade3.classList.remove('js-grade--on');
  grade4.classList.remove('js-grade--on');
});

// 2-2-6 MIDDLE NOTE

const textarea = document.getElementById('js-note__textarea');
const note = document.getElementById('js-note');
const areaBtn = document.querySelectorAll('.js-textarea__button');

note.addEventListener('click', () => textarea.classList.add('js-note__textarea--on'));

areaBtn.forEach((areaBtn) => areaBtn.onclick = () => {
  textarea.classList.remove('js-note__textarea--on');
});

// 2-2-7 MIDDLE DESCRIPTION + ACTORS

const descrList = document.getElementById('js-description__list');
const actorsList = document.getElementById('js-actors__list');
const descrBtn = document.getElementById('js-description__button');
const actorsBtn = document.getElementById('js-actors__button');

descrBtn.addEventListener('click', () => {
  descrList.classList.add('js-description__list--on');
  actorsList.classList.remove('js-actors__list--on');
});  
actorsBtn.addEventListener('click', () => {
  actorsList.classList.add('js-actors__list--on');
  descrList.classList.remove('js-description__list--on');
});

//--4-0 (2-1-1) THEME BLACK--------------------

const theme = document.querySelectorAll('.js-theme');
const header = document.getElementById('js-header');
const aside1 = document.getElementById('js-main__aside');
const middle = document.getElementById('js-main__middle');
const aside2 = document.getElementById('js-main__aside-2');


theme.forEach((theme) => theme.onclick = () => {
  main.classList.toggle('js-main--black');
  header.classList.toggle('js-header--black');
  aside1.classList.toggle('js-main__aside--black');
  middle.classList.toggle('js-main__middle--black');
  aside2.classList.toggle('js-main__aside-2--black');
  statusBtn1.classList.toggle('js-buttons--black');
  statusBtn2.classList.toggle('js-buttons--black');
  statusBtn3.classList.toggle('js-buttons--black');
  statusBtn4.classList.toggle('js-buttons--black');
  textarea.classList.toggle('js-note__textarea--black');
});