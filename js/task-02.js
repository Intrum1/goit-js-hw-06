const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomato",
  "Herbs",
  "Conditions",
];

// const ul = document.getElementById("ingredients");
// const newaray = [];
// for (const ingredient of ingredients) {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   newaray.push(li);
// }
// ul.append(...newaray);

const ul = document.getElementById("ingredients");
const elements = ul.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");

  return li;
}) 
console.log(elements);
ul.append(...elements);