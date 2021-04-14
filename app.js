'use strict';

const container = document.querySelector('.container');
const btn = document.querySelector('button');

function creatBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      container.appendChild(div);
    }
  }
}

creatBoxes();

function changeText() {
  btn.textContent =
    btn.textContent === 'Add Image' ? 'Split Image' : 'Add Image';

  container.classList.toggle('big');
}

btn.addEventListener('click', changeText);
