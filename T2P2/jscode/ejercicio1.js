window.onload=()=>{

    let btn=document.querySelectorAll("input")[0];
    

    btn.addEventListener("click",function () {
         
        const url="https://randomuser.me/api";

        fetch(url)
            .then(function (respuesta) {
                if (!respuesta.ok) {
                    throw new Error("Error"+respuesta.status);
                    
                }            

                return respuesta.json();
            })
            .then(function (datos) {
                console.log(datos);
            })
            .catch(function (error) {
                alert("Error"+error);
            })
        });


    let btn2=document.querySelectorAll("input")[1];
    let contenedor =document.querySelector("div");

    btn2.addEventListener("click", function () {
        const url="https://randomuser.me/api";
        
        fetch(url)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("Error "+respuesta.status);
                
            }
            return respuesta.json();
        })
        .then(function (datos) {
            
            
            let usuarios=datos.results[0];
            
           // console.log(usuarios);
            let usu="";
            let ima="";
            let articulo =document.createElement("article");
            let imagen =document.createElement("img");
            for (const key in usuarios) {
                
                
                
                articulo.className="usuario";
                

                if (key=="name") {
                        
                        usu=usuarios[key].first+" ";
                        usu+= usuarios[key].last+" ";
                }else if (key=="dob") {
                    usu+= usuarios[key].age+" años";
                }else if (key=="picture") {
                    ima=usuarios[key].medium;
                }
                articulo.innerText=usu;
                imagen.setAttribute("src", ima);
                

            }
            articulo.appendChild(imagen);
            contenedor.appendChild(articulo);

        })
        .catch(function (error) {
            alert("Error ".error);
        })





    })

}