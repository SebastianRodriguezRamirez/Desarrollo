    /*let angulo1 = parseFloat(prompt("Ingresa el primer angulo:"))
    let angulo2 = parseFloat(prompt("Ingresa el segundo angulo:"))
    let angulo3 = parseFloat(prompt("Ingresa el tercer angulo:"))
 
    if(angulo1 > 0 && angulo2 > 0 && angulo3 > 0 && angulo1 + angulo2 + angulo3 === 180){
        alert("Los angulos corresponde a un Triangulo")
    }else{
        alert("Los angulos no corresponden a un Triangulo")
    }*/

    let angulo1 = parseInt(prompt("Ingresa el primer angulo:"))
    let angulo2 = parseInt(prompt("Ingresa el segundo angulo:"))
    let angulo3 = parseInt(prompt("Ingresa el tercer angulo:"))

switch(true){
case(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0 ):
alert("Los angulos corresponden a un triangulo")
break
case (angulo1 + angulo2 + angulo3 !== 180):
    alert("Los angulos no corresponden a un Triangulo")
    break
    default:
        alert("Los angulos corresponden a un triangulo")
}