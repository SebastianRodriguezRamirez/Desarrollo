/*function vereificarIva (productos){
if( productos === "lentejas" || productos === "arroz"){
console.log(`${productos}: Este producto no contiene Iva`)
}else if(productos === "vino" || productos === "crema"){

    console.log(`${productos}: Este producto contiene Iva`)
}
}
vereificarIva("lentejas")
vereificarIva("arroz")
vereificarIva("vino")
vereificarIva("crema")*/
let producto = prompt("Ingrese uno de los productos para verificar si contiene iva:( lentejas, arroz, vino o crema ).")
switch(producto){
    case "lentejas":
    case "arroz":
        alert("Este producto no contiene IVA")
        break
        case "vino":
        case "crema":
        alert("Este producto contiene IVA")
        break
        default:
            alert("Producto no reconocido")
            break
}
