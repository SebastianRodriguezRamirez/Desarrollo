function convertirMayusculas(cadena){
    if(typeof cadena !== "string"){
return "Error: el valor que ingreso no es una caena de texto"
    }
    return cadena.toUpperCase()
}



 let texto = "hola mundo"
 let resultado = convertirMayusculas(texto)
 console.log(resultado)