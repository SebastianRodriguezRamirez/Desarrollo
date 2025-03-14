/*function numeroDiv(){

    let numero = parseInt(prompt("Ingrese el numero"))
    if(numero % 5 == 0){
    
    alert("Tu numero es divisible por 5")
    }else{
    alert("Tu numero no es divisible por 5")
    }
}
    numeroDiv()*/
    let numero = parseInt(prompt("Ingresa un número:"));

switch (numero % 5) {
    case 0:
        alert("El número es divisible entre 5.");
        break;
    default:
        alert("El número no es divisible entre 5.");
        break;
}