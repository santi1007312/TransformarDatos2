function evaluar(...valores) {
    try {
        // Verificamos si cada valor es un número
        valores.forEach(v => {
            if (typeof v !== 'number' || Number.isNaN(v)) {
                throw new Error(`El valor "${v}" no es un número válido.`);
            }
        });

        // Creamos una nueva lista (copia) usando spread
        const listaCopia = [...valores];
    
        // Calculamos el promedio
        const suma = listaCopia.reduce((acc, curr) => acc + curr, 0);
        const promedio = suma / listaCopia.length;

        return `El promedio es: ${promedio}`;

    } catch (error) {
        return `Error detectado: ${error.message}`;
    }
}

console.log(evaluar(10, 20, 30)); // "El promedio es: 20"
console.log(evaluar(10, "hola", 30)); // "Error detectado: El valor "hola" no es un número válido."