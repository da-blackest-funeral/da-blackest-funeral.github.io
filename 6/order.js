const button = document.querySelector('.order-button');

let cost = document.querySelector('.cost');
let firstItem = document.getElementById("firstItem");
let firstLot = document.getElementById("firstLot");
let secondItem = document.getElementById("secondItem");
let secondLot = document.getElementById("secondLot");

button.addEventListener('click', () => calculate());

function calculate() {
  // Работа с регулярным выражением
  let re = new RegExp(/^[0-9]/);
  if (
      !(
          re.test(firstItem.value) &&
          re.test(firstLot.value) &&
          re.test(secondItem.value) &&
          re.test(secondLot.value)
      )
  ) {
    alert("Неправильно заполнена форма");
  } else {
    let price = (firstItem.value * firstLot.value) + (secondItem.value * secondLot.value);
    cost.innerHTML = "Стоимость равна: " + price + " Руб.";
  }
}