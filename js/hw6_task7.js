const controllerEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

const fontSizeValueHandler = () => {
  textEl.style.fontSize = `${controllerEl.value}px`;
};

controllerEl.addEventListener('input', fontSizeValueHandler);
