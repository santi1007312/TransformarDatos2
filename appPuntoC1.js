function procesarPedido(pedido, ...extras) {
    const { cliente, producto, cantidad } = pedido;

    return {
        nombreCliente: cliente,
        articulo: producto,
        unidades: cantidad,
        adicionales: extras, // Aquí se guardan los parámetros rest
        estado: "Procesado"
    };
}

const miPedido = {
    cliente: "Santiago",
    producto: "Camiseta Streetwear",
    cantidad: 2
};

const resultado = procesarPedido(miPedido, "Empaque de regalo", "Envío express", "Pegatina gratis");

console.log("--- Resumen del Pedido ---");
console.table(resultado);