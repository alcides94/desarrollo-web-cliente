/**
 * 13.- Crea el efecto SPOILER que se puede ver en foros y otros páginas.
Se oculta el contenido de un elemento (pej, un párrafo) y sólo se muestra el mensaje
“Mostrar”. Al hacer click sobre dicho mensaje, se muestra el contenido del elemento y
el mensaje cambia a “Ocultar”. Si se pulsa sobre ese mensaje, el elemento vuelve a su
estado original (contenido oculto y mensaje “Mostrar”).

 */

window.onload=()=>{
    let mostrar=document.getElementsByTagName("h4")[0];
    let ocultar=document.getElementsByTagName("h4")[1];
    let parrafo=document.querySelector("p");
    console.log(parrafo);

    mostrar.onclick=()=>{
        mostrar.style.setProperty("display","none");
        ocultar.style.setProperty("display","block");
        parrafo.style.setProperty("display","block");
        
    }
    ocultar.onclick=()=>{
        mostrar.style.setProperty("display","block");
        ocultar.style.setProperty("display","none");
        parrafo.style.setProperty("display","none");
        
    }
    
}