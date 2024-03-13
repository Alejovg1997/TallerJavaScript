// FUNCION BMI

function bmi(peso, altura) {
    let ResultadoBmi = peso / (altura ** 2);
    
    if (ResultadoBmi < 18.5) {
        return "Bajo de peso";
    } else if (ResultadoBmi >= 18.5 && ResultadoBmi <= 24.9) {
        return "Normal";
    } else if (ResultadoBmi >= 25 && ResultadoBmi <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

// código de prueba
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"
