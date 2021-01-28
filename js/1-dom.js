'use strict'
//DOM DOCUMENT OBJECT MODEL podemos modificar el html de una pagina manipularlos  

//objeto document e accede a sus propiedades
//innerHTML para capturar saca el texto que tengo adentro

var caja1 = document.getElementById("micaja").innerHTML;

//caja1.innerHTML = "se puede modificar desde aca el html" MODIFICA EL HTML





function cambiacolor(color){ // CON LA FUNCION MODIFICAMOS 
caja.style.background = color;
}
var caja = document.getElementById("micaja");
caja.innerHTML ="texto en la caja desde js" // ACA CON LOS METODOS SE MOFICAN LOS HTML DESDE  JAVASCRIPT
caja.style.background = "red";
caja.appendChild ="20";
caja.style.color = "white";
caja.className = "micajacambio"; // con este metodo se cambian el nombre de las clases del elemento html

console.log(caja); 



