function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Número aleatorio entre 1 y 100:", numeroAleatorio(1, 100));