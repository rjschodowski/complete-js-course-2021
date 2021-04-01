'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//let's create an open modal function to not repeat the same code
const openModal = function () {
  console.log('Button clicked')
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//Let's create a close modal function so we don't repeat the same code twice
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnsCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
