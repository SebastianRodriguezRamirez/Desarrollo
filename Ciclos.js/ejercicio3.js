function compararNumeros() {

    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    
    if (numero1 > numero2) {
        alert("El número mayor es: " + numero1);
    } else if (numero2 > numero1) {
        alert("El número mayor es: " + numero2);
    } else {
        alert("Ambos números son iguales.");
    }
}
compararNumeros()