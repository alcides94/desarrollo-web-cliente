/**
 * 
Ejercicio 8: Crea una función llamada countBy la cual recibirá dos números enteros
positivos: X e Y. Esta función debe devolver lo siguiente:
• Si alguno de los números es negativo devolverá un array vacío.
• Sino, devolverá con array con los Y primeros múltiplos de X empezando por el
1 (incluido)
 */


function countBy(x,y){
let array=[];
    if (x<0 || y<0){
        return array;
    }else{
       /* let i=1;
        let j=0;
        while (i<=y){
            array[j] = x*i;
            i++;
            j++;
        }
            */

        for (let i=1; i<=y;i++){
            array.push(i*x);
        }
        return array;
    }
    
}

function llamar(){
    let num1=parseInt(prompt("INGRESE NUMERO 1"));
    let num2=parseInt(prompt("INGRESE NUMERO 2"));

    console.log(countBy(num1,num2));
}