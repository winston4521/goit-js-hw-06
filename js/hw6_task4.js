const decBtn = document.querySelector('button[data-action="decrement"]');
console.log(decBtn.textContent);
const incBtn = document.querySelector('button[data-action="increment"]');

const totalValue = document.querySelector('#value');

let counterEl = 0;

incBtn.addEventListener('click', increaseValueHandler);
decBtn.addEventListener('click', derceaseValueHandler);

function increaseValueHandler() {
  counterEl += 1;
  totalValue.textContent = counterEl;
}

function derceaseValueHandler() {
  counterEl -= 1;
  totalValue.textContent = counterEl;
}
