function contarBasesADN() {
    let cadena = prompt("Ingrese la secuencia de ADN:");
    let conteo = { A: 0, C: 0, G: 0, T: 0 };

    for (let letra of cadena.toUpperCase()) {
        if (conteo.hasOwnProperty(letra)) {
            conteo[letra]++;
        }
    }

    console.log(`Cantidad de A: ${conteo.A}, C: ${conteo.C}, G: ${conteo.G}, T: ${conteo.T}`);
}