window.onload=()=>{

    let btn=document.querySelector("input");
    

    btn.addEventListener("click",function () {
         
        const url="http://www.jaimeweb.es/medac/datos.json";
        /**APARTADO A */
        function mostrar() {
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
    
        mostrar();
    
        /**APARTADO B */

        function mostrarB() {
            fetch(url)
            .then(function (respuesta) {
                if (!respuesta.ok) {
                    throw new Error("Error"+respuesta.status);
                    
                }            

                return respuesta.json();
            })
            .then(function (datos) {
                //console.log(datos);
                for (const element of datos) {
                    console.log(element);
                    
                }
            })
            .catch(function (error) {
                alert("Error"+error);
            })
            
        }
    
        mostrarB();


    /**APARTADO B */

    function mostrarC() {
        fetch(url)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("Error"+respuesta.status);
                
            }            

            return respuesta.json();
        })
        .then(function (datos) {
            //console.log(datos);
            for (const key of datos) {
                let objeto=key;
                //console.log(objeto);
               
                for (const elemento in objeto) {
                    console.log(elemento+": "+objeto[elemento]);

                }
                console.log("=========================");
                
                
                
            }
        })
        .catch(function (error) {
            alert("Error"+error);
        })
        
    }

    mostrarC();
    
    
    });


}