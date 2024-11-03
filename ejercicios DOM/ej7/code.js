/**
 * 7.- Crea una tabla con 4 filas y 4 celdas por fila. Usando atributos de HTML, coloca un
borde y un tamaño de 400x400px y deja el fondo en blanco.
a) Crea el código Javascript necesario para que cada vez que se pulse sobre una
celda, esa celda se vuelva de color negro. Nota: hay que usar funciones
anónimas y this.
b) Mejora el ejercicio anterior para que cada vez que se pulse sobre una celda, esta
cambie a negro o a blanco alternativamente según corresponda.
c) Super mejora: define una lista de 4 colores y ahora cada vez que se pulsa sobre
una celda, esta va cambiando de color siguiendo la lista de colores definida (si
llega al final de la lista, vuelve al principio).
 */

window.onload=function (){
    let i=0;    
    let celdas = document.getElementsByTagName("td");

    let colores=["black","yellow", "blue","green"];
/*
    for (const elemt of celdas) {
        elemt.onclick=function () {
            if (elemt.bgColor=="black") {
                elemt.bgColor="white";
            }else{
                elemt.bgColor="black";
            }
        }
    }
*/    
    for (const elemt of celdas) {
        elemt.onclick=function () {
            console.log(elemt.bgColor);
            
            if (elemt.bgColor=="") {
                elemt.bgColor=colores[i];
            }else if(elemt.bgColor!=""){
                
                elemt.bgColor=colores[i];
            }
            i++;
            if (i >= colores.length) i=0;
        }
    }

}