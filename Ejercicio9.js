function numeroDeAes(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso
console.log(numeroDeAes("Abracadabra"));
