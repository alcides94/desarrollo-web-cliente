//window.onload=()=>{

/*
    console.log("pidiendo cafe.....");

    setTimeout(()=>{
        console.log("cafe listo!!!");
        
    },3000)
    
    console.log("le doy cambio a mateo.....");
    
    console.log("le vendo tabaco a la ambulancia gitana");
*/ 

//}

let pedido = new Promise(function (resolve,reject) {
    
    
    setTimeout(()=>{
       if(parseInt(Math.random()*3+1)==3){
        reject("Su pedido ha sido cancelado")
        }

        resolve("pedido entregado")

    },3000)

})

console.log("pidiendo cafe....");


pedido
    .then(function (respuesta) {
        console.log(respuesta);
        
    })
    .catch(function (error) {
        console.log(error);
        
    })

console.log("le doy cambio a mateo......");
console.log("le doy tabaco a la ambulancia gitana");
