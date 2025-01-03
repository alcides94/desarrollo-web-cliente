window.onload=()=>{

    let formu=document.forms[0];
    console.log(formu);
    
    let campo1=formu.elements[0];
    let campo2=formu.elements[1];

    console.log(campo1);
    console.log(campo2);
    
    campo2.disabled=true;

    //funcion que se activa cuando se suelta una tecla en el campo seleccionado

    campo1.onkeyup=()=>{
        campo2.value=campo1.value;
        
        
    }

}