/**
 * 
 * 2.- Haciendo uso de la API de Dog CEO (https://dog.ceo/dog-api/) crea una galaería de
perros. Para ello:
• Implementa un archivo GaleriaDOG.html que posea, al menos, un
contenedor donde irá ubicada la imagen y un botón para obtener una nueva
imagen.
• Por defecto, al cargar la pagina, la galería debe tener una imagen cargada de la
API.
• Cada vez que el usuario pulse el botón, la imagen debe cambiar.
 */

window.onload=()=>{
    let btnCargar=document.querySelector("#btnCargar");
    let contenedor=document.querySelector("#contenedor");

    const url="https://dog.ceo/api/breeds/image/random";

    let imagen=document.createElement("img");

  

    btnCargar.addEventListener("click", cargarImagen);
    
    function cargarImagen() {
        
    
        fetch(url)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("Error"+respuesta.status);
                
            }

            return respuesta.json();

        })

        .then(function (datos) {
            
           //imagen.setAttribute("src",datos.message);
           let ima=datos.message;
            imagen.setAttribute("src",ima);
            contenedor.appendChild(imagen);
        })

        .catch(function (error) {
            alert("Error"+error);
        })
    
    }

    cargarImagen();

}