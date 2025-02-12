
window.onload=()=>{

    let titulo=document.querySelector("h1");

   // let contador=library.length;

    let contenedor=document.querySelector("section");

   // titulo.innerText="Hay "+contador+" Libros en la Biblioteca"


    //let objLibros=JSON.parse(library);

    let url="https://www.jaimeweb.es/medac/books.json";
    
    
    fetch(url)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("Error "+respuesta.status);
                
            }
            return respuesta.json();
        })
        .then(function (datos) {
            
            
            let libros=datos.library;
            console.log(libros);
            
            libros.forEach(element => {

                let articulo =document.createElement("article");
                articulo.className="presentacion";
                contenedor.appendChild(articulo);

                let titulo=document.createElement("h3");
                let nombre=JSON.stringify(element.book.title);
                
                articulo.appendChild(titulo);
                titulo.innerText=nombre;

                let ima=document.createElement("img");
                let propiedad=JSON.stringify(element.book.cover);
                propiedad = propiedad.replace(/"/g, "");
                ima.setAttribute("src",propiedad)
                articulo.appendChild(ima);

                articulo.addEventListener("click",()=>{
                    let objetString=JSON.stringify(element.book);
                    console.log(objetString);
            
                    localStorage.setItem("libro",objetString);            
        
                    window.location.href="./mostrar.html";  
                })

            });


        })
        .catch(function (error) {
            alert("Error ".error);
        })





/*

    for (const key in library) {
        //console.log(library[key]);
        
        //creamos elemento
        

        //creamos h3 
        
        
       

        //creamos la imagen

       

    //    console.log(ima);
        

        
    }
*/



}