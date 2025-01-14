/**
 * 
 * 
¿Qué validan las siguientes expresiones regulares?
a) \d{6}$
b) ^[a-z0-9-]+$
c) ^95[0-9]\s*(\d{6}$)
d) (\d{2}\s){2}
e) (\d{2}\s){2}\d{2}$
f) ^95[0-9]\s*(\d{2}\s){2}\d{2}$
g) (\d{3}\s){2}
h) ^95[0-9]\s*(\d{3}\s){2}
i) 95[0-9]\s* ((\d{6}$)|((\d{2}\s){2}\d{2}$))
j) 95[0-9]\s* ((\d{6}$)|((\d{2}\s){2}\d{2}$)|((\d{3}\s){2}))




****************a) \d{6}$
Descripción: Valida una cadena que contenga exactamente 6 dígitos numéricos al final de la cadena.

Ejemplo válido: 123456
Ejemplo no válido: 12345, 1234567

****************b) ^[a-z0-9-]+$
Descripción: Valida una cadena que solo contenga caracteres en minúsculas (a-z), dígitos (0-9), o guiones (-) de principio a fin. La cadena debe tener al menos un carácter.

Ejemplo válido: abc123, abc-123
Ejemplo no válido: ABC123, 123@


********************c) ^95[0-9]\s*(\d{6}$)
Descripción: Valida una cadena que comience con "95", seguida de un dígito del 0 al 9, luego puede tener espacios en blanco opcionales y debe terminar con exactamente 6 dígitos.

Ejemplo válido: 950123456789, 950123 456789
Ejemplo no válido: 9501234567, 95012345

*****************d) (\d{2}\s){2}
Descripción: Valida una cadena que tenga exactamente dos grupos de dos dígitos seguidos de un espacio en blanco. Es decir, debe ser una secuencia de 2 dígitos, luego espacio, y repetir eso una vez más.

Ejemplo válido: 12 34
Ejemplo no válido: 12 34 56, 12 345

****************e) (\d{2}\s){2}\d{2}$
Descripción: Valida una cadena que contenga dos grupos de 2 dígitos seguidos de un espacio, seguido de 2 dígitos al final de la cadena.

Ejemplo válido: 12 34 56
Ejemplo no válido: 12 34, 12 34 567

****************f) ^95[0-9]\s*(\d{2}\s){2}\d{2}$
Descripción: Valida una cadena que comience con "95", seguido de un dígito entre 0 y 9, luego puede haber espacios opcionales, y después debe seguir el patrón de dos grupos de dos dígitos con un espacio y finalizar con 2 dígitos.

Ejemplo válido: 950123 45 67 89
Ejemplo no válido: 950123 4567, 950123 45 678

******************g) (\d{3}\s){2}
Descripción: Valida una cadena que contenga exactamente dos grupos de tres dígitos seguidos de un espacio en blanco.

Ejemplo válido: 123 456
Ejemplo no válido: 123 45, 123456

****************h) ^95[0-9]\s*(\d{3}\s){2}
Descripción: Valida una cadena que comience con "95", seguido de un dígito entre 0 y 9, luego puede haber espacios opcionales, y después debe seguir el patrón de dos grupos de tres dígitos con un espacio.

Ejemplo válido: 950123 456 789
Ejemplo no válido: 950123 45 6789

***************i) 95[0-9]\s* ((\d{6}$)|((\d{2}\s){2}\d{2}$))
Descripción: Valida una cadena que comience con "95", seguido de un dígito entre 0 y 9, luego puede haber espacios opcionales, y después debe seguir uno de estos dos patrones:

Exactamente 6 dígitos al final de la cadena.
Dos grupos de dos dígitos seguidos de un espacio, seguido de 2 dígitos al final de la cadena.
Ejemplo válido: 950123456789, 950123 45 67
Ejemplo no válido: 950123 4567, 9501234567

***************j) 95[0-9]\s* ((\d{6}$)|((\d{2}\s){2}\d{2}$)|((\d{3}\s){2}))
Descripción: Valida una cadena que comience con "95", seguido de un dígito entre 0 y 9, luego puede haber espacios opcionales, y después debe seguir uno de estos tres patrones:

Exactamente 6 dígitos al final de la cadena.
Dos grupos de dos dígitos seguidos de un espacio, seguido de 2 dígitos al final de la cadena.
Dos grupos de tres dígitos seguidos de un espacio.
Ejemplo válido: 950123 456 789, 950123456789, 950123 45 67
Ejemplo no válido: 950123 4567, 9501234567

 * 
 */