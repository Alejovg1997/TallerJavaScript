function empiezanConA(arreglo) {
    return arreglo.filter(palabra => palabra.toLowerCase().startsWith('a'));
}

// Pruebas
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // Salida: ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // Salida: []
console.log(empiezanConA([])); // Salida: []
