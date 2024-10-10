function main(){

    let usuario;

    /**solicitud de usuario */
    usuario=prompt("Ingrese el usuario");

    /**mostrar usuario */

    alert("Bienvenido "+usuario);

    let ok;
    ok = confirm(usuario+"Desea ingresar");

    console.info(ok);

    let edad;

    edad = prompt("ingresa la edad");
    console.log (typeof(edad));
    edad=parseInt(edad);
    console.log (typeof(edad));

    let num=55;

    console.log (typeof(num));


    /**pasamos mas limpio PARSEINT */
    //pedimos la edad y la pasamos a numero antes de guardarla
    var edad2 = parseInt(prompt("Introduce tu edad:",""));
    //Operamos al mostrar
    console.log("Dentro de 10 años tendrás: "+(edad2+10));
}

/**
 * OPERADORES CONDICIONALES 
 * 
 * == Comprueba si dos valores son iguales
!= Comprueba si dos valores son distintos.
> Mayor que, devuelve true si el primer operador es mayor que el segundo
< Menor que, es true cuando el elemento de la izquierda es menor que el
de la derecha
>= Mayor igual.
<= Menor igual

NaN == NaN //false

null == undefined //true

OPERADORES LOGICOS
&& Operador AND
|| Operador OR
! Operador NOT
*/




/*
    ARRAY
CREACION DE ARRAY

Con esto se crea un array llamado mueble el cual va a tener 5 cajones.
 */

var mueble = new Array(5);


/**INTRODUCIR VALORES AL ARRAY */

mueble[0] = 290
mueble[2] = 127


let miArray = new Array(3)
miArray[0] = 155
miArray[1] = 4
miArray[2] = 499
console.log(miArray[0]);
console.log(miArray[1]);
console.log(miArray[2]);

/**porpiedad que et dice cantidad de cajones de tu array */
console.log("Longitud del array: " + miArray.length);
//

/**INICIALIZAR IDRECTAMENTE EL ARRAY */
var diasSemana = new Array ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");



var miArray = new Array(2)
miArray[0] = "Colombia";
miArray[1] = "Estados Unidos" ;
miArray[5] = "Brasil";
for (let i=0;i<miArray.length;i++){
console.log("Posición " + i + " del array: " + miArray[i]);
}


/**
 * WHIL CON FOR
 * 
 * Es importante indicar que el bucle while se usa con arrays cuando se realizan
búsquedas de valores en el array: sigo en el bucle mientras no lo encuentre. Si lo
encuentro, acabo el bucle (aunque no haya acabado el array).
Con un bucle FOR recorremos todo el array, por tanto, usar un bucle FOR para buscar
elementos en el array es un fallo gordo de programación. */