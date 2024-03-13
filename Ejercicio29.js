function numAsteriscos(arreglo) {
    let contador = 0;
    for (let elemento of arreglo) {
        contador += elemento.split('*').length - 1;
    }
    return contador;
}

// Pruebas
console.log(numAsteriscos(['', '*', '', '*'])); // 2
console.log(numAsteriscos(['*', '*', '*'])); // 3
console.log(numAsteriscos([])); // 0
