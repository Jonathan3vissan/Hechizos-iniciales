const leer = require("prompt-sync")();


/*Verificación de Varita Mágica:
- Pide al usuario el nivel de lealtad y astucia de una varita mágica y verifica si es adecuada para su uso. A partir de 70 nivel de lealtad o 80 en astucia la varita es apta

#### Mejoras

- Verificar que
    - En caso de que se ingrese mal algun tipo de dato por parte del usuario el programa insistira hasta que se ingresen correctamente
    - solo se aceptan valores de 10 en adelante y en caso de caracteres de a-z o A-Z

- Costo de varitas
    - Agregar un costo base al menos a 4 tipos de varitas
- Habilidades escondidas de varitas
    - Cada tipo de varita podria tener una habilidad o sea una bonificacion en algun tipo de hechizo
        - la posibilidad se generara aleatoriamente
        - la bonificacion se genera aleatoriamente
        - mostrar el tipo de bonificacion en caso de que se seleccione la varita con alguna bonificacion
        
   - Seleccion de varita
- En base a lo ingresado la varita puede ser apta para el usuario pero ahora es necesario considerar las propiedades del cliente
- Solicitar caracteristicas relevantes al cliente de tal forma que tanto la varita como el cliente tienen que ser compatibles




    


- Solicitar al usuario la edad
    - Solo a partir de los 11 es permitido solicitar una varita para iniciar sus estudios
    

    - En caso de que el cliente tenga más de 18 se le cobrara el 20% más y así se acumulara por cada 5 años de diferencia



    - Aceptar varita
    - En caso de que no sean compatibles el usuario y la varita este podra
        - Aceptar la varita de todas formas
            - Esto generara una bonificacion negativa
        - Elegir otra
- Salida
    - Agregar una opcion para que el usuario pueda salir de la tienda en cualquier momento del programa**/

const VALOR_DEF_NUM = 0;
const LEALTAD_MINIMA_VARITA = 70;
const ASTUCIA_MINIMA_VARITA = 80
const LEALTAD_VALOR_DEF = 0;
const ASTUCIA_VALOR_DEF = 0;
const EDAD_DE_USUARIO_DEF = 0;
const EDAD_MINIMA_DE_USUARIO = 11;
const EDAD_DE_USUARIO_MAYOR_18 = 19;
const HABILIDAD_ESCONDIDA_1 = "LANZAMIENTEO DE  HECHIZOS  UN 20% MAS PODEROSO ";
const HABILIDAD_ESCONDIDA_2 = "AUMENTE 1  NIVEL DE HECHIZOS ";
const HABILIDAD_ESCONDIDA_3 = "AUMENTA 5 PUNTOS EL PODER DE HECHIZO CONTRAS DEMENTORES";
const HABILIDAD_ESCONDIDA_4 = "PODER DE LANZA UN ATAQUE DOBLE A DISTINTO OBJETIVO SIMULTANEAMENTE";
const BONIFICAION_1 = "BONIFICACION DE VIDA EN UN 25%";
const BONIFICAION_2 = "BONIFICACION DE REGENERACION DE NIVEL DE VIDA EN 15% MAS RAPIDO";
const BONIFICAION_3 = "BONIFICAION DE ATAQUE DESDE LA ESCOBA MAGICA EN 40%";
const BONIFICAION_4 = "BONIFICAION DE VELOCIDAD EN LA ESCOBA MAGICA "
const VALOR_DEF_HABILIDAD_RECIBIDA = "no recibio";
const VALOR_DEF_BONIFICACINO_RECIBIDA = "no recibio";
const VALORE_DEF_CARACTERISTICAS_RELEVANTES = 0;
const VALOR_DEF_PRECIO = 0;
const VARITA_MAGICA_1 = "VARITA DE SAUCO";
const VARITA_MAGICA_2 = "VARITA DE SOCOMORO";
const VARITA_MAGICA_3 = "VARITAS DE OLMO";
const VARITA_MAGICA_4 = "VARITA DE ALAMO";
const PRECIO_VARITA_1 = 100;
const PRECIO_VARITA_2 = 80;
const PRECIO_VARITA_3 = 90;
const PRECIO_VARITA_4 = 85;
const ELECCION_VARITA_DEF = "def";


