'use strict'
//conseguir elementos por su clase css

var clase = document.getElementsByName('claseDom');
var clase1 = document.querySelector(.rojo);

clase1[0].style.background = "rojo";

var div;
for(div in clase){
    if (clase1[div].className == rojo){
        clase1[div].style.background =  "red";
    }
}

