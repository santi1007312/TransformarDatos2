function fusionarColecciones(lista1, lista2) {
    try {
        // Validamos que ambos sean arreglos
        if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
            throw new Error("Ambos parámetros deben ser arreglos (arrays).");
        }

        // Fusionamos usando spread sin mutar las originales
        const coleccionFinal = [...lista1, ...lista2];
        
        return coleccionFinal;

    } catch (error) {
        // Retornamos el error personalizado
        return `Error de validación: ${error.message}`;
    }
}

const frutas = ["manzana", "pera"];
const verduras = ["tomate", "lechuga"];

console.log(fusionarColecciones(frutas, verduras)); // ["manzana", "pera", "tomate", "lechuga"]
console.log(fusionarColecciones(frutas, "no soy un array")); // "Error de validación: Ambos parámetros deben ser arreglos (arrays)."