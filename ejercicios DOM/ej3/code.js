// 3.- Crea un DIV con el número 0 en su interior. Bajo el DIV, coloca dos botones: uno
// para sumar y otro para restar.
// • Si se pulsa el botón para sumar, se incrementa en uno el número que hay en el
// DIV en ese momento.
// • Si se pulsa el botón restar, se decrementa en uno el número que hay en el DIV en
// ese momento.

window.onload=function () {
    
    let num = document.getElementsByTagName("div")[0];

    let btnsumar=document.getElementsByTagName("button")[0];
    let btnrestar=document.getElementsByTagName("button")[1];
    console.log(btnsumar);    

    btnsumar.onclick=()=>{
        let contenido=parseInt(num.innerText);
        contenido++;
        num.innerText=contenido;
    }
    btnrestar.onclick=()=>{
        let contenido=parseInt(num.innerText);
        contenido--;
        num.innerText=contenido;
    }
}
    