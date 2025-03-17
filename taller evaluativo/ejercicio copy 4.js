let numeros = [1, 2, 3, 4, 500, 420, -100];

numeros.splice(4, 1);

numeros.pop();

numeros.push(520);

let copiaNumeros = numeros.slice();

console.log("Arreglo modificado:", numeros);
console.log("Copia independiente del arreglo:", copiaNumeros);
