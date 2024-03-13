function palabrasANumeros(arreglo) {
    const numerosEnPalabras = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };
    
    return arreglo.map(palabra => {
        if (palabra in numerosEnPalabras) {
            return numerosEnPalabras[palabra];
        } else {
            return -1;
        }
    });
}

// Pruebas
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]
