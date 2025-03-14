let suma = 0

for (let i = 0; i < 10; i++) {
    suma += parseFloat(prompt(`Ingrese el número ${i + 1}:`))
}

alert(`El promedio es: ${suma / 10}`)
