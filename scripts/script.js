"use strict";
/* jslint node: true */
/* jshint browser: true */

// 1 --HEADER

const header = document.getElementById('js-header');
const main = document.getElementById('js-main');

document.getElementById('js-nav--off').addEventListener('click', e => {
  const nav = document.getElementById('js-nav');

  nav.classList.toggle('js-nav--on');
  
  main.addEventListener('click', e => {
    nav.classList.remove('js-nav--on');
  });
});

header.querySelector('.js-form__btn').addEventListener('click', e => {
  header.querySelector('.js-form').classList.toggle('js-form--on');
  header.querySelector('.js-block-2__btns').classList.toggle('js-block-2__btns--off');
  document.getElementById('js-focus').focus();
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

const textareaWrapper = document.getElementById('js-note__textarea');
const noteBtn = main.querySelector('.js-note');

noteBtn.addEventListener('click', () => {
  textareaWrapper.classList.add('js-note__textarea--on');
  noteBtn.classList.add('js-note--hide');

  const textarea = document.getElementById('textarea');

  textarea.focus();

  const areaBtns = document.querySelectorAll('.js-textarea__button');
  
  // save / cancel : note

  areaBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      textareaWrapper.classList.remove('js-note__textarea--on');

      const noteTextWrapper = main.querySelector('.js-note__text');
// ДОБАВИТЬ EVENTTARGET 3-М УСЛОВИЕМ
      if (textarea.value.toString() !== '' && localStorage.getItem('note')) {
        noteTextWrapper.classList.add('js-note__text--load');
      } else if (btn === areaBtns[1]) {
        textarea.value = '';
        noteBtn.classList.remove('js-note--hide');
        }
        
      if (textarea.value.toString() === '') {
        noteBtn.classList.remove('js-note--hide');

        // save note

      } else if (btn === areaBtns[0]) {
        localStorage.setItem('note', textarea.value.toString());

        const noteText = document.getElementById('js-note__text');
        const noteTextWrapper = main.querySelector('.js-note__text');

        noteText.textContent = localStorage.getItem('note');
        noteTextWrapper.classList.add('js-note__text--load');

        const noteTextBtns = noteTextWrapper.querySelectorAll('.js-text__btn');
        
        // delete note

        noteTextBtns.forEach(btn => {
          btn.addEventListener('click', e => {
            if (btn === noteTextBtns[1]) {
              const noteRestore = main.querySelector('.js-note--restore');

              noteRestore.classList.add('js-note--restore--on');
              noteTextWrapper.classList.remove('js-note__text--load');

              const deleteStop = setTimeout(() => {
                noteRestore.classList.remove('js-note--restore--on');
                noteBtn.classList.remove('js-note--hide');
                localStorage.removeItem('note');
                textarea.value = '';
              }, 5000);

              // stop delete note

              document.getElementById('js-restore__btn').addEventListener('click', e => {
                clearTimeout(deleteStop);

                noteRestore.classList.remove('js-note--restore--on');
                noteTextWrapper.classList.add('js-note__text--load');
              });
              
            } 
            if (btn === noteTextBtns[0]) {
              noteTextWrapper.classList.remove('js-note__text--load');
              textareaWrapper.classList.add('js-note__textarea--on');

              textarea.textContent = localStorage.getItem('note');
              textarea.focus();
            }
          });
        });
      }
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

    descrLists[i].classList.add('js-descr__list--toggle', 'fade');

    const btnShowMore = document.getElementById('js-list--expand');

    btnShowMore.addEventListener('click', e => {
      btnShowMore.style.cssText = 'display: none';

      descrLists[1].querySelectorAll('.js-list__more').forEach(list => {
        list.classList.add('js-list__more--on');
      });
    });
    });
  });
});

//--4-0 (2-1-1) THEME BLACK--------------------

const theme = document.querySelectorAll('.js-theme');

theme.forEach(theme => {
  theme.addEventListener('click', e => {
    main.classList.toggle('js-main--black');
    textareaWrapper.classList.toggle('js-note__textarea--black');
    header.classList.toggle('js-header--black');
    main.querySelector('.js-main__aside').classList.toggle('js-main__aside--black');
    main.querySelector('.js-main__middle').classList.toggle('js-main__middle--black');
    main.querySelector('.js-main__aside-2').classList.toggle('js-main__aside-2--black');

    statusBtns.forEach(btn => {
      btn.classList.toggle('js-buttons--black');
    });
  });
});