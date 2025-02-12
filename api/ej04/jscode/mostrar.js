window.onload=()=>{

    console.log(localStorage.getItem("libro"));
    

    let libro=localStorage.getItem("libro");
    let seccion=document.querySelector("#info");

    
    let objLibro=JSON.parse(libro);

    let conTitulo=document.createElement("h2");

    seccion.appendChild(conTitulo);
    conTitulo.innerText=objLibro.title;

    let tabla=document.createElement("table");

    let fila=document.createElement("tr");
    let fila2=document.createElement("tr");
    tabla.appendChild(fila);
    tabla.appendChild(fila2);
    for (const key in objLibro) {
        let celda=document.createElement("td");
        fila.appendChild(celda);
        celda.innerText=key;
        console.log(key);
            
        
    }
/*
    for (const element of objLibro) {
        let celda = document.createElement("td")
        celda.appendChild(document.createTextNode(objLibro.author.name))
    }
  */
    for (const key in objLibro) {
        
        let celda=document.createElement("td");
        //fila.appendChild(celda);
        
        if (key=="author") {
            var element=objLibro[key].name;
            celda.innerText=element;
        }else if(key=="cover"){
            var ima=document.createElement("img");
            var propiedad=objLibro[key];
            propiedad = propiedad.replace(/"/g, "");
            ima.setAttribute("src",propiedad)
            
            celda.appendChild(ima);
            //celda.innerText=element;
        }else{
            var element = objLibro[key];
            celda.innerText=element;
        }
        fila2.appendChild(celda);

    }

    seccion.appendChild(tabla);

}