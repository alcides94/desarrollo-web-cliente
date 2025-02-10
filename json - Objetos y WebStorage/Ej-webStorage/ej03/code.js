/**
 * 
 * Ejercicio 3: Crea una pagina web con un formulario que pida el Nombre, los Apellidos,
la edad y el Email al usuario.
Cada vez que se envía el formulario, esos datos deben almacenarse en un objeto JSON y
almacenarlos en el almacenamiento local del navegador.
Crea otra página con dos botones:
1. Recuperar: al pulsarlo, recupera el objeto almacenado y muestre cada VALOR
de las propiedades del objeto en diferentes etiquetas section. Nota: si se pulsa
varias veces, irá creando nuevos Section.
2. Borrar: borra el contenido de la localStorage.

 */


window.onload=()=>{
    let enviar=document.querySelector("#enviar");
    let nombre=document.querySelector("#nombre");
    let apellido=document.querySelector("#apellido");
    let edad=document.querySelector("#edad");
    let email=document.querySelector("#email");

    let objeto2=";"

    enviar.addEventListener("click", function (params) {
        params.preventDefault();

        let objeto=JSON.stringify({
            nombre: nombre.value,
            apellido: apellido.value,
            edad: edad.value,
            email: email.value
        });

        localStorage.setItem("usuario_"+Date.now(),objeto);
        
        console.log(objeto);
        
        objeto2=JSON.parse(objeto);

    })






}