/**
 * Javascript proporciona un sistema de notación propio llamado JSON
(Javascript Object Notation)
 * 
 * 
ARRAY DEFINICION
 */

let vacioCorto = [];

/**
 * 3.1.2 length
            Indica el número de elementos que posee el Array.
 */

var vocales = new Array('a','e','i','o','u');
var total = vocales.length;
aler(total); //5

/**
 * 3.1.3 concat()
            Esta función nos permite concatenar elementos a un array.
 */

var vocales = ['a','e','i','o','u'];
var nuevo = vocales.concat(1,2,3,4,5);
//'nuevo' será un array con 10 elementos
// 'a','e','i','o','u',1,2,3,4,5

/**
 * 3.1.4 pop()
            Esta función elimina el ultimo elemento del array y devuelve dicho elemento.
 */
var vocales = ['a','e','i','o','u'];
var ultima = vocales.pop();
//'ultima' tendrá el valor 'u'
// 'vocales' queda con: 'a','e','i','o'

/**
 * 3.1.5 push()
            Esta función añade un elemento al final del array.
 */
var vocales = ['a','e','i','o','u'];
vocales.push('tururu');
// 'vocales' queda con: 'a','e','i','o','u','tururu'


/**
 * 3.1.6 shift()
            Esta función es exactamente igual a pop() pero elimina y devuelve el primer elemento
            del array
 */

var vocales = ['a','e','i','o','u'];
var primera = vocales.shift();
//'primera' tendrá el valor 'a'
// 'vocales' queda con: 'e','i','o','u'

/**
 * 3.1.7 unshift() 
 *          añade el elemento por el principio del array.
 */

var vocales = ['a','e','i','o','u'];
vocales.unshift('tarara');
// 'vocales' queda con: 'tarara','a','e','i','o','u'

/**
 * 3.1.8 reverse()
            Esta función toma el array sobre el que se invoca y reordena sus elementos de forma
            inversa.
 */
var vocales = ['a','e','i','o','u'];
vocales.reverse();
// 'vocales' queda con: 'u','o','i','e','a'

/*3.1.9 join()
        Necesita como argumento un carácter separador y devuelve una cadena con todos los elementos del
        array unidos por el carácter separador:
*/
var vocales = ['a','e','i','o','u'];
var cadena1 = vocales.join(" "); //espacio en blanco
var cadena2 = vocales.join(""); //ningún caracteres
var cadena3 = vocales.join("-"); //espacio en blanco
// 'cadena1' será la cadena: 'a e i o u'
// 'cadena2' será la cadena: 'aeiou'
// 'cadena3' será la cadena: 'a-e-i-o-u'


/**
 * 3.2.1 some()
            Comprueba si ALGÚN elemento del array cumple la condición que se le pasa como
            parámetro. Devuelve true
 */


            /**IMPLEMENTACION DE SOME CON FUNCIONES ANONIMAS */
var lista = [2,4,6,8,9,10,15,25,31,46,59,62,75];
var alguno = lista.some(function(edad){
    return edad>18;
    });
    //La variable alguno tendrá el valor true
    console.log(alguno)

/**3.2.2 every()
            Comprueba si TODOS los elemento del array cumplen la condición que se le pasa como
            parámetro. Devuelve true
 */

var todos = lista.every((ele)=>(ele>=18));
//La variable todos tendrá el valor false
console.log(alguno)

/**
 * 3.2.3 forEach()
                Recorre automáticamente el array y ejecuta la función indicada con cada uno de los
                elementos del array.
 */

var lista = [2,4,6,8,9,10,15,25,31,46,59,62,75]

function mostrar(ele){
    var res = ele*2;
    console.log("Elemento actual: "+ele+ " Valor doble: "+res)
}
//Ejecutando un forEach...
lista.forEach(mostrar);          

/**
 * Usando funciones anónimas:
                        lista.forEach(function(ele){
                        var res = ele*2;
                        console.log("Elemento actual: "+ele+ " Valor doble: "+res)
                        });
Mismo ejemplo usando arrow functions:
                        lista.forEach((ele)=>{
                        var res = ele*2;
                        console.log("Elemento actual: "+ele+ " Valor doble: "+res);
                        });
 */

