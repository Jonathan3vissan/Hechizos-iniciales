const leer = require("prompt-sync")();

const MENSAJE_VICTORIA = "¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los horrocruxes! Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico. ¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!";
const MENSAJE_DERROTA = "En el oscuro manto de la derrota, el estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico. Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota. Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria.";
const HOROCRUX_1 = " Diario de Tom Riddle";
const HOROCRUX_2 = "Anillo de Gaunt ";
const HOROCRUX_3 = "Copa de Helga Hufflepuff";
const HOROCRUX_4 = "Diadema de Rowena Ravenclaw";
const HOROCRUX_5 = "Nagini(la serpiente)";
const HOROCRUX_STRING = "Horocrux";
const CODIGO_HOROCRUX_1 = "R1dd13";
const CODIGO_HOROCRUX_2 = "G4unt!";
const CODIGO_HOROCRUX_3_A = "H3l";
const CODIGO_HOROCRUX_3_B = "ga!";
const CODIGO_HOROCRUX_4 = "R4vena";
const CODIGO_HOROCRUX_5 = "N@9ini";
const VALOR_DEF_CORDURA = 200;
const VALOR_DEF_SALUD = 400;
const VALOR_CODIGO_HORX_DEF_1 = "def";
const VALOR_CODIGO_HORX_DEF_2 = "def";
const VALOR_CODIGO_HORX_DEF_3 = "def";
const VALOR_CODIGO_HORX_DEF_4 = "def";
const VALOR_CODIGO_HORX_DEF_5 = "def";
const VALOR_MINIMO_1 = -3;
const VALOR_MAXMIMO_1 = 21;
const VALOR_MINIMO_2 = -100;
const VALOR_MAXMIMO_2 = -70;
const VALOR_MINIMO_3 = 4;
const VALOR_MAXMIMO_3 = 12;
const VALOR_MIN_AZAR_4 = 97;
const VALOR_MAX_AZAR_4 = 101;
const VALOR_MIN_AZAR_5 = 72;
const VALOR_MAX_AZAR_5 = 75;
const AUMENTO_DEF = 0;
const CONTADOR_DEF = 0;
const LIMITE_INTENTOS = 30;
const LANZA_ATAQUE_DEF = "def";
const DAÑO_CORDURA = 5.7;
const DAÑO_SALUD = 10.4;
const DAÑO_FATAL_DEF = false;
const AZAR_PROB_DAÑO_DEF = 0;
const MINI_PROB = 0;
const MAXI_PROB = 100;
const PROB_TOTAL_DEF = 0;
const PROB_BASE_DEF = 5;
const AUMENTO_X_HOROX = 2.4;
const CODIGO_UNIDO_3_DEF = "def";
const CODIGO_UNIDO_4_DEF = "def";
const CODIGO_UNIDO_5_DEF = "def";
const ATAQUE_RECHAZADO_DEF = 0;
const MIN_AZAR_RECHAZO_DEF = 0;
const MAX_AZAR_RECHAZO_DEF = 100;
const PROB_RECHAZ_ATAQUE_DEF = 50;
const HAY_QUE_ELEGIR_DEF = false;
const ELIJO_EVITAR_UN_DAÑO_DEF = 0;
const CONTADOR_LIMITE_2 = 2;
const HOROCRUX_ROTOS_DEF = 0;
const DISMINUYE_PROB_RECHAZO = 11.875
const TODOS_HOROX_ROTOS = true;
const SOLO_UN_GOLPE_DEF = false;
const ROMPI_UN_HOROCRUX_DEF = false;
const HOROCRUX_1_DESTRUIDO_DEF = false;
const HOROCRUX_2_DESTRUIDO_DEF = false;
const HOROCRUX_3_DESTRUIDO_DEF = false;
const HOROCRUX_4_DESTRUIDO_DEF = false;
const HOROCRUX_5_DESTRUIDO_DEF = false;
const TOTAL_DE_DESTRUCCION_HOROCRUX_DEF = false;

