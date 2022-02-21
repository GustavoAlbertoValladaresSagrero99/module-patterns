let greeting = "Hello from greet5"; //Creando una variable que guarde un mensaje

let greet = () => //Creando un arrow function que muestre por consola el mensaje de greeting
{
    console.log(greeting);
}

module.exports = { //Revealing module pattern que exporta la function greet
    greet: greet
}