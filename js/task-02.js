const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients"); // получаем доступ к списку <ul>

const liElements = ingredients.map(ingredient => { // создаем элемент <li> для каждого ингредиента
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

ul.append(...liElements); // вставляем все элементы <li> в список <ul> за одну операцию