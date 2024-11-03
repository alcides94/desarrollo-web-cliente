/**
 * 11.- Crea tres DIV de tamaño 300x100px con un color de fondo distinto cada uno y con
un texto en su interior que indique “Soy el DIV X” (siendo X un número del uno al
tres).
a) Oculta el segundo DIV usando la propiedad visibility de CSS. Consigue
que ese DIV “vuelva a aparecer” sí y solo sí, el cursor del ratón se coloca en el
primer DIV.
b) Oculta el tercer DIV usando la propiedad display de CSS. Consigue que
ese DIV “vuelva a aparecer” sí y solo sí, el cursor del ratón se coloca en el
primer DIV.

 */

window.onload=()=>{
    let divs=document.querySelectorAll("div");

    divs[1].style.setProperty( "visibility", "hidden");
    divs[2].style.setProperty("display","none");

    divs[0].onmouseover=()=>{
        divs[1].style.setProperty("visibility", "visible");
        divs[2].style.setProperty("display", "");
    }
    divs[0].onmouseout=()=>{
        divs[1].style.setProperty("visibility", "hidden");
        divs[2].style.setProperty("display", "none");
    }



    
}