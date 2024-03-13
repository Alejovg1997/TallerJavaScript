function sumarRango(numInicial, numFinal) {
    let suma = 0;
    for (let i = numInicial; i <= numFinal; i++) {
        suma += i;
    }
    return suma;
}


console.log(sumarRango(1, 5)); 
