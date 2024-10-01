
/*
let brutos = [1000,1300,1500,1700,200,2200,2800,3000];
a-mostrar por consola todos los sueldos uno debajo de otros

b-aplicar el 15 % de retencion a cada sueldo y devolver otro array con los nuevos valores

c-crear un array fiscaAltoy guardar en el todos los sueldos mayores a 1935
*/

let brutos = [1000,1300,1500,1700,200,2200,2800,3000];
/*
for (let i = 0; i < brutos.length; i++) {
    console.log(brutos[i]);
}
    */
/**
 * CON FUNCIONES
 * 
     brutos.function(function(ele){
        console.log(ele);
    }) 
 */


let falto=brutos.filter(function(ele){
    return ele>1935;
});

falto.function(function(){
    console.log();
});
