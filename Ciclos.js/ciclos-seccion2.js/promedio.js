let suma = 0
let cantidadnotas = 3

for (let i = 1; i <= cantidadnotas; i++){
    let nota = parseFloat(prompt(`ingrese las notas ${i}:`))
 suma += nota
}
let promedio = suma / cantidadnotas
alert("El promedio de sus notas es:" + promedio)