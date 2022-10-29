const refs = {
  bodySelector: document.querySelector('body'),
  changecolorBtn: document.querySelector('.change-color'),
  changeColorSpan: document.querySelector('.color'),
};

// console.log(Math.random() * 16777215);
// console.log(Math.floor(Math.random() * 16777215));
// console.log(Math.floor(Math.random() * 16777215).toString(16));
// console.log(Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0));

refs.changecolorBtn.addEventListener('click', () => {
  refs.bodySelector.style.backgroundColor = getRandomHexColor();
  refs.changeColorSpan.textContent = getRandomHexColor();
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}