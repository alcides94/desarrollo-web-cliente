/**
 * 18.- Modifica el ejercicio 16 de esta relación de la siguiente forma:
• Usa sólo el elemento progress y el botón que se encarga de realizar el
funcionamiento explicado en el ejercicio 16. Cambia el nombre del botón por
“Generar moneda”
• Crea usando HTML un div en la parte superior izquierda llamado MONEDAS,
cuyo contenido inicial será el número 0.
• Cada vez que se pulse sobre el botón ‘Generar moneda’, se bloqueará dicho
botón y se cargará la barra de progress como se vio en el ejercicio 17.
• Al terminar la carga, se sumará una moneda al contenido del div MONEDAS y
se desbloqueará el botón ‘Generar Moneda’.
 */

let timer=0;

window.onload=()=>{

    let barra=document.querySelector("progress");
    let boton=document.querySelector("button");
   
    

    console.log(barra);
    console.log(boton);
    
    boton.onclick=()=>{
        let monedas=document.querySelector("div");
        let contenido=parseInt(monedas.textContent);
        console.log(contenido);

        timer=setInterval(function(){
            if(parseInt(barra.value)+1==barra.max){
                boton.disabled=false;

                clearInterval(timer);
                contenido++;
                monedas.textContent=contenido;
                barra.value=0;
            }else{
                barra.value+=1;
                boton.disabled=true;
            }
        },100);
    }



}
