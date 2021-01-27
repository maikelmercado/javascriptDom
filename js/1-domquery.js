'use strict'
//querySelector para seleccionar un elemento del del html
//# sirve para seleccionar el elemento
// sirve para seleccionar clase

var cajas = document.querySelector("#cajaquery");


cajas.innerHTML = "<h1>modificando html desde js </h1>";
cajas.style.background = "red"; 
cajas.style.padding = "20px";



console.log(cajas);