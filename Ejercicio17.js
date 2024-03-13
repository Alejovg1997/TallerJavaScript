function capitalizar(texto) {
    if (texto.length === 0) {
        return texto;
    }
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Pruebas
console.log(capitalizar("pedro"));       // Salida: "Pedro"
console.log(capitalizar("hola mundo"));  // Salida: "Hola mundo"
console.log(capitalizar(""));            // Salida: ""
