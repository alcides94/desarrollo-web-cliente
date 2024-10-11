/**
 * Ejercicio 10: Escriba una función que reciba dos arrays y devuelva un nuevo array con
los elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo
array). El orden debe ser: primero los que están en el primer array y luego los que están
en el segundo.
Ejemplos:
[1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]
["Ray", "Jose", "Dani"] y ["Dani", "Jose", "Ivan"]) ==> ["Ray","Ivan"]
[77, "ciao"] y [78, 42, "ciao"]) ==> [77, 78, 42]
[1, 2, 3, 3] y [3, 2, 1, 4, 5, 4]) ==> [4,5]
 *  
 */
function listaFiltrada(array1,array2) {
    
    let concatenado=array1.concat(array2); 

    let filtro1 = array1.filter(function(elemento){
        return (concatenado.filter(function(ele){
            return (ele===elemento)
        }).length===1);
    });

    let filtro2 = array2.filter(function(elemento){
        return (concatenado.filter(function(ele){
            return (ele===elemento)
        }).length===1);
    });

    return filtro1.concat(filtro2);

}



let array1=[1,2,3,4,5,6,7,8,9];
let array2=[1,2,3,4,5,16,17,18,19];
let n=5;

console.log(listaFiltrada(array1,array2));