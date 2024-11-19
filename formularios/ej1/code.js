/**
 * Formularios
1.- Crea un formulario con dos campos de texto y un botón llamado copiar. El segundo
campo de texto debe estar colocado en modo de solo lectura.
Desarrolla un programa que, cuando se pulse el botón copiar, copie todo el contenido
del primer campo de texto en el segundo
 */

window.onload=()=>{

    let formu=document.forms[0];
    console.log(formu);
    
    let campo1 = formu.elements[0];
    let campo2 = formu.elements[1];
    let boton = formu.elements[2];

    campo2.disabled=true;

    boton.onclick=()=>{
        campo2.value=campo1.value;
    }
}