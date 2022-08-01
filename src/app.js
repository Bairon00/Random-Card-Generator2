/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let ic = iconoRandom();
  document.querySelector("#numero").innerHTML = numberRandom();
  document.querySelector("#logo").innerHTML = ic;
  document.querySelector("#logo2").innerHTML = ic;

  //escoje un numero
  function numberRandom() {
    let numeros = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let random = Math.floor(Math.random() * numeros.length);
    return numeros[random];
  }

  function iconoRandom() {
    let iconos = ["♦", "♥", "♠", "♣"];
    let icrandom = Math.floor(Math.random() * iconos.length);
    let resultado = iconos[icrandom];
    return resultado === "♥"
      ? `<div style="color: red";>♥</div>`
      : resultado === "♦"
      ? `<div style="color: red";>♦</div>`
      : resultado;
  }

  //function iconoRandom2() {
  //let iconos2 = ["♦", "♥", "♠", "♣"];
  //let icrandom2 = Math.floor(Math.random() * iconos2.length);
  //return iconos2[icrandom2];
  //}
  //console.log("Hello Rigo from the console!");
};
