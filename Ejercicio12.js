function multiplicarArreglo(arreglo) {
    if (arreglo.length === 0) {
        return 1; // Si el arreglo está vacío, se retorna 1
    }
    
    let resultado = 1;
    for (let i = 0; i < arreglo.length; i++) {
        resultado *= arreglo[i];
    }
    return resultado;
}

// Pruebas
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1
