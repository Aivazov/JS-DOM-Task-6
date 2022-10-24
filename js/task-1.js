const refs = {
  listCategories: document.querySelectorAll('.item'),
};

categoriesIteration();

refs.listCategories.forEach((el) => {
  const listTitles = el.querySelector('.item > h2').textContent;
  const listItems = el.querySelectorAll('li').length;

  console.log(`Category: ${listTitles}`);
  console.log(`Elements: ${listItems}`);
});

function categoriesIteration() {
  let result = 0;
  refs.listCategories.forEach((el, index) => {
    result = index + 1;
  });
  console.log(`Number of elements: ${result}`);
}
