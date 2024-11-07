/**
 20.- En HTML, crea un párrafo con varias lineas de texto, y tres botones: ‘Generar’,
‘Borrar Viejo’ , ‘Borrar Nuevos’ (deshabilitado) y ‘Sustituir’. Nada lleva ID así que no
puedes usar getElementById.
En CSS, crea dos clases para maquetar el párrafo (pon anchura, altura, borde, tamaño de
letra…) y haz que el párrafo anterior pertenezca a la primera clase.
Programa el siguiente funcionamiento de los botones:
• Generar: cada vez que se pulse, crea un nuevo párrafo similar al que ya existe
pero maquetado con la segunda clase. Todos los párrafos generados serán
hermanos.
• Borrar Viejo: elimina el párrafo que sale por defecto en la página. Al hacer eso,
este botón y el botón ‘Sustituir’ quedan bloqueados.
• Borrar Nuevos: este botón está bloqueado al principio y se desbloquea al pulsar
el botón ‘Generar’. Su cometido es borrar TODOS los párrafos generados por el
botón generar.
• Sustituir: este botón sustituye el párrafo inicial por una tabla de dos filas y dos
celdas con números en su interior. Recuerda que este botón estará bloqueado si
se borra el párrafo inicial con el botón ‘Borrar Viejo’. 
 
 */
window.onload=()=>{
    let btnGenerar=document.getElementsByTagName("button")[0];
    let btnBorrar=document.getElementsByTagName("button")[1];
    let btnBorrarNuevo=document.getElementsByTagName("button")[2];
    let btnSustituir=document.getElementsByTagName("button")[3];
    //console.log(botones);
    let padre=document.querySelector("body");
    let parrafo1=document.getElementsByTagName("p")[0];


    btnGenerar.onclick=()=>{
        let parrafo=document.createElement("p");
        let texto=document.createTextNode("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aut sequi obcaecati ab, voluptatum ad. Voluptates perferendis aut omnis quas. Quasi harum quisquam molestiae voluptatum perferendis ad inventore commodi nemo");
        
        console.log(parrafo);
            
        parrafo.appendChild(texto);
        padre.insertBefore(parrafo,btnGenerar);

        parrafo.className="clase2";

        btnBorrarNuevo.disabled=false;

    }

    btnBorrar.onclick=()=>{
        let viejo = document.getElementsByClassName("clase1")[0];
        console.log(viejo);
        
        //para saber el padre de algo que quiero eliminar
        let padreViejo = viejo.parentNode;
        padreViejo.removeChild(viejo);

        btnBorrar.disabled=true;
        btnSustituir.disabled=true;
    }

    /**-----------CODIGO PARA BORRAR SOLO LOS GENERADOS-------- UNO A UNO */
 /*   btnBorrarNuevo.onclick=()=>{

        let parrafosGenerados=document.getElementsByClassName("clase2");
        console.log(parrafosGenerados);
        //let padreViejo = parrafosGenerados.parentNode;
        let victimas=padre.children;
        console.log(victimas);
        
        for (const vic of victimas) {
           if(vic.className=="clase2"){
            padre.removeChild(vic);
            console.log(vic);
            
            } 
        }
        
    }
*/
    btnBorrarNuevo.onclick=()=>{

        let parrafosGenerados=document.getElementsByClassName("clase2");
        
        let parrafosArray=Array.from(parrafosGenerados);

        parrafosArray.forEach(function(parrafoClase2){
            padre.removeChild(parrafoClase2);
        });
        
    }

    btnSustituir.onclick=()=>{
        
        padre.removeChild(parrafo1);

        let tabla=document.createElement("table");
        for (let i = 0; i < 2; i++) {
            let fila=document.createElement("tr");
            tabla.appendChild(fila);
            for (let j = 0; j < 2; j++) {
                let texto=document.createTextNode(j);
                
                let celda=document.createElement("td");
                celda.appendChild(texto);
                fila.appendChild(celda);
                
            }    
            
        }
        console.log(tabla);
        
        tabla.border="1px solid black";
        tabla.style.setProperty("width","200px");
        tabla.style.setProperty("height","200px");
        
        padre.insertBefore(tabla,btnGenerar);
        


    }

}



