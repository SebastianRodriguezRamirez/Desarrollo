function eliminarVocales() {
    let cadena = prompt("Ingrese una cadena de texto:");
    let resultado = cadena.replace(/[aeiouAEIOU]/g, '');
    console.log(`Texto sin vocales: ${resultado}`);
}
