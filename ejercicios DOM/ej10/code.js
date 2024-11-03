/**
 * 10.- Crea tres DIV de tamaño 100x100px y con un color de fondo diferente cada uno.
Al pasar por encima de alguno de esos DIVs, el color de fondo de la página debe
cambiar al color que tenga el DIV sobre el que está el cursor del ratón.
b) Añade el código necesario para que el color de la página vuelva a su color
original si el cursor del ratón no está encima de ninguno de los DIVs del ejercicio.

 */

window.onload=()=>{

    let divs=document.querySelectorAll("div");
    let fondo=document.querySelectorAll("body")[0];
    console.log(fondo);
    

    for (const element of divs) {
        element.onmouseover=()=>{
            console.log(element);
            //debemos siempre consultar el get CoputedStyke del elemento y almacenarlo en una variable 

            let estilos = window.getComputedStyle(element);

            //descpues de la varibla sacar el contenido
            let bg=estilos.getPropertyValue('background-color');
            console.log(bg);
            
            fondo.style.setProperty("background-color",bg);
        }

        element.onmouseout=()=>{
            fondo.style.setProperty("background-color","");
        }
    }

}