    /**
     * 
     * 9- Repite el ejercicio 5 de esta relación pero esta vez no uses clases (toca directamente
    todas las propiedades CSS que necesites).

    .dos{
                background-color: beige;
                border: 5px solid black;
                width: 800px;
                color: blue;
                font-size: 30px;
            }
    */
    window.onload=()=>{
        let parrafo=document.querySelector("p");
        
        let nombreClase=parrafo.getAttribute("class");

        console.log(parrafo);


        parrafo.onclick=()=>{
            let nombreClase=parrafo.getAttribute("class");

            
            if(nombreClase=="uno"){
            console.log("entro a clases uno");
            

            parrafo.setAttribute("class","dos");

            parrafo.style.setProperty("background-color", "beige");
            parrafo.style.setProperty("border", "5px solid black");
            parrafo.style.setProperty("width", "800px");
            parrafo.style.setProperty("color", "blue");
            parrafo.style.setProperty("font-size", "30px");

            console.log(parrafo);
            

            }else{
                parrafo.setAttribute("class","uno");
                //se resetea para volver a los estilos definidos en css
                parrafo.style.setProperty("background-color", "");
                parrafo.style.setProperty("border", "");
                parrafo.style.setProperty("width", "");
                parrafo.style.setProperty("color", "");
                parrafo.style.setProperty("font-size", "");
            }

        }


    }

