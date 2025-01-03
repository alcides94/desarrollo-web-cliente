window.onload=()=>{

    let formu = document.forms[0];

    let check=formu.querySelectorAll('input[type="checkbox"]');

    let boton=formu.querySelector('input[type="button"]');

    let area=formu.querySelector('textarea');

   // console.log(check);
   // console.log(area);

    boton.onclick=()=>{
       area.value="";
        for (const box of check) {
            //console.log(box);

            let ok = box.checked;
            console.log(ok);
            
            if (ok) {
                console.log(box);
                
                area.value=area.value+" "+box.value;
            }
        }
    }
    

}