function calcularRectangulo() {
    let largo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
    let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));

    console.log(`Área: ${largo * ancho}, Perímetro: ${2 * (largo + ancho)}`);
}
