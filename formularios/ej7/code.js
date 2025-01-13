/**
 7.- Crea un textarea y un botón llamado Publicar. Cada vez que se pulse el botón Publicar, 
 se va a crear un div cuyo contenido será el texto del textarea. 
 Nota: maqueta de manera vistosa los DIV creados.
b) Haz que sólo se publiquen en el div los 50 primeros caracteres escritos en el textarea.
c) Limita a que sólo se puedan escribir 100 caracteres en el textarea. Después de los 100 
caracteres escritos, no se puede seguir escribiendo. El botón Publicar no debe cambiar su comportamiento. 
Nota: busca el evento adecuado para este ejercicio.
 */

window.onload=()=>{
    
    let formu=document.formulario;
    console.log(formu);
    
    let campo=formulario.campo;
    
    let contador=campo.value.length;
    
    let boton=document.querySelector("input[type=button]");
    //console.log(campo.value);
    

    campo.addEventListener("input",function () {
        if (campo.value.length>99) {
            campo.value=campo.value.slice(0,100);
            
        }
    });



    boton.addEventListener("click", function () {
        let nuevo = document.createElement("div");
        nuevo.setAttribute("class","maque");

        console.log(campo.value.length);
        

        if (campo.value.length<50) {
            //console.log("hola");
            let tex=campo.value;
            var texto=document.createTextNode(tex);

            console.log(texto);
        }else{
            let tex=campo.value;
            console.log(tex);
            let tex2 = tex.slice(0,49);
            var texto=document.createTextNode(tex2);
            
        }

        
        //console.log("funca");
        
        nuevo.appendChild(texto);
        //console.log("funca");

        formu.appendChild(nuevo);
    })
    

}