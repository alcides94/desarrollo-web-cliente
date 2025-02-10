/**
 * 
 * Ejercicio 4: Crea una página web con un formulario de inicio de sesión que contenga los campos
"Usuario" y "Contraseña".
Cuando se pulse el botón enviar:
• Valida el nombre de usuario sea válido mediante el uso de expresiones
regulares. El nombre de usuario debe comenzar con una letra minúscula, seguida
de letras minúsculas y/o números, y tener una longitud mínima de 8 caracteres.
• Valida la contraseña sea válida mediante el uso de expresiones regulares. La
contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra
mayúscula, una letra minúscula y un número.
• Si alguno de los campos falla, ponle un borde rojo de tamaño 2px.

• Almacena el nombre de usuario y la contraseña en FORMA DE OBJETO en el
almacenamiento local del navegador.
En la misma página del formulario, escribe código JavaScript para recuperar el objeto
con el nombre de usuario y la contraseña desde el almacenamiento local cada vez que se
carga la página y rellena automáticamente los campos del formulario con los datos
almacenados.
Si no existieran datos en el almacenamiento local, los campos del formulario quedaran
vacíos.
Añade el botón BORRAR para eliminar el contenido de la localStorage


 */

window.onload=()=>{

    let usuario=document.querySelector("#usuario");
    let password=document.querySelector("#password");
    let ingresar=document.querySelector("#ingresar");

    ingresar.addEventListener("click", function (params) {
        params.preventDefault();

        let regexUser = /^[a-z][a-z0-9]{7,}$/; 
        let regexPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

        let objeto ={
            usuario:usuario.value.trim(),
            password:password.value.trim()
        }

        let ok=true;
        if (!regexUser.test(objeto.usuario)) {  
            usuario.style.border = "1px solid red";
            ok = false;
        } else {
            usuario.style.border = "1px solid green";
        }

        // Validación de la contraseña
        if (!regexPass.test(objeto.password)) {
            password.style.border = "1px solid red";
            ok = false;
        } else {
            password.style.border = "1px solid green";
        }
        if (ok) {
            let textObjeto=JSON.stringify(objeto);
            localStorage.setItem("datos"+Date.now(),textObjeto);
        }

    })




    let recuperar=document.querySelector("#recuperar");

    recuperar.addEventListener("click", function () {
        let claves=Object.keys(localStorage);        
        let info=document.createElement("p");
        document.body.appendChild(info);
        if(claves.length==0){
            info.innerText="No posee datos para recuperar";
        }
        
        let objFinal=[];
        for (let i = 0; i < claves.length; i++) {
            let obj=localStorage.getItem(claves[i]);
            objFinal[i]=JSON.parse(obj);
        }
    
        console.log(objFinal);
        
        for (const key in objFinal) {
            for (const objetito in objFinal[key]) {
                console.log(objetito+": "+objFinal[key][objetito]);
                info.innerText+=objetito+": "+objFinal[key][objetito];
            }
            info.innerText+="\n";
        }
        
    })
    
    let btnBorrar=document.querySelector("#borrar");


    btnBorrar.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });

    

}












