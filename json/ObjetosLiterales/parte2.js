window.onload=()=>{

let tutor ={
    nombre:"Tomas",
    edad:12,
    dni:"12345678F",
    titulo:"Electricista",
    mostrar () {
        return (this.nombre+"\n"+this.edad+"\n"+this.dni+"\n"+this.titulo+"\n");
    },
    cambiarNombre(nombre){
        this.nombre=nombre;
    }
}

//console.log(tutor.mostrar());
//console.log(tutor.cambiarNombre("Alcides"));


let asignaturas=[
    {
        nombre:"JS",
        curso:"DAW",
        horas:200,
        mostrar(){
            return JSON.stringify(this.nombre+"\n"+this.curso+"\n"+this.horas);
        },
        cambiarHoras(hora){
            this.horas=hora;
        } 
    },
    {
        nombre:"Diseño",
        curso:"DAW",
        horas:100,
        mostrar(){
            return JSON.stringify(this.nombre+"\n"+this.curso+"\n"+this.horas);
        },
        cambiarHoras(hora){
            this.horas=hora;
        } 
    },

    {
        nombre:"PHP",
        curso:"DAW",
        horas:200,
        mostrar(){
            return JSON.stringify(this.nombre+"\n"+this.curso+"\n"+this.horas);
        },
        cambiarHoras(hora){
            this.horas=hora;
        } 
    },
    {
        nombre:"Despliegue",
        curso:"DAW",
        horas:150,
        mostrar(){
            return JSON.stringify(this.nombre+"\n"+this.curso+"\n"+this.horas);
        },
        cambiarHoras(hora){
            this.horas=hora;
        } 
    }

]

let alumno={
    nombre:"Ariel Lope",
    edad:32,
    ciclo:"DAW",
    curso:2,
    profesor: tutor,
    listaAsignaturas:[
        asignaturas[0],
        asignaturas[1],
        asignaturas[2]
    ],
    notas:[[7,7,8],[8,9,2],[1,5,4]],
    calcularMedia(){
        let total=0;
        let i=0;
        for (const n of alumno.notas) {
            n.forEach(function (params) {
                total+=params;
                i++;
            })
        }
        let res=total/i;
        return res;

    },
    mediasAsignatura(){
        let i=0;

        for (const key of alumno.notas) {
            console.log(key);
            
        }
    }

}

console.table(alumno.listaAsignaturas[0].nombre);

console.log(alumno.mediasAsignatura());
 
let texto="";
for (const alu in alumno) {
    if (alu=="profesor") {
        for (const pro in alumno[alu]) {
            if (pro=="nombre") {
                console.log("Profesor= "+ alumno[alu][pro]);       
                texto+="Profesor= "+ alumno[alu][pro] +"\n";
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
    else if (alu!="calcularMedia"){
        console.log(alu + " " + alumno[alu]);
        texto+=alu + " " + alumno[alu] +"\n";
    }
}

let caja = document.querySelector("div");
caja.innerText=texto;
}