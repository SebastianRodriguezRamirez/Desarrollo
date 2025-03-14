function generarContraseña() {
    let n = parseInt(prompt("Ingrese la longitud de la contraseña:"));
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let contraseña = "";
    for (let i = 0; i < n; i++) {
        contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    console.log(`Contraseña generada: ${contraseña}`);
}