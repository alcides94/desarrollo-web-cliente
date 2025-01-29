window.onload=()=>{
let tutor ={
    nombre:"Tomas",
    edad:12,
    dni:"12345678F",
    titulo:"Electricista"
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



let caja = document.querySelector("div");

//console.log(Object.values(alumno) );






}