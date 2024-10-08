/**
 * Crear una matriz aleatoria NxN 
 * 
 * Funcion que recibe una matriz y devuelve true si hay algun 
 * elemento repetido False si todos son diferentes
 *  
 */

function numRepetido(matriz) {
    let num=[];
    
    matriz.forEach(function(element){
        element.forEach(function(ele){
            if (num.includes(ele)){
                return true;
            }
            num.push(ele);
        });
    });
      return false;
}


let matriz =[];

matriz[0]=[11,12,13,14];
matriz[1]=[25,26,27,28];
matriz[2]=[30,32,33,34];
matriz[3]=[11,12,13,14];

console.log(numRepetido(matriz));

/**Anagrama
 * 
 * Funcion que reciva dos cadenas y devuelva true si son anagrama 
 * o false si no lo son
 * 
 */

function anagrama(cad1,cad2) {
    let c1 = cad1.split("");
    let c2 = [...cad2];
    console.log(c1);
    console.log(c2);

    c1=c1.join(c1.sort);
    c2=c2.join(c2.sort);

    if (c1===c2) {
        return true;
    }
    return false;
}

console.log(anagrama("amor","roma"));