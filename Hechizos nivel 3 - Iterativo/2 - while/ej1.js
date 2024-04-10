const leer = require("prompt-sync")();

/**
 * Ej 1
 * En este ejercicio, te convertirás en un joven mago o bruja que se enfrenta a 
 * la misión más importante de todas: derrotar a Lord Voldemort. Sin embargo, para hacerlo,
 *  necesitarás afinar tus habilidades mágicas y tu astucia.

Tu tarea es programar un simulador de batalla mágica donde tú, como estudiante de Hogwarts,
 puedas lanzar hechizos contra Voldemort.

El mecanismo es el siguiente: cada vez que lanzas un hechizo, ingresarás un número que representa 
tu hechizo. Si ese número coincide con un número aleatorio el cual simula acertar un ataque,
 lograrás un ataque exitoso contra Voldemort y reducirás su vida. Sin embargo, si no logras
  acertar el número, Voldemort contraatacará y perderás puntos de vida.

El simulador debe seguir funcionando hasta que alguno de los dos, tú o Voldemort, llegue a 
sus puntos mínimos de vida. Para el estudiante, los puntos de vida son 1, mientras que para
 Voldemort son -1 (sí, él es un ser oscuro, después de todo).

¡Prepárate para enfrentar la oscuridad y demuestra que eres digno de portar la varita de sauco!

Recuerda, en Hogwarts la valentía, la inteligencia y el trabajo en equipo son fundamentales.
 ¡Buena suerte!

Vidas iniciales/minimas, daño jugador/enemigo y hechizos a usar (minimo 3) quedan a su propia
 eleccion
Considerar que:
- la vida del enemigo no puede ser menor que la del jugador
- cada hechizo tiene un valor de daño unico y el enemigo tiene 1 solo hechizo de ataque
 */
const ATAQUE_MAGO = 2;
const ATAQUE_VOLDER = 3;


function main() {
    let Voldemort = 9;
    let mago = 7;
    let hechizo = 0;
    let minimo = 0;
    let maxii = 6;


    for (let i = 0; i < 6; i++) {
        secreto = Math.round(Math.random() * (minimo - maxii) + maxii)

        
        if ((Voldemort < 0) || (mago <= 0)) {
            console.log("fin");
            i = 6;
        } else {
            console.log("elige tu ataque(con numeros enteros del 0 al 5");
            hechizo = Number(leer());

        }
        if ((hechizo == secreto) && ((Voldemort > -1))) {
            console.log("le diste a voldemort");
            Voldemort = Voldemort - ATAQUE_MAGO
            console.log("vida restante  del voldemort:", Voldemort);


        } else if ((hechizo != secreto) && (mago >= 0)) {
            console.log("logro esquivar el ataque y te golpeo el con su contrataque");
            mago = mago - ATAQUE_VOLDER
            console.log("vida del magoo:", mago);
        } else if ((mago <= 0) || (Voldemort <= -1)) {

        }

    }

}
main();