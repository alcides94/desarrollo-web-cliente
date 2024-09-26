let lista = [1,2,3,4,5];

let otra = ['uno','dos','tres','cuatro',];

let res = lista.concat(6,7,8,9);

function mayorEdad(edad){
    return edad>18;
}

//let ok = res.some(mayorEdad);
/**funcion que te indica si alguno cumple con la condicion  */
/*let ok = res.some(function(edad){
    return edad==8;
});*/

/**EN funcion flecha */

let ok =res.some((edad)=>edad>8);

/**FOREACH */
/*
res.forEach(function(ele){

    //console.log(ele*2);
    if (ele%2==0){
        console.log("Es par")
    }
    else{
        console.log("Es IMpar")
    }
});
*/

/**function MAP se crea otro array en base de otro*//*
let otro = res.map((ele)=>{
    if (ele%2!==0)
        return ele;
    else    
        return "dakota";
});*/
/**function MAP */
let otro = res.map((ele,pos)=>{
    if (ele%2!==0)
        return ele;
    else    
        return pos;
});

//SPREAD OPERATOR ACELERA MI TRABAJO
let lista2=[1,2,3,4,5];
let otra2 =[...lista2]; //los puntos se llama spread y crea una copia 
otra2[0]=67;


/**copida de una array a una variable */
let a,b,c, otros;

let lista3 =[23,56,78,89,90,];

[a,b,c,...otros] = lista3;
console.log(a);
console.log(b);
console.log(c);
console.log(otros);

/**INTERCAMBIAR NUMEROS EN UNA LISTA */

[lista3[0],lista3[3]]=[lista3[3],lista3[0]];
console.log(lista3)

/**CONSOLE LOG */

console.log(lista2)

console.log(otro);

console.log(ok);

console.log(res);
