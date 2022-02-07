"use strict";
/* jslint node: true */
/* jshint browser: true */

document.addEventListener("DOMContentLoaded", () => {
  // 1 --HEADER   /////////////////////////////////////////////////////////////

  const header = document.getElementById("js-header");
  const main = document.getElementById("js-main");

  document.getElementById("js-nav--off").addEventListener("click", (e) => {
    const nav = document.getElementById("js-nav");

    nav.classList.toggle("js-nav--on");

    main.addEventListener("click", (e) => {
      nav.classList.remove("js-nav--on");
    });
  });

  header.querySelector(".js-form__btn").addEventListener("click", (e) => {
    header.querySelector(".js-form").classList.toggle("js-form--on");
    header
      .querySelector(".js-block-2__btns")
      .classList.toggle("js-block-2__btns--off");
    document.getElementById("js-focus").focus();
  });

  // MAIN MIDDLE

  //--2-2-3--MIDDLE STATUS---  /////////////////////////////////////////////////////////////

  const statusBtns = document.querySelectorAll(".js-button");

  statusBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      statusBtns.forEach((btn) => {
        btn.classList.remove("js-button--active");
      });

      statusBtns[i].classList.add("js-button--active");
    });
  });

  // 2-2-4 MIDDLE GRADE    /////////////////////////////////////////////////////////////

  const gradeBtns = document.querySelectorAll(".js-grade");

  gradeBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      gradeBtns.forEach((btn) => {
        btn.classList.remove("js-grade--on");
      });

      gradeBtns[i].classList.add("js-grade--on");
    });
  });

  // 2-2-6 MIDDLE NOTE   /////////////////////////////////////////////////////////////

  const noteLoadedFromStorage = window.localStorage.getItem("note") !== null;
  const noteBtnStart = main.querySelector(".js-note");
  const noteTextWrapper = main.querySelector(".js-note__text");
  const noteBtnEdit = noteTextWrapper.querySelector(".js-text__btn-1");
  const noteBtnDelete = noteTextWrapper.querySelector(".js-text__btn-2");
  const textarea = document.getElementById("textarea");
  const noteRestore = main.querySelector(".js-note--restore");
  const textareaWrapper = document.getElementById("js-note__textarea");
  const noteBtnCancel = textareaWrapper.querySelector(".js-textarea__button-2");
  const noteBtnSave = textareaWrapper.querySelector(".js-textarea__button-1");

  // функционал кнопок текущей заметки, окно ввода текста и кнопки "сохранить" , "отменить"

  function noteSaveCancel() {
    // функционал кнопок: кнопка - "отменить"

    noteBtnCancel.addEventListener("click", (e) => {
      textareaWrapper.classList.remove("js-note__textarea--on");

      if (
        textarea.value.toString() !== "" &&
        localStorage.getItem("note") !== null
      ) {
        noteTextWrapper.classList.add("js-note__text--load");
      } else if (
        textarea.value.toString() === "" &&
        localStorage.getItem("note") !== null
      ) {
        noteTextWrapper.classList.add("js-note__text--load");
      } else {
        textarea.value = "";
        noteBtnStart.classList.remove("js-note--hide");
      }
    });

    // функционал кнопок: кнопка - "сохранить"

    noteBtnSave.addEventListener("click", (e) => {
      textareaWrapper.classList.remove("js-note__textarea--on");

      if (textarea.value.toString() === "") {
        noteTextWrapper.classList.remove("js-note__text--load");
        noteBtnStart.classList.remove("js-note--hide");
        localStorage.removeItem("note");
      } else {
        localStorage.setItem("note", textarea.value.toString());
        document.getElementById("js-note__text").textContent =
          localStorage.getItem("note");
        noteTextWrapper.classList.add("js-note__text--load");
      }
    });
  }
  // функция для ранее сохраненной заметки и выведенной на экран. предлагает "изменить", "удалить", "восстановить после удаления"

  function noteDeliteEditRestore() {
    // удалить заметку

    noteBtnDelete.addEventListener("click", (e) => {
      noteRestore.classList.add("js-note--restore--on");
      noteTextWrapper.classList.remove("js-note__text--load");

      const deleteStop = setTimeout(() => {
        noteRestore.classList.remove("js-note--restore--on");
        noteBtnStart.classList.remove("js-note--hide");
        localStorage.removeItem("note");
        textarea.value = "";
      }, 5000);

      // остановить удаление - восстановить заметку

      document
        .getElementById("js-restore__btn")
        .addEventListener("click", (e) => {
          clearTimeout(deleteStop);

          noteRestore.classList.remove("js-note--restore--on");
          noteTextWrapper.classList.add("js-note__text--load");
        });
    });
    // изменить ранее написанную заметку

    noteBtnEdit.addEventListener("click", (e) => {
      noteTextWrapper.classList.remove("js-note__text--load");
      textareaWrapper.classList.add("js-note__textarea--on");
      textarea.textContent = localStorage.getItem("note");
      textarea.value = textarea.textContent;
      textarea.focus();
      textarea.setSelectionRange(100, 100);
    });
  }
  // если заметка есть . при обновлении страницы выводим ранее сохраненную заметку

  if (noteLoadedFromStorage) {
    noteBtnStart.classList.add("js-note--hide");
    noteTextWrapper.classList.add("js-note__text--load");
    document.getElementById("js-note__text").textContent =
      localStorage.getItem("note");

    noteDeliteEditRestore();
    noteSaveCancel();
  }
  // если заметки нет. открывает окно ввода текста с кнопками - "сохранить" и "отменить"

  noteBtnStart.addEventListener("click", () => {
    textareaWrapper.classList.add("js-note__textarea--on");
    noteBtnStart.classList.add("js-note--hide");
    textarea.focus();

    noteSaveCancel(); // функционал кнопок текущей заметки, окна ввода текста заметки, "сохранить" и "отменить"
    noteDeliteEditRestore(); // функция для ранее сохраненной заметки и выведенной на экран. предлагает "изменить", "удалить", "восстановить после удаления"
  });

  // 2-2-7--DESCRIPTION--     /////////////////////////////////////////////////////////////

  const descrBtns = document.querySelectorAll(".js-descr__btn");
  const descrLists = document.querySelectorAll(".js-descr__list");

  descrBtns[0].classList.add("js-descr__btn--toggle");
  descrLists[0].classList.add("js-descr__list--toggle");

  descrBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      descrBtns.forEach((btn) => {
        btn.classList.remove("js-descr__btn--toggle");
      });

      descrBtns[i].classList.add("js-descr__btn--toggle");

      descrLists.forEach((btn) => {
        btn.classList.remove("js-descr__list--toggle", "fade");

        descrLists[i].classList.add("js-descr__list--toggle", "fade");

        const btnShowMore = document.getElementById("js-list--expand");

        btnShowMore.addEventListener("click", (e) => {
          btnShowMore.style.cssText = "display: none";

          descrLists[1].querySelectorAll(".js-list__more").forEach((list) => {
            list.classList.add("js-list__more--on");
          });
        });
      });
    });
  });

  //--4-0 (2-1-1) THEME BLACK     /////////////////////////////////////////////////////////////

  // функция переключения темы

  function themeToggle() {
    main.classList.toggle("js-main--black");
    textareaWrapper.classList.toggle("js-note__textarea--black");
    header.classList.toggle("js-header--black");
    main
      .querySelector(".js-main__aside")
      .classList.toggle("js-main__aside--black");
    main
      .querySelector(".js-main__middle")
      .classList.toggle("js-main__middle--black");
    main
      .querySelector(".js-main__aside-2")
      .classList.toggle("js-main__aside-2--black");
    noteTextWrapper.classList.toggle("js-note__text--black");

    statusBtns.forEach((btn) => {
      btn.classList.toggle("js-buttons--black");
    });
  }

  const themeFromStorage = window.localStorage.getItem("theme");

  // загружаем ранее выбранную пользоваталем тему

  if (themeFromStorage) {
    themeToggle();
  }

  const theme = document.querySelectorAll(".js-theme");

  // кнопки - переключатели темы

  theme.forEach((theme) => {
    theme.addEventListener("click", (e) => {
      themeToggle();

      if (themeFromStorage) {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", "dark");
      }
    });
  });
});
