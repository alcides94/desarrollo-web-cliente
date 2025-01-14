/**
 * 5.- Indica cual sería la expresión regular necesaria para validar un email. Recuerda:
• El email debe de empezar por una cadena de caracteres que no empiecen por @
o espacio en blanco. La longitud de esta cadena debe ser mayor a cero.
• A continuación, debe aparecer el símbolo @.
• Después, una cadena de caracteres que no empiecen por @ (arroba), "." o
espacio en blanco, cuya longitud sea mayor a cero.
• Esa cadena debe estar seguida de un "." (punto)
• Después, otra vez, una cadena de caracteres que no empiecen por @, "." o
espacio en blanco, cuya longitud sea mayor a cero.


[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}

 */