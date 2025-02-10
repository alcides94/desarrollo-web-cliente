window.onload=()=>{

    let btnBorrar=document.querySelector("#borrar");
    let btnRecuperar=document.querySelector("#recuperar");


    btnBorrar.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });

    //de esta forma es como obtengo todos las claves
    let claves = Object.keys(localStorage);
    
    let contador=0;
    
    

    btnRecuperar.addEventListener("click", function (params) {
        
        if (claves.length === 0) {  
            alert("No hay datos almacenados.");
            return;
        }

        let claveActual = claves[contador]; // Obtener la clave actual
        let objeto = localStorage.getItem(claveActual);

        let contenido = JSON.parse(objeto);     

        for (let key in contenido) {
            let secc=document.createElement("section");
       
            document.body.appendChild(secc);
            secc.textContent=contenido[key];
            secc.style.border = "1px solid black";
        }
        contador++;
        
    })

}