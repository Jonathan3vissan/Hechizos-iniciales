const leer = require("prompt-sync")();

/**
 * Ej 5
 * Permiso para Visitar Hogsmeade:
 * Pide al estudiante su edad y si tiene permiso de sus padres, y verifica si puede visitar el pueblo de Hogsmeade.
 * Solo a partir de los 13 años, y con permiso de los padres, o 17 años tendra permitido realizar la actividad
 * 
 * Por ejemplo si tiene 12 años y con permiso de los padres no le sera permitido, si tiene 14 y no cuenta con 
 * permiso de los padres no le sera permitido, en otro caso si tiene 18 puede realizar la actividad
 */


function main() {
    let edad_estudiante = 0;
    let permiso = "def"

    console.log("por favor ingrese su edad ");
    edad_estudiante = Number(leer());
    if ((edad_estudiante >= 13) && (edad_estudiante < 17)) {
        console.log("tenes permiso, si o no");
        permiso = leer();
        if (permiso == "si") {
            console.log("podes visitar Hogmeades, disfrutalo");
        } else if (permiso != "si") {
            console.log("no pode visitar Hogmeades");
        }


    } else if (edad_estudiante < 13) {
        console.log("no podes visitar Hogmeades");

    } else {
        console.log("Podes visitar Hogmeades sin necesidad de autorzacion");
    }



}
main();