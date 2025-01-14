/**
 *
 4.- Crea un script que valide un DNI español usando expresiones regulares. El DNI está
compuesto de 8 dígitos entre el cero y el nueve y una letra mayúscula.
 */

window.onload=()=>{
    let dni=document.getElementsByTagName("input")[0];
    let validar=document.getElementsByTagName("input")[1];

    validar.addEventListener("click", function () {
        let er=/^\d{8}[A-Z]$/;
        let comprobacion=er.test(dni.value);
        if (comprobacion) {
            alert("todo ok")
        }else{
            alert("NO esta todo ok");
        }
    
    })

}