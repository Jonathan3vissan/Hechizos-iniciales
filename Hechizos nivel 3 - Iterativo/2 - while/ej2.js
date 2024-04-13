const leer = require("prompt-sync")();

/**
 * Ej 2
 * te enfrentarás a un desafío único y emocionante. Te encuentras en un oscuro y 
 * tormentoso bosque, rodeado de la neblina que parece estar cargada de misterio y 
 * peligro. En este bosque, los temidos Dementores, criaturas de la oscuridad que se 
 * alimentan de la felicidad y los recuerdos alegres, están acechando.

Eres un valiente estudiante de Hogwarts, y tu misión es defender tu propia felicidad y 
los recuerdos alegres al igual que de una persona querida contra los Dementores. 
Pero ten cuidado, estos seres malignos no dudarán en atacarte y tratar de absorber 
tu felicidad y la de tu ser querido.

El desafío comienza ahora. Te encontrarás en un enfrentamiento constante contra los 
Dementores. Para defenderte, deberás ingresar números aleatorios entre 0 y 3. Si adivinas
 correctamente el número aleatorio generado por los Dementores, lograrás defenderte y 
 proteger tus recuerdos.

Pero aquí hay un giro: si los Dementores lanzan más de cinco ataques, existe la
 posibilidad de que aparezca una persona misteriosa para ayudarte a derrotar a los 
 Dementores y restaurar la paz en el bosque.

Recuerda, tanto tú como tu ser querido pueden recibir ataques de los Dementores,
 pero solo uno a la vez, a menos que ocurra un número especial en el controlador de ataque.
  Si tu felicidad y recuerdos alegres llegan a cero o la de tu ser querido entonces 
  es el fin para ambos. Mantén tu concentración y tu valentía mientras te enfrentas a 
  este desafío.

¿Estás listo para adentrarte en esta emocionante aventura y demostrar tu valentía contra 
las fuerzas oscuras? ¡Adelante, el destino del bosque dependen de vos!
 */
const VALOR_NUM_DEF = 0;
const VALOR_MINIMO_AZAR = 0;
const VALOR_MAXIMO_AZAR = 4;
const ATAQUE_DEMEMTORES = 1.5;
const VALOR_MINIMO_ATD = 14;
const VALOR_MAXIMO_ATD = 17;



function main() {

  let contador = VALOR_NUM_DEF;
  let azar = VALOR_NUM_DEF;
  let ayuda_de_mago = VALOR_NUM_DEF
  let ataque_doble_dementores = VALOR_NUM_DEF
  let recuerdos_mago = 5;
  let recuerdos_ser_querido = 5;
  let te_salvan = VALOR_NUM_DEF
  let eleccion_defensiva = VALOR_NUM_DEF;
  let condicon_por_ataque_doble = VALOR_NUM_DEF;


  while (contador < 15) {

    contador = contador + 1;
    console.log("VUELTA\t", contador);
    azar = Math.round(Math.random() * (VALOR_MINIMO_AZAR - VALOR_MAXIMO_AZAR) + VALOR_MAXIMO_AZAR)
    console.log("VALOR ALEATORIO:\t", azar);
    ayuda_de_mago = Math.round(Math.random() * (VALOR_MINIMO_AZAR - VALOR_MAXIMO_AZAR) + VALOR_MAXIMO_AZAR)
    console.log("VALOR ALEATORIO AYUDA DE MAGO,\t", ayuda_de_mago);
    ataque_doble_dementores = Math.round(Math.random() * (VALOR_MINIMO_ATD - VALOR_MAXIMO_ATD) + VALOR_MAXIMO_ATD)
    console.log("VALOR ALEATORIO PARA ATaQUE DE DEMENTORE:\t", ataque_doble_dementores);



    if (((ayuda_de_mago == 1) || (ayuda_de_mago == 3)) && (contador > 4)) {
      console.log("aparece un mago y aleja a los dementores salvando a harry y su ser querido");
      contador = 15
      te_salvan = 30;


    } else if (ataque_doble_dementores == 15) {

      console.log("atacaron 2 dementores y lograron quitar recuerdos felices ambos");
      recuerdos_mago = recuerdos_mago - ATAQUE_DEMEMTORES
      recuerdos_ser_querido = recuerdos_ser_querido - ATAQUE_DEMEMTORES
      console.log("tu salud es de:\t", recuerdos_mago);
      console.log("vida de tu ser querido:\t", recuerdos_ser_querido);
      condicon_por_ataque_doble = 45;

    }
    else {
      console.log("preparate para lanzar patronus,(elije un numero entre 0 y 3) ");
      eleccion_defensiva = Number(leer());

    }

    if ((azar == eleccion_defensiva) && (te_salvan != 30) && (condicon_por_ataque_doble != 45) && ((contador == 1) || (contador == 3)
      || (contador == 5) || (contador == 7) || (contador == 9) || (contador == 11) || (contador == 13))) { //harry
      console.log("BIEN, protejiste tus recuerdos felices ");

    } else if ((azar != eleccion_defensiva) && (te_salvan != 30) && (condicon_por_ataque_doble != 45) && ((contador == 1) || (contador == 3) ||
      (contador == 5) || (contador == 7) || (contador == 9) || (contador == 11) || (contador == 13) || (contador == 15))) { //harry
      console.log("NO LOGRASTES DEFENDER TUS RECUERDOS FELICES");
      recuerdos_mago = recuerdos_mago - ATAQUE_DEMEMTORES
      console.log("tus recuerdos felices son :\t", recuerdos_mago);

    } else if ((azar == eleccion_defensiva) && (te_salvan != 30) && (condicon_por_ataque_doble != 45) && ((contador == 2) || (contador == 4) ||
      (contador == 6) || (contador == 8) || (contador == 10) || (contador == 12) || (contador == 14))) { //ser querido
      console.log("BIEN defendistes a tu ser querido bien");

    } else if ((azar != eleccion_defensiva) && (te_salvan != 30) && (condicon_por_ataque_doble != 45) && ((contador == 2) ||
      (contador == 4) || (contador == 6) || (contador == 8) || (contador == 10) || (contador == 12) || (contador == 14))) { // ser quierdo

      console.log("NO lograste denfender a tu ser querido ");
      recuerdos_ser_querido = recuerdos_ser_querido - ATAQUE_DEMEMTORES
      console.log("los recuerdo felices de ser querido son:\t", recuerdos_ser_querido);


    } else {

    }
    if ((recuerdos_mago <= 0) || (recuerdos_ser_querido <= 0)) {
      console.log("fin no quedan recuerdos felices");
      contador = 15;

    } else {

    }
  }
} main();


