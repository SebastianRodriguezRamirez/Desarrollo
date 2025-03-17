let supermercado = {
    Papa: 2000,
    Arroz: 5000,
    Lentejas: 4500,
    Aceite: 12000
};

console.log("Productos y precios:");
for (let producto in supermercado) {
    console.log(`${producto}: ${supermercado[producto]}`);
}
