function esPrimo() {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero < 2) {
        console.log("El número no es primo");
        return;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            console.log("El número no es primo");
            return;
        }
    }
    console.log("El número es primo");
}
