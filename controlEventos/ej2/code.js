/**
 * 
 * 
 2.- Crea un documento HTML con dos DIV. Crea un script que, cada vez que se mueva el ratón, indique las posiciones de este de la forma (posx,posy). Usa el primer div para mostrar esa información.
Además, cuando se pulse alguno de los botones del ratón, en el segundo DIV se debe mostrar qué botón se ha pulsado (Izquierdo , derecho o central).
También debe impedir que aparezca el menú contextual al pulsar el botón derecho del ratón.
 * 
 */

window.onload=()=>{
    let cuerpo=document.querySelector("body");
    let div1=document.getElementsByTagName("div")[0];
    let div2=document.getElementsByTagName("div")[1];

    cuerpo.addEventListener("mousemove", function (e) {
        let x=e.clientX;
        let y=e.clientY;

        console.log(x);
        console.log(y);

        //let parra="";
       // console.log(parra);
        
        div1.innerText="x: "+x+" Y: "+y;
            //parra=document.createElement("p");
           // var texto = document.createTextNode();
            //parra.appendChild(texto);
            //div1.appendChild(parra);
            
        
        //    texto.textContent="x: "+x+" Y: "+y;
        

    })

    cuerpo.addEventListener("mousedown", function (e) {
        
        e.preventDefault();
        switch (e.button) {
            case 0:
                div2.innerText="Click izquierod"
                break;
        
            case 1:
                div2.innerText="Click central"
                break;
        
            case 2:
                div2.innerText="Click derecho"

                break;
        
        }
    })

    cuerpo.addEventListener("contextmenu",function (params) {
        params.preventDefault();
    })

}