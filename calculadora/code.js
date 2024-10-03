function recogerNumero(ele){
    let n;
    do {
        n = prompt(ele);
    } while (isNaN(n));    
    
    return parseInt(n);
}

function sumar(n, n2){
    return n+n2;
}

function restar(n, n2){
    return n-n2;
}
function multiplicar(n, n2){
    return n*n2;
}
function dividir(n, n2){
    return n/n2;
}

function recogerOperacion(n,n2){

    let operacion=prompt("Que desea hacer: ");

    switch (operacion) {
        case "sumar":
            return sumar(n,n2);
            break;
        case "restar":
            return restar(n,n2);
            break;
        case "multiplicar":
            return multiplicar(n,n2);
            break;
        case "dividir":
            return dividir(n,n2);
            break;
        default:
            alert("ingrese bien lo que desea realizar");
            break;
    }
}

function principal(){
    let n1=recogerNumero("Ingrese numero 1");
    let n2=recogerNumero("Ingrese numero 2");
    let opera=recogerOperacion(n1,n2);

    alert(opera);
}

