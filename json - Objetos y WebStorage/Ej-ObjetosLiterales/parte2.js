window.onload=()=>{

let tutor ={
    nombre:"Tomas",
    edad:12,
    dni:"12345678F",
    titulo:"Electricista",
    mostrar:function () {
        return (this.nombre+"\n"+this.edad+"\n"+this.dni+"\n"+this.titulo+"\n");
    },
    cambiarNombre:function(nombreNuevo){
        this.nombre=nombreNuevo;
    }
}

let asignaturas=[
    {
        nombre:"JS",
        curso:"DAW",
        horas:200,
        mostrar:function(){
            return (this.nombre+"\n"+this.curso+"\n"+this.horas);
        },
        cambiarHoras:function(horaNueva){
            this.horas=horaNueva;
        } 
    },
    {
        nombre:"Diseño",
        curso:"DAW",
        horas:100,
        mostrar: function(){
            return (this.nombre+"\n"+this.curso+"\n"+this.horas);
        },
        cambiarHoras:function(horaNueva){
            this.horas=horaNueva;
        }  
    },

    {
        nombre:"PHP",
        curso:"DAW",
        horas:200,
        mostrar: function(){
            return (this.nombre+"\n"+this.curso+"\n"+this.horas);
        },
        cambiarHoras: function(horaNueva){
            this.horas=horaNueva;
        } 
    },
    {
        nombre:"Despliegue",
        curso:"DAW",
        horas:150,
        mostrar: function(){
            return (this.nombre+"\n"+this.curso+"\n"+this.horas);
        },
        cambiarHoras: function(horaNueva){
            this.horas=horaNueva;
        } 
    }

]
/**
 * //O DENTRO DE LA FUNCION DECLARAMOS UNA PROPIEDAD MOSTRAR 
 * 
 * mostrar: function() {
                return mostrarAsignatura(this);  // Llamamos a la función externa
            },

Y FUERA 
 * function mostrarAsignatura(asignatura) {
        return `Asignatura: ${asignatura.nombre}\nCurso: ${asignatura.curso}\nHoras: ${asignatura.horas}`;
    }
 */


let alumno={
    nombre:"Ariel Lope",
    edad:32,
    ciclo:"DAW",
    curso:2,
    tutor: tutor,
    listaAsignaturas:[
        asignaturas[0],
        asignaturas[1],
        asignaturas[2]
    ],
    notas:[[7,7,8],[8,9,2],[1,5,4]],

    calcularMedia:function () {
        let sumaTotal = 0;
        let cantidadNotas = 0;
    
        this.notas.forEach(notasAsignatura => {
            notasAsignatura.forEach(nota => {
                sumaTotal += nota;
                cantidadNotas++;
            });
        });
        let resultado="";
        if ((cantidadNotas > 0)) {
            resultado=(sumaTotal / cantidadNotas).toFixed(2);
        }else{
            resultado="Sin notas";
        }
        return  resultado;
    },
    mediasAsignatura: function() {
        let resultado = "";
    
        for (let i = 0; i < this.listaAsignaturas.length; i++) {
            let suma = 0;
            let cantidad = this.notas[i].length;
    
            for (let j = 0; j < cantidad; j++) {
                suma += this.notas[i][j];
            }
            let media=0;
            if (cantidad>0){
                 media= (suma / cantidad).toFixed(2) ;
            }else{
                media ="sin notas";
            }

            resultado += "Asignatura: "+this.listaAsignaturas[i].nombre+"- Media : " + media+"\n";
        }
    
        return resultado;
    }

}


let texto="";
for (const alu in alumno) {
    if (alu=="tutor") {
        /*for (const pro in alumno[alu]) {
            if (pro=="nombre") {
                console.log(" Profesor= "+ alumno[alu][pro]);       
                texto+=" Profesor= "+ alumno[alu][pro] +"\n";
            }
            
        }*/

            texto+="Profesor= "+ alumno[alu].nombre +"\n";
        
    }else if (alu=="listaAsignaturas"){
        //FORMA CASERA COMO REALICE EL RECORRIDO DE UN ARRAY DENTRO DEL OBJETO
        //let asignatura_individual=alumno[alu];
        //console.log(Object.values(asignatura_individual));   
        /*for (const asig in asignatura_individual) {
            //console.log(asig +" "+ asignatura_individual[asig]);
            for (const asig2 in asignatura_individual[asig]) {
                if (asig2=="nombre") {
                    console.log("Materia= "+ asignatura_individual[asig][asig2]);
                    texto+="Materia= "+ asignatura_individual[asig][asig2] +"\n";
                }
                
            }
        }*/
        alumno[alu].forEach((asignatura,index)=>{
            texto+= "Asignatura= "+ asignatura.nombre+"\n";
            
            alumno.notas[index].forEach((nota)=>{
                texto+= " -> Nota= "+nota+"\n";
            })

        })

    }
    else if (alu!="notas" && alu!="mostrar" && alu!="mediasAsignatura" && alu!="calcularMedia"){
        console.log(alu + " " + alumno[alu]);
        texto+=alu + " " + alumno[alu] +"\n";
    }



}

    let caja = document.querySelector("div");
    caja.innerText=texto;

    

    let boton1= document.querySelector("input");

    boton1.addEventListener("click", function () {
        let asignaturasMedias=alumno.mediasAsignatura();
        let contenedor=document.createElement("p");
        let textoo=document.createTextNode(asignaturasMedias);
    
        contenedor.appendChild(textoo);
        caja.appendChild(contenedor);
    })
    
    let btn2=document.createElement("button");
    btn2.innerText="Modificar nombre de Tutor";
    document.body.appendChild(btn2);

    btn2.addEventListener("click", function () {
        tutor.cambiarNombre("Alcides");
        console.log(tutor);
    })

    
    

}