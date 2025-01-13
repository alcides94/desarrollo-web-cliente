/**
 * 6.- Crea un formulario con varios elementos textbox (pej, países) y una lista desplegable vacía.
Implementa el código necesario para que, cada vez que se marque un checkbox, se cree una entrada nueva 
en la lista desplegable con el país correspondiente. Si se desmarca un checkbox, debe eliminarse el país 
correspondiente de la lista.
 * 
 * 
 */

window.onload=()=>{

let formu = document.formulario;

let cajas= document.querySelectorAll("input[type=checkbox]");
let sele= document.querySelector("select");

console.log(sele);

cajas.forEach( 
    function (cajita) {
        cajita.addEventListener("click",function () {
            if(cajita.checked==true){
                let nuevo =document.createElement("option");
                let texto = document.createTextNode(cajita.name);
                nuevo.appendChild(texto);
                sele.appendChild(nuevo);
            }
            if(cajita.checked==false){
                let eliminado = cajita.name;

                let opt=sele.options;

                console.log(opt);
                

                for (const element of opt) {
                    
                    if (eliminado==element.text) {
                        sele.removeChild(element);        
                       }
                }

            }

        }
        )
        
    }
);

}