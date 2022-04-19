// 6) Funciones
console.log('06_functions');
// a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
// variable en la consola del navegador.

var suma = function(a, b) {
    return a + b;
}
console.log(suma(10, 5));

// b) A la función suma anterior, agregarle una validación para controlar si alguno de los
// parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
// tiene error y retornar el valor NaN como resultado.

function suma1(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    } else {
        alert('uno de los patametros tiene un error ,b')
        console.log('NaN');
    };
};
suma1(5, true);

/*c) Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero.*/

function validate(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        console.log(true);
    } else {
        console.log(false);
    };
};
validate(1, 2);

/* d) A la función suma del ejercicio 6b agregarle una llamada que) valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado).*/

var suma3 = function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (Number.isInteger(a) && Number.isInteger(b)) {
            return (a + b);
        } else {
            alert('uno de los parametros tiene un error D')
            console.log(Math.round(a + b))
        }
    } else {
        console.log('NaN');
    };
};
suma3(1.14, 2);

/*e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual */
var suma4 = function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
        if (esEntero(a, b)) {
            return (a + b);
        } else {
            console.log(Math.round(a) + Math.round(b))
        };
    } else {
        alert('uno de los patametros tiene un error E')
        console.log('NaN');
    };
};
suma4(1, 4);

function esEntero(a, b) {
    return Number.isInteger(a) && Number.isInteger(b);
}

console.log(esEntero(4, 5));