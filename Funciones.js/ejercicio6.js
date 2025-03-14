function esVocal(){
    let vocal = prompt("Ingrese una vocal:").toLowerCase()
    if(vocal.length == 1 && /[a-z]/.test(vocal)){
        return alert("aeiou".includes(vocal)? " es una vocal" : "es una consonante")
    }
}
esVocal()