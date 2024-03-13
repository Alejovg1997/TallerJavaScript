function terminanConS(arreglo) {
    return arreglo.filter(palabra => palabra.toLowerCase().endsWith('s'));
}

// Pruebas
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // Salida: ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // Salida: []
console.log(terminanConS([])); // Salida: []
