'use strict'

//eventos del raton

var boton = document.querySelector("#boton");
var boton3 = document.querySelector("#boton2");

function cambiarColor(){
    var bg = boton3.style.background;
    if(bg =="green"){
        boton3.style.background = "red";
       
    }else{
        boton.style.background = "green";
    }

    boton3.style.padding ="10ox";
    bonton3.style.border = "1px solid #ccc";

    return (true);

}
 var click = document.querySelector("#botonClick");
 
 click.addEventListener('click', function(){
     cambiarColor();
 
});

//mouse over cuando se pasa por encima de un boton lo combia de color 

boton3.addEventListener('mouseover', function(){

    boton3.style.background = "#ccc";
}
);