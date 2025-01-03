
/** */
/*let num=5;
do {
    num;
} while (isNaN(num));

let array=[];
let array2=[];

let matriz=[array,array2];
for (let i = 1; i < matriz.length; i++) {
    for (let j = 1; j < matriz[i].length; j++) {
        matriz [i][j]= 
        
    }
    
}*/


/**RESULTADO FINAL */

let num;
do {
    num=prompt("Ingrese");
} while (num<2||isNaN(num));

let matriz=[];
let fila = [];

for (let i = 1; i <= num*num; i++) {
    fila.push(i*num);
    if (fila.length==num) {

        matriz.push(fila);
        fila=[];
    }
   
}


for (let i = 0; i < matriz.length; i++) {
    
    let arr=[];
    matriz.forEach((ele)=>{
        arr.push(ele[i]);
    })
    console.log(arr);
    
}

