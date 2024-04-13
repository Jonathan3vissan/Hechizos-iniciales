const leer = require("prompt-sync")();

/**
 * Ej 1 
 * Compra de Varitas Mágicas:
 * Solicita al cliente su edad y determina si es lo suficientemente mayor como para comprar una varita mágica.
 * La edad minima para comprar una varita es a partir de los 11 años
 * 
 * Por ejemplo si el cliente tiene 14 años si puede comprar, en otro caso si tuviera 9 entonces no
 */
const VALOR_NUM_DEF = 0;
function main() {

    let edad_cliente = VALOR_NUM_DEF;

    console.log("buenas ,usted desea comprar una varita, pero primero debemos saber su edad?");
    edad_cliente = Number(leer());
    if (edad_cliente < 11) {

        console.log("no tiene edad suficiente para tener su varita, vuelva cuando tenga 11 años");
    } else {
        console.log("muy bien tiene edad suficiente para poder comprar su varita");
    }
}


main();