/**
 * 3.2.4 map()
                Esta función obtiene un nuevo array con los elementos del array original transformados
                según indique la función que se le pasa como parámetro. Es decir, se aplica una acción
                sobre el valor correspondiente y el resultado se guarda en el array resultante.
                Por tanto, al usar map obtenemos siempre un array con la misma longitud que el array
                al que se recorre.
 * 
 */
var lista = [2,4,6,8,9,10,15,25,31,46,59,62,75];
var res = lista.map((ele)=>{
        return (ele*2);
    });
    console.log(res);


/**
 * 3.2.5 filter()
                Este método nos permite filtrar los elementos de un array bajo unos criterios y nos
                devuelve un nuevo array con el resultado de ese “filtro”. Es decir, a diferencia de map
                que siempre devuelve un array del mismo tamaño que el array que recorre, filter
                puede devolver un array de menor tamaño que el que recorre.
 * 
                en otras palabras devuelve el filtro con el, que solicitamos 
 */

let listaFiltrada = lista.filter(function(elemento){
    return (elemento > 10)
    });

//    o mejor, usando funciones flecha:

let listaFiltrada1 = lista.filter((ele)=> (ele > 10));

// Lo que hace este método es recorrer el array y para cada elemento comprobar si la
// función anónima/flecha retorna true. Hecho esto en todos los elementos, devuelve un
// nuevo array con todos los items que pasaron la prueba.


/**
 * 3.3 Spread Operator
            nos permitirá transformar, copiar y concatenar arrays de una forma rápida y sencilla.

cuando asignamos una variable que contiene un array a otra, no se realiza una copia de esta sino 
que se crea una nueva referencia. Es decir, hay dos variables apuntando al mismo array. 
Si una variable cambia el contenido del array, la otra variable ve esos cambios:
 PARA ESTO ESTA EL SPREAD OPERATOR
            */

 //Esto es algo que podemos solucionar usando el operador de propagación:
 let vocales = ['a','e','i','o','u'];
 let copia = [...vocales]; //asigno una copia
 copia[0] = 25; //cambio valores de la copia
 console.log(vocales) //[ 'a', 'e','i','o','u' ]


/**
 * 3.3.2 Concatenando arrays
            Con el operador de propagación podemos concatenar arrays de forma sencilla:
 */
let vocales = ['a','e','i','o','u'];
let numeros = new Array(1,2,3,4,5);
let mix = [...vocales,...numeros];

/*3.3.3 Transformando en arrays
Si usamos el operador de propagación sobre una cadena de caracteres, vamos a obtener
el mismo resultado que si usáramos el método .split sin separador en dicha cadena:*/
let frase = "Martillo va!"
let arrayT = [...frase];
console.log(arrayT);
//[ 'M', 'a', 'r', 't', 'i', 'l', 'l', 'o', ' ', 'v', 'a', '!' ]


/** ----------ARRAY MULTIDIMENCIONALES----------- */

/** RECORRER UN ARRAY BIDIMENCIONAL */

//Bucle para recorrer las filas
for (let i=0;i<temperaturas_cuidades.length; i++){
    //bucle para recorrer las celdas de cada fila
    for (j=0;j<temperaturas_cuidades[i].length; j++){
        console.log(temperaturas_cuidades[i][j]);
    }
    }

/** RECORRER UN ARRAY BIDIMENCIONAL CON DIFERENTE TAMAÑO */

    for (let i=0;i<temperaturas_cuidades.length; i++){
        for (j=0;j<temperaturas_cuidades[i].length; j++){
            console.log(temperaturas_cuidades[i][j]);
        }
        }

/**  ------ARRAY ASOCIATIVO-------- 
 * 
 * Los arrays asociativos son un tipo de array muy útiles y muy comunes en los lenguajes
de programación que consisten en arrays cuyos indices no son números, sino cadenas de
texto19.
*/


