function facturacion() {
    let monto = parseFloat(prompt("Ingrese el monto total:"));
    let medioPago = prompt("Ingrese el medio de pago (E = Efectivo, D = Débito, C = Crédito):").toUpperCase();
    let descuento = 0;

    if (monto >= 200 && monto <= 400) {
        if (medioPago === "E") descuento = 0.30;
        if (medioPago === "D") descuento = 0.20;
        if (medioPago === "C") descuento = 0.10;
    } else if (monto > 400) {
        descuento = 0.40;
    }

    console.log(`Monto final: ${monto - (monto * descuento)}`);
}