function numerosAPalabras(arreglo) {
    const numerosEnPalabras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    return arreglo.map(numero => numerosEnPalabras[numero]);
}

// Pruebas
console.log(numerosAPalabras([0, 1, 2, 3, 4])); // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])); // ["cinco", "seis", "siete", "ocho", "nueve"]
