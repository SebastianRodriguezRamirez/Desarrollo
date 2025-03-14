function operar() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):").toLowerCase();

    switch (operacion) {
        case "suma": console.log(`Resultado: ${num1 + num2}`); break;
        case "resta": console.log(`Resultado: ${num1 - num2}`); break;
        case "multiplicacion": console.log(`Resultado: ${num1 * num2}`); break;
        case "division":
            console.log(num2 !== 0 ? `Resultado: ${num1 / num2}` : "No se puede dividir por cero");
            break;
        default:
            console.log("Operación no válida");
    }
}