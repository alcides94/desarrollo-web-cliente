function crearTablaBasica(datitos) {
  let tabla = document.createElement("table");
  tabla.border = "1"; // Agrega borde a la tabla

  let fila = document.createElement("tr");//fila

  let tdNombre = document.createElement("td");//columna
  tdNombre.textContent = datitos.nombre;

  let tdImagen = document.createElement("td");
  let img = document.createElement("img");
  img.src = datitos.imagen;
  img.setAttribute("width", "100px");
  tdImagen.appendChild(img);

  let tdDescripcion = document.createElement("td");
  tdDescripcion.textContent = datitos.descripcion;

  fila.appendChild(tdNombre);
  fila.appendChild(tdImagen);
  fila.appendChild(tdDescripcion);
  tabla.appendChild(fila);

  return tabla; // Devuelve la tabla creada
}

// Ejemplo de uso:
let salida = document.getElementById("salida");
let datitos = {
  nombre: "Juego de Aventuras",
  imagen: "https://via.placeholder.com/150",
  descripcion: "Un juego increíble."
};



document.querySelector("#consultar").addEventListener("click", function () {
    const url = "http://www.jaimeweb.es/medac/ejemplos/consulta.php"; // Archivo para obtener los datos

    fetch(url) // GET por defecto
      .then(respuesta => {
        if (!respuesta.ok) {
          throw new Error("Error al obtener datos: " + respuesta.status);
        }
        return respuesta.json();
      })
      .then(datos => {

        console.log("Datos de la BBDD:", datos);

        let salida = document.querySelector("#salida");

        salida.innerHTML = ""; // Limpia antes de mostrar
        
        for (const datitos of datos) {
          let tabla = crearTablaBasica(datitos); // Llama a la función con cada objeto
          salida.appendChild(tabla); // Agrega la tabla al contenedor de salida
        }
      })
      .catch(error => alert("Error consultando datos: " + error));
});
