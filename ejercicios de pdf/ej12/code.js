/**
 * Ejercicio 12: Crea un script que filtre un alista de nombres y devuelva otra lista solo
con los que son amigos tuyos.
Como eres una persona muy “especial”, tú solo eres amigo/a de aquellas personas cuyo
nombre se componga exactamente de 4 letras.
Ejemplo:
Entrada={Luis", "Estela", "Ángel", "Enya", "Jose Antonio"}
Salida = {"Luis", "Enya"}
Entrada = {"Joaquín", "Manuel", "Carlos"}
Salida = {}
Suponemos que los array son correctos y tienen nombres.
Importante: hay que respetar el orden de los nombres en la salida
 * 
 * 
 */

function filtroAmigos (entrada){

    let salida=entrada.filter(function(ele){
        return ele.length==4;
    });

    return salida;

}




let entrada=["Ana", "Pero", "Lope", "Apaziño"];

console.log(filtroAmigos(entrada));
