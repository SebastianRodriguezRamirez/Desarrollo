function permitirEntrada() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let estatura = parseInt(prompt("Ingrese su estatura en cm:"));
    let permisoParental = prompt("¿Tiene permiso parental? (sí/no)").toLowerCase() === "sí";

    if (edad >= 18 && estatura > 150) console.log("Acceso permitido");
    else if (edad < 18 && permisoParental) console.log("Acceso permitido con permiso parental");
    else console.log("Acceso denegado");
}