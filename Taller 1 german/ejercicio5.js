function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}
function perimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}
console.log("Área del círculo:", areaCirculo(7));
console.log("Perímetro del círculo:", perimetroCirculo(7));