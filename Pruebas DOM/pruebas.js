function main(){
 /**
    let parra=document.getElementsByTagName("p");
    console.log(parra[0]);
  */
   /*
    let parras=document.getElementsByTagName("p");
    let dedo=parras[0];
    */
    //se cambia el id de la etiqueta
  /*  dedo.id="iker";

    console.log(dedo.width);

    dedo.width = "15px"
    //si intento modificar una etiqueta y la misma no esta JS la crea
    dedo.id="tablita";
    //para modificar el nombre de la class de una etiqueta
    dedo.className="pepe"*/

    //para modificar un atributo

    let parras =document.getElementsByTagName("table");
    let dedo=parras[0];
    dedo.setAttribute("class","goku");
    dedo.setAttribute("name","carlos");
    //dedo.setAttribute('width',2000);

    let valor =parseInt(dedo.getAttribute("width"));
    valor+=30;
    dedo.setAttribute("width",valor);
    

    // capata el contenido del interior de la etiqueta: innerText
 
    // innerhtml capta todo etiques y contenido

}

function cambia() {
        let dedo=document.getElementsByTagName("input")[0];
        dedo.type="password"
}

window.onload =function () {
    let bombi=document.getElementById("bombom");
/*
    let body = document.getElementsByTagName("body");
*/

//TRAERME TODO EL CONTENIDO
    

}


function xanxe() {
    
}


/**
 * 
 * ACCESO A ATRIBUTOS
 * 
 * 1) Notacion PUNTO
 * 
 * 
 */