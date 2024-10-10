
let array=new Array(6);

for (let i = 0; i < array.length; i++) {
    array[i]=parseInt(prompt("ingrese un numero"));   
}

console.log(array);

function sumaArray(array){

    let array2=[];
    array2[0]=0;
    let suma=0;
    for (let i = 0; i < array.length; i++) {
        let num=array[i];
        suma=num+suma;
        array2[i]=suma;
    }
    console.log(array2);
    //122
}

let prueba = sumaArray(array);

