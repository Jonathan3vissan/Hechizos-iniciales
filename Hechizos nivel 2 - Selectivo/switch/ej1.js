const leer = require("prompt-sync")();

/**
 * Ej 1
 * Clasificación de Pociones:
 * Solicita al estudiante el nombre de una poción y muestra su nivel de dificultad de acuerdo a su complejidad.
 * 
 * Pociones conocidas: 
 * Felix Felicis - es extremadamente compleja y peligrosa.
 * Polvo de Flu - es compleja pero útil en la red de transportación.
 * Poción Multijugos - es complicada pero muy útil para transformaciones temporales.
 * Cualquier otro tipo de pocion indicar que: No tenemos información sobre esa poción en nuestros registros.
 * 
 */
const VALOR_DEF_STRING = "DEF";

function main() {
    let nombre_pocion = VALOR_DEF_STRING;

    console.log("dime cual es el nombre de la pocion");
    nombre_pocion = leer();
    if (nombre_pocion == "Felix Felicis") {
        console.log("esta pocion es extremadamente compleja y peligrosa");
    } else if (nombre_pocion == "Polvo de Flu") {
        console.log("esta pocion es compleja pero util en la red de transportacion");
    } else if (nombre_pocion == "Pocion Multijugos") {

        console.log("esta pocion es complicada pero muy util para la transformaciones temporales");
    } else {
        console.log("no tenemos informacion sobre esta pocion en nuestro registros");
    }

}





main();