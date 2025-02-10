/**
 * Ejercicio 2: Crear una página web sencilla con una lista de elementos que se pueden
añadir o eliminar.
Crea un script que almacene la lista en el almacenamiento local del navegador cada vez
que se agrega o elimina un elemento
Crea otro script que recupere la lista desde el almacenamiento local y la muestre en la
página web cada vez que se carga la página.
Añade en esa página el botón BORRAR que borre los datos almacenados en el local
storage.

 */

window.onload=()=>{
    let btnEliminar=document.querySelector("#eliminar");
    let btnAgregar=document.querySelector("#agregar");
    let texto=document.querySelector("#campo");
    let lista=document.querySelector("ol");
    console.log(texto);

    let fecha=new Date();

    btnAgregar.addEventListener("click", function (params) {
        if (texto.value!="") {
            let elemento=document.createElement("li");
            let contenido=document.createTextNode(texto.value);
            elemento.appendChild(contenido);
            lista.appendChild(elemento);
            localStorage.setItem("fecha_"+Date.now(),texto.value);
        }else{
            alert("ingrese algo en el campo");
        }
    })
    
    btnEliminar.addEventListener("click", function (params) {
        if (texto.value!="") {

            let items = lista.querySelectorAll("li"); 

            let encontrado = false;
            items.forEach((item) => {
                if (item.textContent == texto.value) { 
                    
                    lista.removeChild(item); 
                    encontrado = true;
                    localStorage.setItem("fecha+"+Date.now(),item.textContent);
                }
            });
    
            if (!encontrado) {
                alert("El elemento no está en la lista.");
            }

            


        }else{
            alert("ingrese algo en el campo");
        }
    })

}