function main() {
    let salud = VALOR_DEF_SALUD;
    let cordura = VALOR_DEF_CORDURA;
    let horocrux_codigo_final_1 = VALOR_CODIGO_HORX_DEF_1;
    let horocrux_codigo_final_2 = VALOR_CODIGO_HORX_DEF_2;
    let horocrux_codigo_final_3 = VALOR_CODIGO_HORX_DEF_3;
    let horocrux_codigo_final_4 = VALOR_CODIGO_HORX_DEF_4;
    let horocrux_codigo_final_5 = VALOR_CODIGO_HORX_DEF_5;
    let codigo_unido_3 = CODIGO_UNIDO_3_DEF;
    let codigo_unido_4 = CODIGO_UNIDO_4_DEF
    let codigo_unido_5 = CODIGO_UNIDO_5_DEF;
    let contador = CONTADOR_DEF;
    let lanza_ataque = LANZA_ATAQUE_DEF;
    let azar_prob_daño = AZAR_PROB_DAÑO_DEF;
    let aumento = AUMENTO_DEF
    let prob_base = PROB_BASE_DEF;
    let prob_total = PROB_TOTAL_DEF;
    let daño_fatal = DAÑO_FATAL_DEF;
    let rechazar_ataque = PROB_RECHAZ_ATAQUE_DEF;
    let prob_de_rechazo_ataque = ATAQUE_RECHAZADO_DEF;
    let hay_que_elegir = HAY_QUE_ELEGIR_DEF;
    let elijo_evitar_un_daño = ELIJO_EVITAR_UN_DAÑO_DEF
    let horocrux_rotos = HOROCRUX_ROTOS_DEF;
    let solo_un_golpe = SOLO_UN_GOLPE_DEF;
    let rompi_un_horocrux = ROMPI_UN_HOROCRUX_DEF;
    let horocrux_1_destruido = HOROCRUX_1_DESTRUIDO_DEF;
    let horocrux_2_destruido = HOROCRUX_2_DESTRUIDO_DEF;
    let horocrux_3_destruido = HOROCRUX_3_DESTRUIDO_DEF;
    let horocrux_4_destruido = HOROCRUX_4_DESTRUIDO_DEF;
    let horocrux_5_destruido = HOROCRUX_5_DESTRUIDO_DEF;
    let total_de_destruccion_horcrux = TOTAL_DE_DESTRUCCION_HOROCRUX_DEF;




    horocrux_codigo_final_1 = generador_de_codigo(VALOR_MINIMO_1, VALOR_MAXMIMO_1, CODIGO_HOROCRUX_1);
    horocrux_codigo_final_2 = generador_de_codigo(VALOR_MINIMO_2, VALOR_MAXMIMO_2, CODIGO_HOROCRUX_2);
    horocrux_codigo_final_3 = generador_de_codigo(VALOR_MINIMO_3, VALOR_MAXMIMO_3, CODIGO_HOROCRUX_3_A,)
    codigo_unido_3 = horocrux_codigo_final_3 + CODIGO_HOROCRUX_3_B
    horocrux_codigo_final_4 = generado_letras(VALOR_MIN_AZAR_4, VALOR_MAX_AZAR_4)
    codigo_unido_4 = horocrux_codigo_final_4 + CODIGO_HOROCRUX_4
    horocrux_codigo_final_5 = generado_letras(VALOR_MIN_AZAR_5, VALOR_MAX_AZAR_5)
    codigo_unido_5 = CODIGO_HOROCRUX_5 + horocrux_codigo_final_5

    console.log(horocrux_codigo_final_1);
    console.log(horocrux_codigo_final_2);
    console.log(codigo_unido_3);
    console.log(codigo_unido_4);
    console.log(codigo_unido_5);
    do {

        prob_de_rechazo_ataque = numero_aleatorio(MIN_AZAR_RECHAZO_DEF, MAX_AZAR_RECHAZO_DEF);

        prob_total = porcentaje_fatal(prob_base, AUMENTO_X_HOROX, aumento);
        azar_prob_daño = numero_aleatorio(MINI_PROB, MAXI_PROB);
        prob_total = prob_total + (AUMENTO_X_HOROX * horocrux_rotos);


        if ((contador > 1) && (prob_total > azar_prob_daño)) {
            salud = 0;
            cordura = 0;
            contador = LIMITE_INTENTOS;
            console.log("ESTE FUE UN ATAQUE MORTAL");
            daño_fatal = true;
            console.log(MENSAJE_DERROTA);

        } else {
            console.log("intenta destruir el horocrux");
            lanza_ataque = leer();
        }



        if ((lanza_ataque == horocrux_codigo_final_1) && (!daño_fatal)) {

            console.log("destruiste el primer", HOROCRUX_STRING, HOROCRUX_1);
            horocrux_rotos = horocrux_rotos + 1;
            rompi_un_horocrux = true;
            horocrux_1_destruido = true;
        }
        else if ((lanza_ataque != horocrux_codigo_final_1) && (!daño_fatal) && (rechazar_ataque < prob_de_rechazo_ataque) && (!solo_un_golpe) && (horocrux_2_destruido) && (horocrux_3_destruido) && (horocrux_4_destruido) && (horocrux_5_destruido)) {
            salud = salud - DAÑO_SALUD;
            cordura = cordura - DAÑO_CORDURA;
            console.log(" 1 recibiste daño\nsalu:", salud, "\ncordura:", cordura);
            solo_un_golpe = true;

        } else if ((rechazar_ataque > prob_de_rechazo_ataque) && (salud > 0) && (cordura > 0)) {
            hay_que_elegir = true;

        } else {

        }

        if ((lanza_ataque == horocrux_codigo_final_2) && (!daño_fatal)) {

            console.log("destruiste el segundo ", HOROCRUX_STRING, HOROCRUX_2);
            horocrux_rotos = horocrux_rotos + 1;
            rompi_un_horocrux = true;
            horocrux_2_destruido = true;
        } else if ((lanza_ataque != horocrux_codigo_final_2) && (!daño_fatal) && (rechazar_ataque < prob_de_rechazo_ataque) && (!solo_un_golpe)) {
            salud = salud - DAÑO_SALUD;
            cordura = cordura - DAÑO_CORDURA;
            console.log(" 2 recibiste daño\nsalud:", salud, "\ncordura:", cordura);
            solo_un_golpe = true;
        } else {

        }

        if ((lanza_ataque == codigo_unido_3) && (!daño_fatal)) {

            console.log("destruiste el tercer ", HOROCRUX_STRING, HOROCRUX_3);
            horocrux_rotos = horocrux_rotos + 1;
            rompi_un_horocrux = true;
            horocrux_3_destruido = true;
        } else if ((lanza_ataque != codigo_unido_3) && (!daño_fatal) && (rechazar_ataque < prob_de_rechazo_ataque) & (!solo_un_golpe)) {
            salud = salud - DAÑO_SALUD;
            cordura = cordura - DAÑO_CORDURA;
            console.log(" 3 recibiste daño\nsalud:", salud, "\ncordura:", cordura);
            solo_un_golpe = true;

        } else {

        }

        if ((lanza_ataque == codigo_unido_4) && (!daño_fatal)) {

            console.log("destruiste el cuarto ", HOROCRUX_STRING, HOROCRUX_4);
            horocrux_rotos = horocrux_rotos + 1;
            rompi_un_horocrux = true;
            horocrux_4_destruido = true;
        } else if ((lanza_ataque != codigo_unido_4) && (!daño_fatal) && (rechazar_ataque < prob_de_rechazo_ataque) & (!solo_un_golpe)) {
            salud = salud - DAÑO_SALUD;
            cordura = cordura - DAÑO_CORDURA;
            console.log(" 4 recibiste daño\nsalud:", salud, "\ncordura:", cordura);
            solo_un_golpe = true;


        } else {

        }


        if ((lanza_ataque == codigo_unido_5) && (!daño_fatal)) {

            console.log("destruiste el ultimo ", HOROCRUX_STRING, HOROCRUX_5);
            horocrux_rotos = horocrux_rotos + 1;
            rompi_un_horocrux = true;
            horocrux_5_destruido = true;
        } else if ((lanza_ataque != codigo_unido_5) && (!daño_fatal) && (rechazar_ataque < prob_de_rechazo_ataque) & (!solo_un_golpe)) {
            salud = salud - DAÑO_SALUD;
            cordura = cordura - DAÑO_CORDURA;
            console.log(" 5 recibiste daño\nsalud:", salud, "\ncordura:", cordura);
            solo_un_golpe = true;

        } else {

        }



        while ((contador < CONTADOR_LIMITE_2) && (hay_que_elegir) && (salud > 0) && (cordura > 0) && (!rompi_un_horocrux)) {
            console.log("tenes que elegir entre evitar daño a la cordura o a tu salud tu eliges( 1 para salud y 2 para cordura");
            elijo_evitar_un_daño = Number(leer());

            if (elijo_evitar_un_daño == 1) {
                console.log("evitaste el daño a tu salud , recibiste solo el daños a tu cordura");
                cordura = cordura - DAÑO_CORDURA;
                console.log("salud:\t", salud, "\ncordura:\t", cordura);
                contador = CONTADOR_LIMITE_2;

            } else if (elijo_evitar_un_daño == 2) {
                console.log("evitaste el daño a tu cordura pero recibiste daño a tu salud");
                salud = salud - DAÑO_SALUD;
                console.log("salud:\t", salud, "\ncordura:\t", cordura);
                contador = CONTADOR_LIMITE_2;

            } else if ((elijo_evitar_un_daño == 0) || (elijo_evitar_un_daño != Number) || (elijo_evitar_un_daño > 2)) {
                contador = CONTADOR_DEF;
            } else {

            }
        }

        total_de_destruccion_horcrux = estan_todos_los_horocrux_rotos(horocrux_1_destruido, horocrux_2_destruido, horocrux_3_destruido, horocrux_4_destruido, horocrux_5_destruido);
        console.log(total_de_destruccion_horcrux);


        if (total_de_destruccion_horcrux == TODOS_HOROX_ROTOS) {
            console.log(MENSAJE_VICTORIA);
            contador = LIMITE_INTENTOS;
            rompi_un_horocrux = true;

        } else if (((salud <= 0) || (cordura <= 0)) && (horocrux_rotos < 5)) {
            console.log(MENSAJE_DERROTA);
            contador = LIMITE_INTENTOS;
        }


        if (rompi_un_horocrux) {
            rechazar_ataque = rechazar_ataque - DISMINUYE_PROB_RECHAZO;

        }
        contador = contador + 1;
        rompi_un_horocrux = ROMPI_UN_HOROCRUX_DEF;
    } while (contador < LIMITE_INTENTOS);









}
main();


