/**
 * 
 * 17.- Carrera de DIVS
Coloca 4 divs de 100x100px y color de fondo distinto en la parte izquierda de la
pantalla (uno debajo de otro). Crea un botón que se llame CORRER y al pulsarlo, los
divs se moverán hacia la derecha de la pantalla de manera automática. Cada DIV debe
moverse a una velocidad aleatoria que cambiará en cada carrera. El primer DIV que
llegue a la derecha de la pantalla, gana. Nota: realiza el cálculo a ojo, ya aprenderemos
a obtener las medidas de la página correctamente.
Coloca otro botón para resetear todo y volver a comenzar la carrera.
 * 
 */


window.onload=()=>{

    let cajas=document.getElementsByTagName("div");
    let boton=document.querySelector("button");

    console.log(cajas);
    console.log(boton);
    
    boton.onclick=()=>{
        for (let caja of cajas) {
            console.log(caja);
            let carrera=(parseInt(Math.random()*(1+10)+1));
        }


    }


}