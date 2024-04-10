const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Examen de Herbología:
 * Pide al estudiante el nombre de la planta que encontro y determina si es apta para el examen de Herbología.
 * Si es Mandrágora o Valeriana entonces son aptas
 * Si son Bubotuber o Whomping Willow es necesario informar que no es posible debido a lo peligrosas que son
 * Cualquier otro tipo de planta no sera aceptada
 * 
 * Por ejemplo si el estudiante quiere traer un Whomping Willow no podra hacer el examen,
 *  en otro caso si trae una Valeriana se le otorgara el permiso
 */


function main() {
    let nombre_planta = "def"

    console.log("digame el nombre de la planta que encontro alumno");
    nombre_planta = leer();

    if ((nombre_planta == "Mandragora") || (nombre_planta == "Valeriana")) {
        console.log("estas plantas son aptas para realizar el examen");

    } else if ((nombre_planta == "Bubotuber") || (nombre_planta == "Whomping Willow")) {
        console.log("cuidado estas plantas son peligrosas, no podras realizar el examen");

    } else {
        console.log("estas plantas no son aptas para el examen");
    }

}


main();