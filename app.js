let greet = require("./greet1");//Haciendo referencia al modulo greet1
let greet2 = require("./greet2").greet;//Haciendo referencia al modulo greet2
let greet2Alt = require("./greet2");//Haciendo referencia alternativa al modulo greet2
const greet3 = require("./greet3");//Haciendo referencia al objeto construido/instanciado
const Greet4 = require("./greet4")//Haciendo referencia al constructor
const greet5 = require("./greet5");//Haciendo referencia a la function greet del modulo greet5


greet();//Invocando al metodo greet del modulo greet1
greet2();//Invocando al metodo greet del modulo greet2
console.log("<===Separador alternativo===>");
greet2Alt.greet();//Invocando al metodo greet del modulo greet2 de forma alternativa
console.log(greet3);//Mostrando el valor de la referencia del objeto greet3 por consola
greet3.greet();//Invocando al metodo greet del modulo greet3

let myGreet4 = new (Greet4); //Instanciando el objeto de Greet4
myGreet4.greet(); //Invocando al metodo greet de mi objeto myGreet4

greet5.greet();//Invocando a la function greet de greet5


