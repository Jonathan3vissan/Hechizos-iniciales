const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Clase de Encantamientos
 * Para saber el total de ingredientes necesarios en la clase de hoy tenemos que saber
 *  el numero de estudiantes y libros a usar 
 * Donde podemos saber el total triplicando la cantidad de varitas por estudiante y duplicando la cantidad de libros 
 * Los estudiante tiene que traer su propia varita, los que no traigan no podran practicar los encantamientos
 * 
 * Por ejemplo si hay 7 varitas y 4 libros a usar los ingredientes necesarios son 29
 */


function main() {
    let estudiante = 0;
    let estudiante_actos = 0;
    let libroo = 0;
    let no_trajo_varitas = 0;

    console.log("hoy clase de encatamiento");
    console.log("cuantos estudiantes hay en la clase");
    estudiante = Number(leer());
    console.log(" cuantos no trajeron varitas");
    no_trajo_varitas = Number(leer());
    estudiante_actos = estudiante - no_trajo_varitas
    console.log("estudiantes que pueden hacer la practica", estudiante_actos);
    console.log("cantida de libros a usar");
    libroo = Number(leer());

    console.log("cantidad de ingredientes a usar son:", (estudiante_actos * 3) + (libroo * 2));


}




main();