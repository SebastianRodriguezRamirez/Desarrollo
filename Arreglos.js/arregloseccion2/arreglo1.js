let arreglo1 = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]

/*console.log("Recorrido con for:")
for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo1[i].length; j++) {
        console.log(arreglo1[i][j])
    }
}*/
console.log("Recorrido con forEach:")
arreglo1.forEach(subArray => {
    subArray.forEach(elemento => {
        console.log(elemento)
    })
})
