/**}
 * 
 * Ejercicio 13: Crea una página web con un solo botón en el que, al pulsarlo, se le pida
al usuario un año (pej: 1492). A continuación , el programa debe mostrar a través de una
ventana modal a qué siglo pertenece el año introducido.
El siglo I abarca desde el año 1 hasta el año 100 inclusive, el siglo II desde el año 101
hasta el año 200 inclusive, etc.

Ejemplos:
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
Importante: intenta que la función que programes tenga el menor número de lineas
posibles. MAXIMO 5 lineas contando llaves (y es mucho). Piensa bien.


 */

function main (){
    let ano = parseInt(prompt("Ingrese Año"));
    let n= Math.ceil(ano/100);
    console.log(n);
}



