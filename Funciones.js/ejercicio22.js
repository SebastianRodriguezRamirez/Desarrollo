function verificarAprobacionEstudiante() {
    let notas = prompt("Ingrese las tres notas separadas por comas:").split(",").map(parseFloat);
    let promedio = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    console.log(promedio >= 6 ? "El estudiante aprueba" : "El estudiante reprueba");
}