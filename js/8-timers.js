'use strict'


window.addEventListener('load', function(){
    
    //TIMERS
    //permite ehjecutare una secuencia de codigo cierto cada segundos

    var tiempo =setInterval(function()
                //set timeout se ejecuta una sola vez
    {
        console.log("set interval ejecutando");
        
        var encabezado = document.querySelector("h1");

        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px";
        }else{
            encabezado.style.fontSize = "50px";
        }
        



    }, 3000);


    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("haz parado el bucle ")
        clearInterval(tiempo);
    });




});
