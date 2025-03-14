function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}
function lanzarDosDados() {
    return lanzarDado() + lanzarDado();
}
console.log("Lanzamiento de dos dados:", lanzarDosDados());