function estan_todos_los_horocrux_rotos(destruido1,destruido2,destruido3,destruido4,destruido5) {
let total
     total = destruido1 && destruido2 && destruido3 && destruido4 && destruido5;
    return (total);
}

/**genera el porcentaje final 
 * 
 * @param {Number} base                inicio de valor
 * @param {Number} paso_de_aumento     valor
 * @param {Number} aumento             por cada de uno en uno
 * @returns porcentaje final
 */
function porcentaje_fatal(base, paso_de_aumento, aumento) {
    let total = base + (paso_de_aumento * aumento);
    return (total);
}




/**genera un numero aleatorio
 * 
 * @param {Number} MINI valor
 * @param {number} MAXI valo
 * @returns numero aleatorio
 */
function numero_aleatorio(MINI, MAXI) {

    let total = Math.round(Math.random() * (MINI - MAXI) + MAXI);
    return (total);
}



function generador_de_codigo(min, max, codigo_horocrux) {
    let azar_horocrux = Math.round(Math.random() * (min - max) + max);
    return codigo_horocrux + azar_horocrux;
}




function generado_letras(min, max,) {
    let cambio
    let azar = Math.round(Math.random() * (min - max) + max)
    cambio = String.fromCharCode(azar)
    return (cambio)


}

/*
let rechazar_ataque=50;
let DISMINUYE_PROB_RECHAZO=11.578;
let cantidad_horocrux_rotos=2;
console.log("inicia la vuelta");
        console.log(rechazar_ataque, "ver con atencio este valor");
        rechazar_ataque = rechazar_ataque - (DISMINUYE_PROB_RECHAZO * cantidad_horocrux_rotos)
        console.log(rechazar_ataque);


        El daño de los Horrocruxes es igual a 5.7 aplicado a la cordura y 10.4 a la salud por cada intento fallido, por ejemplo si se fallan 10 veces el daño recibido en ese momento es 57 a la cordura y 104 a la salud.
        Es posible que el estudiante rechache el daño de los horrocrux en algun momento debido a su voluntad y motivacion, en este caso solo podra rechazar un tipo de daño en especifico y el mismo tendra que indicar si desea proteger la cordura o su salud. La probabilidad de que esto suceda es de un 50% y por cada horrocrux destruido disminuye un 11.875%
        */