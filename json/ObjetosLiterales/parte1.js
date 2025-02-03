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
        curso:"DAW",
        horas:200
    },
    {
        nombre:"Diseño",
        curso:"DAW",
        horas:100
    },

    {
        nombre:"PHP",
        curso:"DAW",
        horas:200
    },
    {
        nombre:"Despliegue",
        curso:"DAW",
        horas:150
    }

]

let alumno={
    nombre:"Ariel",
    edad:32,
    ciclo:"DAW",
    curso:2,
    profesor: tutor,
    listaAsignaturas:[
        asignaturas[0],
        asignaturas[1],
        asignaturas[2]
    ],
    notas:[7,7,8]

}

//console.table(alumno);


let texto="";
for (const alu in alumno) {
    if (alu=="profesor") {
        for (const pro in alumno[alu]) {
            if (pro=="nombre") {
                console.log(" Profesor= "+ alumno[alu][pro]);       
                texto+=" Profesor= "+ alumno[alu][pro] +"\n";
            }
            
        }
    }else if (alu=="listaAsignaturas"){
        let asignatura_individual=alumno[alu];
        //console.log(Object.values(asignatura_individual));   
        for (const asig in asignatura_individual) {
            //console.log(asig +" "+ asignatura_individual[asig]);
            for (const asig2 in asignatura_individual[asig]) {
                if (asig2=="nombre") {
                    console.log("Materia= "+ asignatura_individual[asig][asig2]);
                    texto+="Materia= "+ asignatura_individual[asig][asig2] +"\n";
                }
                
            }
        }
    }
    else{
        console.log(alu + " " + alumno[alu]);
        texto+=alu + " " + alumno[alu] +"\n";
    }
}

let caja = document.querySelector("div");
caja.innerText=texto;
}