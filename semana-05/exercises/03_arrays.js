// 3) Arrays
/*a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).*/
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
console.log(meses[4], meses[10]);

//b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
meses.sort(function(a, b) {
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
})
console.log(meses);
//c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
meses.unshift('Roberto')
meses.push('Osvaldo')
console.log(meses)
    //d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
meses.shift()
meses.pop()
console.log(meses)
    //e) Invertir el orden del array (utilizar reverse).
meses.sort(function(a, b) {
    if (a == b) {
        return 0;
    }
    if (a > b) {
        return -1;
    }
    return 1;
})
console.log(meses)
    /*f) Unir todos los elementos del array en un único string donde cada mes este separado
    por un guión - (utilizar join).*/
var cadena = meses.join(" - ");
console.log(cadena)
    /*g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
    (utilizar slice).*/
var mesesb = meses.slice(4, 11);
console.log(mesesb) //para que el resultado sea el deseado y respete los meses de la consigna , comentar desde b) hasta f) con resulucion inclusive.

// de igual modo puede resolverse de esta manera
var mesesC = meses.slice(3, 4);
var mesesD = meses.slice(5, 7).join(" ");
var mesesE = meses.slice(10, 11);
var mesesF = meses.slice(0, 3).join(" ");
var mesesG = [mesesC + " " + mesesD + " " + mesesE + " " + mesesF];
console.log(mesesG)