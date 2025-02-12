/**
 * 
 * 3.- Crea una página web sencilla que tenga dos elementos <section> y un botón.
Nota: no coloques id a ninguno de los <section>
Cuando se pulse el botón, este queda deshabilitado y debe realizar una solicitud a la API
de FakeStore (https://fakestoreapi.com/products). Con lo que devuelva, se debe listar en
el primer <section> de la pagina, el nombre y el precio de todos los productos
obtenidos.
Hay que implementar también que, al pasar el ratón por encima de alguno de los
productos listados, en el segundo <section> de la página debe aparecer la imagen de
dicho producto.


 */

window.onload=()=>{


    let btn=document.querySelector("button");
    let seccio1=document.querySelectorAll("section")[0];
    let seccio2=document.querySelectorAll("section")[1];

    let imagen=document.createElement("img");
   // console.log(seccio2);
    seccio2.appendChild(imagen);
    btn.addEventListener("click",function (params) {
        btn.disabled=true;  
        const url="https://fakestoreapi.com/products";

        fetch(url)
            .then(function (respuesta) {
                if (!respuesta.ok) {
                    throw new Error("Error"+respuesta.status);
                    
                }            

                return respuesta.json();
            })
            .then(function (datos) {
                console.log(datos);
                
                let lista=document.createElement("ol");

                datos.forEach(element => {
                    let item=document.createElement("li");
                    item.innerText="Producto: "+element.title+" Precio: "+element.price;
                    
                    lista.appendChild(item);
                    item.addEventListener("mouseover", function () {
                        let img=element.image;
                        imagen.src= img;
                    });
                });
                seccio1.appendChild(lista);
            })
            .catch(function (error) {
                alert("Error"+error);
            })
        });


    


}

