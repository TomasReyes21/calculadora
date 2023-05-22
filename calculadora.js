const argv = require('process').argv;

const sumar = require("./sumar")
const restar = require("./restar")
const multiplicar = require("./multiplicar")
const dividir = require("./dividir")


let numeroA = +argv[2]
let operacion = argv [3]
let numeroB = +argv[4]




if (operacion === "sumar" || operacion === "+"){

    resultado = sumar.sumar(numeroA,numeroB)
    console.log("el resultado es "+(resultado))

}

if (operacion === "restar" || operacion === "-"){

    resultado = restar.restar(numeroA,numeroB)
    console.log("el resultado es "+(resultado))

}

if (operacion === "dividir" || operacion === "/"){

    resultado = dividir.dividir(numeroA,numeroB)
    
    if (numeroA === 0 || numeroB === 0) {

        return console.log("No se puede dividir por cero");        
    }

    console.log("el resultado es "+(resultado))

}

if (operacion === "multiplicar" || operacion === "*"){

    resultado = multiplicar.multiplicar(numeroA,numeroB)   
    console.log("el resultado es "+(resultado))

}
















