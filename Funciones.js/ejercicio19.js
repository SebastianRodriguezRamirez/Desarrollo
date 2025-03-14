function conversionTemperatura() {
    let opcion = prompt("Seleccione la conversión (1 = Celsius a Fahrenheit, 2 = Fahrenheit a Celsius):");
    let temperatura = parseFloat(prompt("Ingrese la temperatura:"));

    if (opcion === "1") console.log(`Temperatura en Fahrenheit: ${(temperatura * 9/5) + 32}`);
    else if (opcion === "2") console.log(`Temperatura en Celsius: ${(temperatura - 32) * 5/9}`);
    else console.log("Opción no válida");
}
