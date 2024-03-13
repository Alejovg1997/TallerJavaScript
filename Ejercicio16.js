function transcribir(cadenaADN) {
    let complementoARN = '';
    for (let i = 0; i < cadenaADN.length; i++) {
        switch (cadenaADN[i]) {
            case 'G':
                complementoARN += 'C';
                break;
            case 'C':
                complementoARN += 'G';
                break;
            case 'T':
                complementoARN += 'A';
                break;
            case 'A':
                complementoARN += 'U';
                break;
        }
    }
    return complementoARN;
}

// Pruebas
console.log(transcribir("ACGT"));         // Salida: "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // Salida: "UGCACCAGAAUU"
