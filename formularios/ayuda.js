/***
 * 
 * 
 * para llamar a un form
 * 
 * 
 * let formu = 
 * document.getTagName / querySelector
 * document.form
 * document.forms[0]
 * 
 * 1- d.get /d.querySelector
 * 2- formu.adri //ingresa mediante el nombre
 * 3-formu.elements[0]
 * 
 * 
 * ele.value //contiene lo que se envia por el campo
 *   
 * ele.defaultValue // se asgina el valor por degecto
 * 
 * /************************************/

 /**
  * 
  * 
  * LOOKAHEAD -> QUE ES
  * 
  * 
  */




 /**
  * FORMULARIOS PDF
  * 
  * EVENTOS: IMPORTANTES !!!!
  * 
  * onFocus=  El primero de ellos se activa cuando el elemento es el seleccionado para escribir o hacer algo sobre él 
  * onBlur=  El segundo se activa cuando deja de ser seleccionado.
  * 
  * 
  * FUNCIONES IMPORTANTES!!!
  * 
  * reset 
  * 
  * submit
  * 
  * OBJETO FORM:
  * contiene todos los elementos de los formularios 
  * 
  * ------------------------------------------------------
  * PARA ACCEDER A UN FORM: es a traves de:
  //FORMULARIOS
  * ej:
  * 
  * let formu=document.querySelector("form");
  * 
  * let formu=document.getElement......(".form"); 
  * 
  * let formu=document.forms[0];
  * 
  * let formu=document.form[0];
  * 
  * 
    let formu=document.formulito; //otra forma de acceder es a traves del name

  * ---------------------------------------
  * PARA ACCEDER A LOS ELEMENTOS:!!!!
  * 
  * let elem1=formu.elements[0]; //seleccionando objeto mediante htmlcoleccion array

    let ele=formu.argentina; //por el name

    let elemento=document.querySelector("input"); // al grano con querySelector o Get

    let ele=formu["argentina"]; //mediante el nombre de la etiqueta dentro de unos corchetes
  
    *--------------------------------------------- 
  * METODOS MAS USADOS ES: 
  *     reset(): Resetea el formulario:
  * 
  *     submit(): Envia el formulario;
  * 
  * 
  * --------------------------------------------
    ///INPUT
  * 
  *  PROPIEDADES:
  * 
  * id= Equivale al atributo id del elemento.
       ej: console.log(elemento.id);
   
  * defaultValue= contine el valor INICIAL que se le asigna al VALUE auque se cambie posteriormente.
       ej: console.log(elemento.defaultValue);
   
  * type= Cadena que contiene el valor del atributo type.
       ej: console.log(elemento.type);
   
  * name= Es una cadena que contiene el valor del atributo name.
       ej: console.log(elemento.name   );
  
  * value= Es una cadena que contiene el valor del elemento, es decir, su texto.
        ej: console.log(elemento.value);
    
    size= Tamaño del campo de texto.
        ej: console.log(elemento.size);

    disabled= Devuelve el valor del atributo disabled. 
        EJ: elemento.disabled=true
  


---------------------------------------------------
Métodos DE INPUT 

blur()= Pierde el foco del ratón sobre el objeto especificado.
focus()= Obtiene el foco del ratón sobre el objeto especificado.
select()= Selecciona todo el texto dentro del objeto dado.

---------------BUTTON

******PROPIEDADES DE INPUT TYPE button - submit - reset
Ademas de id, disabled, type.

name= Es una cadena que contiene el valor del atributo name.
value= Es una cadena que contiene el valor del atributo value.
form= Devuelve una referencia al formulario en el que se encuentra el botón.

*****Métodos
click()= Realiza la acción de pulsado del botón
blur()= Pierde el foco del ratón sobre el objeto especificado.
focus()= Obtiene el foco del ratón sobre el objeto especificado.

*/

////CHECKBOX
/**
 * 
 * ademas de los mensionados: type, name, value, id, disabled

 * checked= Valor booleano que nos dice si el checkbox está pulsado o no. Es modificable.
    
 * defaultChecked= Valor booleano que nos dice si el checkbox debe estar seleccionado por defecto o no.

 * METODOS

click() Realiza la acción de pulsado del botón
blur() Pierde el foco del ratón sobre el objeto especificado.
focus() Obtiene el foco del ratón sobre el objeto especificado.

/////////////RADIO

------ Propiedades
Además de los mencionados anteriormente : id, disabled, type, value, name

*checked= Valor booleano que nos dice si el checkbox está pulsado o no. Es modificable.

*defaultChecked= Valor booleano que nos dice si el checkbox debe estar seleccionado por defecto o no.

*length= Valor numérico que nos dice el número de opciones dentro de un grupo de elementos radio.

RECUERDA: todos ellos deben tener el mismo valor en el atributo name.
 
----------METODOS
click() Realiza la acción de pulsado del botón
blur() Pierde el foco del ratón sobre el objeto especificado.
focus() Obtiene el foco del ratón sobre el objeto especificado.


//// SELECT-> 
1.Paso= se crea en Javascript un array denominada: //select_accedido.options//.

2.Paso= Cada select tiene una propiedad llamada //selectedIndex// que indica qué opción del select está seleccionada. Hay que tener en cuenta que empieza contando en 0.

3.Paso= Un evento muy usado en este tipo de elementos es evento //onChange// que se produce cuando el usuario elige una opción del select distinta a la que estaba seleccionada en ese momento.


------------PROPIEDADES DE SELECT ->
Además, de los ya comentados: id, disabled, name, value

* length= Valor numérico que nos indica cuántas opciones tiene la lista .

    ej: formulario.edad.length

* selectedIndex= Valor numérico que nos dice cuál de todas las opciones disponibles está actualmente seleccionada.

    ej: formulario.edad.selectedIndex
    
* multiple= Permite conocer y establecer cuando la lista admite selección múltiple

* size = Vemos el número de opciones visibles al mismo tiempo en la lista desplegable.

-------PROPIEDADES DE OPTION -> para acceder a las opciones es de la siguiente manera:
    ej = select_accedido.options


*defaultSelected= Valor booleano que nos indica si la opción está seleccionada por defecto.
    ej: console.log(opciones[0].defaultSelected);

*index= Valor numérico que nos da la posición de la opción dentro de la lista.
    ej: console.log(opciones[0].index);

*selected= Valor booleano que nos dice si la opción está actualmente seleccionada o no. Es modificable
    ej: opciones[1].selected = true; 

*text= Cadena con el texto mostrado en la lista de una opción concreta. Es modificable.
    ej: console.log(sele.options[0].text);

*value= Es una cadena que contiene el valor del atributo value de la opción concreta de la lista.
    console.log(sele.options[0].value);


    -------METHODSSSSSS
click() Realiza la acción de pulsado del botón
blur() Pierde el foco del ratón sobre el objeto especificado.
focus() Obtiene el foco del ratón sobre el objeto especificado.


*/