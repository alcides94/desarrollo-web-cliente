window.onload = function () {
    let div = document.querySelector(".contenedor");
    let section = document.querySelector("section");


    //Optengo la ide del personaje desde la url
    //const urlParams = new URLSearchParams(window.location.search);
    let personajeId = localStorage.getItem("idPersonaje");
    //compruebo que la id existe
    if (personajeId) {
        personajeId = JSON.parse(personajeId);
    } else {
        alert("No se ha encontrado la id del personaje");
        return;
    }

    //1º Necesito la url de la api
    const urlApi = "https://dragonball-api.com/api/characters/" + personajeId; //aqui ya tengo las transformaciones


    //✨---------------------FETCH PARA PERSONAJES-----------------✨
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

            function CrearDatosPersonaje(datos) {
                //Accedo al div para guardar ai la imagen
                let div = document.querySelector(".contenedor");
                //Titulo
                let h1 = document.createElement("h1");
                h1.textContent = datos.name;

                div.appendChild(h1);

                //Creo el parrafo de info
                let info = document.createElement("p");
                info.classList.add("info-principal");
                info.textContent = datos.description;

                div.appendChild(info);

                //Creo la imagen
                let img = document.createElement("img");
                img.src = datos.image;
                div.appendChild(img);

                //Titulo del planeta
                let tituloPlaneta = document.createElement("h3");
                tituloPlaneta.textContent = "🌍 El planeta de origen";

                div.appendChild(tituloPlaneta);
            }


            function CrearDetallesPlaneta(datos, div) {

                //Si no hay datos del planeta no muestro nada
                if (!datos.originPlanet) return;
                if (datos.originPlanet.name) {
                    //Creo el titulo del planeta de origen
                    let planeta = document.createElement("h3");
                    planeta.textContent = datos.originPlanet.name;
                    div.appendChild(planeta);
                }

                if (datos.originPlanet.description) {
                    //Creo la descripcion del planeta de origen
                    let planetaDescripcion = document.createElement("p");
                    planetaDescripcion.classList.add("planeta");
                    planetaDescripcion.textContent = datos.originPlanet.description;
                    div.appendChild(planetaDescripcion);

                }

                if (datos.originPlanet.image) {
                    //Creo la descripcion del planeta de origen
                    let planetaImg = document.createElement("img");
                    planetaImg.src = datos.originPlanet.image;
                    div.appendChild(planetaImg);
                }

            }



            function CrearTransformaciones(datos, section) {
                //Aqui quiero crear las transformaciones
                let tituloTransformacion = document.createElement("h3");
                tituloTransformacion.textContent = "Transformaciones";
                div.appendChild(tituloTransformacion);


                for (const transformacion of datos.transformations) {
                    let aticulo = document.createElement("article");

                    //Creo el nombre
                    let nombreTransformacion = document.createElement("h2");
                    nombreTransformacion.textContent = transformacion.name;


                    //Creo la imagen
                    let transformacionImg = document.createElement("img");
                    transformacionImg.src = transformacion.image;


                    //maximoqui
                    let maxQi = document.createElement("p");
                    maxQi.textContent = transformacion.ki;


                    //titulo ki
                    let tituloKi = document.createElement("h3");
                    tituloKi.textContent = "Maximo Ki: ";


                    aticulo.appendChild(nombreTransformacion);
                    aticulo.appendChild(transformacionImg);
                    aticulo.appendChild(maxQi);
                    aticulo.appendChild(tituloKi);

                    section.appendChild(aticulo);

                }
            }

            // Crear el botón
            let boton = document.createElement("button");
            boton.textContent = "Volver a personajes";
            boton.onclick = function () {
                window.location.href = "personajes.html";
            };

            // Añadir el botón al contenedor
            let contenedor = document.getElementsByClassName("contenedor")[0]; 
            contenedor.appendChild(boton);


            //-------------------LLAMO A TODAS LAS FUNCIONES-------------------
            //Llamo a la funcion para crear los datos del personaje
            CrearDatosPersonaje(datos);
            //Utilizo la funcion y creo los detalles del planeta -- arriba del todo tengo el div
            CrearDetallesPlaneta(datos, div);
            //Utilizo datos y el section
            CrearTransformaciones(datos, section);

        })
        //coge el error y informa(nos coge todos los errores del codigo)
        .catch(function (error) {
            alert("Problemas accediendo a la url: " + error);
        })
}