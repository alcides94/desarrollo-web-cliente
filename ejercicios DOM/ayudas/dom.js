/** Tdos los elementos que componen la web forman lo que se denomina 
    DOM -> DOCUMENT OBJET MODEL:  
    
    Arbol -> representa una estructura informatica que esta compuesta por nodos 
    
    con JS se puede acceder a los diferentes elementos del html para interacturar con la pagina
   
    */

/**
 * Acceso al DOM: el arbol DOM se crea una vez que se carga por completo todos los elemetos de la pagina, y lo normal es que el JS se cargue primero y que pasa que va intentar leer el domuento y no va a encontrar nada y para solucionar eso hay tres formas:
 *      1. colocar el src al final del documento
 *      2. haciendo el uso de los eventos load o DOMContentLoadend
 *      3. haciendo uso de librerias externas como JQuery
 */

/**
     *  El evento load
            Este evento espera a que todos los elementos de la página se carguen y posteriormente
            lanza el Javascript que tiene asociado y lo ejecuta.
     
        DOMContentLoaded 
                    que, como su nombre indica, espera a que se cargue el
                    árbol DOM para lanzar su código Javascript asociado
     
     */

/**
 * getElementsByTagName
 * document.getElementsByTagName(nombre_de_una_etiqueta)
        obtiene todos los elementos de nuestra página que cuya etiqueta sea la misma que la que
        indicamos como parámetro devolviendo un HTMLCollection o mejor mas entendible un Array
 Ej: var parrafos = document.getElementsByTagName("p")
    esto es como hacer referrencia a todas las p y aplicando un puntero a una sola si colocamos [0 o 1 o lo que sea]
 
        */

/**
 * getElementsByName
    La sintaxis es: document.getElementsByName(nombre). Esta función nos selecciona todos aquellos elementos cuyo atributo name sea el mismo    que el indicado como parámetro
ej:
var elemento = document.getElementsByName("especial");
. . .
<input type='text' name='especial' … >


 */

/**
 * getElementsByClassName
        La sintaxis es: document.getElementsByClassName(nombre_de_clase).
        Esta función nos selecciona todos aquellos elementos que pertenezcan a la clase CSS
        especificada entre paréntesis. Es decir, cuyo atributo class sea el mismo que el
        indicado como parámetro.
 * ej: 
        var elementos = document.getElementsByClassName("Emenu");
        . . .
        <nav>
            <a href='#' class='Emenu'> Inicio </a>
        </nav>
        */

/**
 *  getElementById
            Su sintaxis es: document.getElementByName(id).
            Posiblemente, esta es la forma más común de acceder a un nodo del árbol DOM
 * 
    ej:
        var elemento = document.getElementById("yo");
            . . .
        <div id='pepe'></div>

 */

/**
         * 
         * querySelector
                Su sintaxis es: querySelector(selector_css)
                Devuelve una referencia al primer elemento que cumpla con el criterio dado por el
                selector que va entre paréntesis
   
    ej:     var elemento = querySelector("div p");
            . . .
            <div id='pepe'>
                <p> primero </p>
                <p> segundo </p>
                <p> tercero </p>
            </div>



            querySelector siempre devuelve una referencia. Incluso cuando lo
            usamos con selectores que afectan a un grupo de elementos. Ej: elemento =
            querySelector(".Emenu");
                */
/**
 * querySelectorAll
            Su sintaxis es: querySelectorAll(selector_css).
            Devuelve un array o mejor dicho un NodeList con referencias a todos los elementos 
 * 
            ej:
            var elementos = querySelector("div p");
            . . .
            <div id='pepe'>
                <p> primero </p>
                <p> segundo </p>
                <p> tercero </p>
            </div>
 */


            /**
             * Importante: Aunque las estructuras HTMLCollection y NodeList se comportan
                de forma “similar” a un array, no son estructuras idénticas y las funciones para array
                que se muestran mas adelante, no funcionarán en ellas.
                Si alguna vez necesitamos convertir alguna de esas dos estructuras en array
                forzosamente, podemos hacerlo así:
        //obtenemos una HTMLCollection
                var lista = document.getElementsByTagName(…)
        //Se transforma en array
                var nuevoArray = Array.from(lista); 
             * 
             */


/** ---------ACCESO A LOS ATRIBUTOS DE HTML ------------- */

/**
 * Mediante PUNTO
 * 
//Obtengo la referencia al elemento
        var elemento = document.getElementById("tabla");
//Muestro el valor de su atributo altura
        alert(elemento.height);
//cambio valor del atributo border
        elemento.border = '5px';

 * 
 * 
 */


/**----------MANEJO DE ATRIBUTOS ------------ */
/**
 * GETATTRIBUTE
 * Para consultar el valor de un atributo, usaremos getAttribute:

Ej:
        var elemento = document.getElementById("tabla");
        alert(elemento.getAttribute("height"))

        si el atributo no existe, getAttribute devolverá null o empty string
    
    *SETATTRIBUTE
 cambiar el valor de un atributo, tan solo debemos usar setAttribute:

eJ:
 var elemento = document.getElementById("tabla");
elemento.setAttribute("height","200px")

 
        */


