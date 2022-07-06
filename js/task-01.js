const numberCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ` + numberCategories.length);
numberCategories.forEach(function (category) {
  const categoryName = category.firstElementChild ;
  console.log('Category: ' + categoryName.innerHTML);
  const numderElements = category.querySelector('.item>ul').childElementCount ;
  console.log('Elements: ' + numderElements)
})