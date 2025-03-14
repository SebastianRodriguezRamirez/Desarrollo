function calcularCuota(precio, meses) {
    let precioFinal = precio * Math.pow(1.05, meses);
    return precioFinal / meses;
}
console.log("Cuota mensual:", calcularCuota(1000, 12));