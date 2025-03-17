let arreglo3 = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]
/*console.log("Números impares:")
arreglo3.forEach(fila => {
    fila.forEach(numero => {
        if (numero % 2 !== 0) {
            console.log(numero)
        }
    })
})*/
let suma = 0
arreglo3.forEach(fila => {
    fila.forEach(numero => {
        suma += numero;
    })
})
console.log("Suma total:", suma)
