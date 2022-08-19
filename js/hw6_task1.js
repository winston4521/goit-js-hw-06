const liItemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${liItemEl.length}`);

const headerEl = liItemEl.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);

  console.log(`Elements: ${elem.querySelector('h2').textContent}`);
  console.log(`Elements: ${elem.querySelectorAll('li').length}`);
});
