const leer = require("prompt-sync")();
/*# Ej 1 Destruyendo Horrocruxes

- Te embarcas en una misión para destruir los Horrocruxes, objetos malditos que contienen fragmentos del alma del maligno mago Lord Voldemort. La destrucción de los Horrocruxes es crucial para derrotar a Voldemort y restaurar la paz en el mundo mágico.

- El estudiante debe enfrentarse a la tarea desafiante de encontrar y destruir cada uno de los Horrocruxes, los cuales están escondidos en diferentes lugares y protegidos por hechizos y encantamientos poderosos. Cada Horrocrux tiene su propia forma única de ser destruido, representada por un código secreto generado aleatoriamente.

    1. Diario de Tom Riddle        es "R1dd13?" 
        - donde ? es un numero generado aleatoriamente entre -3 y 20 
    1. Anillo de Gaunt             es "?G4unt!" 
        - donde ? es un numero generado aleatoriamente entre -100 y -70
    1. Copa de Helga Hufflepuff    es "H3l?ga!" 
        - donde ? es un numero generado aleatoriamente entre 4 y 12
    1. Diadema de Rowena Ravenclaw es "?R4vena" z
        - donde ? es un caracter generado aleatoriamente entre a y e z
    1. Nagini (serpiente)          es "N@9ini?" zzz
        - donde ? es un caracter generado aleatoriamente entre H y K z


- Cada Horrocrux tiene un 5% de probabilidad de quitar la cordura y salud totalmente antes de cada intento, esta probabilidad aumenta un 2.4% por cada horrocrux destruido, despues de todo son objetos malditos que no cualquier mortal puede destruir facilmente
El estudiante cuenta con 30 intentos para destruirlos todos, si es que aún sigue en pie y cuerdo

- El estudiante tiene el primer intento donde los horrocruxes no pueden derrotarlo inmediatamente 

- Además de la búsqueda y la resolución de enigmas, el estudiante también debe administrar cuidadosamente sus puntos de cordura 200 y salud 400. Los encuentros con los Horrocruxes y los contraataques de estos objetos malignos pueden afectar negativamente tanto la cordura como la salud del estudiante. Si los puntos de cordura o salud llegan a cero, el estudiante perderá el juego.
El daño de los Horrocruxes es igual a 5.7 aplicado a la cordura y 10.4 a la salud por cada intento fallido, por ejemplo si se fallan 10 veces el daño recibido en ese momento es 57 a la cordura y 104 a la salud.
Es posible que el estudiante rechache el daño de los horrocrux en algun momento debido a su voluntad y motivacion, en este caso solo podra rechazar un tipo de daño en especifico y el mismo tendra que indicar si desea proteger la cordura o su salud. La probabilidad de que esto suceda es de un 50% y por cada horrocrux destruido disminuye un 11.875%

- El objetivo final del estudiante es destruir todos los Horrocruxes antes de que su cordura o salud se agoten por completo, lo que resultaría en su derrota. Al destruir todos los Horrocruxes, el estudiante habrá triunfado sobre las fuerzas oscuras y habrá ayudado a derrotar a Voldemort, restaurando la paz en el mundo mágico. 
En cada caso agregar el mensaje correspondiente al final de esta simulacion

- Mensajes
    - ¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los horrocruxes! Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico. ¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!


    - En el oscuro manto de la derrota, el estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico. Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota. Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria.
*/

const HOROCRUX_1 = " Diario de Tom Riddle";
const HOROCRUX_2 = "Anillo de Gaunt ";
const HOROCRUX_3 = "Copa de Helga Hufflepuff";
const HOROCRUX_4 = "Diadema de Rowena Ravenclaw";
const HOROCRUX_5 = "Nagini";
const CODIGO_HOROCRUX_1 = "R1dd13";
const CODIGO_HOROCRUX_2 = "G4unt!";
const CODIGO_HOROCRUX_3_A = "H3l";
const CODIGO_HOROCRUX_3_B = "ga!";
const CODIGO_HOROCRUX_4 = "R4vena";
const CODIGO_HOROCRUX_5 = "N@9ini";
const VALOR_DEF_CORDURA = 200;
const VALOR_DEF_SALUD = 400;
const VALOR_AZA_DEF_HOROCRUX = 0;
const VALOR_MINIMO_1 = -3;
const VALOR_MAXMIMO_1 = 21;
const VALOR_CODIGO_HORX_DEF_1 = "def";
const VALOR_CODIGO_HORX_DEF_2 = "def";
const VALOR_MINIMO_2 = -100;
const VALOR_MAXMIMO_2 = -70;
const VALOR_MINIMO_3 = 4;
const VALOR_MAXMIMO_3 = 12;
const VALOR_CODIGO_HORX_DEF_3 = "def";
const VALOR_CODIGO_HORX_DEF_4 = "def";
const VALOR_CODIGO_HORX_DEF_5 = "def";
const INTENTOS_DESTRUIR_DEF = "def";
const CONTADOR_VALOR_DEF_INI = 0;
const CONTADOR_VALOR_FIN_DEF = 30;
const HOROCRUX_STRING = "Horocrux";
const VALOR_MIN_AZAR_4 = 97;
const VALOR_MAX_AZAR_4 = 101;
const VALOR_MIN_AZAR_5 = 72;
const VALOR_MAX_AZAR_5 = 75;



