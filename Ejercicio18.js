function capitalizar(texto) {
    if (texto.length === 0) {
        return texto;
    }
    return texto.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Pruebas
console.log(capitalizar("hola mundo"));      // Salida: "Hola Mundo"
console.log(capitalizar("make it real"));    // Salida: "Make It Real"
console.log(capitalizar(""));                // Salida: ""
