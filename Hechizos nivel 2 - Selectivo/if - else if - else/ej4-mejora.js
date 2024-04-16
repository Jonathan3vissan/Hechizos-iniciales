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


function main() {
    let contador = VALOR_DEF_NUM;
    let lealtad_varita = VALOR_DEF_NUM;
    let astucia_varita = VALOR_DEF_NUM;

    console.log(astucia_varita);
    console.log("ahora por favor ingresa  PRIMERO: el nivel de lealtad y SEGUNDO: luego el nivel de astucia ");

    while (contador < 3) {
        contador = contador + 1
        console.log("VUELTA", contador);
        console.log("lealtad:");
        lealtad_varita = Number(leer());
        console.log("astucia:");
        astucia_varita = Number(leer());

        if ((lealtad_varita >= LEALTAD_MINIMA_VARITA) && (astucia_varita >= ASTUCIA_MINIMA_VARITA)) {

            console.log("Primer condicion cumplida");
            contador = 3;

        }
        else if ((lealtad_varita <= LEALTAD_MINIMA_VARITA) || (astucia_varita <= ASTUCIA_MINIMA_VARITA) && ((lealtad_varita >= 1) && (astucia_varita >= 1))) {
            contador = 3;
            console.log("NO CUMPLE");
            console.log(typeof lealtad_varita, lealtad_varita);
            console.log(typeof astucia_varita, astucia_varita);

        } else if ((lealtad_varita =false) || (astucia_varita ==false)) {
            console.log("INGRESE SOLO NUMEROS");
            contador = VALOR_DEF_NUM;
            console.log("conntaodr en", contador);

        } else {

        }

        //salida condicion de nivel astuci y lealtad

        //SALIDA DEL IF
        console.log("FUERA DEL IF");
    }//salida del while





} main();





