/**
 
1.- Crea un enlace que vaya a google. Crea dos botones junto al enlace:
    • Al pulsar el primero, muestra la URL a dónde va el enlace y su texto.
    • Al pulsar el segundo, cambia la URL a otra diferente y su texto por “he cambiado”
 */

window.onload=function (){

    let btn1 = document.getElementsByTagName("button")[0];
    console.log(btn1);

    let enlace = document.getElementsByTagName("a")[0];
    
    document.getElementsByTagName("button")[0].onclick=function(){
        document.write("Nombre de Pagina: "+enlace.innerText);
        document.write("<br>");
        document.write("Enlace de Pagina: "+enlace.getAttribute("href"));
        
    }

    document.getElementsByTagName("button")[1].onclick=function(){
        enlace.href="https://www.ole.com.ar";
        enlace.innerText="Ole";
        console.log(enlace.href);
    }

}
