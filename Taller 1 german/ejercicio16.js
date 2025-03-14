function resolverEcuacionCuadratica(a, b, c) {
    let discriminante = Math.pow(b, 2) - 4 * a * c;
    if (discriminante < 0) {
        return "No hay soluciones reales";
    }
    let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    return { raiz1, raiz2 };
}
console.log("Soluciones de la ecuación cuadrática:", resolverEcuacionCuadratica(1, -3, 2));