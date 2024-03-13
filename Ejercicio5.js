function likes(number) {
    if (number < 1000) {
        return number.toString();
    } else if (number < 1000000) {
        return Math.floor(number / 1000) + 'K';
    } else {
        return Math.floor(number / 1000000) + 'M';
    }
}

// Ejemplos de uso
console.log(likes(1400));      // Salida: 1K
console.log(likes(34567));     // Salida: 34K
console.log(likes(7456345));   // Salida: 7M
console.log(likes(567));       // Salida: 567
