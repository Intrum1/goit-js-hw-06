const categories = document.querySelectorAll('ul#categories li.item');

console.log(categories); 

const countCategories = () => {
  console.log('Number of categories:', categories.length);
};

const printCategoryTitleAndElements = (category) => {
  const title = category.querySelector('h2');
  const elements = category.querySelectorAll('li');

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${elements.length}`);
};

countCategories();

categories.forEach(printCategoryTitleAndElements);