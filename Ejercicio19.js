function max(arreglo) {
    if (arreglo.length === 0) {
        return undefined;
    }
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}

// Pruebas
console.log(max([3, 9, 6]));            // Salida: 9
console.log(max([67, 35, 54, 26]));     // Salida: 67
console.log(max([5, 9, 2, 4, 5, 7]));    // Salida: 9
