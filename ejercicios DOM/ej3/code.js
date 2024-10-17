function sumar() {
    let num = document.getElementsByTagName("div")[0];

    //console.log(num);

    //console.log(num.innerText);
    let contenido=parseInt(num.innerText);

   contenido++;
   num.innerText=contenido;

   // setAttribute("innerText",contenido);
    console.log(contenido);

}