window.onload=()=>{
let tutor ={
    nombre:"Tomas",
    edad:12,
    dni:"12345678F",
    titulo:"Electricista",
    
}

let asignaturas=[
    {
        nombre:"JS",
        curso:2,
        horas:200
    },
    {
        nombre:"Diseño",
        curso:2,
        horas:100
    },

    {
        nombre:"PHP",
        curso:2,
        horas:200
    },
    {
        nombre:"Despliegue",
        curso:2,
        horas:150
    }

]

let alumno={
    nombre:"Ariel",
    edad:32,
    ciclo:"DAW",
    curso:2,
    tutor: tutor,
    listaAsignaturas:[
        asignaturas[0],
        asignaturas[1],
        asignaturas[2]
    ],
    notas:[[7,7,8],[7,5,9],[7,10,2]]

}

//console.table(alumno);


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
    else if (alu!="notas"){
        console.log(alu + " " + alumno[alu]);
        texto+=alu + " " + alumno[alu] +"\n";
    }
}

let caja = document.querySelector("div");
caja.innerText=texto;
}