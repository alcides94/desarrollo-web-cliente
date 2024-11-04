window.onload=function(){
    let menu=document.getElementById("menu");
    let list = document.getElementsByTagName("li");
    let sub=document.getElementsByClassName("subcategoria")[0];
    

    console.log(menu);
    console.log(sub);
   let listaAnterior;
   let listaSeg; 
   for (let element of list) {
        
     element.onclick=()=>{
        if (listaAnterior!=undefined){
            listaAnterior.style.setProperty("display","none");
        }else{
            console.log(element);
            listaSeg=element.querySelector("ul");
            console.log(listaSeg);
            listaSeg.style.setProperty("display","block");
        }
    }
    listaAnterior=listaSeg;
   }
    
    
}