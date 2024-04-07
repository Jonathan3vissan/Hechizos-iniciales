const leer = require("prompt-sync")();

/**
 * Ej 3
 * La preparación de pociones es una habilidad esencial enseñada en la clase de Pociones de Hogwarts. 
 * Cada poción requiere una combinación precisa de ingredientes y una ejecución exacta de los pasos para ser exitosa. 
 * En este ejercicio, nos sumergiremos en la atmósfera de la clase de Pociones, donde los estudiantes aprenderán a preparar
 *  una de las pociones más icónicas: la poción Multijugos. Para preparar esta poción, los estudiantes deben seguir la receta 
 * exacta y medir cuidadosamente las cantidades de cada ingrediente. Cada ingrediente tiene un límite de intentos definido,
 *  y solo si se logra ingresar la cantidad correcta del ingrediente previo, el estudiante puede avanzar al siguiente. 
 * Si el estudiante no logra ingresar la cantidad correcta de un ingrediente dentro de los intentos permitidos, 
 * la preparación de la poción fallará y el proceso se verá interrumpido. Solo aquellos estudiantes que sean precisos y
 *   persistentes podrán dominar la preparación de la poción Multijugos y disfrutar de sus efectos transformadores.
 * 
 * Receta de la Poción Multijugos:
 * Ingredientes:
 * 3 sanguijuelas reventadas
 * 5 unidades de pulverizado de cuerno de Bicornio
 * 1 pelo de gato negro
 * 2 colas de serpiente
 * 
 * Instrucciones:
    Agrega las 3 sanguijuelas reventadas a la caldera.
    Agita la mezcla lentamente durante 30 segundos en dirección horaria.
    Incorpora las 5 unidades de pulverizado de cuerno de Bicornio y remueve con la cuchara de palo.
    Añade el pelo de gato negro y mezcla suavemente en sentido antihorario durante 1 minuto.
    Por último, agrega las 2 colas de serpiente y revuelve vigorosamente durante 2 minutos.
    Deja que la poción repose durante 5 minutos antes de su uso.
 * 
 */

function main(){

let sanguijuelas_reventadas = 0;
let pulverizado_cuerno_bicornio = 0;
let pelo_gato_negro = 0;
let cola_serpiente = 0;
let sentido_de_giro = "def";

console.log("Hoy prepararemos la pocion Multijugos");
console.log("comenzemos por los ingrediente , solo le dare 3 intentos para decir la cantidad correcta de cada ingrediente");
console.log("primer ingrediente: sanguijuelas reventadas, deben decirme la cantidad precisa tiene solo 3 intenos");
console.log("recuerda que si no sabes la cantida exacta de algun igrediente no podras continuar dejando imcopleta esta tarea");

for (let i = 0; i < 3; i++) {
   console.log("cantidad exacta de sanguijuelas reventadas");
   sanguijuelas_reventadas = leer();
   if (sanguijuelas_reventadas != 3) {
      console.log("cantiodad incorrecta");
      console.log("intento N:", i + 1);

   } else {
      console.log("continuemos");
      i = 3;

   }//fin del if


}                                                 // fin del ford

if (sanguijuelas_reventadas == 3) {


   console.log("bien ahora vamos empezar a preparar la pocion ");
   console.log("ahora agitamos la mezcla en el caldero durante 30 segundo");

} else {
   

}                                       //fin del if           del bloque comnpleto del if                            

if (sanguijuelas_reventadas == 3) {  //dar bola este

   for (let j = 0; j < 3; j++) {

      console.log("que cantidad de pulverizado de cuerno de bicornio? ");
      pulverizado_cuerno_bicornio = leer();
      if (pulverizado_cuerno_bicornio != 5) {
         console.log("incorrecto.intento numero", j + 1);
      } else {
         console.log("bien, repuesta correcta ");
         j = 3;
      }

   } //for fin


} else { 

}                                                                 //fin de este bloque if
if ((sanguijuelas_reventadas==3)&&(pulverizado_cuerno_bicornio==5)) {
   

   console.log("muy bienn, ahora greagamos al caldero pulverizado de cuerno de bicorino y lo revolvemos con cuchara de palo");
   
   for (let k = 0; k < 3; k++) {
      console.log("ahora que cantidad de de pelo de gato negro?");
      pelo_gato_negro=leer();
      if (pelo_gato_negro!=1) {
         console.log("error, intento numero:",k+1);
         
      }else {console.log("excelente,nos queda uno mas");
        k=3;
      }//fin del if
            

   }// fin del rof
   
}else {

}//fin de este bloque if
if ((sanguijuelas_reventadas==3)&&(pulverizado_cuerno_bicornio==5)&&(pelo_gato_negro==1)) {

   console.log("ahora el ultimo ingrediente");
   
   for (let l = 0; l < 3; l++) {
      console.log("que cantidad de cola de serpiente?");
      cola_serpiente=leer();
      if (cola_serpiente!=2) {
         console.log("maaaal, intento numero:",l+1);
      }else{ 
         
         console.log("muy bien, completaste con exito la pocion ");
         l=3;

      }//fin del if

   }//fin del for

}else{
   console.log("volve mañana  fin");

}//fin d este tercer bloque if

// salida de la funcion

}
main();