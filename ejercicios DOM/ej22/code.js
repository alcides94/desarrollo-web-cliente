/**
 * 
 * 22.- Crea el efecto ‘ampliación’ de algunas galerías de fotos que podemos encontrar por
internet.
Para empezar, busca una imagen de gran tamaño (unos 1280x720px al menos) y coloca
la imagen en HTML pero con la mitad de tamaño. Crea el código Javascript necesario
para que , al hacer click sobre la imagen, suceda lo siguiente:
• Aparecerá una capa semitransparente de color gris que tapará TODA la parte
visible de la página y que no se moverá de sitio al hacer scroll.
• Dentro de esa capa, aparecerá la imagen con su tamaño original centrada tanto
horizontal como vertical y perfectamente visible.
• Al hacer click en cualquier punto de la capa, desaparecerá junto con la imagen
de tamaño original.
Nota: Haz uso del objeto Screen y/o Window.
b) Mejora el ejercicio anterior de modo que funcione para cualquier imagen que haya en
una página. Al hacer click sobre cualquiera de las imágenes de la página, esta aparece
con su tamaño original dentro de la capa semitransparente que lo cubre todo.
 */


window.onload=()=>{
    let imagen=document.querySelector("img");

    imagen.onclick=()=>{
        imagen.style.setProperty("display","none");
        let pantallaAncho=parseInt(screen.width);
        let pantallaAlto=parseInt(screen.height);

        console.log(pantallaAlto);
        console.log(pantallaAncho);

        let caja = document.createElement("div");

        caja.setAttribute("class","caj")
        caja.style.setProperty("width",pantallaAncho+"px");
        caja.style.setProperty("height",pantallaAlto+"px");

        console.log(caja);
        

        let padre=document.getElementsByTagName("body")[0];

        padre.appendChild(caja);
        
        let imagenOriginal=document.createElement("img");
        imagenOriginal.setAttribute("src", "../img/river4.jpg");
        
        caja.style.setProperty("display","flex");
        caja.style.setProperty("justify-content","center");
        caja.style.setProperty("align-items","center");
        caja.appendChild(imagenOriginal);
        
        console.log(padre);

        caja.onclick=()=>{
            caja.removeChild(imagenOriginal);
            padre.removeChild(caja);
            imagen.style.setProperty("display","block");
        }
        
    }
    
    
}