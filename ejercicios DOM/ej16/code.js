let timer;
window.onload=function () {
    let meter = document.getElementsByTagName("meter")[0];
    let boton = document.getElementsByTagName("button")[0];
    
    boton.onclick=function(){
        timer=setInterval(function(){
            if(parseInt(meter.value)+1==meter.max){
                this.disabled=true;
                clearInterval(timer);
            }
            //console.log("hola")
                meter.value+=1;
            
        },100);
    }
    
}