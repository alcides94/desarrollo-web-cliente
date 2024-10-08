let tam;


do {
    tam=parseInt(prompt("ingrese el tamaño del array: "));
} while (isNaN(tam)||tam<3);

let matriz=new Array(tam);


for (let i = 0; i < matriz.length; i++) {
    let aux=[];
    for (let j = 0; j < tam; j++) {
        aux.push(parseInt(Math.random()*(tam+1)+tam));       
    }
    matriz.push(aux);
}

console.log(matriz

);

/**apartado B sacar el mayor
 * e imprimirlo
 */


/** funcion fizz buzz */