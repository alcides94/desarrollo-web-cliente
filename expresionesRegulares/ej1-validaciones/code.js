window.onload = () => {
    const er1= /^ho*a$/;
    /**
     * Descripción: Coincide con una cadena que empieza con "h", seguida de cero o más "o"s, y termina con "a".
Ejemplo válido: hoa
     */
    const er2 = /^([B-D]|[F-H]|[J-N]|[P-T]|[V-Z])$/;
    /**
     * Descripción: Coincide con una sola letra dentro de los rangos especificados.
Ejemplo válido: B
     */
    const er3 = /^[0-9]{5}$/;
    /**
     * Descripción: Coincide con exactamente cinco dígitos numéricos.
Ejemplo válido: 12345
     */
    const er4 = /^[0-4][0-9][0-2][0-9]{3}$/;
    /**
     * Descripción: Coincide con un número de 5 dígitos en el que:
El primer dígito es entre 0-4.
El segundo entre 0-9.
El tercero entre 0-2.
El último tiene 3 dígitos numéricos.
Ejemplo válido: 10234
     */
    const er5 = /^([0-4][0-9]|5[0-2])[0-9]{3}$/;
    /**
     * 
     * Descripción: Coincide con un número de 5 dígitos donde los primeros 2 dígitos están entre 00-52 
     * y los siguientes 3 son cualquier dígito.
Ejemplo válido: 12345
     */
    const er6 = /(^.+[a-z])(.*[A-Z])(.*\d)[a-zA-Z]{8,12}$/; //.hQ1laMussss Ejemplo valido
    //
    /**
     * Descripción: Coincide con una cadena que tiene:
Al menos un caracter cualquiera seguida de otra minuscula.
Al menos una letra mayúscula.
Al menos un dígito.
Entre 8 y 12 caracteres alfanuméricos.
     */
    
    let validar=document.querySelector("button");

    console.log(validar);
    
    validar.addEventListener("click", (e) => {
        e.preventDefault();
        let ok1= validaciones("0", er1, "resultA");//aca puede estar escrito la ID o el name
        let ok2= validaciones("1", er2, "resultB");//aca puede estar escrito la ID o el name
        let ok3= validaciones("2", er3, "resultC");//aca puede estar escrito la ID o el name
        let ok4= validaciones("3", er4, "resultD");//aca puede estar escrito la ID o el name
        let ok5= validaciones("4", er5, "resultE");//aca puede estar escrito la ID o el name
        let ok6= validaciones("5", er6, "resultF");//aca puede estar escrito la ID o el name

        if ( ok1 && ok2 && ok3 && ok4 && ok5 && ok6) {
            document.querySelector("form").submit();   
        }else{
            alert("No se puede enviar el formulario hasta que valides todo")
        }        

    });

    function validaciones(pos, er, aviso) {
        let valor = document.getElementsByTagName("input")[pos].value;
        let comprobado = er.test(valor);
        let resultado = document.getElementById(aviso);
        resultado.textContent = comprobado ? "¡Válido!" : "No válido.";
        //resultElement.style.color = isValid ? "green" : "red";
        console.log(comprobado);
        
        return comprobado;

    }

};
