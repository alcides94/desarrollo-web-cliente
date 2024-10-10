/**
 * 
 * COERCION DE DATOS / TIPOS
 * proceso mediante el cual JavaScript convierte el valor de una variable de un tipo a otro,
normalmente de forma automática
 */

/**COERCION IMPLICITA 
 * 
 * Es la coerción que se aplica de forma automática cuando se intenta ejecutar una
operación con dos valores de distintos tipos
*/

/**
 * Operador suma (+)
 * 
Si uno de los valores es de tipo texto y el otro no, se aplicará coerción implícita sobre el
tipo que no es cadena para devolver una cadena como resultado.
"1" + true // "1true"
10 + "texto" + 5 // "10texto5"
10 + "" // "10" 

SI NUNGUNO DE LOS OPERANDOS ES UNA CADENA VA A REALIZAR UNA OPERACION NUMERICA

true + false // 1
true + true // 2

*/


/**
 * OPERADOR LOGICO
 * 
 * Importante destacar lo siguiente:
• Cualquier número que no sea el 0, su equivalente booleano es true.
• Cualquier cadena que no sea la cadena vacía (""), será true
• || y && realizan la conversión booleana internamente pero devuelven el valor
original de los operandos.
 */


/**
 * 
 * Operadores Aritméticos
Serían: +,-,*,/,%,<,>,<=,>=
Cuando se usan estos operadores la coerción que se aplica trata de convertir los
operandos a valores numéricos
 */


/**
 * COERCION EXPLICITA
 * 
 *  indica explícitamente, usando ciertas funciones
    provistas por JavaScript, a qué tipo de dato se desea convertir un valor

 *  Boolean(-0) // false
    Number("10. ") // 10
    Number("") // 0
    String(10) // "10"
 */