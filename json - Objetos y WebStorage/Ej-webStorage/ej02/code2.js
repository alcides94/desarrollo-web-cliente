window.onload=()=>{

    var tam=localStorage.length;
    
    console.log('Tenemos ' + tam + ' elementos dentro de Local Storage');
    let arrayLocal="";
    //Recorrer todo el contenido de localStorage
    for(let i=0; i < tam; i++) {
        key = localStorage.key(i);
        arrayLocal+='Para la clave ' + key + ' el valor es: '+ localStorage[key]+"\n";
    }

    let contenedor=document.createElement("p");
    document.body.appendChild(contenedor);
    contenedor.innerText=arrayLocal;

    let eliminar=document.querySelector("#eliminar");

    eliminar.addEventListener("click", function () {
        localStorage.clear();
        location.reload();

        
    })


}