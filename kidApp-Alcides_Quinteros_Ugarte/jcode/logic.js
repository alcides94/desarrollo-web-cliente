let fondos = ["red","green","blue","yellow","orange","pink","lightblue","lightgreen"];
let ccolores = ["#00FF48","#D4478E","#FFD100","#0070FF","#7AAA83","#385B66","#ED91BF","#95AD95"];


window.onload=()=>{

    let fondo=document.getElementsByTagName("main")[0];
    console.log(fondo);
    i=0;
    fondo.onmousedown=(function(aqui){      

        fondo.style.setProperty("background-color",fondos[i]);
        i++;
        
        //recibe aqui y nos almacena en una constante la posicion x e y
        let posicionX=parseInt(aqui.clientX);
        let posicionY=parseInt(aqui.clientY);

        console.log(posicionX);
        console.log(posicionY);
        
        /** sacamos el anchi y el alto de la pantalla */

        let ancho=(parseInt(screen.width)*10)/100;
        let alto=(parseInt(screen.height)*10)/100;

        console.log(ancho);
        console.log(alto);
        
        /**-----sacamos posicion final----- */

        let posFinalY=posicionY-(alto/2);
        let posFinalX=posicionX-(ancho/2);
        /**se crea un array para determinar la forma y asi asignar  */
        let forma=["cuadrado","circulo"];

        let formaFinal=(parseInt(Math.random()*(1+1)+0))
        console.log(formaFinal);

        let colorFigura=(parseInt(Math.random()*(1+7)+0))
        console.log(colorFigura);
        
        let figura=document.createElement("div");
        figura.setAttribute("class",forma[formaFinal]);
        figura.style.setProperty("left",posFinalX+"px");
        figura.style.setProperty("top",posFinalY+"px");
        figura.style.setProperty("width",ancho+"px");
        figura.style.setProperty("height",alto+"px");
        figura.style.setProperty("background-color",ccolores[colorFigura]);
        
        console.log(figura);
        
        fondo.appendChild(figura);

        let audios=document.createElement("audio");
        audios.display=true;
        audios.autoplay=true;
        audios.setAttribute("src","./audio/ja.mp3");
        console.log(audios);
        fondo.appendChild(audios);

        //funcion que me dice donde esta el maldito cursor
        fondo.onmousemove=(pos)=>{
            let posX=parseInt(pos.clientX);
            let posY=parseInt(pos.clientY);
            let posFinY=posY-(alto/2);
            let posFinX=posX-(ancho/2);
            figura.style.setProperty("left",posFinX+"px");
            figura.style.setProperty("top",posFinY+"px");
        }
        
    });

    //Eliminar figuras


    fondo.onmouseup=()=>{
        let figuraActual =document.querySelector("div");
        let audioActual =document.querySelector("audio");
        console.log(figuraActual);
        
        fondo.removeChild(figuraActual);
        fondo.removeChild(audioActual);
        console.log("destruimos la figura");
        console.log("destruimos la audios");
        
    }


    /**para MOVILES es con los eventos touch */

    fondo.ontouchstart=(function(aqui){

       // let figuraAnterior = document


        fondo.style.setProperty("background-color",fondos[i]);
        i++;
        
        //almacena se almace en touch la primera posicion sacada a traves de touches
        //osea touchues[0] es con un solo dedo


        let touch = aqui.touches[0];

        //recibe aqui y nos almacena en una constante la posicion x e y
        let posicionX=parseInt(touch.clientX);
        let posicionY=parseInt(touch.clientY);

        console.log(posicionX);
        console.log(posicionY);
        
        /** sacamos el anchi y el alto de la pantalla */

        let ancho=(parseInt(screen.width)*10)/100;
        let alto=(parseInt(screen.height)*10)/100;

        console.log(ancho);
        console.log(alto);
        
        /**-----sacamos posicion final----- */

        let posFinalY=posicionY-(alto/2);
        let posFinalX=posicionX-(ancho/2);
        /**se crea un array para determinar la forma y asi asignar  */
        let forma=["cuadrado","circulo"];

        let formaFinal=(parseInt(Math.random()*(1+1)+0))
        console.log(formaFinal);

        let colorFigura=(parseInt(Math.random()*(1+7)+0))
        console.log(colorFigura);
        
        let figura=document.createElement("div");
        figura.setAttribute("class",forma[formaFinal]);
        figura.style.setProperty("left",posFinalX+"px");
        figura.style.setProperty("top",posFinalY+"px");
        figura.style.setProperty("width",ancho+"px");
        figura.style.setProperty("height",alto+"px");
        figura.style.setProperty("background-color",ccolores[colorFigura]);
        
        console.log(figura);
        
        fondo.appendChild(figura);
        let audios=document.createElement("audio");
        audios.display=true;
        audios.autoplay=true;
        audios.setAttribute("src","./audio/ja.mp3");
        console.log(audios);
        fondo.appendChild(audios);

        //funcion que me dice donde esta el maldito cursor
        fondo.ontouchmove=(pos)=>{

            let touch = pos.touches[0];

            let posX=parseInt(touch.clientX);
            let posY=parseInt(touch.clientY);
            let posFinY=posY-(alto/2);
            let posFinX=posX-(ancho/2);
            figura.style.setProperty("left",posFinX+"px");
            figura.style.setProperty("top",posFinY+"px");
        }
        
    });

    //Eliminar figuras


    fondo.ontouchend=()=>{
        let figuraActual =document.querySelector("div");
        let audioActual =document.querySelector("audio");
        console.log(figuraActual);
        
        fondo.removeChild(figuraActual);
        fondo.removeChild(audioActual);
        console.log("destruimos la figura");
        console.log("destruimos la audios");

        
    }



}