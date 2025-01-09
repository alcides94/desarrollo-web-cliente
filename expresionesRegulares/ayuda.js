/**
 * 
 * -----------------------tipos de patrones
 * 
 * \b------b\ -> para palabras exactas
 * 
 * /^------$/ -> empieza y que termine
 * 
 * ---------------------formas
 * 
 * 1 -> let er = new RegExp("alumn[aoe]s+",ig)
 *      
 * 2 -> let er=/alumn[oae]s+/ig;(global[busca en todo el texto])
 * 
 * ---------------------------coprobacion
 * 
 * let texto=alumnos;
 * 
 * 
 * er.test(texto); -> devuelve un BOOLEANO
 * 
 * texto.match(er);
 * 
 * 
 * 
 * 
 * 
 * 
 */