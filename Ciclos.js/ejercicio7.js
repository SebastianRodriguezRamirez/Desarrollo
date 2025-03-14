/*let numero = parseInt(prompt("Ingresa un número entre 1 y 15:"))
if (numero >= 1 && numero <= 15) {
    let esPrimo = (numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 11 || numero === 13)
    alert(esPrimo ? `${numero} es un número primo.` : `${numero} no es un número primo.`);
} else {
    alert("Por favor ingresa un número entre 1 y 15.")
} */
let numero = parseInt(prompt("Ingresa un número entre 1 y 15:"));
if (numero >= 1 && numero <= 15) {
    switch (numero) {
        case 1: case 4: case 6: case 8: case 9: case 10: case 12: case 14:
            alert(`${numero} no es un número primo.`);
            break;
        case 2: case 3: case 5: case 7: case 11: case 13:
            alert(`${numero} es un número primo.`);
            break;
        default:
            alert("Número fuera de rango.");
            break;
    }
} else {
    alert("Por favor ingresa un número entre 1 y 15.");
}