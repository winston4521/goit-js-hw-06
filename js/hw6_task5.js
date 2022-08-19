const refs = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', spanValueChanger);
console.log(refs);

function spanValueChanger(eve) {
  console.log(eve.currentTarget);

  refs.nameOutput.textContent = eve.currentTarget.value;

  if (refs.nameOutput.textContent === '') {
    refs.nameOutput.textContent = 'Anonymous';
  }
}
