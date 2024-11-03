/**
 * 
 12.- Coloca una imagen dentro de un DIV con position: absolute. Crea dos botones:
• Al pulsar uno de ellos la imagen debe moverse 5px hacia la derecha de la
pantalla.
• Al pulsar el otro, la imagen debe moverse 5px hacia la izquierda de la pantalla.
Nota: Recuerda la posicion (0,0) de la pagina web al usar top/left/right/bottom
b) Mejora el ejercicio haciendo que la imagen no pueda salirse de los limites de la
pantalla. Nota: realiza el cálculo a ojo, ya aprenderemos a obtener las medidas de la
página correctamente.
c) Realizar el mismo ejercicio pero esta vez la imagen se moverá hacia la derecha
mientras el ratón esté encima de ella. Coloca un botón para resetear los valores de
posición de la imagen.

 */

window.onload=function(){

    let botones=document.getElementsByTagName("button");
    let imagen=document.querySelector("img");
    console.log(imagen);
    
    /*---------------- A ------
    for (let boton of botones) {
        boton.onclick=()=>{
        imagen.onmouseover=()=>{    

            let estilo=window.getComputedStyle(imagen);
            let posicion=parseInt(estilo.getPropertyValue("left")) ;

            console.log(posicion);
            console.log(boton);
            if(boton.innerText=="Izquierda"){
                if (posicion-50<0){
                    posicion=0;
                    imagen.style.setProperty("left",posicion+"px");
                }else{
                    imagen.style.setProperty("left",posicion-50+"px");
                }
            }else{
                let total=parseInt(window.innerWidth);
                console.log(total);
                
                if (posicion+50>(screen.width-imagen.offsetWidth)) {
                    imagen.style.setProperty("left",screen.width-imagen.offsetWidth+"px");
                }else{
                    
                    imagen.style.setProperty("left",posicion+50+"px");
                }
            }
        }
        }
    }
    */
    
        imagen.onmouseover=()=>{
            do {
            let estilo=window.getComputedStyle(imagen);

            let posicionOriginal = parseInt(estilo.getPropertyValue("left"));
            let posicion = parseInt(estilo.getPropertyValue("left"));
            console.log(posicion);

            let total=parseInt(window.innerWidth);
            console.log(screen.width-imagen.offsetWidth);
            
            
                posicion=posicion+50;
                imagen.style.setProperty("left",posicion+50+"px");
            } while (posicion==total);
        }
    
       

    
    
}
