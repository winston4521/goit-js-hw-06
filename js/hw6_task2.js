const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulEl = document.querySelector('#ingredients');

const ingredEl = ingredients.map(elem => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = elem.textContent;

  return liEl;
});
console.log(ingredEl);
ulEl.append(...ingredEl);