function main() {
    let contador = VALOR_DEF_NUM;
    let lealtad_varita = LEALTAD_VALOR_DEF;
    let astucia_varita = ASTUCIA_VALOR_DEF;
    let habilidad_recibida = VALOR_DEF_HABILIDAD_RECIBIDA;
    let bonificacion_recibida = VALOR_DEF_BONIFICACINO_RECIBIDA;
    let caracteristica_relevante_cliente_1 = VALORE_DEF_CARACTERISTICAS_RELEVANTES
    let caracteristica_relevante_cliente_2 = VALORE_DEF_CARACTERISTICAS_RELEVANTES
    let caracteristica_relevante_cliente_3 = VALORE_DEF_CARACTERISTICAS_RELEVANTES
    let caracteristica_relevante_cliente_4 = VALORE_DEF_CARACTERISTICAS_RELEVANTES
    let edad_de_usuario = EDAD_DE_USUARIO_DEF;
    let eleccion_varita = ELECCION_VARITA_DEF;
    let precio_final = VALOR_DEF_PRECIO;
    let recargo_por_edad = VALOR_DEF_NUM;

    /* console.log(astucia_varita);
     console.log("ahora por favor ingresa  PRIMERO: el nivel de lealtad y SEGUNDO: luego el nivel de astucia ");
 
     while (contador < 3) {
         contador = contador + 1
 
         console.log("lealtad:");
         lealtad_varita = Number(leer());
         console.log("astucia:");
         astucia_varita = Number(leer());
 
         if ((lealtad_varita >= LEALTAD_MINIMA_VARITA) && (astucia_varita >= ASTUCIA_MINIMA_VARITA)) {
 
             console.log("Primer condicion cumplida");
             contador = 3;
 
         }
         else if (((lealtad_varita <= LEALTAD_MINIMA_VARITA) || (astucia_varita <= ASTUCIA_MINIMA_VARITA)) &&
             ((lealtad_varita >= 10) && (astucia_varita >= 10))) {
             contador = 3;
             console.log("NO CUMPLE");
 
         } else if (((!lealtad_varita) || (!astucia_varita)) || ((lealtad_varita < 10) || (astucia_varita < 10))) {
             console.log("por favor complete los dos campos, valor minimo aceptado 10 ,nos se permiten letras ni dejar en blanco el campo");
             contador = VALOR_DEF_NUM;
 
 
         } else {
 
         }//salida del primer bloque if                         condicion ingresar datos sin dejar espacio en blanco
 
 
     }//salida del while  
 */

    console.log("tenemos en esto momento solo estas varitas, (PONER VARITA ... Y SU NOOMBRE DE LA MISMA)");
    console.log("la primera es la ", VARITA_MAGICA_1);
    console.log("la segunda es la", VARITA_MAGICA_2);
    console.log("la tercera es la  ", VARITA_MAGICA_3);
    console.log("la cuarta es la :", VARITA_MAGICA_4);
    console.log("elige entre ellas: debes ingresar su nombre");


    while (contador < 2) {            // elegir el la varita por su nombre completo

        eleccion_varita = leer();


        if (eleccion_varita == VARITA_MAGICA_1) {
            console.log("buenas eleecion , eligio la", VARITA_MAGICA_1);
            contador = 3
             precio_final = PRECIO_VARITA_1;


        } else if (eleccion_varita == VARITA_MAGICA_2) {
            console.log("buenas eleecion , eligio la", VARITA_MAGICA_2);
            contador = 3
            precio_final = PRECIO_VARITA_2;

        } else if (eleccion_varita == VARITA_MAGICA_3) {
            console.log("buenas eleecion , eligio la", VARITA_MAGICA_3);
            contador = 3
            precio_final = PRECIO_VARITA_3;

        } else if (eleccion_varita == VARITA_MAGICA_4) {
            console.log("buenas eleecion , eligio la", VARITA_MAGICA_4);
            contador = 3
            precio_final = PRECIO_VARITA_4;

        } else {
            console.log("DEDBE PONER VARITA Y SEGUIDO DEL NOMBRE DE LA MISMA, NO PUEDE PONER NUMEROS NI OTRAS VARITAS NI DEJAR EN BLANCO LA RESPUESTA");
            contador=VALOR_DEF_NUM;




        }


    }// fin while                       completo 








    azar_habilidad = Math.random();                                        // inicio de habilidad recibida
    console.log(azar_habilidad);

    if (azar_habilidad > 0.8) {
        habilidad_recibida = HABILIDAD_ESCONDIDA_4;

    } else if (azar_habilidad > 0.6) {
        habilidad_recibida = HABILIDAD_ESCONDIDA_3;
    } else if (azar_habilidad > .4) {
        habilidad_recibida = HABILIDAD_ESCONDIDA_2;

    } else if (azar_habilidad > 0) {
        habilidad_recibida = HABILIDAD_ESCONDIDA_1;

    } else {

    }                                                                       // finde azar habilidad recibida completo

    azar_bonificacion = Math.random();                                       //inicio de bonidicaion
    console.log(azar_bonificacion);

    if (azar_bonificacion > 0) {
        bonificacion_recibida = BONIFICAION_1;
    } else if (azar_bonificacion > 0.3) {
        bonificacion_recibida = BONIFICAION_2;

    } else if (azar_bonificacion > 0.5) {
        bonificacion_recibida = BONIFICAION_3
    } else if (azar_bonificacion > 0.7) {
        bonificacion_recibida = BONIFICAION_4

    } else {

    }                                                                   // salida de las bonificaciones  completo


    console.log("habilidad recibida\t", habilidad_recibida);
    console.log("bonificacion_recibida\t", bonificacion_recibida);                     //pruebas todo bie hasta aca



    console.log("necesitaremos que llenes este fomulario eligiendo entre las opciones que estan en el(escribiendo la opcion elegida) ");



    while (contador < 3) {

        console.log(" eres hombre o mujer?(escribbiendo una 1 para HOMBRE y 2 para MUJER) ");

        caracteristica_relevante_cliente_1 = Number(leer());

        if (caracteristica_relevante_cliente_1 == 1) {

            console.log("elegiste hombre ;");
            contador = 3;


        } else if (caracteristica_relevante_cliente_1 == 2) {

            console.log("eres mujer,continuemos ");
            contador = 3;
        } else {
            console.log("no puedes ingresar LETRAS ni dejar en blanco la repuesta,intentas otra vez por favor");

            contador = VALOR_DEF_NUM;


                                       // me falta las otra caracteristicas, incompleto
        }
    }//find del bloque while            






    console.log("ingresa tu edad");
    edad_de_usuario = Number(leer());              //bloque de edad  y precio esta completo 

    if ((edad_de_usuario >= EDAD_MINIMA_DE_USUARIO) && (edad_de_usuario <= 18)) {
        console.log("TIENE LA MINAMA EDAD NECESARIA");
        console.log("PRECIO:\t",precio_final);

    } else if ((edad_de_usuario < 11)) {
        console.log("vuelve cuanto seas mayor de 11 años ");

    } else if (edad_de_usuario >= EDAD_DE_USUARIO_MAYOR_18) {
        recargo_por_edad = (edad_de_usuario - EDAD_DE_USUARIO_MAYOR_18)
        recargo_por_edad = recargo_por_edad / 5
        recargo_por_edad = Math.trunc(recargo_por_edad);
        recargo_por_edad = recargo_por_edad * 1.2;
        recargo_por_edad = recargo_por_edad * precio_final
        precio_final = recargo_por_edad

        console.log(precio_final);
    } else {



    }




} main();