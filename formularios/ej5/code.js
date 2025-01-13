/**
 * 
 * 5.- Crea un formulario con dos campos de texto y un boton llamado COMPROBAR. El
botón debe comprobar si el contenido de uno de los campos es anagrama del otro.
Mostrará el resultado haciendo uso de la función alert. Si ambos campos están vacíos,
no se considerará que son anagramas.
Nota: una palabra es anagrama de otra si las dos tienen las mismas letras, con el mismo número de
apariciones, pero en un orden diferente
 */


window.onload=()=>{

    let formu= document.forms[0];

    console.log(formu);
    

    let campo1=formu.text1;
    console.log(campo1);

    let campo2=formu.text2;
    console.log(campo2);

    let boton=formu.btn1;
    console.log(boton);

    

    boton.addEventListener("click",function(){
        let arrayCampo1=Array.from(campo1.value);
        let ordenado1=arrayCampo1.sort().join("");
        console.log(ordenado1);
        
        let arrayCampo2=Array.from(campo2.value);
        let ordenado2=arrayCampo2.sort().join("");
        console.log(ordenado2);
       
        if(ordenado1==""||ordenado2==""){
            alert("no puede haber campos vacios");
        }else if(ordenado1==ordenado2){
            alert("SON ANAGRAMAS");
        }else{
            alert("NO SON ANAGRAMAS");
        }
    
    });



}