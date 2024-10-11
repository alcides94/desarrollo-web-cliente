/*
Ejercicio 9: Crea un script que pida al usuario un numero entero positivo N mayor a 2.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a
pedir.
A continuación debe crearse una matriz NxN rellena con los resultados de la tabla de
multiplicar de N (empezando en 1). Finalmente, muestra por consola la matriz “en
forma de matriz”
Ej: Para el número 3, el programa debe mostrar
03 06 09
12 15 18
21 24 27
*/


let num=3;

do{
    num = parseInt(prompt("ingrese un numero"));

}while(num<3 || isNaN(num));



let array=[];

let n=1;
for (let i = 0; i < num; i++) {
    let aux=[];
    for (let j = 0; j < num; j++) {
        aux[j]=n*num;
        n++;
    }
    array.push(aux);    
}



for (let i = 0; i < array.length; i++) {
    // Imprime cada fila como una cadena con valores separados por espacios
    console.log(array[i].join(" "));  
}


//console.log(array);