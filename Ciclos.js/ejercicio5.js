/*function parInp(){

let numero = parseInt(prompt("Ingrese el numero"))
if(numero < 0){

alert("Tu numero es par")
}else if(numero > 0){
alert("Tu numero es inpar")
}
}
parInp()*/

let numero = prompt("Ingrese el numero")
switch(numero % 2){
    case 0:
        alert("Su numero es par")
        break
        case 1:
            alert("Su numero es inpar")
            break
            default:
                alert("Ingrese su numero")
}