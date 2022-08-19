const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', inputColorChanger);

function inputColorChanger(e) {
  const inputEl = e.currentTarget;
  const inputDataLength = Number(inputEl.dataset.length);
  console.log(e.currentTarget);

  if (inputEl.value.length === inputDataLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
