'use strict'

//EVENTOS FOCUS, BLUR, KEYPRESS, KEYDOWN, KEY UP

//FOCUS estas dentro /blur estas fuera
var input = document.querySelector("#campo_nombre");
    
    input.addEventListener('focus',function(){
        console.log("estas dentro del imput");
});
input.addEventListener('blur',function(){
    console.log("estas fuera del imput");
});
 //keydown es cuando se esta pulsando una tecla
input.addEventListener('keydown',function(event){

    console.log("[keydown] estas pulsando esta tecla", String.fromCharCode(event.keycode));
});

//keypress tecla precionada
input.addEventListener('keypress', function(event){

    console.log(["keypress] tecla presionada", String.fromCharCode(event.keycode));

});

input.addEventListener('keyup', function(event){

    console.log(["keyup] cuando se suenta la tecla", String.fromCharCode(event.keycode));

});
