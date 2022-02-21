module.exports = function Greetr() //Expone un constructor
{
    this.greeting = "Hello from function construtor greet4!"; //Guarda un mensaje en el atributo greeting
    this.greet = function() //Este atributo muestra valor de greeting por consola
    {
        console.log(this.greeting);
    }
}