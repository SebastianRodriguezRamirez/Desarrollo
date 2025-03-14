function operacionesBasicas(a, b) {
    return {
        producto: a * b,
        modulo: a % b,
        cociente: a / b,
        suma: a + b,
        resta: a - b
    }
}
console.log("Operaciones básicas:", operacionesBasicas(10, 3))