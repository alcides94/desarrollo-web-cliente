/**
 * 
 * 14.- Crear un menú vertical con efecto acordeón usando los siguientes apartados:
• Inicio
◦ Portada.
◦ Acerca de mi.
◦ Mis fotos.
• Proyectos
◦ Web Apps.
◦ Mobile Apps.
◦ Juegos.
• Portfolio
◦ Páginas webs.
◦ Softwar
 * A tener en cuenta:
• El menú debe tener una maquetación en CSS.
• Los subapartados permanecen ocultos hasta que se pulsa sobre el apartado
correspondiente.
• Al abrir un bloque de subapartados, se cierran los demás
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
        
        li.onclick=()=>{
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