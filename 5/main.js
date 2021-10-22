window.addEventListener('DOMContentLoaded', function (event) {
  document.getElementById("button").addEventListener("click", calculate)  
})


function calculate() {
  
  var product = Number(document.getElementById("product").value);
  var lot = Number(document.getElementById("lot").value);
  var regExp = new RegExp(/^[0-9]+$/i);
    if (product < 0 || lot < 0) {
      alert("Числа не должны быть отрицательными");
    }
    else if (!(regExp.test(product) && regExp.test(lot))) {
      alert("Нужно писать число!");
    } else if (product == "") {
      alert("Укажите цену товара");
    } else if (lot == "") {
      alert("Укажите количество единиц товара");
    }
   else {
      const cost = product * lot;
      document.getElementById("cost").innerHTML =
      "Стоимость равна: " + cost + " Руб.";
   }
}