function removerCeros(arreglo) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] !== 0) {
            nuevoArreglo.push(arreglo[i]);
        }
    }
    return nuevoArreglo;
}

// Pruebas
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // []
