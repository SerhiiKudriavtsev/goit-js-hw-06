const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const items = [];
// for (const ingredient of ingredients) {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');
//   items.push(item);
// }
// Переписав через map:
ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  items.push(item);
 });
list.append(...items);