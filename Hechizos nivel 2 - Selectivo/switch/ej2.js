const leer = require("prompt-sync")();

/**
 * Ej 2
 * Elección de Varita Mágica:
 * Pide al estudiante el núcleo de una varita mágica y muestra un mensaje personalizado dependiendo del tipo de núcleo.
 * Fénix - ¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.
 * Unicornio - Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.
 * Dragón - ¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.
 * Cualquier otro tipo de nucleo - No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.
 */
const VALOR_DEF_STRING = "DEF";

function main() {
    let nombre_nucleo = VALOR_DEF_STRING;

    console.log("Por favor dame el nucleo de tu varita para determinar sus caracteristicas ");

    nombre_nucleo = leer();

    if (nombre_nucleo == "Fenix") {
        console.log("excelente eleccion! las varitas con nucleo de Fenix son poderosas y leales");

    } else if (nombre_nucleo == "Unicornio") {

        console.log("las varitas con nucleo de unicornio son conocidas por su pureza y foerza");
    } else if (nombre_nucleo == "Dragon") {

        console.log("¡CUIDADO! las varitas con nucleo de dragon son poderosas pero pueden ser temperamentales");
    } else {
        console.log("No reconocemos este tipo de nulceo . por favor,  ingrese un nucleo valido");
    }


}


main();