function convertirTiempo(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    return { horas, minutos };
}
console.log("Conversión de 5000 segundos:", convertirTiempo(5000));
