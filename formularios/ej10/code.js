/**
 * 10.- Crea un formulario con dos listas desplegables y un botón. La primera lista desplegable tendrá los valores: vacío (el valor por defecto), Intel, AMD y Nvidia.
La segunda lista inicialmente no tendrá ningún elemento. Al elegir un valor en la segunda, la segunda lista se llenará con los valores siguientes:
•
Para Intel: HD 3000, HD 4000, IRIS 600.
•
Para AMD: RX Series 500, Vega Series, RX Series 6000.
•
Para Nvidia: GTX Serie 1000, GTX Serie 2000, GTX Serie 3000.
Además, al pulsar el botón, este debe comprobar que ambas listas tienen un valor seleccionado e informará usando un alert de si eso ocurre o no.
 */

window.onload=()=>{

    let formu=document.formulario;

    let seleccion=document.querySelector("select");
    let seleccion2=document.querySelectorAll("select")[1];

    let comprobar=document.querySelector("input");
    seleccion.addEventListener("change", function () {
        let opt=seleccion.options.selectedIndex;

       // console.log(seleccion2.options.length);
        

        if (opt!=0) {
            if (seleccion2.options.length==0) {
                crearOption(seleccion2);    
            } 
            
        }else {
            
            
                eliminarOption(seleccion2);    
            
            
        }
        
        
        
    })
    
    comprobar.addEventListener("click", function () {
        if((seleccion.options.selectedIndex!=0)&&(seleccion.options.selectedIndex>-1)){
            alert("objetivos seleccionados")
        }
    })


    function crearOption(seleccion2) {
        let texto="HD 3000, HD 4000, IRIS 600"
        let texto1="Nvidia: GTX Serie 1000, GTX Serie 2000, GTX Serie 3000"; 
        let texto2="AMD: RX Series 500, Vega Series, RX Series 6000.";
        let elem = document.createElement("option");
        let elem1 = document.createElement("option");
        let elem2 = document.createElement("option");
        elem.textContent = texto;
        elem1.textContent = texto1;
        elem2.textContent = texto2;
        // elem.selected=true;
        seleccion2.appendChild(elem);
        seleccion2.appendChild(elem1);
        seleccion2.appendChild(elem2);
        
        
    }
    function eliminarOption(seleccion2) {
        
        
        let opciones = Array.from(seleccion2.options);
        console.log(opciones);
        
        opciones.forEach(function (e) {
                let papa=e.parentNode;
                papa.removeChild(e);
        })
        
    }
}

/**
 * 

window.onload = () => {
    const formu = document.querySelector("form"); // Obtiene el formulario
    const seleccion = document.querySelector("select[name='seleccion1']");
    const seleccion2 = document.querySelector("select[name='seleccion2']");
    const comprobar = document.querySelector("button");

    // Opciones para cada selección
    const opciones = {
        Intel: ["HD 3000", "HD 4000", "IRIS 600"],
        AMD: ["RX Series 500", "Vega Series", "RX Series 6000"],
        Nvidia: ["GTX Serie 1000", "GTX Serie 2000", "GTX Serie 3000"],
    };

    // Evento al cambiar la primera lista desplegable
    seleccion.addEventListener("change", function () {
        // Limpia las opciones actuales de la segunda lista
        seleccion2.innerHTML = "<option value=''>Seleccione una opción</option>";

        const valorSeleccionado = seleccion.value;
        if (valorSeleccionado && opciones[valorSeleccionado]) {
            // Agrega las opciones correspondientes a la selección
            opciones[valorSeleccionado].forEach((opcion) => {
                const nuevaOpcion = document.createElement("option");
                nuevaOpcion.textContent = opcion;
                nuevaOpcion.value = opcion;
                seleccion2.appendChild(nuevaOpcion);
            });
        }
    });

    // Evento al hacer clic en el botón de comprobación
    comprobar.addEventListener("click", function () {
        if (seleccion.value && seleccion2.value) {
            alert("Ambas opciones han sido seleccionadas correctamente.");
        } else {
            alert("Por favor, seleccione valores válidos en ambas listas.");
        }
    });
};


 */