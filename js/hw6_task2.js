const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulEl = document.querySelector('#ingredients');

const ingredEl = ingredients.forEach(elem => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = elem;

  ulEl.appendChild(liEl);

  console.log(liEl);
});
