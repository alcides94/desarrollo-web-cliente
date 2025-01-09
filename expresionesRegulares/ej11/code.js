/**1.- Crea un formulario con los siguientes campos:
•DNI: 8 números y una letra.
•Nombre: uno o dos nombres.
•Apellidos: uno o dos apellidos.
•Fecha de nacimiento: formato dd/mm/yyyy.
•Web personal: formato https://www.algo.tresletras
•Contraseña: entre 8 y 12 caracteres.
•Un botón para resetear el formulario.
•Un botón para enviar el formulario.


El formulario estará correcto sí y solo sí:
•Ningún campo se queda vacío
•El DNI tiene una longitud de 9
•La fecha de nacimiento tiene el formato correcto.
•Hay una o dos palabras en los campos nombre y apellidos.
•El campo de la web debe empezar por https://
•La longitud de la contraseña es correcta.


 */


window.onload=()=>{

    let formu=document.forms[0];
    //console.log(formu);
    
    let dni = formu.elements[0];
    let nombre = formu.elements[1];
    let apellidos =formu.elements[2];
    let nac = formu.elements[3];
    let web = formu.elements[4];
    let contra = formu.elements[5];
    let btn1 = formu.elements[6];

    //console.log(dni);
    
    btn1.addEventListener("click", function (e) {
    
        e.preventDefault();
        
        const patron = [/^AZaz$/];
        const patronDni=[/^09{8}$/];
        
        
    });

}








