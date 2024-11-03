/**
 * 6.- Crea cinco botones y coloca como value un color diferente a cada uno. Cada vez
que se pulse uno de los botones, el fondo de la página debe cambiar al color indicado
por ese botón.

 */

window.onload=()=>{

    let boton=document.getElementsByTagName("button");
    let fondo=document.querySelectorAll("body")[0];
    console.log(boton);

    boton[0].onclick=()=>{
        console.log(boton[0]);
        fondo.bgColor = boton[0].getAttribute("value");
        console.log(fondo);

    }
    boton[1].onclick=()=>{
        console.log(boton[1]);
        fondo.bgColor = boton[1].getAttribute("value");
        console.log(fondo);
    }
    boton[2].onclick=()=>{
        console.log(boton[2]);
        fondo.bgColor = boton[2].getAttribute("value");
        console.log(fondo);
    }
    boton[3].onclick=()=>{
        console.log(boton[3]);
        fondo.bgColor = boton[3].getAttribute("value");
        console.log(fondo);
    }
    boton[4].onclick=()=>{
        console.log(boton[4]);
        fondo.bgColor = boton[4].getAttribute("value");
        console.log(fondo);
    }

}