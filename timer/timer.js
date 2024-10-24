function guille(){
    console.log("Soy antiñolo");
}


//unica variable global a utilizar
let timer;


window.onload = function(){

    //TIMER
    //setInterval -> coje una funcion y lo ejecuta cada segundo siempre almacenarlo en una variable 500 ms es 0,5 segundos
/*
    let timer = setInterval(guille,1000); // se ejecutara cada segundo
*/
/*      EJEMPLO
    
    let frase="";
    let contador=0;
    

    let timer = setInterval(function(){
        let dedo =document.querySelector("div");
        contador++;
        frase+=contador+",";
        console.log(frase);
        
    },1000); 
*/

    document.getElementsByTagName("button")[0].onclick = function(){
        let frase="";
        let contador=0;
        

        timer = setInterval(function(){
            let dedo =document.querySelector("div");
            contador++;
            dedo.innerText=contador;
            
        },1000); 
        
        this.disabled=true;

    }

    document.getElementsByTagName("button")[1].onclick = function(){
        clearInterval(timer);
        document.getElementsByTagName("button")[0].enabled=false;
    }

}


//SETTIMEOUT - > SE ESPERA UNA CANTIDAD DE SEGUNDO Y ACCIONA ES COMO UN TEMPORIZADOR

