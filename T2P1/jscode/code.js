window.onload=()=>{
    let formu=document.querySelector("form")
    let email=document.querySelectorAll("input")[8];
    let emailCopy=document.querySelectorAll("input")[9];
   // console.log(email);
    
    email.addEventListener("blur",function () {
        
        emailCopy.value=email.value;

      //  console.log("hola");
        
    })

    /**
     * Cuando un usuario marque alguna afición, esta debe colocarse en el textarea
que hay justo debajo (el campo
afiText). Si el usuario la desmarca, debe
desaparecer. Si hay varias aficiones marcadas, deben aparecer una debajo
de otra.
     */

    let check1=formu.querySelectorAll('input[type="checkbox"]')[0];
    let check2=formu.querySelectorAll('input[type="checkbox"]')[1];
    let check3=formu.querySelectorAll('input[type="checkbox"]')[2];

    //console.log(check);
    
    let area=formu.querySelector('textarea');

    // console.log(check);
    // console.log(area);

    check1.addEventListener("change",function () {
        if (check1.checked) {
            
            area.value+=check1.value+"\n";
        }else{
            //area.value+=check1.value+"\n";
        }
        
    })

    check2.addEventListener("change",function () {
        if (check2.checked) {
            area.value+=check2.value+"\n";
        }else{
            
        }
        
    })
  
    check3.addEventListener("change",function () {
        if (check3.checked) {
            area.value+=check3.value+"\n";
        }else{
            
        }
        
    })

    let nombre=formu.nombre;
    let clave=formu.clave;
    let repite=formu.elements[2];
    let respuesta=formu.respuesta;
    let edad=formu.edad;
    let capt=formu.elements[15];
    let seleccion=document.querySelector("select");
    let radio=document.querySelectorAll("input[type=radio]");
    let aceptar=formu.elements[17];
    let validar=document.querySelector('input[type="submit"]');
    
    console.log(validar);
    
    let ok=true;
    validar.addEventListener("click", function (e) {

        if (nombre.value.trim()=="") {
            let ele=document.createElement("p");
            let text=document.createTextNode("No se pueden quedar vacios los campos obligatorios");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);

            nombre.focus();
            nombre.style.border="2px solid red";

            e.preventDefault();
            return;
        }
        if (clave.value.trim()=="") {
            let ele=document.createElement("p");
            let text=document.createTextNode("No se pueden quedar vacios los campos obligatorios");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);

            clave.focus();
            clave.style.border="2px solid red";

            e.preventDefault();
            return;
        }

        if (repite.value.trim()=="") {
            let ele=document.createElement("p");
            let text=document.createTextNode("No se pueden quedar vacios los campos obligatorios");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);

            repite.focus();
            repite.style.border="2px solid red";

            e.preventDefault();
            return;
        }
        if (respuesta.value.trim()=="") {
            let ele=document.createElement("p");
            let text=document.createTextNode("No se pueden quedar vacios los campos obligatorios");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);

            respuesta.focus();
            respuesta.style.border="2px solid red";

            e.preventDefault();
            return;
        }

        if (edad.value.trim()=="") {
            let ele=document.createElement("p");
            let text=document.createTextNode("No se pueden quedar vacios los campos obligatorios");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);

            edad.focus();
            edad.style.border="2px solid red";

            e.preventDefault();
            return;
        }
        if (capt.value.trim()=="") {
            let ele=document.createElement("p");
            let text=document.createTextNode("No se pueden quedar vacios los campos obligatorios");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);

            capt.focus();
            capt.style.border="2px solid red";

            e.preventDefault();
            return;
        }
        if (clave.length<8) {
            let ele=document.createElement("p");
            let text=document.createTextNode("debe ser de 8 o mas");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);
            
            clave.focus();
            clave.style.border="2px solid red";
            
            /**
             * let er1=/^[]{8}$/
             * 
             */


            e.preventDefault();
            return;
        }

        if (clave.value==nombre.value) {
            let ele=document.createElement("p");
            let text=document.createTextNode("No debe coicider el nombre con la clave");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);
            
            clave.focus();
            clave.style.border="2px solid red";
            
            clave.value="";
         
            e.preventDefault();
            return;
        }

        if (clave.value!=repite.value) {
            let ele=document.createElement("p");
            let text=document.createTextNode("no coicide la clave con repite");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);

            clave.focus();
            clave.style.border="2px solid red";

            clave.value="";
            clave.repite="";
            e.preventDefault();
            return;
        }
        let opt=seleccion.options.selectedIndex;
        if (opt=seleccion.options.selectedIndex==0) {
            let ele=document.createElement("p");
            let text=document.createTextNode("selecciona una pregunta");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);

            

            e.preventDefault();
            return;
        }

        if (respuesta.length<6) {
            let ele=document.createElement("p");
            let text=document.createTextNode("la respuesta debe ser mayor a 6");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);
          
            respuesta.focus();
            respuesta.style.border="2px solid red";

            e.preventDefault();
            return;
        }

        let radiook=false;
        radio.forEach(function (e) {
            if (e.checked==true) {
                radiook=true;
            }
        })
        if (radiook==false) {
            let ele=document.createElement("p");
            let text=document.createTextNode("Seleccione un radio button");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);
           // alert("");
            
            e.preventDefault();
            return;
        }
        
        if (edad.value<3 || edad.value>99) {
            let ele=document.createElement("p");
            let text=document.createTextNode("Edad entre 3 o 99 años");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);
            edad.focus();
            edad.style.border="2px solid red";
            
            e.preventDefault();
            return;
        }

        if (capt.value!="QGPHJD") {

            let ele=document.createElement("p");
            let text=document.createTextNode("NO coicide captcha");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);
            capt.focus();
            capt.style.border="2px solid red";
            
            e.preventDefault();
            return;
        }
        if (aceptar.checked!=true) {
            let ele=document.createElement("p");
            let text=document.createTextNode("Debe aceptar los terminos y condiciones");
            ele.appendChild(text);
            ele.className="errores";
            formu.appendChild(ele);
          //  alert("");
            
            e.preventDefault();
            return;
        }
        
        formu.setAttribute("action", "resultado.html");

    })
    

}