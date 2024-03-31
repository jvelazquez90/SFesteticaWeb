// variables

_variable1 = 1;
$variable2 = 4;

_nombre = "Jorge"; // de esta manera es global a toda la pagina
$elemento = 2;

var operando1, operando2 // cpn var es local al ambito donde se declara

let variableLocal;
const variableConstante = 5;

// booleanos

miBoleana = true;
miBoleana2 = false;

// funciones parseInt(), parseFloat(), Number() y conversion implicita

parseInt("20 dias"); // 20

var myNumber = new Number(14); // como constructor
var myNumber2 = Number("14"); // como metodo
Number("29 dias"); // NaN Not a Number. no puede convertir a numero a diferencia de los otros

Number(true); // 1 podemos convertir booleanos a numeros
Number(false); // 0 podemos convertir booleanos a numeros

+"20 dias" // NaN
+"12" // conversion implicita

//----------------------------------------------------------------
// TYPEOF

if(typeof variable == 'undefined'){
    console.log('La variable vale undefined, no tiene valor definido');
}

// ALERT Y PROMPT
alert(numero);

// para el ingreso por teclado
var nombre = prompt('Ingrese su nombre: ');

// OPERADOR IF
variable = (condicion) ? valor1 : valor2;

momento = (hora_actual < 12) ? "Antes del mediodia" : "Despues del mediodia";

// SWITCH
switch(dia_de_la_semana){
    case 1: document.write("Es lunes")
    break
    default:
        document.write("Ese dia no existe")
}

// FOR
for(let i = 0; i <= 10; i++){
    document.write(i)
    document.write("<br")
}

//----------------------------------------------------------------
// ARRAY
let frutas = ["Manzana", "Banana"]
console.log(frutas.length);

// añadir nuevo elemento

let nuevaLongitud = frutas.push('Naranja');

// eliminar elemento

let ultimo = frutas.pop()

// añadir al principio

let nuevaLongitud2 = frutas.unshift('Fresa');

// eliminar primer elemento
let primero = frutas.shift();

// eliminar elementos de un array o extaerlos
vegetales.splice(posicion,numeroElementos);

// copiar un array
let copia = frutas.slice();

//----------------------------------------------------------------
// EVERY (si todo cumple una condicion es true, sino es false)

function esGrande(elemento, indice, arreglo){
    return elemento >= 10;
}

[12, 5, 8, 130, 44].every(esGrande); // false
[12, 54, 18, 130, 44].every(esGrande); // true

// FUNCION FLECHA
[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true

//----------------------------------------------------------------
// FILTER (filtra los valores que son verdaderos)

function esGrande(elemento){
    return elemento >= 10;
}

var filtrados = [12, 5, 8, 130, 44].filter(esGrande); // filtrados es [12, 130, 44]

//----------------------------------------------------------------
// SOME

// no entiendo

// FUNCIONES

function sumar(a, b) {
	return a + b;
}

//---------------------------------
// FUNCION ANONIMA

var nombre = function mostrarEdad(edad){
	return edad;
}

//---------------------------------
// ARROW FUNCTIONS (funcion flecha)

//desglose. cada uno es valido
function (a){
	return a + 100;
}

(a) => {
	return a + 10;
}

(a) => a + 10;

=> a + 10;

//---------------
//otro ejemplo

function (a+b) {
	return a + b + 100;
}

(a+b) => a + b + 100;

=> a + b + 100;

//---------------
//otro ejemplo sin parametros

() => a + b + 100

//---------------
// otro ejemplo
