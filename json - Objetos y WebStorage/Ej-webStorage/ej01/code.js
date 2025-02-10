window.onload=()=>{

    let formu=document.querySelector("form");
    let campo1=document.querySelector("#nombre");
    let campo2=document.querySelector("#clave");
    let btn=document.querySelector("input[type='submit']");

    //let link=document.querySelector("a");

    console.log(btn);
    
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.setItem('nombre', campo1.value);
        localStorage.setItem('clave', campo2.value);
        
        if ((campo1.value!="")&&(campo2.value!="")){
            formu.setAttribute("action", "datos.html");
            formu.submit();
        }else{
            let info=document.createElement("p");
            document.body.appendChild(info);
            info.innerText="Ingrese los valores";

        }
            
    })


}