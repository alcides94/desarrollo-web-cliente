/**1.- Crea un formulario con los siguientes campos:
•DNI: 8 números y una letra.
•Nombre: uno o dos nombres.
•Apellidos: uno o dos apellidos.
•Fecha de nacimiento: formato dd/mm/yyyy.
•Web personal: formato https://www.algo.tresletras
•Contraseña: entre 8 y 12 caracteres.
•Un botón para resetear el formulario.
•Un botón para enviar el formulario.


El formulario estará correcto sí y solo sí:
•Ningún campo se queda vacío
•El DNI tiene una longitud de 9
•La fecha de nacimiento tiene el formato correcto.
•Hay una o dos palabras en los campos nombre y apellidos.
•El campo de la web debe empezar por https://
•La longitud de la contraseña es correcta.


 */

window.onload = () => {
    const formulario = document.getElementById("formulario");
  
    // Expresiones regulares
    const regex = {
      dni: /^\d{8}[A-Za-z]$/, // 8 números seguidos de una letra
      nombre: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(\s[A-Za-zÁÉÍÓÚáéíóúñÑ]+)?$/, // Una o dos palabras
      apellidos: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(\s[A-Za-zÁÉÍÓÚáéíóúñÑ]+)?$/, // Una o dos palabras
      fecha: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, // dd/mm/yyyy
      web: /^https:\/\/www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/, // https://www.algo.tld
      password: /^.{8,12}$/, // Entre 8 y 12 caracteres
    };
  
    formulario.addEventListener("submit", (e) => {
      // Evitamos el envío del formulario solo si hay errores
      const dni = document.getElementById("dni").value;
      const nombre = document.getElementById("nombre").value;
      const apellidos = document.getElementById("apellidos").value;
      const fecha = document.getElementById("fecha").value;
      const web = document.getElementById("web").value;
      const password = document.getElementById("password").value;
  
      if (!dni || !nombre || !apellidos || !fecha || !web || !password) {
        alert("Ningún campo debe estar vacío.");
        e.preventDefault(); // Bloquea el envío
        return;
      }
  
      if (!regex.dni.test(dni)) {
        alert("DNI no válido. Debe tener 8 números seguidos de una letra.");
        e.preventDefault(); // Bloquea el envío
        return;
      }
  
      if (!regex.nombre.test(nombre)) {
        alert("El nombre debe contener una o dos palabras.");
        e.preventDefault(); // Bloquea el envío
        return;
      }
  
      if (!regex.apellidos.test(apellidos)) {
        alert("Los apellidos deben contener una o dos palabras.");
        e.preventDefault(); // Bloquea el envío
        return;
      }
  
      if (!regex.fecha.test(fecha)) {
        alert("La fecha de nacimiento debe tener el formato dd/mm/yyyy.");
        e.preventDefault(); // Bloquea el envío
        return;
      }
  
      if (!regex.web.test(web)) {
        alert("La web debe empezar con https:// y tener un formato válido.");
        e.preventDefault(); // Bloquea el envío
        return;
      }
  
      if (!regex.password.test(password)) {
        alert("La contraseña debe tener entre 8 y 12 caracteres.");
        e.preventDefault(); // Bloquea el envío
        return;
      }
  
      // Si todo está correcto, permite que el formulario se envíe
      alert("Formulario válido. Enviando...");
    });
  };
  








