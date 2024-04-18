const leer = require("prompt-sync")();

/**
 * Ej 3
 * Permitir a los estudiantes lanzar hechizos mágicos utilizando un código numérico de 4 dígitos.

Instrucciones:

El programa solicitará al usuario que ingrese un código numérico de 4 dígitos.
Basado en el código ingresado, el programa determinará qué hechizo lanzar.
Utiliza la estructura de control switch para asociar cada código con un hechizo específico.
Si el código ingresado coincide con alguno de los códigos asignados, el programa mostrará el nombre del hechizo correspondiente.
Si el código no coincide con ninguno de los códigos asignados, el programa mostrará un mensaje indicando que el código es incorrecto.
El programa debe asegurarse de que el código ingresado sea un número entero de 4 dígitos.
Hechizos Disponibles:

Expecto Patronum
Wingardium Leviosa
Expelliarmus
Avada Kedavra
 */
const VALOR_DEF_NUM = 0;
const CODIGO_HECHIZO_1 = 1005;
const CODIGO_HECHIZO_2 = 1010;
const CODIGO_HECHIZO_3 = 1015;
const CODIGO_HECHIZO_4 = 1020;
const HECHIZO_1 = "Expecto Patronum";
const HECHIZO_2 = "Wingardium Leviosa";
const HECHIZO_3 = "Expelliarmus";
const HECHIZO_4 = "Avada Kedavra"

function main() {
    let eleccion_numero = VALOR_DEF_NUM;

    console.log("ingrese un numero de 4 digitos (comprendido entre 1000 y 1200)");
    eleccion_numero = Number(leer());

    if (eleccion_numero == CODIGO_HECHIZO_1) {
        console.log("lanzaste hechizo\t", HECHIZO_1);

    } else if (eleccion_numero == CODIGO_HECHIZO_2) {
        console.log("lanzaste hechizo\t", HECHIZO_2);
    } else if (eleccion_numero == CODIGO_HECHIZO_3) {
        console.log("lanzaste hechizo\t", HECHIZO_3);

    } else if (eleccion_numero == CODIGO_HECHIZO_4) {
        console.log("lanzaste hechizo\t", HECHIZO_4);

    } else if ((eleccion_numero >= 2001) || (eleccion_numero <= 999)) {
        console.log("debes elegir entre un numero mayor que 999 y menor que 2001 Y NO DEJAR EN BLANCO LA ELECCION");
    } else if (eleccion_numero != Number) {
        console.log("no se puede ingresar letras solo numeros dentro del rango especifico");

    }

}


main();