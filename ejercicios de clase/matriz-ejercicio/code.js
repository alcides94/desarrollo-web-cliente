function creacion() {
    let n=prompt("Ingrese el tañmaño de la matriz");
    
    let matriz=[];

    for (let i = 0; i < n; i++) {
        let fila=[];
            for (let j = 0; j < n; j++) {
                fila[j]= Math.random(((n*2) - n)+1);
            }
        matriz.push(fila);
        console.log(fila)
    }

}


