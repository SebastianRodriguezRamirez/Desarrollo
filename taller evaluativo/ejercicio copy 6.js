let persona = { edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez" };

console.log("Valores del objeto persona:");
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

persona.peso = 77;

persona["edad"] = 21;

delete persona.apellidos;

console.log("Objeto modificado:", persona);
