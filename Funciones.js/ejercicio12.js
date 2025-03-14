function verificarAprobacion() {
    let notas = prompt("Ingrese las notas separadas por comas:").split(",").map(parseFloat);
    let promedio = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    console.log(promedio >= 3.0 ? "Aprobado" : "Reprobado");
}