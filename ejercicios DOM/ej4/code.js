/**
 * 4.- Crea una galería de fotos (al menos 5 fotos) que posea un botón para avanzar y otro
para retroceder.
• El botón para avanzar hará que se muestre la siguiente foto cada vez que se
pulse. Si se llega al final de la lista de imágenes, el botón deja de funcionar.
• El botón para retroceder hará que se muestre la foto anterior cada vez que se
pulse. Si se llega al principio de la lista de imágenes, el botón deja de funcionar.
b) Mejorar el ejercicio haciendo que el botón correspondiente se deshabilite
cuando se alcanza el final/principio de la lista de fotos.
 */


window.onload=function(){

    let imge = document.querySelector("img");
    let btnSiguiente=document.getElementsByTagName("button")[0];
    let btnAtras=document.getElementsByTagName("button")[1];

    console.log(imge);
    

    let imagenes=["../img/river1.jpg","../img/river2.jpg","../img/river3.jpg","../img/river4.jpg","../img/river5.jpg"];

    btnSiguiente.onclick=()=>{
        let imgActual=imge.getAttribute("src");
 
        for (let i = 0; i < imagenes.length; i++) {
            if (imgActual==imagenes[i]){
                i++;
                if(i==imagenes.length){
                    i=0;
                }
                imgActual=imagenes[i];
            }   
        }
        imge.src=imgActual;

    }
    btnAtras.onclick=()=>{
        let imgActual=imge.getAttribute("src");
        
        for (let i = 0; i < imagenes.length; i++) {
            if (imgActual==imagenes[i]){
                i--;
                if(i==0){
                    
                    i=imagenes.length-1;
                }
                imgActual=imagenes[i];
            }  
        }
        imge.src=imgActual;

    }


}