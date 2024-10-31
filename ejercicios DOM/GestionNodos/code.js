window.onload = function () {

    let boton1=document.getElementsByTagName("input")[0];
    let boton2=document.querySelectorAll("input[type='button']")[1];
    let boton3=document.getElementsByTagName("input")[2];
    
    boton1.onclick = function () {

        //1. creamos nodo
        let nuevo =document.createElement("p");
        //2. creamos atributo
        nuevo.setAttribute("class","parra");
        //3. creamos nodo texto
        let texto = document.createTextNode("Soy el nuevo parrafo y me llamo miguel");
        //4. engancho el nodo texto al nuevo nodo
        nuevo.appendChild(texto);
        //5. asignar un padre al nuevo
        let papi=document.querySelector("section");
        //papi.appendChild(nuevo);
        
        //insertar en un hermano
        let bro =document.querySelectorAll("div")[2];
        papi.insertBefore(nuevo,bro);
        

        this.disabled=true;

        boton2.disabled=false;
    }


    boton2.onclick = function () {
        let victima = document.getElementsByClassName("parra")[0];
        //para saber el padre de algo que quiero eliminar
        let papi = victima.parentNode;
        papi.removeChild(victima);

        this.disabled=true;
        boton1.disabled=false;
    }

    boton3.onclick = borrar;

    function borrar() {
        let papi= document.querySelector("section")
        //let victimas=document.querySelectorAll("div");
        
        //para saber todos los hijos
        let victimas=papi.children;

        for (let i = 0; i < victimas.length; i++) {
          //  let papi=victimas[i].parentNode;
            papi.removeChild(victimas[i]);
        }
    }
    
}