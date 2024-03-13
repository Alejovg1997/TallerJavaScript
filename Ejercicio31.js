function distancia(str1, str2) {
    let diferencia = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            diferencia++;
        }
    }
    return diferencia;
}

// Pruebas
console.log(distancia("hola", "hola"));     // Salida: 0
console.log(distancia("sol", "tol"));       // Salida: 1
console.log(distancia("carro", "correr"));  // Salida: 3
