let suma = 0, contador = 0, numero = parseFloat(prompt("Ingrese un número (0 para finalizar):"))

while (numero !== 0) {
    suma += numero
    contador++
    numero = parseFloat(prompt("Ingrese un número (0 para finalizar):"))
}

alert(`El promedio es: ${contador ? suma / contador : 0}`)
