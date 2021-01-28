'use strict'

//eventos del raton

var boton = document.querySelector("#boton");
var boton3 = document.querySelector("#boton2");

function cambiarColor(){
    var bg = boton3.style.background;
    if(bg =="green"){
        boton3.style.background = "red";
       
    }else{
        boton3.style.background = "green";
    }

    boton3.style.padding ="10ox";
    boton3.style.border = "1px solid #ccc";

    return true;

}

//TERCER BOTON CLICK

 var click = document.querySelector("#botonClick");
 
 click.addEventListener('click1', function(){
     cambiarColor();
 
});


//mouse over cuando se pasa por encima de un boton lo combia de color 

click.addEventListener('mouseover', function(){

    click.style.background = "#ccc";
}
);

click.addEventListener('mouseout', function(){

    click.style.background = "black";
}
);