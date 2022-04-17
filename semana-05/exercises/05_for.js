///// 5) For /////
// a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
// JavaScript para mostrar una alerta utilizando cada una de las palabras.

var frase = ['disfruta', 'de', 'las', 'pequeñas', 'cosas'];

for (var i = 0; i <= 4; i++) {
    alert(frase[i])
}
// b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una
// alerta por cada palabra modificada.

for (i = 0; i < frase.length; i++) {
    alert(frase[i].substring(0, 1).toUpperCase() + frase[i].substring(1));
}

// --------ACA ABAJO ESTA LA SOLUCION SIN USAR FOR----------
// var esencia2 = frase[0].substring(0, 1).toUpperCase() + frase[0].substring(1).toLowerCase();
// alert(esencia2)
// var esencia3 = frase[1].substring(0, 1).toUpperCase() + frase[1].substring(1).toLowerCase();
// alert(esencia3)
// var esencia4 = frase[2].substring(0, 1).toUpperCase() + frase[2].substring(1).toLowerCase();
// alert(esencia4)
// var esencia5 = frase[3].substring(0, 1).toUpperCase() + frase[3].substring(1).toLowerCase();
// alert(esencia5)
// var esencia6 = frase[4].substring(0, 1).toUpperCase() + frase[4].substring(1).toLowerCase();
// // alert(esencia6)

// c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del
// punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la
// variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = " ";
for (let i = 0; i < frase.length; i++) {
    // sentence = sentence.concat(frase[i], " ") solucion 1
    sentence += frase[i] + " "; //solucion 2
}
alert(sentence)

// d) Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el
// número de la repetición, es decir que al final de la ejecución del bucle for debería
// haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar
// por la consola del navegador el array final (utilizar console.log).

let pepe = []

for (i = 0; i <= 9; i++) {
    pepe += i;
}
console.log(pepe)