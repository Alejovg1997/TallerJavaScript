function password(string) {
    return string.toLowerCase()
                 .replace(/ /g, '')
                 .replace(/a/g, '4')
                 .replace(/e/g, '3')
                 .replace(/i/g, '1')
                 .replace(/o/g, '0');
}

// Pruebas
console.log(password("hola"));               // Salida: "h0l4"
console.log(password("esta es una prueba")); // Salida: "3st43sun4pru3b4"
console.log(password(""));                   // Salida: ""
