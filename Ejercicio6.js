function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "fizzbuzz";
    } else if (number % 3 === 0) {
        return "fizz";
    } else if (number % 5 === 0) {
        return "buzz";
    } else {
        return number.toString();
    }
}

// Ejemplos de uso
console.log(fizzBuzz(9));    // Salida: fizz
console.log(fizzBuzz(10));   // Salida: buzz
console.log(fizzBuzz(15));   // Salida: fizzbuzz
console.log(fizzBuzz(7));    // Salida: 7
