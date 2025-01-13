/**
 * 
11.- Crea un formulario con los siguientes campos:
•
DNI: 8 números y una letra.
•
Nombre: uno o dos nombres.
•
Apellidos: uno o dos apellidos.
•
Fecha de nacimiento: formato dd/mm/yyyy.
•
Web personal: formato https://www.algo.tresletras
•
Contraseña: entre 8 y 12 caracteres.
•
Un botón para resetear el formulario.
•
Un botón para enviar el formulario.
Haciendo uso de JavaScript pero sin usar expresiones regulares1, cuando se pulse el botón correspondiente, valida el formulario siguiendo las normas que se detallan a continuación y envía el resultado a otra página que muestre un mensaje de que todo ha salido bien.
El formulario estará correcto sí y solo sí:
•
Ningún campo se queda vacío
•
El DNI tiene una longitud de 9
•
La fecha de nacimiento tiene el formato correcto.
•
Hay una o dos palabras en los campos nombre y apellidos.
•
El campo de la web debe empezar por https://
•
La longitud de la contraseña es correcta.
Si algún campo se rellena de forma errónea, debe indicarse ese error usando un alert y devolviendo el foco al elemento erróneo (o al primer elemento erróneo).
Como se ha comentado antes, debes preparar una sencilla pagina html con un mensaje de que todo ha ido bien y enlazarla al formulario de tal modo que aparezca cuando todos los campos sean correctos. 

 */


window.onload=()=>{
    let formu=document.formulario;
    let dni=document.querySelectorAll("input")[0];
    let nombre=document.querySelectorAll("input")[1];
    let ape=document.querySelectorAll("input")[2];
    let fecha=document.querySelectorAll("input")[3];
    let web=document.querySelectorAll("input")[4];
    let contra=document.querySelectorAll("input")[5];
    let envio=document.querySelectorAll("input")[6];
    let resetear=document.querySelectorAll("input")[7];

    let arrayElement=Array.from(formu.elements);

    envio.addEventListener("click",function (e) {
        
        e.preventDefault();
        console.log(arrayElement);
        let error=false;
        arrayElement.forEach(function (params) {
            //console.log(params.name);
            
            if (error) return;

            switch (params.name) {
                case "dni":
                    //console.log("dni");
                    if(params.value.length==9 && params.value!=""){
                        console.log(params.value);
                        break;
                    }else{
                        console.log("error aqui "+params);
                        params.focus();
                        error=true;
                        break;
                        
                    }
                    
            
                case "apellido":
                    //console.log("dni");
                    let palabrasApe = params.value.split(" ");
                    //console.log(ape);
                    
                    if(palabrasApe.length<3 && params.value!=""){
                        console.log(params.value);
                        break;    
                    }else{
                        error=true;
                        console.log("error aqui "+params);
                        params.focus();
                        break;
                    }
                case "nombre":
                    //console.log("dni");
                    let palabrasNom = params.value.split(" ");
                    if(palabrasNom.length<3 && params.value!=""){
                        console.log(params.value);
                        break;
                    }else{
                        error=true;
                        console.log("error aqui "+params);
                        params.focus();
                        break;
                    }
                case "fecha":
                    let dia=params.value.slice(0,2);
                    let mes=params.value.slice(3,5);
                    let ano=params.value.slice(6,10);
                    
                    if(params.value.length === 10 && 
                        params.value[2] === '/' && 
                        params.value[5] === '/' && 
                        dia.length==2 && mes.length==2 && ano.length==4 && params.value!=""){
                        console.log(params.value);
                        break;
                    }else{
                        error=true;
                        console.log("error aqui "+params);
                        params.focus();
                        break;
                    }
            
                case "web":
                    //https://www.algo.tresletras
                    
                    let webFin=params.value.slice(-4);
                    //&& webFin.startsWith(".") 
                    if(params.value.slice(0,12)=="https://www." && params.value!=""){
                        console.log(params.value);
                        break;
                    }else{
                        error=true;
                        console.log("error aqui "+params);
                        params.focus();
                        break;
                    }
                case "contrasena":
                    if(params.value.length>7 && params.value.length<13 && params.value!=""){
                        console.log(params.value);
                        break;
                    }else{
                        error=true;
                        console.log("error aqui "+params);
                        params.focus();
                        break;
                    }            
              //  default:
                // break;
            }

            if (params.value.trim() === "") {
                alert(`${params.name} no puede estar vacío`);
                params.focus();
                return;
            }


        })



        




    })



}














