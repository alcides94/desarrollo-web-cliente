    // Ejercicio 6: Crea un script que pida al usuario un numero entero positivo N mayor a 0.
    // Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a
    // pedir.
    // A continuación debe realizar lo siguiente:
    // a) Calcular los divisores del numero N y mostrarlos.
    // b) Calcular la suma de los cuadrados de los divisores obtenidos en el paso anterior
    // y mostrarla.
    // c) Indicar si esa suma es un cuadrado o no (con una frase por pantalla)
    // Nota: NO se pueden usar arrays en este ejercicio.
    
    let num;
    do {
        num=parseInt (prompt("Ingrese un valor positivo: "));    
    } while (isNaN(num)|| num < 1);

    // document.write(typeof(num));
    
    let suma=0;

    for (let i = 1; i <= num; i++) {
        
        if(num%i==0) {
            console.log(i);
            suma=suma + (i*i);
            //console.log (suma);

        }

    }
    console.log(suma);

/**
 *   let ok=false;

    let j=0;
    while (j < suma){
        j++;
        if ((j*j)==suma){
            ok =true;
        }

    }

    if(ok){
        console.log("el numero es cudrado perfecto");
    }else{
        console.log("el numero NO es cuadrado perfecto");
    }
 * 
 * 
 * 
 */

    let raiz=Math.sqrt(suma);


    if (raiz === Math.floor(raiz)) {
        console.log("La suma es un cuadrado perfecto.");
    } else {
        console.log("La suma NO es un cuadrado perfecto.");
    }