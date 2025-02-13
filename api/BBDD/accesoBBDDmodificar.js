document.querySelector("#modificar").addEventListener("click", function () {
  const url = "http://www.jaimeweb.es/medac/ejemplos/modificarJuego.php"; // URL para actualizar

  let formu = document.querySelector("form");
  let fd = new FormData(formu); // Capturamos todos los datos del formulario automáticamente

  console.log("Datos del formulario a actualizar:");
  for (let [clave, valor] of fd.entries()) {
    console.log(`${clave}: ${valor}`);
  }
  console.log("---------------------------------------");

  const opciones = {
    method: "PUT", // Si el servidor espera PUT, cambiarlo aquí
    body: fd,
  };

  fetch(url, opciones)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error del Fetch: " + respuesta.status);
      }
      return respuesta.json();
    })
    .then((datos) => {
      console.log(datos);
      let mesajito = document.createElement("p");
      mesajito.textContent = `Datos actualizados correctamente: ${JSON.stringify(datos)}`;
      document.body.appendChild(mesajito);
    })
    .catch((error) => {
      alert("Problemas accediendo a la URL: " + error);
    });
});

