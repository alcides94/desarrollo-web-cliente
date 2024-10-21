/**---------------MANEJADORES DE EVENTOS---------- */

/**
 * Manejadores de Eventos
Los manejadores de eventos (event handlers en inglés) son las formas que
tenemos para indicar qué código se debe ejecutar cuando se produce un evento
determinado.

 */

/**
 * 1 2 .2.1.1 Forma Directa
El valor del atributo evento son instrucciones de Javascript. Si tenemos más de una
instrucción, estas se separan por punto y coma (;):
 */


/**
 * usar la variable this .
La variable this apunta directamente al elemento donde se está produciendo el evento.
 */

/**
 * 1 2 .2.1.2 Funciones externas
Esta formá es totalmente análoga a la anterior salvo que en lugar de colocar las
instrucciones javascript directamente como contenido del atributo evento,
 */


/**------------------12.2.2 Manejadores semánticos------------ */
/*las funciones anónimas son
funciones sin nombre que sólo pueden ser llamadas por el propio Javascript en un
momento dado (pej, cuando ocurra un evento) pero que no pueden ser llamadas por los
programadores como si fueran funciones normales.

<script>
//manejadores
document.getElementById('botoncito').onclick = function(){
//Codigo javascript
};
//Funciones normales
. . .
</script>


-----------------THIS---------------
//manejadores
document.getElementById('botoncito').onclick = function()
{
alert(this.value);
cambiaMiBoton(this);
}


---------------WINDOWS ONLOAD---------
//manejadores
window.onload = function(){
document.getElementById('botoncito').onclick = cambiaMiBoton;
}

*/