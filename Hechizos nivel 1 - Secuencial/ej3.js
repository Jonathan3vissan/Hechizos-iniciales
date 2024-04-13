const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Cálculo del Peso de la Nimbus 2000
 * Preguntale a Harry el peso base de la Nimbus 2000 en kg y la cantidad de plumas de fénix utilizadas para su fabricación, 
 * luego calcula el peso total de la escoba considerando que cada pluma añade 0.1 kg
 * 
 * Por ejemplo si la cantidad de plumas usadas son 350 y el peso base es de 1.5kg entonces el total es de 36.5kg
 */
const VALOR_NUM_DEF = 0;

function main() {

    let cantidad_plumas = VALOR_NUM_DEF;
    let peso_nimbus2000 = VALOR_NUM_DEF;
    let peso_total = VALOR_NUM_DEF;

    console.log("Harry cuanto es  el peso base de la  Nimbus 2000  ? ");
    peso_nimbus2000 = Number(leer());
    console.log("cuantas plumas usaron en la fabricacion de la Nimbus 2000");
    cantidad_plumas = Number(leer());
    peso_total = peso_nimbus2000 + cantidad_plumas * 0.1
    console.log("el peso neto de la Nimbus 2000 es de :", peso_total, "kg");



}


main();