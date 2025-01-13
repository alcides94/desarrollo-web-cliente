/**
 * 8.- Coloca un div que ocupe toda la pantalla, que tenga una altura de 200px y un color de fondo (el que quieras). Crea un programa que permita cambiar el color de ese DIV por otros usando:
a) Indicando el color deseado entre alguna de las opciones de un bloque de botones radio (al menos 3 colores para elegir).
b) Indicando el color deseado entre los elementos de una lista desplegable (al menos 3 colores para elegir).
 * 
 */

window.onload=()=>{

    let formu=document.formulario;

    let elementos=Array.from(formu.elements);
    console.log(elementos);
    let caja=document.querySelector("div");
     elementos.forEach(function (elem) {
         elem.addEventListener("click",function () {
            if (elem.checked==true) {
                let modificado=elem.id;
                console.log(modificado);
                caja.style.backgroundColor=modificado;

            }
            
            
        })
        elem.addEventListener("change",function () {
            let opt=elem.options.selectedIndex;
            let modificado=elem.options[opt].value;
            //console.log(opt1);
            caja.style.backgroundColor=modificado;
        })

    })


}