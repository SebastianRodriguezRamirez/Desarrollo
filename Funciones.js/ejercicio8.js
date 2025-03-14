function obtenerPrimeraLetra(nombre){
    if(typeof nombre !== "string" || nombre.length === 0){
return "Error: el valor que ingreso no es una caena de texto"
    }
    return nombre.charAt(0)
}



 let texto = "Sebastian"
 let resultado = obtenerPrimeraLetra(texto)
 console.log(resultado)
 