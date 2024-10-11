/**
 * 
 * Ejercicio 7: Crea una función que reciba un array de valores enteros (positivos y
negativos), y devuelva otro array con la suma parcial de cada elemento del array que se
pasa como parámetro.
Nota: La suma parcial de un elemento del array será la suma de ese elemento y todos los anteriores a él.
Ej: Para el array [1,2,3,4,5,6], el array resultante será [1,3,6,10,15,21]
 * 
 * 
 */

function sumaArray(array){

    let array2=[];
    let suma=0;
    for (let i = 0; i < array.length; i++) {
        
        suma=array[i]+suma;
        array2.push(suma);
    }
    return (array2);
    //122
}

let array=new Array(parseInt(prompt("ingresa el tamaño del array")));

for (let i = 0; i < array.length; i++) {
    array[i]=parseInt(prompt("ingrese un numero"));   
}

console.log(array);
console.log(sumaArray(array));



