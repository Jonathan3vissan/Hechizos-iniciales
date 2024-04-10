const leer = require("prompt-sync")();

/**
 * Ej 1 
 * Cálculo de Pociones
 * Solicita la cantidad de escarabajos de ojo de tigre y el número de raíces de mandrágora necesarios
 *  para hacer una poción, y luego calcula la cantidad total de ingredientes necesarios
 * 
 * Por ejemplo si es necesario 8 raíces de mandrágora y 5 escarabajos de ojo de tigre para hacer la
 *  poción entonces el total de ingredientes es 13
 */


function main() {
    let escarabajos_ojos_tigre = 0;
    let raices_mandragora = 0;


    console.log("cantidad necesaria de Escarabajos ojos de tigre para la poscion");
    escarabajos_ojos_tigre = Number(leer());
    console.log("cantida necesaria de raices de Mandragona necesarira para pocion");
    raices_mandragora = Number(leer());

    console.log("cantidad total de ingredientes:", (escarabajos_ojos_tigre + raices_mandragora));

}


main();