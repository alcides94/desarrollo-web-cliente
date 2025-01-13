/**
 * 9.- Crea un campo de texto en el que se deba colocar un DNI (nueve dígitos y una letra). Cuando ese elemento pierda el foco (crea más elementos para que eso ocurra), se debe validar lo siguiente:
•
Que hay nueve números y una letra.
•
Que la letra introducida es la letra correcta (Aquí se indica: https://www.interior.gob.es/opencms/ca/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/)
 */


window.onload=()=>{

    let formu=document.formulario;

    let campo=document.querySelector("input[type=text]");
    console.log(campo);

    campo.addEventListener("blur",function () {
       
        if (campo.value.length!=9){
            let elem=document.createElement("p");

            let text=document.createTextNode("la cantidad de caracteres No coicide");

            elem.appendChild(text);

            formu.appendChild(elem);
        }else{
            let verfiNum = campo.value.slice(0,8);
            console.log(!isNaN(verfiNum));
            
            if(!isNaN(verfiNum)){
                
                let total=verfiNum%23;
                console.log(total);
                
                switch (total) {
                    case 0:
                        if(campo.value[8]=="T"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 1:
                        if(campo.value[8]=="R"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 2:
                        if(campo.value[8]=="W"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 3:
                        if(campo.value[8]=="A"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 4:
                        if(campo.value[8]=="G"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 5:
                        if(campo.value[8]=="M"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 6:
                        if(campo.value[8]=="Y"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 7:
                        if(campo.value[8]=="F"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 8:
                        if(campo.value[8]=="P"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 9:
                        if(campo.value[8]=="D"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 10:
                        if(campo.value[8]=="X"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 11:
                        if(campo.value[8]=="B"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 12:
                        if(campo.value[8]=="N"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 13:
                        if(campo.value[8]=="J"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 14:
                        if(campo.value[8]=="Z"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 15:
                        if(campo.value[8]=="S"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 16:
                        if(campo.value[8]=="Q"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 17:
                        if(campo.value[8]=="V"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 18:
                        if(campo.value[8]=="H"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 19:
                        if(campo.value[8]=="L"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 20:
                        if(campo.value[8]=="C"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 21:
                        if(campo.value[8]=="K"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    case 22:
                        if(campo.value[8]=="E"){
                            alert("DNI CORRECTO")
                            break;    
                        }
                        
                    
                    default:
                        let elem=document.createElement("p");

                        let text=document.createTextNode("frmato incorrecto");

                        elem.appendChild(text);

                        formu.appendChild(elem);
                        break;
                }
                
            }else{
                let elem=document.createElement("p");

            let text=document.createTextNode("NO SON NUMEROS");

            elem.appendChild(text);

            formu.appendChild(elem);
            }
                
            
        }
      

    });


}





/**
 * 
 
window.onload = () => {
    let formu = document.formulario;
    let campo = document.querySelector("input[type=text]");

    // Tabla de letras correspondientes al resto del DNI
    const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

    campo.addEventListener("blur", function () {
        // Limpia mensajes de error anteriores
        const mensajesAnteriores = formu.querySelectorAll("p");
        mensajesAnteriores.forEach((msg) => msg.remove());

        const valor = campo.value.trim(); // Elimina espacios en blanco
        if (valor.length !== 9) {
            // Validar longitud
            mostrarMensaje(formu, "La cantidad de caracteres no coincide.");
            return;
        }

        const numeros = valor.slice(0, 8); // Los primeros 8 caracteres
        const letra = valor[8].toUpperCase(); // Último carácter (letra)

        // Verificar que los primeros 8 caracteres sean números
        if (isNaN(numeros)) {
            mostrarMensaje(formu, "Los primeros 8 caracteres deben ser números.");
            return;
        }

        // Calcular la letra correspondiente
        const resto = numeros % 23;
        const letraCorrecta = letrasDNI[resto];

        // Validar que la letra coincida
        if (letra === letraCorrecta) {
            alert("DNI CORRECTO");
        } else {
            mostrarMensaje(
                formu,
                `La letra no es correcta. Debería ser "${letraCorrecta}".`
            );
        }
    });

    // Función para mostrar mensajes de error
    function mostrarMensaje(formulario, texto) {
        let elem = document.createElement("p");
        elem.textContent = texto;
        formulario.appendChild(elem);
    }
};


 */