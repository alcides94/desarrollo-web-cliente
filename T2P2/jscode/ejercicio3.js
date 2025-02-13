window.onload=()=>{

/* APARTADO A */

let btnObtener=document.querySelectorAll("input")[0];
let btnEnviar=document.querySelectorAll("input")[4];


        const url="http://www.jaimeweb.es/medac/getProfesores.php";
        /**APARTADO A */

        btnObtener.addEventListener("click", function () {
            function mostrarA() {
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
            }
            mostrarA();

        /** APARTADO B */
        let contenedor=document.querySelector("#salida");
            function mostrarB() {
                contenedor.innerText="";

                fetch(url)
                .then(function (respuesta) {
                    if (!respuesta.ok) {
                        throw new Error("Error"+respuesta.status);
                        
                    }            

                    return respuesta.json();
                })
                .then(function (datos) {
                    console.log(datos);
                    
                    datos.forEach(element => {
                        let cajita=document.createElement("div");
                        cajita.className="ficha";
                        let info="";
                        for (const key in element) {
                            info+=element[key]+"\n";
                            
                        }
                        cajita.innerText=info;
                        contenedor.appendChild(cajita);

                    });
                    
                })
                .catch(function (error) {
                    alert("Error"+error);
                })
            }
            mostrarB();

        })

        /** APARTADO C */
        let contenedor2=document.querySelector("#salida");
        btnEnviar.addEventListener("click", function (e) {
            e.preventDefault();
            contenedor2.innerText="";

            
          
            const url2 = "http://www.jaimeweb.es/medac/setProfesores.php";
        
            let formu = document.querySelectorAll("form")[1];
            let fd = new FormData(formu);
            
            //console.log(fd);

            const cabecera = {
                method: "POST",
                body: fd
            }
        
            fetch(url2, cabecera)
                .then(function (respuesta) {
        
                    if (!respuesta.ok) {
                        throw new Error("Error del fetch: " + respuesta.status);
                    };
                    
                    return respuesta.json();        
                })
                .then(function (datos) {
        
                    //console.log(datos);
                    let mesajito = document.createElement("p");
                    mesajito.innerText =datos;
                
                    contenedor2.appendChild(mesajito);
                    
                })
                .catch(function (error) {
                    alert("Problemas accediendo a la URL: " + error);
                })
        
        
        });
            
            
        
    

}