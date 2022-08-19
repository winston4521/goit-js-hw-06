const btn = document.querySelector('.change-color');
const bgcColor = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btn.addEventListener('click', backGroundColorHandler);

function backGroundColorHandler() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  bgcColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

