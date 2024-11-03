/**
 * 8.- Implementa el efecto ROLLOVER sobre una imagen: al pasar el ratón por encima,
cambia la imagen. Al sacar el cursor fuera, la imagen vuelve a su estado original.

 */

window.onload=function(){

    let imga=document.getElementsByTagName("img")[0];
    let imaOriginal=imga.getAttribute("src");
        
    imga.onmouseover=()=>{
        
        imga.src="../img/river2.jpg";
    }
    imga.onmouseout=()=>{
        
        imga.src=imaOriginal;
    }
    
}


