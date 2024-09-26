let colores=['grey', 'red','skyblue','green','yellow','black'];

function e15(palabras){
    let resultado=[];
    let resultado2=[];
    for (let i=0; i<=palabras.length;i++){
        if (palabras [i]==colores[i]){
            resultado[i]=palabras[i];

        }
        else{
            resultado2[i]=palabras[i];

        }


    }
    let resul=resultado.concat(resultado2);
    return resul;

}

let res = e15 (['kk','green',2,6,'blue','hola']);