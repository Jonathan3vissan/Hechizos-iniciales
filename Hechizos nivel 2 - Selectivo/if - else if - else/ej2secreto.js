const leer = require("prompt-sync")();


/*Clase de Pociones en Hogwarts
Te encuentras en una clase de pociones en Hogwarts, donde el profesor Snape ha asignado una tarea práctica a los estudiantes. Cada estudiante debe preparar una poción simple utilizando ingredientes básicos como raíces de mandrágora, ojo de tritón y escamas de dragón. Tu tarea es crear un programa en JavaScript que simule la preparación de la poción, solicitando al usuario que ingrese la cantidad de cada ingrediente asi como otras indicaciones necesarias y luego mostrando el resultado final de la poción.

Ingredientes:

Raíces de Mandrágora: Estas raíces mágicas son conocidas por sus propiedades curativas y revitalizantes. Son el ingrediente principal de la poción y proporcionan energía y vitalidad al bebedor.
Ojo de Tritón: El ojo de este ser marino mágico agrega una chispa de magia y claridad mental a la poción, mejorando la concentración y la capacidad de enfoque.
Escamas de Dragón: Las escamas de dragón añaden fuerza y resistencia a la poción, proporcionando al bebedor una mayor resistencia física y protección contra enfermedades.
Instrucciones de Preparación:

Combinar las raíces de mandrágora, el ojo de tritón y las escamas de dragón en un caldero.
Calentar la mezcla a fuego lento durante 30 minutos, revolviendo ocasionalmente con una cuchara de madera.
Dejar enfriar la poción durante unos minutos antes de filtrarla para eliminar cualquier residuo.
Verter la poción en frascos esterilizados y etiquetarlos adecuadamente.
Esta poción es especialmente útil para restaurar la energía y la vitalidad, así como para fortalecer la resistencia física y mental del bebedor.

Cantidad de Ingredientes:

Raíces de Mandrágora: 3 raíces
Ojo de Tritón: 1 ojo
Escamas de Dragón: 5 escamas
Vueltas de Cuchara:
Durante el punto 2, se deben dar 10 vueltas de cuchara de madera en sentido horario. Rango de Minutos para Enfriar la Poción:


Se debe dejar enfriar la poción durante 5 a 10 minutos.

Nombre en la Etiqueta de los Frascos:
En la etiqueta de los frascos se debe escribir "Poción de Vitalidad".
Mensaje si la Poción Sale Mal:

"¡Potter, Potter, Potter! ¿Es esto lo mejor que puedes hacer? ¡Tu incompetencia en el arte de las pociones es tan predecible como tu falta de talento! ¡Esta poción es un completo desastre! ¡Un Gryffindor no podría hacerlo peor si lo intentara intencionalmente! Ve a tu asiento y reflexiona sobre tu incompetencia." Mensaje si la Poción Sale Bien:

"Hmm... parece que, contra todo pronóstico, has logrado preparar una poción que no es completamente inútil. No está mal, aunque aún queda mucho que mejorar. Tal vez hayas heredado algo de habilidad de tus antepasados... o simplemente has tenido suerte. ¡Sigue así, pero no te relajes, la perfección exige constancia!"**/

const VALOR_NUM_DEF = 0;
const VALOR_DEF_STRING = "def";
const INGREDIENTE_1 = "Raices de mandragona";
const INGREDIENTE_2 = "Ojo de triton";
const INGREDIENTE_3 = "Escamas de dragon";
const EXACTA_CANTIDAD_INGREDIENTE_1 = 3;
const EXACTA_CANTIDAD_INGREDIENTE_2 = 1;
const EXACTA_CANTIDAD_INGREDIENTE_3 = 5;
const VUELTAS_EXACTAS_CUCHARA = 10;
const SENTIDO_CORRECTO_VUELTAS = "HORARIO";
const POCION_DE_VITALIDAD = "POCION DE VITALIDAD";
const POCION_MAL_PREPARADA = "MASA NEGRA Y MAL OLIENTE"

