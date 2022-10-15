const refs = {
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  inputField: document.querySelector('input[data-input]'),
  boxCreated: document.createElement('div'),
};

console.log(refs);
refs.createBtn.addEventListener('click', createEl);
refs.destroyBtn.addEventListener('click', destroyEl);

let newOne = '';
function createEl(event) {
  for (let i = 0; i < refs.inputField.value; i += 1) {
    newOne = document.createElement('div');
    newOne.classList.add('new-one-div');
    newOne.style.backgroundColor = getRandomHexColor();
    newOne.style.width = 30 + 'px';
    newOne.style.height = '30px';
    refs.boxes.append(newOne);
    
    console.log('width ', newOne.style.width);
    console.log('height', newOne.style.height);

    newOne.style.width = parseInt(newOne.style.width) + i * 10 + 'px';
    newOne.style.height = parseInt(newOne.style.height) + i * 10 + 'px';

    console.log('width ', newOne.style.width);
    console.log('height', newOne.style.height);
  }
}

function destroyEl() {
  refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
