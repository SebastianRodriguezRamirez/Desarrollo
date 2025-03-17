let usuarios = {
    183344: "habilitado",
    354625: "habilitado",
    6762442: "inhabilitado",
    88552: "inhabilitado",
    438276: "habilitado"
};

let contador = 0;
for (let id in usuarios) {
    if (usuarios[id] === "habilitado") {
        contador++;
    }
}

console.log("Cantidad de usuarios habilitados:", contador);
