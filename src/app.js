/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#numero").innerHTML = numberRandom();
  document.querySelector("#logo").innerHTML = jaja;
  document.querySelector("#logo2").innerHTML = jaja;

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
    return iconos[icrandom];
  }
  let jaja = iconoRandom();
  //function iconoRandom2() {
  //let iconos2 = ["♦", "♥", "♠", "♣"];
  //let icrandom2 = Math.floor(Math.random() * iconos2.length);
  //return iconos2[icrandom2];
  //}
  //console.log("Hello Rigo from the console!");
};
