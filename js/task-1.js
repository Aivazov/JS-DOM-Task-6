const refs = {
  ulCategories: document.querySelectorAll('#categories'),
  listCategories: document.querySelectorAll('.item'),
  listTitle: document.querySelectorAll('.item > h2'),
  listEl: document.querySelectorAll('.item > ul'),
  ulListEl: document.querySelectorAll('.item > ul > li'),
};

const el = document.querySelector('.item > ul');

console.log(refs.listEl);

let res = 0;

refs.listEl.forEach((el, index) => {
  console.log(el);
  el.forEach(el2 => el2)
  res = index + 1;
});

console.log(res)

function categoriesNumber(param, param2) {
  let result = 0;
  let li = 0;

  [...param].forEach((el, index) => {
    console.log(el.textContent)
    result = index + 1;
    // console.log(`el: ${el.textContent} has index ${index}`);
  });
  return result;
}

function iterateListEl() {
  let result = 0;
  refs.listCategories.forEach((el, index) => {
    result = index + 1;
  });
  console.log(`Number of elements: ${result}`);
}

function categoriesSelection() {
  [...refs.listTitle].forEach((el, index) =>
    console.log(`Category: ${el.textContent}
Elements: ${categoriesNumber(refs.ulListEl)}`)
  );
}

// function categoriesSelection2(number) {
//   [...refs.listTitle].forEach((el) => {
//     [...refs.ulListEl].forEach((el) =>
//       console.log(`Category: ${el.textContent}
// Elements: ${categoriesNumber(refs.ulListEl)}`)
//     );
//   });
// };
// iterateListEl();
// categoriesSelection();
// categoriesSelection2();
// console.log('');
