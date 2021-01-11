'use strict'
//DOM DOCUMENT OBJECT MODEL podemos modificar el html de una pagina manipularlos  

function cambiacolor(color){
caja.style.background = color;
}
var caja = document.getElementById("micaja");
caja.innerHTML ="texto en la caja desde js"
caja.style.background = "red";
caja.appendChild ="20";
caja.style.color = "white";

console.log(caja);



