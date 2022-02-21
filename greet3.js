//Exporta un objeto del modulo

function Greetr()
{
    this.greeting = "Hello from function construtor!"; //Guarda un mensaje en el atributo greeting
    this.greet = function() //Este atributo muestra valor de greeting por consola
    {
        console.log(this.greeting);
    }

}

module.exports = new Greetr;//Exporta el objeto Greetr