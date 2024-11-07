/**
 * 19.- En HTML, crea una lista de 3 elementos y el botón “Añadir”. Al pulsar sobre el
botón, se le pide al usuario que meta una cadena de texto y se creará una nueva entrada
en la lista con el texto indicado.
 */

window.onload=()=>{
    
    let lista=document.querySelector("ul");
    let boton=document.querySelector("button");
    console.log(lista);
    console.log(boton);

    boton.onclick=()=>{
        //creo un item
        let nuevo =document.createElement("li");
        let texto = document.createTextNode(prompt("Ingrese datos: "));
        nuevo.appendChild(texto);
        lista.appendChild(nuevo);

        // let ultimo=document.querySelectorAll("li")[2];
        // let lista=document.querySelector("ul");
        // lista.insertBefore(nuevo,ultimo);
    }
    
}