function main() {
    let salud_usuario = VALOR_DEF_SALUD;
    let cordura_de_usuario = VALOR_DEF_CORDURA;
    let azar_1_horocrux = VALOR_AZA_DEF_HOROCRUX;
    let horocrux_codigo_final_1 = VALOR_CODIGO_HORX_DEF_1;
    let horocrux_codigo_final_2 = VALOR_CODIGO_HORX_DEF_2;
    let horocrux_codigo_final_3 = VALOR_CODIGO_HORX_DEF_3;
    let horocrux_codigo_final_4 = VALOR_CODIGO_HORX_DEF_4;
    let horocrux_codigo_final_5 = VALOR_CODIGO_HORX_DEF_5;
    let azar_2_horocrux = VALOR_AZA_DEF_HOROCRUX;
    let azar_3_horocrux = VALOR_AZA_DEF_HOROCRUX;
    let azar_4_horocrux = VALOR_CODIGO_HORX_DEF_4;
    let azar_5_horocrux = VALOR_CODIGO_HORX_DEF_5;
    let intento_destruir = INTENTOS_DESTRUIR_DEF;
    let contador = CONTADOR_VALOR_DEF_INI;

    horocrux_codigo_final_1 = generador_de_codigo(VALOR_MINIMO_1, VALOR_MAXMIMO_1, CODIGO_HOROCRUX_1);
    console.log(horocrux_codigo_final_1);

    horocrux_codigo_final_2 = generador_de_codigo(VALOR_MINIMO_2, VALOR_MAXMIMO_2, CODIGO_HOROCRUX_2);
    console.log(horocrux_codigo_final_2);

    horocrux_codigo_final_3 = generador_de_codigo(VALOR_MINIMO_3, VALOR_MAXMIMO_3, CODIGO_HOROCRUX_3_A,)
    console.log( horocrux_codigo_final_3 + CODIGO_HOROCRUX_3_B)

    horocrux_codigo_final_4 = geerado_letras(VALOR_MIN_AZAR_4, VALOR_MAX_AZAR_4)
    console.log(horocrux_codigo_final_4 + CODIGO_HOROCRUX_4, );

    horocrux_codigo_final_5 = geerado_letras(VALOR_MIN_AZAR_5, VALOR_MAX_AZAR_5)
    console.log(CODIGO_HOROCRUX_5 + horocrux_codigo_final_5,);



}
main();


function generador_de_codigo(min, max, codigo_horocrux) {
    let azar_horocrux = Math.round(Math.random() * (min - max) + max);
    return codigo_horocrux + azar_horocrux;
}


function geerado_letras(min, max,) {
    let cambio
    let azar_horocrux = Math.round(Math.random() * (min - max) + max)
    cambio = String.fromCharCode(azar_horocrux)
    return (cambio)


}
//puntos de  cordura 200 y vida 400

//intentos maximo 30
//en el 1 intento no puede intentar atacar el horocrux
//daño recibido en cordura por horcrux  5.7
// 5 por ciento de quitar toda la salud y cordura cada horocrux antes de cada inte nto
// 50 por ciento de posbilidad de defenderse de un ataque del horocrux estandpo todos los horcrux en juego ,y debe elegir un daño silo a recibir osea solo puede defender salud o corudar no los dos,

// y por cada horcrux destruido tienne un 2.4 por ciuento mas de posibilidad de quitarle oda la vuida y cordura

//  daño recibido   salud 10.4 por intno fallido

// por cada horocrux destruido esta posibildad disminuye un 11.875 por ciento

