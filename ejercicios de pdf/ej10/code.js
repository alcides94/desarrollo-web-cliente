//
    

// }

function listaFiltrada(array1,array2) {
    
    let concatenado=array1.concat(array2); 

    let filtro1 = array1.filter(function(elemento){
        return (concatenado.filter(function(ele){
            return (ele===elemento)
        }).length===1);
    });

    let filtro2 = array2.filter(function(elemento){
        return (concatenado.filter(function(ele){
            return (ele===elemento)
        }).length===1);
    });

    return filtro1.concat(filtro2);

}



let array1=[1,2,3,4,5,6,7,8,9];
let array2=[1,2,3,4,5,16,17,18,19];
let n=5;

console.log(listaFiltrada(array1,array2));