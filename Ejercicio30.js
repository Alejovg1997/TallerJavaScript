function numAsteriscos(matriz) {
    let contador = 0;
    for (let fila of matriz) {
        for (let elemento of fila) {
            if (elemento === '*') {
                contador++;
            }
        }
    }
    return contador;
}

// Prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
]));
// Salida esperada: 5
