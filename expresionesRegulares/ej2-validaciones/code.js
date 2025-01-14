/**
 * 
 * 
2.- Sea la expresión regular: /^[A-J]\w+\ses\s\w+/ Indica qué cadenas (o parte de
ellas) cumplen el patrón indicado.

A 

a) Jaime no es guapo.
b) Jose es un llorón.
c) Guille deja de hablar.
d) Paco es muy divertido.
e) Enya es pizpireta.
f) Sebas es rubio.
g) Isma es callado. 



 */

window.onload = () => {
    // Expresión regular
    const regex = /^[A-J]\w+\ses\s\w+/;

    // Función para verificar cada cadena
    const checkPattern = (cadena, idResult) => {
        const resultElement = document.getElementById(idResult);
        const comprobado = regex.test(cadena);
        if (comprobado) {
            resultElement.textContent = `"${cadena}" es válida.`;
            resultElement.className = "valido";
        } else {
            resultElement.textContent = `"${cadena}" no es válida.`;
            resultElement.className = "no-valido";
        }
    };

    // Cadena a verificar
    const cadenas = [
        { texto: "Jaime no es guapo.", id: "resultA" },
        { texto: "Jose es un llorón.", id: "resultB" },
        { texto: "Guille deja de hablar.", id: "resultC" },
        { texto: "Paco es muy divertido.", id: "resultD" },
        { texto: "Enya es pizpireta.", id: "resultE" },
        { texto: "Sebas es rubio.", id: "resultF" },
        { texto: "Isma es callado.", id: "resultG" }
    ];

    // Validación de cada cadena
    cadenas.forEach(cadena => {
        checkPattern(cadena.texto, cadena.id);
    });
};
