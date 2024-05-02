const leer = require("prompt-sync")();

/**
 * Ej 2
 * Los Dementores son criaturas oscuras que se alimentan de la felicidad de las personas, dejándolas con recuerdos dolorosos
 *  y desesperación. Para protegerse de los Dementores, los estudiantes de Hogwarts aprenden el hechizo Patronus, 
 * que repele a estas criaturas y los aleja con recuerdos felices. En este ejercicio, simularemos un encuentro con un
 *  Dementor en un mini juego donde un estudiante debe lanzar el hechizo Patronus correctamente para repeler al Dementor y 
 * proteger su felicidad. Dependiendo de la cantidad de vida del estudiante, se necesitará ingresar el hechizo Patronus 
 * varias veces para vencer al Dementor. Si el estudiante no ingresa el hechizo correctamente, perderá turnos y el Dementor 
 * consumirá su felicidad y recuerdos felices, acercándose más a la derrota del estudiante. En otro caso si el estudiante
 *  ingresa bien los hechizos y logra vencer al dementor entonces se mostrar un mensaje de victoria
 * 
 * Vida maxima del dementor: 1000
 * Vida maxima del estudiante: 350
 * Daño por turno perdido del dementor al estudiante: 75
 * Daño por hechizo acertado del estudiante contra dementor: 267
 * Turnos totales: 5 
 */

const ATAQUE_MAGO = 267;
const DAÑO_TURNO_PERDIDO_A_MAGO = 75;
const PATRONUS = "Patronus";
const VALOR_DEF_STRING = " def";
const VALOR_NUM_DEF = 0;
function main() {
    let vida_estudiante = 350;
    let vida_dementor = 1000;
    let hechizo = VALOR_DEF_STRING;
    console.log("iniciamos la batalla");

    for (let i = 5; i > VALOR_NUM_DEF; i--) {

        if ((vida_dementor <= VALOR_NUM_DEF) || (vida_estudiante <= VALOR_NUM_DEF)) {
            i = VALOR_NUM_DEF;
        } else {
            console.log(" lanza tu hechizo");
            hechizo = leer();
        }
        if ((PATRONUS == hechizo) && (vida_dementor > VALOR_NUM_DEF)) {
            console.log("acertaste tu ataque");
            vida_dementor = vida_dementor - ATAQUE_MAGO
            console.log("vida del dementor:", vida_dementor);

        } else if ((hechizo != PATRONUS) && (vida_estudiante > VALOR_NUM_DEF)) {
            console.log("erraste tu ataque");
            vida_estudiante = vida_estudiante - DAÑO_TURNO_PERDIDO_A_MAGO
            console.log("vida del estudiante:", vida_estudiante);
        } else if ((vida_dementor <= VALOR_NUM_DEF) || (vida_estudiante <= VALOR_NUM_DEF)) {

        }

    }
}

main();