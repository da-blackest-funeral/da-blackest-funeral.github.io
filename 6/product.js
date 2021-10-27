let finalPrice;

const result = document.querySelector('.start-price');
const optionButton = document.querySelector('.option-button');
const quantity = document.getElementById('quantity');
const select = document.querySelector('.form__select');
const radios = document.querySelector('.form__radios');
const checkBoxes = document.querySelector('.form__checkboxes');

// Объект с ценами
const price = {
  bun: 100,
  tea: {
    black: 60,
    green: 55,
    red: 90
  },
  coffee: {
    cost: 90,
    sugar: 10,
    milk: 20
  }
}

// Проверка выбранного типа товара
function check() {
  switch (select.value) {
    case '1':
      optionBun();
      break;
    case '2':
      optionTea();
      break;
    case '3':
      optionCoffee();
      break;
  }
}

// Булочка
function optionBun() {
  // Отображение
  radios.style.display = 'none';
  checkBoxes.style.display = 'none';
  // Вывод
  finalPrice = quantity.value * price.bun;
}

function optionTea() {
  // Отображение
  radios.style.display = 'block';
  checkBoxes.style.display = 'none';
  // Варианты выбора
  let black = document.getElementById('black');
  let green = document.getElementById('green');
  let red = document.getElementById('red');
  // Условия + ретерн
  if (black.checked === true) {
    finalPrice = quantity.value * price.tea.black;
  } else if (green.checked === true) {
    finalPrice = quantity.value * price.tea.green;
  } else if (red.checked === true) {
    finalPrice = quantity.value * price.tea.red;
  }
}

function optionCoffee() {
  // Отображение
  checkBoxes.style.display = 'block';
  radios.style.display = 'none';
  // Опции
  let sugar = document.getElementById('sugar');
  let milk = document.getElementById('milk');
  // Условия + ретерн
  finalPrice = quantity.value * price.coffee.cost;
  if (sugar.checked === true) {
    finalPrice = quantity.value * (price.coffee.cost + price.coffee.sugar);
  }
  if (milk.checked === true) {
    finalPrice = quantity.value * (price.coffee.cost + price.coffee.milk);
  }
  if (milk.checked === true && sugar.checked === true) {
    finalPrice = quantity.value * (price.coffee.cost + price.coffee.sugar + price.coffee.milk);
  }
}

// Кнопка
optionButton.addEventListener('click', () => {
  // Проверка формы
  check();
  // Вывод
  result.innerHTML = `Цена товара: ${finalPrice}`
})