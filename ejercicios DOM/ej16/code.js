let timer;
window.onload=function () {
    let meter = document.getElementsByTagName("meter")[0];
    let boton = document.getElementsByTagName("button")[0];
   
    
    boton.onclick=function(){
        
        timer=setInterval(function(){
            if(parseInt(meter.value)+1==meter.max){
                boton.disabled=false;
                console.log(boton);
                
                clearInterval(timer);
               // meter.value=0;
            }
            else{
                meter.value+=1;
                boton.disabled=true;
            }
                

            
        },100);
    }

   
    
}