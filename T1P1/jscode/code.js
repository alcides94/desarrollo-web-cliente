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
    } while (num > 0);
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
        num1=prompt("Ingrese un numero entero POSITIVO");
        num2=Math.floor(num1);

        if ((num1==num2)&&num1>0)
            salir=true;

    } while (!salir);


    // E 
    let primera=null;
    let ultima=0;
    let contador=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]==num1){
            if (primera == null){
                primera=i;
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

    
    let mostr=matriz.map(function(elemento){
        elemento.map(function(ele){
            if (ele<10){
                return ele="0"+ele;
            }else {
            return ele;
            }
        })
        return elemento;
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
    let copia=matriz.map(function(elemento){
        elemento.map(function(ele){
            if (ele>10){
                aux=9;
            }else{
                aux=ele;
            }
            return aux;
        })
        return elemento;
    });
    console.log (copia);



}