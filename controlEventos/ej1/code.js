/**
 * 
1.- Crea un documento HTML con un section que en su interior tiene un párrafo y este a su vez, tiene un enlace al campus del instituto. (Maqueta los elementos para que se distingan unos de otros).
Todos los elementos mencionados tienen una función asociada al evento click del ratón. El section cambiará su color de fondo, el párrafo cambiará su anchura y el enlace mostrará un panel confirm para decirle al usuario si se mueve a la página enlazada o no (es decir, al pulsar el enlace este no va a la pagina enlazada a no ser que lo diga el usuario).
a) Prueba la fase de burbuja y la fase de captura ¿ves la diferencia?
b) Con todas las funciones de evento definidas y asignadas: haz que solo se ejecute la del enlace.
c) Con todas las funciones de evento definidas y asignadas: haz que solo se ejecute la del section.
 * 
 */

window.onload=()=>{

    
    // Obtención de los elementos
    const section = document.querySelector("section");
    const paragraph = document.querySelector("p");
    const link = document.getElementById("campus-link");

    // Función que cambia el color de fondo del section
    section.addEventListener("click", () => {
        section.style.backgroundColor = "lightgreen";
        console.log("Se hizo clic en el section.");
    }); // Fase de captura

    // Función que cambia la anchura del párrafo
    paragraph.addEventListener("click", () => {
        paragraph.style.width = "80%";
        console.log("Se hizo clic en el párrafo.");
    },true);

    // Función que muestra un panel de confirmación al hacer clic en el enlace
    link.addEventListener("click", () => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        const userResponse = confirm("¿Quieres ir al campus del instituto?");
        
        if (!userResponse) {
            console.log("El usuario no quiere ir al campus.");
        } else {
            window.location.href = link.href; // Redirige si el usuario acepta
        }
    },true); // Fase de captura

    
}

/**
 * 
 * EN COCNLUSION POR DEFECTO ESTA EN FASE BURBUJA, LO QUE SIGNIFICA QUE SE ENCUENTRA EN FALSE O NO POSEE NINGUN VALOR
 * 
 * EN CASO DE COLOCAR UN TRUE PASARA EN SU DEFECTO POR ESTE PRIMERO Y LUEGO AL ELEMENTO CLICKEADO
 * 
 * 
 */