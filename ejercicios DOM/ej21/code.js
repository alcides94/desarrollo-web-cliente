/**
 * 21.- Crea un programa en Javascript que al colocar el ratón encima de cualquier enlace,
aparezca un div de 200x200px con maquetación en CSS (color de fondo, tamaño de
letras, relleno, sombra paralela, bordes redondeados...) en la esquina superior derecha de
la pantalla con el texto: Esto es un enlace.
b) Mejora el ejercicio anterior para que el mensaje sea: “La URL de este enlace es:
xxxxxx” (siendo xxxxxx la url del enlace sobre el que se coloca el ratón).
 */


window.onload = function () {
    let enlace = document.getElementsByTagName("a")[0];

    enlace.onmouseover=function () {
        let caja = document.createElement("div");
        caja.style.setProperty('width','200px');
        caja.style.setProperty('height','200px');
        caja.style.setProperty('background-color','aqua');
        caja.style.setProperty('font-size','20px');
        caja.style.setProperty('box-shadow','20 20 20 20');
        caja.style.setProperty('border-radius','5%');
        caja.style.setProperty('text-align','right');

        let linke = enlace.getAttribute("href");

        let texto = document.createTextNode("el enlace es: "+linke);

        caja.appendChild(texto);

        let papi=enlace.parentNode;

        papi.appendChild(caja);

        papi.insertBefore(caja,enlace);
    }
    
    


}