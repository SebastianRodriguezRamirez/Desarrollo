
let cadena = prompt("Ingrese una palabra")
function identificarZ(cadena){
for(let i = 0; i < cadena.length; i++ ){
if(cadena[i] == "Z"){
return true;
}
}
return false;
}
console.log(identificarZ(cadena))
