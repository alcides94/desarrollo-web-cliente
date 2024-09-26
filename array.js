let lista = [1,2,3,4,5];

let otra = ['uno','dos','tres','cuatro',];

let res = lista.concat(6,7,8,9);

/**concatena dos variables */
res = lista.concat(otra);

/*INGRESA EN LA ULTIMA POSICION*/
res.push("Flipao");

/*INGRESA EN LA PRIMERA POSICION DESWPLAZANDO LAS OTRAS*/
res.unshift("adelante")

/*sacar o retirar el ultimo luegar*/
let ultimo=res.pop();
/*sacar o retirar el primero luegar*/
ultimo = res.shift();

/* devuelve el array ordenado alreves*/
res.reverse();
/**agarra un array y los uno con lo que le diga en este acso un - */
let salida = res.join("-");

console.log(salida);
console.log(res);