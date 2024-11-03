/**

2.- Crea una tabla en de 4 filas y 4 columnas. Usando atributos HTML, coloca un borde,
unas medidas de 300x300px y una alineación al centro. A continuación crea tres
botones:
• El primero muestra los valores de anchura y altura de la tabla, pide unos valores
nuevos para cada propiedad y los aplica a la tabla. ¿se aplican correctamente los
valores? ¿Falla alguno?
• El segundo muestra el valor actual del borde de la tabla y solicita un valor nuevo
para aplicarlo. ¿Funciona correctamente el nuevo valor?
• El tercer botón va cambiar la alineación de la tabla cada vez que se pulse. Es
decir, si la tabla está alineada al centro, al pulsar el botón, la tabla quedará
alineada a la derecha. Si se pulsa el botón otra vez, se alineará a la izquierda y si
vuelvo a pulsarlo, la tabla se pondrá en el centro.
 
*/

window.onload=function(){


    let tabla=document.querySelectorAll("table")[0];
    
    let boton0=document.getElementsByTagName("button")[0];
    let boton1=document.getElementsByTagName("button")[1];
    let boton2=document.getElementsByTagName("button")[2];
    // console.log(tabla)
    // console.log(tabla.offsetWidth);
    // console.log(tabla.offsetHeight);
    
    boton0.onclick=()=>{
        alert(tabla.offsetWidth);
        alert(tabla.offsetHeight);

        /**----A----*/
        let alto = (prompt("ingrese la altura modificado: "))+"px";
        let ancho = (prompt("ingrese la anchura modificado: "))+"px";

        tabla.style.setProperty("width", ancho);
        tabla.style.setProperty("height", alto);
    }
            /**----B----- */
    boton1.onclick=()=>{
        alert(tabla.border);

        let borde=(prompt("ingrese el tamaño del borde"))+"px solid black";

        tabla.style.setProperty("border",borde);

    }
    
    boton2.onclick=()=>{
        let donde=tabla.getAttribute("align");
        console.log(donde);
        
        if (donde=="center"){
            tabla.align="right";            
        }else if(donde=="right") {
            tabla.align="left";
        }else if(donde=="left"){
            tabla.align="center";

        }
    }


}
