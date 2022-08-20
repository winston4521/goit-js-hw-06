const btn = document.querySelector('.change-color');
const bgcColor = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btn.addEventListener('click', backGroundColorHandler);

function backGroundColorHandler() {
  const colorEl = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl;
  bgcColor.textContent = colorEl;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
