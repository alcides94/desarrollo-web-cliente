

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