function factorial(n) {
    if (n === 0) return 1;
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log("Factorial de 5:", factorial(5));