/**
 * 
 6.- Indica cuáles serían las expresiones regulares que hay que usar para validar las
siguientes entradas de un formulario:
a) Nombre de usuario: debe empezar por letra (mayúscula o minúscula). Puede
tener números y los caracteres guion medio y guion bajo (ningún otro). No
puede contener espacios. Longitud máxima de 16 caracteres.
b) Constraseña: longitud mínima de 8 caracteres y máxima de 18. Puede contener
números, espacios y cualquier carácter. Debe contener alguna mayúscula.
c) Valor hexadecimal: debe comenzar por el carácter almohadilla 6 o 3 caracteres
hexadecimales válidos: letras de la A a la F (mayúsculas o minúsculas) y
números del 0 al 9. Nada de espacios o algún otro carácter.
d) URL: comienza por http:// o https:// A continuación puede aparecer o no
la cadena www. Después irá el nombre del dominio (números, letras y guion
medio). Punto. Puede aparecer o no el subdominio (lo mismo que el dominio).
Punto. Y finaliza con la extensión (2 o tres letras. No números ni caracteres).
La extensión puede repetirse.
e) Una IP válida: cuatro bloques de dígitos separados por el carácter punto (el
último bloque no lleva el punto). En cada bloque puede aparecer 1,2 o 3 dígitos.
Ninguna letra o carácter están permitidos en los bloques.
◦ Mejora el apartado anterior para que en los bloques solo puedan aparecer
números entre el 0 y el 255.
a) Etiqueta HTML: comienza por el signo <. A continuación lleva letras
mayúsculas o minúsculas (nada de números o caracteres). Finaliza con el
carácter / (puede aparecer o no) y con el carácter >.
◦ Mejora el apartado anterior para que pueda reconocer atributos:
atributo=”valor”. Recuerda que se pueden poner varios atributos separados
por espacio.
 */
/*
    //validar usuario
    let er1=/^[a-zA-Z][a-zA-Z0-9-_]{2,15}$/;
    //validar contraseña
    let er2=/^(?=.*[A-Z]).{8,18}$/; //
    //validar hexa
    let er3=/^#[A-Fa-f0-9]{3,6}$/;
    //validar web
    let er4=/^[https?:\/\/]([wwww.])?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,3} $/;
    //validar ip
    let er5=/^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
    //validar etiqueta
    let er6=/^<[a-zA-Z]+(\/)?>$/;
*/


window.onload = () => {
    const form = document.getElementById("myForm");
  
    // Expresiones regulares
    const regex = {
      username: /^[a-zA-Z][a-zA-Z0-9-_]{0,15}$/, // Nombre de usuario
      password: /^(?=.*[A-Z]).{8,18}$/,          // Contraseña
      hex: /^#[A-Fa-f0-9]{3,6}$/,                // Valor hexadecimal
      url: /^(https?:\/\/)(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,3}$/, // URL
      ip: /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/, // IP
      html: /^<[a-zA-Z]+(\s+[a-zA-Z]+="[^"]*")*\s*(\/?)>$/, // Etiqueta HTML
    };
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita el envío del formulario
  
      // Validar cada campo
      const fields = [
        { id: "username", regex: regex.username },
        { id: "password", regex: regex.password },
        { id: "hex", regex: regex.hex },
        { id: "url", regex: regex.url },
        { id: "ip", regex: regex.ip },
        { id: "html", regex: regex.html },
      ];
  
      let isValid = true;
  
      fields.forEach((field) => {
        const input = document.getElementById(field.id);
        if (!field.regex.test(input.value)) {
          alert(`El campo "${field.id}" no es válido.`);
          isValid = false;
        }
      });
  
      if (isValid) {
        alert("Todos los campos son válidos.");
      }
    });
  };
  