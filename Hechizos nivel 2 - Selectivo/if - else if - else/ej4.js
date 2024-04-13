const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Verificación de Varita Mágica:
 * Pide al usuario el nivel de lealtad y astucia de una varita mágica y verifica si es adecuada para su uso.
 * A partir de 70 nivel de lealtad o 80 en astucia la varita es apta
 * 
 * Por ejemplo si la astucia es 90 y la lealtad es 40 entonces la varita es apta, en otro caso si la astucia es 30 y 
 * la lealtad es 60 la varita no es apta
 */
const VALOR_NUM_DEF = 0;

function main() {
    let lealtad = VALOR_NUM_DEF;
    let astucia = VALOR_NUM_DEF;

    console.log("ingrese el nivel de lealtad de su varita magica por favor");
    lealtad = Number(leer());
    console.log("por favor ingrese el nivel de astucias de su varita magica ");
    astucia = Number(leer());

    if ((lealtad >= 70) || (astucia >= 80)) {
        console.log("esta varita magica es apta");
    } else {
        console.log("esta varita magica no es apta");
    }
}


main();