/**
 * Atributo innerHTML
            guarda el contenido HTML de ese elemento, es decir, todo lo que hay entre las
            etiquetas de apertura y cierre de ese elemento (ya sea texto u otras etiquetas).

EJ:
            var elemento = document.getElementById('padre');
        //muestra el contenido HTML del párrafo
            console.log(elemento.innerHTML)
El contenido de este atributo se puede cambiar. Aunque no es una forma recomendada
debido a la seguridad de la página, nosotros podemos alterar el contenido de un
elemento a través del innerHTML:
            var elemento = document.getElementById('uno');
        //cambia el contenido del párrafo 'uno'
            elemento.innerHTML = "Cambio el <b>texto</b>";

COPIAR CONTENIDOS CON INNERHTML
            var p1 = document.getElementById('contenido');
            var p2 = document.getElementById('salida');
        //copio el contenido de p1 a p2
            p2.innerHTML = p1.innerHTML;
            
 */

            /**
             * 
             * 
             * Atributo innerText
Este atributo se usa para consultar y modificar solo el texto
de ese elemento y el de todos sus hijos pero con el siguiente comportamiento:
• Los textos ocultos con CSS no se obtienen con esta propiedad.
• Si se muestra por la web, el contenido de innerText respeta reglas CSS que
afecten al texto.
• Añade saltos de linea entre el texto de los elementos.
• Reduce los espacios en blanco entre palabras a uno solo.


ej: 
            var elemento = document.getElementById('padre');
        //muestra el contenido HTML del párrafo
            console.log(elemento.innerText)
importante: esta propiedad cambia solo el texto, no la estructura HTML. Si colocamos
etiquetas HTML con innerText, esas etiquetas serán tomadas como texto por el
navegador y no se renderizarán.
*/



/**
 *  textContent. Este atributo se usa para consultar y modificar solo el
texto de ese elemento y el de todos sus hijos pero con el siguiente comportamiento:
• No respeta CSS, es decir:
◦ Muestra los textos ocultos con CSS.
◦ Si se muestra por la web, el contenido de textContent no se erá afectado
por el CSS
• No añade saltos de linea entre el texto de los elementos hijos.
• Respeta el numero de espacios entre las palabras del texto.

    var elemento = document.getElementById('padre');
//muestra todo el texto del párrafo
    console.log(elemento.textContent)

 * 
 */

/**
 * 
 * 
 * Cambiar el nombre de la clase de una etiqueta HTML
       var elemento = document.getElementById("tabla");
    //mostramos la clase a la que pertenece
        alert(elemento.className);
    //cambiamos la clase
        elemento.className = 'listaUsuarios';
    
 */

/**
 * Destacar que si se usa la forma actual de acceso a atributos (getAttribute y/o
setAttribute), el atributo class no pierde su nombre y se escribiendo igual.
        var elemento = document.getElementById("tabla");
        console.log(elemento.getAttribute("class"));
        elemento.setAttribute("class","listaUsuarios");
 */



/**
 * 11.5 Acceso a propiedades CSS
con Javascript vamos a poder acceder a las propiedades CSS que tenga un objeto seleccionado.
    1. Accedo al elemento deseado.
    2. Cambio el valor de una propiedad colocando: la variable donde tengo la
referencia seguida de punto, la palabra style, otro punto y el nombre de la
propiedad CSS a la que queremos alterar su valor:

EJ:
    var elemento = document.getElementById("tabla");
    elemento.style.border = '2px solid red';
    elemento.style.padding = '0.75em';
    elemento.style.width = '500px'
 */

    /**
 función setProperty:
referencia.style.setProperty(propiedad css, valor)
Para el ejemplo anterior, podemos hacer:
var elemento = document.getElementById("tabla");
elemento.style.setProperty('margin-left','2px');
elemento.style.setProperty('background-color','blue');
elemento.style.setProperty('width','500px');

*/

/**
 * Consultando valores de CSS

para consultar cualquiera de los valores de propiedades CSS de un
elemento, debemos hacer uso de un par de herramientas de Javascript que, por
desgracia, complican un poco algo que se podría hacer de forma sencilla tal y como
hemos mostrado.
Para consultar valores de propiedades CSS debemos hacer los siguiente:
1. Obtener una referencia al elemento.
2. Obtener los estilos del elemento con la función
window.getComputedStyle(referencia)
3. usar la función getPropertyValue para obtener el valor de la propiedad
deseada.


EJ:


function consulta(){
 //paso 1
 var elemento = document.getElementById('parra');
 //paso 2
 var estilos = window.getComputedStyle(elemento);
//paso 3
 var valor = estilos.getPropertyValue('padding')

 console.log(valor);
}

 */
/**
 * Obtencion del tamaño de un elemento
 * es cuanto ocupa ese elemento dentro de la estructura de la página
 * Función Descripción
clientWidth Obtiene la anchura del elemento incluyendo el padding.
clientHeight Obtiene la altura del elemento incluyendo el padding.
offsetWidth Obtiene la anchura del elemento incluyendo el padding y el
borde.
offsetHeight Obtiene la altura del elemento incluyendo el padding y el borde.

EJ: 

var elemento = document.getElementById('padre');
console.log("Anchuras: ")
console.log(elemento.clientWidth)
console.log(elemento.offsetWidth)
console.log("Alturas: ")
console.log(elemento.clientHeight)
console.log(elemento.offsetHeight)

 * 
 */

