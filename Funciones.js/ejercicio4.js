function obtenerNumeros(n){
    return Array.from({ length: n}, (_, i) => i + 1)
}
console.log(obtenerNumeros(20))