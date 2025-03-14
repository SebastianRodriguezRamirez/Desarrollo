function generarContraseñaSegura() {
    let palabraBase = prompt("Ingrese una palabra base:");
    let caracteresEspeciales = "!@#$%^&*";
    let numeroAleatorio = Math.floor(Math.random() * 100);
    let simboloAleatorio = caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length));

    console.log(`Contraseña generada: ${palabraBase}${numeroAleatorio}${simboloAleatorio}`);
}
