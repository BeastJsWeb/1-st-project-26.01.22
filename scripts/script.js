"use strict";
/* jslint node: true */
/* jshint browser: true */

// 1 --HEADER

const nav = document.getElementById('js-nav');
const navOff = document.getElementById('js-nav--off');
const main = document.getElementById('js-main');

navOff.addEventListener('click', e => {
  nav.classList.toggle('js-nav--on');
  
  main.addEventListener('click', e => {
    nav.classList.remove('js-nav--on');
  });
});

// MAIN MIDDLE

//--2-2-3--MIDDLE STATUS---

const statusBtns = document.querySelectorAll('.js-button');

statusBtns.forEach((btn, i) => {
  btn.addEventListener('click', e => {
    statusBtns.forEach(btn => {
      btn.classList.remove('js-button--active');
    });

    statusBtns[i].classList.add('js-button--active');
    
  });
});

// 2-2-4 MIDDLE GRADE

const gradeBtns = document.querySelectorAll('.js-grade');

gradeBtns.forEach((btn, i) => {
  btn.addEventListener('click', e => {
    gradeBtns.forEach(btn => {
      btn.classList.remove('js-grade--on');
    });

    gradeBtns[i].classList.add('js-grade--on');
  });
});

// 2-2-6 MIDDLE NOTE

const textarea = document.getElementById('js-note__textarea');
const note = document.getElementById('js-note');
const areaBtn = document.querySelectorAll('.js-textarea__button');

note.addEventListener('click', () => {
  textarea.classList.add('js-note__textarea--on');
  
  areaBtn.forEach(areaBtn => {
    areaBtn.addEventListener('click', e => {
      textarea.classList.remove('js-note__textarea--on');
    });
  });
});

// 2-2-7--DESCRIPTION--

const descrBtns = document.querySelectorAll('.js-descr__btn');
const descrLists = document.querySelectorAll('.js-descr__list');

descrBtns[0].classList.add('js-descr__btn--toggle');
descrLists[0].classList.add('js-descr__list--toggle');

descrBtns.forEach((btn, i) => {
  btn.addEventListener('click', e => {
    descrBtns.forEach(btn => {
      btn.classList.remove('js-descr__btn--toggle');
    });

    descrBtns[i].classList.add('js-descr__btn--toggle');

    descrLists.forEach(btn => {
      btn.classList.remove('js-descr__list--toggle', 'fade');
    });

    descrLists[i].classList.add('js-descr__list--toggle', 'fade');
  });
});

//--4-0 (2-1-1) THEME BLACK--------------------

const middle = main.querySelector('.js-main__middle');
const theme = document.querySelectorAll('.js-theme');
const header = document.getElementById('js-header');
const aside1 = main.querySelector('.js-main__aside');
const aside2 = main.querySelector('.js-main__aside-2');

theme.forEach(theme => {
  theme.addEventListener('click', e => {
    main.classList.toggle('js-main--black');
    header.classList.toggle('js-header--black');
    aside1.classList.toggle('js-main__aside--black');
    middle.classList.toggle('js-main__middle--black');
    aside2.classList.toggle('js-main__aside-2--black');
    textarea.classList.toggle('js-note__textarea--black');

    statusBtns.forEach(btn => {
      btn.classList.toggle('js-buttons--black');
    });
  });
});