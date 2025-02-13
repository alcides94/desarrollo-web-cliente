window.onload = function () {
         //Accedo al div para guardar ai la imagen
         let section = document.querySelector("section");

        //1º Necesito la url de la api
        const urlApi = "https://dragonball-api.com/api/characters";

        // Crear el título **fuera** del bucle
        let h1 = document.createElement("h1");
        h1.textContent = "Personajes de Dragon Ball";
        
        document.body.insertBefore(h1, section);

        //hago el fetch
        fetch(urlApi)
            .then(function (respuesta) {

                //capturo la respuesta
                console.log(respuesta);

                //compruebo si hay algun error
                if (!respuesta.ok) {
                    throw new Error("Error de fetch: " + respuesta.status);
                }

                //Devuelvo en formato json
                return respuesta.json();
            })
            

            .then(function (datos) {

                function CrearTarjetasPersonajes(personaje, section){
                     //Primero creo los elementos que necesito
                     let article = document.createElement("article");

                     let h3Nombre = document.createElement("h3");
                     //Añado el contenido al h3
                     h3Nombre.textContent = personaje.name;
 
                     let img = document.createElement("img");
                     //le asigno atributro src a la imagen
                     img.src = personaje.image;
 
                     //Creo el h4 de la raza
                     let h4Raza = document.createElement("h4");
                     h4Raza.textContent = "Raza: " + personaje.race;
 
                      //Creo el h4 de la raza
                      let h4MaxKi = document.createElement("h4");
                      h4MaxKi.textContent ="Maximo Ki: " + personaje.maxKi;
 
                     //añado el articulo al padre (section)
                    
                     article.appendChild(h3Nombre);
                     article.appendChild(img);
                     article.appendChild(h4Raza);
                     article.appendChild(h4MaxKi);
                     section.appendChild(article);
 
                     //Creo un listener para una accion que voy a realizar en el article
                     article.addEventListener("click",function () {
 
                         // Añadir el ID del personaje al artículo
                         article.setAttribute("data-id", personaje.id);
                         // Obtener el ID del personaje desde el atributo data-id del artículo
                         //let personajeId = article.getAttribute("data-id");

                         let personajeId = personaje.id;
                         localStorage.setItem("idPersonaje",JSON.stringify(personajeId));
 
                     // Redirigir a la página de detalles con el ID del personaje en la URL
                     if(personajeId) {
                         window.location.href = "datosPersonaje.html?id=" + personajeId;
                     }
                         
                     })

                }
               

                //Aqui llamo a la funcion
                for (const personaje of datos.items) {
                    CrearTarjetasPersonajes(personaje, section);
                }
            })
            //coge el error y informa(nos coge todos los errores del codigo)
            .catch(function (error) {
                alert("Problemas accediendo a la url: " + error);
            })
}