const leer = require("prompt-sync")();

/**
 * Ej 1
 * En este ejercicio, te convertirás en un joven mago o bruja que se enfrenta a la misión más importante de todas: derrotar a Lord Voldemort. Sin embargo, para hacerlo, necesitarás afinar tus habilidades mágicas y tu astucia.

Tu tarea es programar un simulador de batalla mágica donde tú, como estudiante de Hogwarts, puedas lanzar hechizos contra Voldemort.

El mecanismo es el siguiente: cada vez que lanzas un hechizo, ingresarás un número que representa tu hechizo. Si ese número coincide con un número aleatorio el cual simula acertar un ataque, lograrás un ataque exitoso contra Voldemort y reducirás su vida. Sin embargo, si no logras acertar el número, Voldemort contraatacará y perderás puntos de vida.

El simulador debe seguir funcionando hasta que alguno de los dos, tú o Voldemort, llegue a sus puntos mínimos de vida. Para el estudiante, los puntos de vida son 1, mientras que para Voldemort son -1 (sí, él es un ser oscuro, después de todo).

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
    let eleccion_numero = 0;
    let minimo = 0;
    let maxii = 6;
    let contador=0;
     
    while (contador<10) {
       
        contador=contador+1;
        console.log(contador);
        secreto = Math.round(Math.random() * (minimo - maxii) + maxii)
           console.log("La tu hechizo (elige un numero del 0 a 5)"); 
           
           eleccion_numero=Number(leer());

           if (eleccion_numero==secreto) {
           
            console.log("Muy bien lo golpeaste");
            Voldemort=Voldemort-ATAQUE_MAGO
            console.log("vida de Voldemort",Voldemort);
            
           }else{
            console.log("esquivo tu ataque y te contrataco");
            mago=mago-ATAQUE_VOLDER
            console.log("vida del mago",mago);
           }
           if (Voldemort<=-1) {
            console.log("GANASTE, venciste a lord voldermort");
            contador=10;
           }else if (mago<=0) {
            console.log("PERDISTE la batalla contra voldemort");
            contador=10;
           }
       
        

        
    }

}
main();