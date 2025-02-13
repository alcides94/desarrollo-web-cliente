document.querySelector("button").addEventListener("click", function () {
    let salida = document.querySelector("#salida");//papa de los elementos que voy a crear
    const url = "http://www.jaimeweb.es/medac/ejemplos/addJuego.php";//En esta url tengo la ruta al arhivo que tiene el insert si quiero mostrar los datos que hay ponso el archivo que tiene el select

    //En este caso voy a recoger los datos del formulario por lo que accedo a el 
    let formu = document.querySelector("form");
    //Utilizo el form Data que lo que hace es coger

    // // Muestra los datos del formulario en consola (recorriendo FormData)
    // console.log("Datos del formulario: ");
    // for (let [key, value] of fd.entries()) {
    //   console.log(key, value);  // Muestra cada campo con su valor
    // }
    // console.log("---------------------------------------");
    
    
    let fd = new FormData(formu);
    //fd.append("carlos","el de los ***** largos")
    console.log("Datos del formulario: ");
    console.log(fd);
    console.log("---------------------------------------");
    
    const cabecera = {
        method: "POST",//get para recoger
        body: fd//si es get no le paso el body
    }
    
  
    fetch(url, cabecera)//si tengo el archivo que tiene el select quito la cabecera y dejo solo url
      .then(function (respuesta) {
        //Capturo la respuesta
        //console.log(respuesta);
  
        if (!respuesta.ok) {
          throw new Error("Error del Fetch: " + respuesta.status);
        }
  
        //DEvuelvo el formato texto o json
        return respuesta.json();
      })
      .then(function (datos) {
        //Capturo y gestiono los datos
        console.log(datos);
        let mesajito = document.createElement("p");
        mesajito.textContent =`Datos insertados correctamente: ${JSON.stringify(datos)}`;//convierto los datos a texto
        document.body.appendChild(mesajito);

        //Si quiero toda la info con el get hago un return de datos
       
      })
      .catch(function (error) {
        alert("Problemas accediendo a la URL: " + error);
      });
  });
  