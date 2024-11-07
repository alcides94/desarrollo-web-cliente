/*15.- Crear el mismo menú que el ejercicio anterior pero en horizontal. Ahora, al pasar el
ratón por encima de cada apartado, aparece el bloque de subapartados correspendiente.
A tener en cuenta:
• El menú debe tener una maquetación en CSS.
• El bloque de subapartados quedará por encima del resto de elementos que tenga
debajo (pej, sections, articles...), no desplazará al resto de elementos.
• Un bloque de subapartados desaparecerá cuando se pase por encima de otro
apartado.
*/

window.onload=function(){
    //let menu=document.getElementById("menu");
    let list = document.getElementById("menu");
    let sublista=document.getElementsByClassName("subcategoria");
    
    
    console.log(list);
    
    let listaMenu=list.children;
    console.log(listaMenu);
    let aux;
    for (let li of listaMenu) {
        
        li.onmouseover=()=>{
            let lissss=document.querySelectorAll('.subcategoria');
            lissss.forEach(element => {
                element.style.setProperty("display","none");
            });
            sub=li.children[0]; 
            console.log(sub);
            sub.style.setProperty("display","block");
            console.log(sub);
            aux=sub;
        }
        
    }
    

}