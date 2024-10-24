/**

2.- Crea una tabla en de 4 filas y 4 columnas. Usando atributos HTML, coloca un borde,
unas medidas de 300x300px y una alineación al centro. A continuación crea tres
botones:
• El primero muestra los valores de anchura y altura de la tabla, pide unos valores
nuevos para cada propiedad y los aplica a la tabla. ¿se aplican correctamente los
valores? ¿Falla alguno?
• El segundo muestra el valor actual del borde de la tabla y solicita un valor nuevo
para aplicarlo. ¿Funciona correctamente el nuevo valor?
• El tercer botón va cambiar la alineación de la tabla cada vez que se pulse. Es
decir, si la tabla está alineada al centro, al pulsar el botón, la tabla quedará
alineada a la derecha. Si se pulsa el botón otra vez, se alineará a la izquierda y si
vuelvo a pulsarlo, la tabla se pondrá en el centro.
 
*/

window.onload=function(){

    let tabla=document.getElementsByTagName("table")[0];

    alert(tabla.width);
    alert(tabla.height);
    alert(tabla.border);
}
