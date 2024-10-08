/*



*/

let array = [1,2,3,4,5,6];

console.log(array);

function valores (array){
    let array2 = [];
    let num1;
    let num2;
    for (let i=0; i<=array.length-1; i++) {
        num1=array[i-1];
        num2=array[i];
        array2[i]=num1+num2;
        console.log(array2[i]);
    }
}

console.log(valores);
