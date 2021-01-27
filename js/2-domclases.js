'use strict'
//seleccionar clases y etiquetas

//para buscar los div del html
//append añade despues
//app

var todosLosDiv = document.getElementsByTagName('div');

//var contenido = todosLosDiv[2].textContent; // para escoger un elemnto del array y con el . elegir cualquier propiedad 

//innerhtml  sirve para asignar otro valor 
//todosLosDiv.forEach(valor, indice => {
    var  valor;
  
for(valor in todosLosDiv){

    var parrafo = document.createElement("p"); //se crea un parrafo
    var texto = document.createTextNode(todosLosDiv[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
    
};





