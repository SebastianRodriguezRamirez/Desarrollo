let usuarios = {};

function registrarUsuario() {
    let documento = prompt("Ingrese su documento:");
    let nombres = prompt("Ingrese sus nombres:");
    let apellidos = prompt("Ingrese sus apellidos:");
    let edad = prompt("Ingrese su edad:");
    let peso = prompt("Ingrese su peso:");
    let estatura = prompt("Ingrese su estatura:");

    usuarios[documento] = {
        nombres: nombres,
        apellidos: apellidos,
        edad: edad,
        peso: peso,
        estatura: estatura
    };

    console.log("Registro exitoso.");
}

function consultarUsuario() {
    let documento = prompt("Ingrese el documento para consultar:");
    if (usuarios[documento]) {
        console.log("Información del usuario:", usuarios[documento]);
    } else {
        console.log("Usuario no encontrado.");
    }
}


registrarUsuario();  
consultarUsuario();  
