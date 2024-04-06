const leer = require("prompt-sync")();

/**
 * Ej 1
 * Es crucial que los estudiantes aprendan los nombres de los hechizos correctamente para realizar magia de manera efectiva. 
 * En la clase de Encantamientos, los estudiantes deben demostrar su habilidad para recordar y lanzar los hechizos
 *  correctamente. Ayuda a simular este proceso creando un programa que solicite al usuario el nombre de un hechizo y 
 * le dé un número limitado de intentos para ingresarlo correctamente. Si el usuario ingresa el nombre del hechizo 
 * correctamente, el programa lo felicitará y finalizará. Si el usuario no logra ingresar el hechizo correctamente 
 * después de los intentos permitidos, el programa lo informará y finalizará.
 *
 * Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 4
 * 
 * Extra: permitir que el programa acepte 3 hechizos diferentes
 */


function main() {
    const HECHIZO_UNO = "Abrada Kedabra";
    const HECHIZO_DOS = "Cruxio";
    const HECHIZO_TRES = "Imperio";
    let hechizo = "def";

    console.log("clase de encantamiento, hoy lazamientos de hechizos");
    console.log("consigna del dia: deberan lanzar correctaente los hechizos ");
    console.log("solo tendran 3 intentos para lanzar correctamnete el hechizo");
    console.log("por favor lanza el hechizo de forma correcta");

    for (let i = 3; i > 0; i--) {

        nombre_hechizo = leer();

        if (nombre_hechizo == HECHIZO_UNO) {

            console.log("Felicidades el hechizo", HECHIZO_UNO, "fue lanzado a la perfeccion");
            i = 0;
        } else if (nombre_hechizo == HECHIZO_DOS) {
            console.log("muy buen lanzamiento del hechizo Crucio felicidades");
            i = 0;
        } else if (nombre_hechizo == HECHIZO_TRES) {
            console.log("excelnte muy buen lanzamiento del hechizo Imperio!!!");
            i = 0;
        } else {
            console.log("casi vuelve a intentar, te quedan solo", i - 1, "intentos");
        }
    }

}


main();