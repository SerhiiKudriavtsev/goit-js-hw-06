const numberOfCategories = document.querySelector('ul').children.length;
console.log(`Number of categories: ` + numberOfCategories);
for (let i = 0; i < numberOfCategories; i += 1){
  const title = document.querySelectorAll("h2")[i];
  console.log('Category: ' + title.innerHTML);
  const numberOfElements = document.querySelectorAll('.item>ul')[i].childElementCount;
  console.log('Elements: ' + numberOfElements);
}