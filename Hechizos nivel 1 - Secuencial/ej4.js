const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Cálculo del Hechizo Patronus:
 * Solicita al usuario la edad del mago y la cantidad de días de práctica del hechizo Patronus, luego calcula la potencia
 *  del hechizo. La potencia se obtiene duplicando la edad sumado a la mitad de todos los días de practica realizados para 
 * dominar el Patronus
 * 
 * Por ejemplo si la edad es 25 y los días de practica son 158 entonces su potencia con el hechizo patronus es de 129
 */

const VALOR_NUM_DEF = 0;
function main() {

    let edad_mago = VALOR_NUM_DEF;
    let dias_de_practicas = VALOR_NUM_DEF;
    let potencia = VALOR_NUM_DEF;

    console.log("que edad tiene el mago");
    edad_mago = Number(leer());
    console.log("cuantos dias de practica tienes del hechizo patronus");
    dias_de_practicas = Number(leer());
    potencia = (edad_mago * 2 + dias_de_practicas / 2)
    console.log("la potencia de tu hechizo patronus es de :", potencia, "krags");

}


main();