function main() {
    let eleccion_ingrediente_1 = VALOR_DEF_STRING;
    let eleccion_ingrediente_2 = VALOR_DEF_STRING;
    let eleccion_ingrediente_3 = VALOR_DEF_STRING;
    let cantidad_ingrediente_1 = VALOR_NUM_DEF;
    let cantidad_ingrediente_2 = VALOR_NUM_DEF;
    let cantidad_ingrediente_3 = VALOR_NUM_DEF;
    let cant_vueltas_cuchara = VALOR_NUM_DEF;
    let sentido_de_vuelt_cuchara = VALOR_NUM_DEF;


    console.log("comenzemos con la preparacion de la", POCION_DE_VITALIDAD);
    console.log("debemos ingresar la cantidades correctas de cada ingresientes");


    console.log("primer ingrediente que necesitamos es ?");

    eleccion_ingrediente_1 = leer();

    if (eleccion_ingrediente_1 == INGREDIENTE_1) {
        console.log("bien el primer ingrediente es Raíces de Mandrágora: Estas raíces mágicas son conocidas por sus propiedades curativas y revitalizantes. Son el ingrediente principal de la poción y proporcionan energía y vitalidad al bebedor. ");
    } else {

    }
    console.log("ahora cual es la cantidad de este ingrediente?");

    cantidad_ingrediente_1 = Number(leer());

    console.log("sigamos con el sogioente ingrediente: cual es el segundo ingrediente ?");
    eleccion_ingrediente_2 = leer();

    if (eleccion_ingrediente_2 == INGREDIENTE_2) {
        console.log("sera coincidencia o alguien estudios pociones , bien conitunuemos");

    } else {
    }

    console.log("cual  es la cantidad del segundo ingrediente?");
    cantidad_ingrediente_2 = Number(leer());


    console.log("falta un ingrediente mas ;cual es este ?");
    eleccion_ingrediente_3 = leer();

    if (eleccion_ingrediente_3 == INGREDIENTE_3) {
        console.log("es el correcto");


    } else {

    }
    console.log("cual es la cantida correcta de este ultimo ?");
    cantidad_ingrediente_3 = Number(leer());
    console.log("ahora ya tenemos los ingrediente y sus cantidades elegidas ,ahora seguiremos con su preparacion");

    console.log("ahora ponemos", cantidad_ingrediente_1, eleccion_ingrediente_1, cantidad_ingrediente_2, eleccion_ingrediente_2, "y", cantidad_ingrediente_3, eleccion_ingrediente_3, " dentro de un caldero a Calentar la mezcla a fuego lento durante 30 minutos,, revolviendo ocasionalmente con una cuchara de madera.");

    console.log("cuantas vueltas se deben dar con la cucharas");
    cant_vueltas_cuchara = Number(leer());

    console.log("las vueltas deben ser en sentido HORARIO o  CONTRAHORARIO");
    sentido_de_vuelt_cuchara = leer();

    console.log("  Dejar enfriar la poción durante unos minutos antes de filtrarla para eliminar cualquier residuo Verter la poción en frascos esterilizados y etiquetarlos adecuadamente.Esta poción es especialmente útil para restaurar la energía y la vitalidad, así como para fortalecer la resistencia física y mental del bebedor.SI ES BIEN PREPARADA SINO YA VERAN EN LO QUE SE CONVIERTE ...");

    if ((eleccion_ingrediente_1 == INGREDIENTE_1) && (eleccion_ingrediente_2 == INGREDIENTE_2) && (eleccion_ingrediente_3 == INGREDIENTE_3)
        && (cantidad_ingrediente_1 == EXACTA_CANTIDAD_INGREDIENTE_1) && (cantidad_ingrediente_2 == EXACTA_CANTIDAD_INGREDIENTE_2) && (cantidad_ingrediente_3 == EXACTA_CANTIDAD_INGREDIENTE_3) && (cant_vueltas_cuchara == VUELTAS_EXACTAS_CUCHARA) && (sentido_de_vuelt_cuchara == SENTIDO_CORRECTO_VUELTAS)) {

        console.log("Hmm... parece que, contra todo pronóstico, has logrado preparar una poción que no es completamente inútil. No está mal, aunque aún queda mucho que mejorar. Tal vez hayas heredado algo de habilidad de tus antepasados... o simplemente has tenido suerte. ¡Sigue así, pero no te relajes, la perfección exige constancia!");

        console.log("ETIQUETA DE TU FRASCO ", POCION_DE_VITALIDAD);

    } else {
        console.log("¡Potter, Potter, Potter! ¿Es esto lo mejor que puedes hacer? ¡Tu incompetencia en el arte de las pociones es tan predecible como tu falta de talento! ¡Esta poción es un completo desastre! ¡Un Gryffindor no podría hacerlo peor si lo intentara intencionalmente! Ve a tu asiento y reflexiona sobre tu incompetencia.");
        console.log("ETIQUETA DEL FRASCO", POCION_MAL_PREPARADA);
    }

}
main();
















