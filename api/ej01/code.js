    /**
     * 1.- Crea una página web sencilla que tenga un botón y un <section> con id de
    nombre “salida” que se usará para colocar los resultados.
    Haz que cuando se pulse el botón se realice una consulta a la URL
    https://jsonplaceholder.typicode.com/comments y muestre dentro del elemento “salida”
    cada uno de los comentarios obtenidos (campo body)

    */

    window.onload=()=>{

        let btn=document.querySelector("#btnCargar");
        let seccion=document.querySelector("#salida");

        btn.addEventListener("click", function () {
            const url="https://jsonplaceholder.typicode.com/comments"; //almacenamos la url

            fetch(url) //hacemos la llamada a la api
            //1er paso comprobar la conexion
                .then(function(respuesta){ //manejamos la respuesta
                    if(!respuesta.ok){
                        throw new Error("Error: "+respuesta.status);
                    }

                    return respuesta.json();
                })
            //2do paso mostrar los datos
                .then(function(datos){
                    //console.log(datos);
                    
                    datos.forEach(element => {
                       // console.log(element.body);
                        let parrafo=document.createElement("p");
                        parrafo.innerText=element.body;
                        seccion.appendChild(parrafo);
                        
                    });

                })
            //catch por si falla la conexion
                .catch(function (error) {
                    alert("problemas en la url"+error)
                })
        })



    }