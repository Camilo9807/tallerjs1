let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let operacion = prompt("Introduce la operación deseada (suma, resta, multiplicaión, división):");
let resultado;

switch(operacion) {
    case '+':
        operacion = numero1 + numero2;
        resultado = operacion;
        break;
    case '-':
        operacion = numero1 - numero2;
        resultado = operacion; 
        break; 
    case '*':
        operacion = numero1 * numero2;
        resultado = operacion;
        break;
    case '/':
        operacion = numero1 / numero2;
        resultado = operacion;
        break;
    default: 
        alert("Operación no valida");   
}
console.log("El resultado es:", resultado);
alert("El resultado es: " + resultado);