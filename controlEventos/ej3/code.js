/**
 * 
3.- Crea un documento HTML que tenga de un título h1 con el texto <<Pulsa una tecla>>, y un DIV central de 300x300px maquetado para que se vea bien (borde, tamaño de letra alto, color de fondo...) Utiliza el evento keypress para determinar qué carácter ha escrito el usuario utilizando el teclado y muestralo dentro del div. 
 * 
 */

window.onload=()=>{

    let div1=document.querySelector("div");
//keyup o keudown
    window.addEventListener("keypress",function (params) {
        div1.innerText+=params.key;
    })

}