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
  /** */
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
  

/**
 * 
 * 

1. DNI (8 números y 1 letra)
javascript
Copiar código
/^\d{8}[A-Za-z]$/
Explicación:

^: Marca el inicio de la cadena.
\d{8}: Coincide exactamente con 8 dígitos (\d representa un número del 0 al 9, y {8} indica que deben ser 8 dígitos).
[A-Za-z]: Coincide con una letra, mayúscula o minúscula.
$: Marca el final de la cadena.
Esto asegura que el DNI tenga exactamente 8 números seguidos de una letra, sin caracteres adicionales.

2. Nombre (uno o dos nombres)
javascript
Copiar código
/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(\s[A-Za-zÁÉÍÓÚáéíóúñÑ]+)?$/
Explicación:

^: Marca el inicio de la cadena.
[A-Za-zÁÉÍÓÚáéíóúñÑ]+: Coincide con una o más letras (incluyendo caracteres acentuados y la ñ).
(\s[A-Za-zÁÉÍÓÚáéíóúñÑ]+)?: Coincide opcionalmente con un espacio seguido de otra palabra (uno o dos nombres).
$: Marca el final de la cadena.
Esto asegura que el nombre contenga una o dos palabras, sin números ni caracteres especiales.

3. Apellidos (uno o dos apellidos)
javascript
Copiar código
/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(\s[A-Za-zÁÉÍÓÚáéíóúñÑ]+)?$/
Explicación: Es idéntica a la del campo "Nombre", ya que los apellidos tienen las mismas características (uno o dos palabras, sin caracteres especiales ni números).

4. Fecha de nacimiento (formato dd/mm/yyyy)
javascript
Copiar código
/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
Explicación:

^: Marca el inicio de la cadena.
(0[1-9]|[12][0-9]|3[01]): Coincide con días válidos del mes:
0[1-9]: Días del 01 al 09.
[12][0-9]: Días del 10 al 29.
3[01]: Días 30 y 31.
\/: Escapa el carácter /, que separa las partes de la fecha.
(0[1-9]|1[0-2]): Coincide con meses válidos (01 al 12).
\/: Otro separador /.
\d{4}: Coincide con un año de 4 dígitos.
$: Marca el final de la cadena.
Esto asegura que el formato sea estrictamente dd/mm/yyyy y que los días y meses sean válidos.

5. Web personal (formato https://www.algo.tresletras)
javascript
Copiar código
/^https:\/\/www\.[a-zA-Z0-9-]+\.[a-zA-Z]{3}$/
Explicación:

^: Marca el inicio de la cadena.
https:\/\/: Coincide con https://. Se escapan los caracteres /.
www\.: Coincide con www..
[a-zA-Z0-9-]+: Coincide con uno o más caracteres alfanuméricos o guiones (-).
\.: Coincide con el punto . que separa el dominio y la extensión.
[a-zA-Z]{3}: Coincide con una extensión de exactamente tres letras.
$: Marca el final de la cadena.
Esto asegura que la web tenga el formato correcto, empezando con https://www. y terminando con una extensión de tres letras.

6. Contraseña (entre 8 y 12 caracteres)
javascript
Copiar código
/^.{8,12}$/
Explicación:

^: Marca el inicio de la cadena.
.{8,12}: Coincide con cualquier carácter (.) entre 8 y 12 veces.
$: Marca el final de la cadena.
Esto asegura que la contraseña tenga una longitud mínima de 8 y máxima de 12 caracteres, sin restricciones adicionales.


 */

