// 2) Strings
console.log('02_strings');
// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
// mayúscula (utilizar toUpperCase).
var j = 'lo esencial es invisible a los ojos';
console.log(j.toUpperCase());
// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
// substring).
var k = 'Otroletravaladna';
var l = k.substring(0, 5);
console.log(l);
// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
// substring).
var m = 'resiliencia';
var n = m.substring(8, 11);
console.log(n);
/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var o = 'en tu mirada';
var p = o.substring(0, 1).toUpperCase(0, 1);
var q = o.substring(1, 12);
var r = p + q;
console.log(r);
// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
// indexOf).;
var s = 'sin resistencia';
var t = s.indexOf(' ');
console.log(t);
// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
// espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
// nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
// letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
// operador +).
var u = 'de sonrisas';
var v = u.substring(0, 1).toUpperCase();
var va = u.substring(1, 2);
var w = u.substring(2, 4).toUpperCase();
var wa = u.substring(4, 11);
var x = v + va + w + wa;
console.log(x);