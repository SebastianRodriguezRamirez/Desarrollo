let arreglo4 = [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ]
arreglo4[1][1] = arreglo4[2][0];  
console.log("Después de cambiar % por ?:", arreglo4);

arreglo4[3][1] = 9;
console.log("Después de cambiar -8 por 9:", arreglo4);

arreglo4[0][0] = "¡";
console.log("Después de cambiar 50 por ¡:", arreglo4);

arreglo4[1].splice(2, 1);
console.log("Después de eliminar $:", arreglo4);

arreglo4[0].splice(2, 1);
console.log("Después de eliminar 70:", arreglo4);

arreglo4[3].splice(2, 1);
console.log("Después de eliminar -2:", arreglo4);