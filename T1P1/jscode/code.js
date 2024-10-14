function ejercicio1(){

    let dolares;
    do {
        dolares=parseInt(prompt("Ingrese la cantidad de dolares a convertir"));
    } while (dolares<0||isNaN(dolares));
    

    let euros = dolares*1.0965;
    
    alert("la cantidad en esuros es "+ euros);
}

function ejercicio2(){
    let susp=0;
    let aprob=0;
    let not=0;
    let sobre=0;
    let nota;
    for (let i = 1; i <= 10; i++) {
        do {
            nota = parseInt(prompt("Ingresa la nota: "+i));
        } while (nota<0 || nota>10 || isNaN(nota));
        
        if (nota<5){
            susp++;
        } else if (nota==5 || nota ==6) {
            aprob++;
        }else if(nota==7 || nota ==8) {
            not++;
        }else {
            sobre++;
        }
    }
    alert ("Suspensos: "+susp+ " Aprobados: "+aprob+" Notables: "+not+ " Sobresalientes: "+sobre);
}

function ejercicio3(){
    // A
    let array=[];
    let num;
    do {
        num = parseInt(prompt("Ingresa un numero: "));
        if (num > 0) {
            array.push(num)
        };
        //Si meto una cadena cuando pides numero en el apartado A, el programa no funciona como se pide. Debes controlar eso -> es con el -> isNaN
    } while (num > 0 || isNaN(num)); // 
    // B 
    let mostrar=array.join(" ")
    console.log(mostrar);
    // C 
    let suma=0;

    array.forEach(function(ele){
        suma+=ele;
    });
    console.log(suma);
    // D 

    let num1;
    let num2;
    let salir=false;
    do {
        /**
         * D) - TRES variables para hacer un DO..WHILE que pida un numero positivo??? Por qué no usas parseInt??
         * 
         * Aqui controlo que no ingrese numeros decimales
         * 
         */
        num1=prompt("Ingrese un numero entero POSITIVO");
        num2=Math.floor(num1);

        if ((num1==num2)&&num1>0)
            salir=true;

    } while (!salir);


    // E 

    /**
     * 
     * E) Líneas 80 y 83: repites el mismo código en ambas ramas de la estructura IF..ELSE Eso significa que ese código debe ir fuera de la estructura (y te ahorras el ELSE)
     * 
     */
    let primera=null;
    let ultima=0;
    let contador=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]==num1){
            if (primera == null){
                primera=i;
            
            // aca me debo ahorrar estas lineas
                ultima=i;
            }else{
                ultima=i;
            }
        } 
    }
    if (primera!=null){
        console.log("Primera aparicion: "+primera);
        console.log("Ultima aparicion: "+ultima);
    }else{
        console.log("El numero no esta en la lista");
    }
}

function ejercicio4(){
    //let arrayNuevo=new Array(3);
    let matriz=[];
    matriz[0]=new Array(3);
    matriz[1]=new Array(3);
    matriz[2]=new Array(3);

    
    /*matriz.forEach(function(elemento){
        elemento.forEach(function(ele){
            ele=1;
        });
    });*/
    
    //A
    let suma1=0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j]=(parseInt(Math.random()*(1+19)+2));; 
        }   
        
    }
    console.log(matriz);
    //B
    /**
     * 
     * (0,75 punto) Muestra por consola el contenido de matriz respetando el número
    de filas y columnas. Es decir, todos los valores de una fila deben salir en
    horizontal separados por espacios y debajo, la siguiente fila. Además, todos
    los valores deben ocupar 2 espacios. Si un valor ocupa solo un espacio, ponle
    un 0 delante.

     * B) * No muestras la matriz como se pide- Aparte, la función MAP devuelve un array.
     *  SI no vas a usar ese array, usa FOREACH, no MAP
     *
     * //CORREGIDO
     */
    let numeros;
    matriz.forEach(function(elemento){
        numeros=" ";
        elemento.forEach(function(ele){
            if (ele<10){
                ele="0"+ele;
            }
            numeros=numeros+" "+ele;    
        })
        
        console.log (numeros);
    })


    //C
    
    let suma=0;
    matriz.forEach(function(elemento){
        elemento.forEach(function(ele){
            suma+=ele;
        })
    })
    console.log ("La suma es: "+suma);
    
    //D

    /**
     * 
     * d) (1 punto) Crea otro array bidimensional llamada ‘copia’, A continuación, copia
todos los valores de matriz a ‘copia’ y cambiando los números mayores a 10
por un 9. Muestra ‘copia’ por consola siguiendo las reglas del apartado b. Nota:
no uses la función slice, ni concat, ni join, ni spread operator... para crear la copia. Usa bucles.
Quiero evaluarte competencias de bucles aquí.
     * 
     * D) * No haces la copia de forma correcta (no cambias valores)
     * 
     */

    let copia=matriz.map(function(elemento){
        let copia2=elemento.map(function(ele){
            if (ele>10){
                aux=9;
            }else{
                aux=ele;
            }
            return aux;
        })
        return copia2;
    });
    console.log (copia);


    let numeros2;
    copia.forEach(function(elemento){
        numeros2=" ";
        elemento.forEach(function(ele){
            if (ele<10){
                ele="0"+ele;
            }
            numeros2=numeros2+" "+ele;    
        })
        
        console.log (numeros2);
    })

    //E
    
    /**
     * 
     * e) (1,25 punto) Pide un valor entre 1 y 3 al usuario y llámalo ‘num’. Intercambia la
fila de matriz indicada por ‘num’ con la fila de copia indicada por ‘num’. Nota:
En este apartado sí puedes usar cualquier herramienta del lenguaje.

     * 
     */
    let nume;
    do {
        nume=parseInt(prompt("ingrese la fila a intercambiar"));
    } while (isNaN(nume)|| nume>3 ||nume<1);

    let auxi =[];
    auxi=matriz[nume];
    matriz[nume]=[...copia[nume]];
    copia[nume]=[...auxi];


    console.log(matriz);
    console.log(copia);
}