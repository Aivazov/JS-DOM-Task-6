const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function task2(params) {
  const ingredientsList = document.createElement('ul');
  [...ingredients].forEach((element, index) => {
    element = document.createElement('li');
    element.classList.add('item');
    element.textContent = ingredients[index];
    ingredientsList.append(element);
  });
  console.log('task 2: ', ingredientsList);
}

task2();
