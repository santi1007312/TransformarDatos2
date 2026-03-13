const ventas = [
    { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
    { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

const calcularTotalPrimerProducto = (lista) => {
    // Desestructuración profunda: 
    // Obtenemos el primer elemento [primer] y de él sacamos precio y unidades
    const [{ detalles: { precio, unidades } }] = lista;

    return `Total vendido de ${lista[0].producto}: $${precio * unidades}`;
};

console.log(calcularTotalPrimerProducto(ventas)); // "Total vendido de teclado: $150"