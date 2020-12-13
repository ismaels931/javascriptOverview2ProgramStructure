console.log("Formas de declarar variables")
console.log("VIP.: https://developer.mozilla.org/es/docs/Glossary/Hoisting, https://cybmeta.com/var-let-y-const-en-javascript");
console.log("Bug del lenguaje: https://codigoconjuan.com/diferencias-var-let-y-const/");
console.log("Las variables se pueden declarar usando var, let o const");
console.log("Las diferencias entre var y let son mínimas. Una de ellas es que var permite hacer hoisting, mientras que let no.");
console.log("En la actualidad normalmente se utiliza let, ya que corrige el error que incorpora var, mencionado en unos de los");
console.log("links de más arriba.");

let x = "Ismael";
console.log(x);

console.log("Por último, una variable declarada con const, prohíbe la reasignación. Sin embargo, esto no significa");
console.log("que sea inmutable. Si el valor es algo mutable como un array o un objeto, se pueden cambiar los valores");
console.log("de sus elementos.");

const pi = 3.1416;
console.log(pi);

const user = {name: 'Ismael'};
user.name = 'isanchezcan';
console.log(user.name);

console.log();

console.log("Entorno: colección de variables y sus variables, que existen en un momento determinado.");

console.log();

console.log("Funciones de browser environment:");
console.log("prompt ejecuta una ventana, que muestra el texto que se le pasa como argumento y devuelve un string.");
let nombre = prompt("Enter your name:");
console.log("Tu nombre es: " + nombre);
console.log("console es un objeto que posee un método llamado log. Útil para debbugar.");
console.log("Esto es un texto mostrado con console.log");
console.log("confirm ejecuta una ventana, que muestra el texto que se le pasa como argumento, y da a elegir entre dos botones");
console.log("ok o cancel. Dependiendo del botón elegido retornará true o false");
let valor = confirm("Verdadero o falso");
if (valor) console.log("Verdadero");
else console.log("Falso");
console.log();
console.log("Otras funciones: ");
console.log("isNaN devuelve true solo si su argumento no es un número.");
console.log(isNaN(7));
console.log("Math.max " + Math.max(10, 3));
console.log("Math.min " + Math.min(2, 14));
console.log("Math es un objeto que varios métodos que implementan funciones matemáticas conocidas.");
console.log();
console.log("Funciones de conversión de tipos: Number, Boolean, String");
console.log(Number('4'));
console.log(String(3.1416));
console.log(Boolean(3)); //Si el argumento es 0 devuelve false. Devuelve true para cualquier otro número.
console.log();
console.log("Control del flujo de ejecución: ")
console.log("Condicionales");
let theNumber = Number(prompt("Pick a number: "));
if (!isNaN(theNumber)) console.log("Tu número es la raíz cuadrada de " + theNumber * theNumber);
else console.log("No has introducido un número.");
let otherNumber = Number(prompt("Pick other number: "));
if (otherNumber < 10) console.log("Small");
else if (otherNumber < 100) console.log("Medium");
else console.log("Large");
console.log();
console.log("Bucles");
let num = 0;
while (num < 12) {
	console.log(num);
	num += 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
	result = result * 2;
	++counter;
}
console.log(result);

let myName;
do {
	myName = prompt("Who are you?");
} while (!myName);
console.log(myName);
console.log("La construcción do-while permite ejecutar el cuerpo del bucle al menos una vez.");
console.log("Bucle for");
for (let i = 0; i <= 10; i = i + 1) console.log(i);
console.log("Romper un bucle: ");
for (let current = 10; ; current++) {
	if (current % 7 == 0) {
		console.log(current);
		break;
	}
}
console.log("Construcción switch-case: ");

switch (prompt("What is the weather like?")) {
	case "rainy":
		console.log("Remember to bring an umbrella.");
		break;
	case "sunny":
		console.log("Dress lightly.");
		break;
	default:
		console.log("Unknown weather type!");
		break;
}

console.log();
console.log("Looping a triangle");
console.log();

let triangle = '#';
for (triangle; triangle.length <= 7; triangle += '#') console.log(triangle);

console.log();
console.log("FizzBuzz");
console.log();

var texto = [];

for (let n = 1; n <= 100; ++n) {
	if (n % 3 == 0 && n % 5 == 0) texto.push("FizzBuzz");
	else if (n % 5 == 0) texto.push("Buzz");
	else if (n % 3 == 0) texto.push("Fizz");
	else texto.push(n);
}

var text = [];

for (let n = 1; n <= 100; ++n) {
	mensaje = "";
	if (n % 3 == 0) mensaje += "Fizz";
	if (n % 5 == 0) mensaje += "Buzz";
	text.push(mensaje || n);
}

console.log(texto.every(function(v, i) { return v == text[i]}));
/*Al haber dos soluciones diferentes para el mismo problema, comparo si las salidas de los dos algoritmos son iguales con
 *la función every
 */

console.log();
console.log("Chessboard");

let size = Number(prompt("Write a board size: "));
let white = true;
for (let i = 0; i < size; ++i) {
	let row = "";
	for (let j = 0; j < size; ++j) {
		row += (white ? ' ' : '#');
		white = !white;
	}
	if (size % 2 == 0) white = !white;
	console.log(row);
}

console.log();
console.log("Official solution");

let size2 = 8;

let board = "";

for (let y = 0; y < size2; y++) {
  for (let x = 0; x < size2; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
