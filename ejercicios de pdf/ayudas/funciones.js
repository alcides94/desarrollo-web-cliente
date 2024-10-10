
function main(){

document.write("<h1>Binvenido</h1>");

let nombre=prompt ("ingrese nombre");
let color=prompt ("ingrese nombre");

document.write("<h1>Binvenido "+nombre+"</h1>");

}

/**FUNCIONES CON VALORES POR DEFECTO
 * 
 * 
 * es utilizando el operador OR dentro del código de la función:
        function sumar(n1,n2){
            n1 = n1 || 10;
            n2 = n2 || 5;
            var res=n1+n2;
            console.log(res);
        }


    RETURN -> DEVUELVE UN VALOR

    Es muy importante destacar dos cosas sobre la sentencia return
        • Sólo puede devolver un valor. Si queremos devover más de un valor, debemos
        usar estructuras complejas como arrays.
        • C uando se ejecuta, automáticamente se sale de la función . Esto quiere decir que
        si tengo más instrucciones escritas a continuación de return, estas no se van a
        ejecutar nunca.


    PASO DE PARAMETROS LOCAL Y POR REFERENCIA

    * PASO DE PARAMETROS DE FORMA LOCAL 
    NO SE MODIFICA EL ORIGINAL 


    * PASO DE PARAMETROS DE FORMA DE REFERNCAIA

        Todas las variables cuyos valores no pertenezcan a tipos básicos (es decir, arrays,
        matrices y objetos en general) serán pasadas por referencia en los parámetros de una
        función
 * 
 * Existen tres tipos de declaraciones en Javascript:
        1. var: un ámbito local o global. Es
        decir, son visibles y se pueden usar dentro de las funciones Y fuera 
        2. let: declara una variable que siempre será local y cuyo ámbito será de bloque,
        3. const: funciona igual que let pero además impide que esa variable se pueda
        sobre-escribir (sería una constante).


        FUNCIONES ANONIMAS son aqellas que no tienen nombre y deben asignarse a una variable
 */


    var multi = function(a,b){
        return a*b;
    }


    multi(3,6); //no ocurre nada porque se pierde el valor devuelto
    
    console.log(multi(3,6)); //sale por consola 18
    var res = multi(3,6);
    
    alert(res); //sale por pantalla 18

/*
    var elemento = document.getElementById("carta");
    //evento al hacer click
    elemento.onclick = function(){
    borrar(this);
    var nuevo = crearNuevo();
    maquetar(nuevo);
    }
    //evento al pasar encima
    elemento.onmouseover = function(){
        if (this.src =="img/paisaje.jpg"){
        inicializar(450);
        }else{
        inicializar(this.src);
        }
    }
*/



/** FUNCIONES AUTOINVOCADAS
 * 
 * su sintaxis:
         
         (function(){
                //codigo de la funcion
            }( parámetros si los tiene))
 * 
 */




/**FUNCIONES FLECHA
 * 
    * //Usando function
        function nombre(){
            . . .
        }
 * 
        //Notación flecha
        const nombre = ()=> {
            . . .
        }
 * 
    * //Usando function
        function nombre(p1,p2){
            . . .
        }
 * 
    *  //usuando funcion flecha y con devolucion de valor;
    * 
    *  const nombre = (p1,p2)=>{
    *      .....
    *       return valor;
    *  }
 * 
 *      // en una sola linea con FUNCION FLECHA
 * 
 *      //Notación flecha
            const nombre = (p1,p2)=> valor
 * 
 * 
 *      Ejemplo de función anónima:
 * 
        //con function
                var multi = function(a,b){
                return a*b;
                }

        //Notacion flecha
                var multi = (a,b)=> a*b;


 */