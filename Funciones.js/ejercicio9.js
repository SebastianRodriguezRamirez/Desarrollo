function contarVocales() {
    let cadena = prompt("Ingrese una cadena de texto:");
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let letra of cadena) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    console.log(`Cantidad de vocales: ${contador}`);
}


