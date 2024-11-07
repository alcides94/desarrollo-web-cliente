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

let timer=0;
window.onload=()=>{

    let cajas=document.getElementsByTagName("div");
    let boton=document.querySelector("button");
    let boton2=document.getElementsByTagName("button")[1];

    console.log(cajas);
    console.log(boton);
    
    boton.onclick=()=>{
        // for (let caja of cajas) {
        //     console.log(caja);
        //     let carrera=(parseInt(Math.random()*(1+9)+1));
        //     console.log(carrera);
        //     caja.style.setProperty("left",carrera+"px")
            
        //     console.log(caja.getAttribute("left"));
            
            /**-----otra forma----- */
        let carrera2=0;
            timer=setInterval(function(){
                for (const caja of cajas) {
                    console.log(caja);
                    let carrera=(parseInt(Math.random()*(1+9)+1));
                    console.log(carrera);
                    let estilo=window.getComputedStyle(caja);
                    let posicion = parseInt(estilo.getPropertyValue("left"));
                    console.log(caja.getAttribute("left"));
                    
                    if(parseInt(posicion)+carrera>=screen.width-caja.offsetWidth){
    
                        //boton.disabled=false;
                        //console.log(boton);
                        
        
                        clearInterval(timer);
                       // meter.value=0;
                    }
                    else{
                        carrera2=carrera2+carrera;
                        caja.style.setProperty("left",carrera2+"px")
                        //boton.disabled=true;
                    }
                
                }
            },100);


//        }

        
    }

    boton2.onclick=()=>{
        for (const caja of cajas) {
            caja.style.setProperty("left","0px")
        }
    }


}