/**5.- Crea un párrafo en HTML y ponle la clase “uno”. Usando CSS, coloca un fondo,
uno borde, una anchura y un color/tam de letra para esa clase. Crea la clase “dos”
similar a la clase “uno” pero con valores diferentes.
a) Cuando se haga click sobre el párrafo, cambia de la clase “uno” a la clase “dos”.
b) Cada vez que haga click en el párrafo, cambia de clase alternativamente */

window.onload=()=>{

    let parrafo = document.querySelector("p");

    console.log(parrafo);
    
    parrafo.onclick=()=>{
        
        let nombreClase=parrafo.className;
        console.log(nombreClase);

        if (nombreClase=="uno") {
            parrafo.className="dos";
        }else{
            parrafo.className="uno";
        }
    
        

    }
    

}