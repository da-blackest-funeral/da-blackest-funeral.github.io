window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
});
  
function calculate() {
    let product = Number(document.getElementById("product").value);
    let lot = Number(document.getElementById("lot").value);
  
  
let re = new RegExp(/^[0-9]+$/i);
  if (product < 0 || lot < 0) {
    alert("Числа не должны быть отрицательными");
  }
  else if (
    !(
        re.test(product) &&
        re.test(lot)
      )
    ) {
      alert("Нужно писать число!");
    } else if (product == "") {
      alert("Укажите цену первого товара");
    } else if (lot == "") {
      alert("Укажите количество единиц первого товара");
    } else {
      const cost = product * lot;
      document.getElementById("cost").innerHTML =
        "Стоимость равна: " + cost + " Руб.";
    }
  }