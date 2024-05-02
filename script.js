"use strict";
// Putting everything needed into a variable first helps with project
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`); //Multiple btns so must you All

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal); // DRY repeating code so better to use a function closeModal, removed the new function contents and the () as we only want to call once clicked

overlay.addEventListener(`click`, closeModal);

// Handling an "Ecs" Keypress Event
document.addEventListener(`keydown`, function (e) {
  console.log(e.key); // Logs what key has been pressed

  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    // If the pressed key is Escape and
    // If modal does not contain the hidden class then close modal
    closeModal();
  }
});
