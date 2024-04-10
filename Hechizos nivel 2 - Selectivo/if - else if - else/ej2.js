const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Elección de Casa en Hogwarts:
 * Solicita al estudiante su puntuación en un examen y determina a qué casa de Hogwarts pertenecería.
 * Gryffindor - a partir de 90 puntos
 * Hufflepuff - a partir de 70 puntos
 * Ravenclaw - a partir de 50 puntos
 * Slytherin - menos de 50 puntos
 * 
 * Por ejemplo si el estudiante saco 100 puntos entonces pertenece a Gryffindor o 
 * si sacara 30 entonces pertenece a Slytherin
 */


function main() {
    let puntuacion_examen = 0;

    console.log("muy buena alumnado, hoy determinaremos su asignacion a alguna de las casas de Hogwart");
    console.log("dependiendo de su puntuacion del examen se le asignara un casa u otra");
    console.log("por favor ingrese su puntuacion del examnes");
    puntuacion_examen = Number(leer());

    if (puntuacion_examen < 50) {
        console.log("se le asigna la casa de SLYTHERIN exitos");


    } else if ((puntuacion_examen >= 50) && (puntuacion_examen < 70)) {
        console.log("se le asigna la casa de RAVENCLAW exitos");

    } else if ((puntuacion_examen >= 70) && (puntuacion_examen < 90)) {
        console.log("se le asigna la casa de HUFFLEPUFF exitos");

    } else {
        console.log("se le asigna la casa de Gryffindor exitos");
    }





}


main();