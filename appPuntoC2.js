const inventario = ["cámara", "trípode", "micrófono"];

function agregarInventario(lista, nuevoItem) {

    const nuevaLista = [...lista, nuevoItem];

    console.log(`Mensaje: Se ha registrado "${nuevoItem}". El inventario ahora tiene ${nuevaLista.length} ítems.`);

    return nuevaLista;
}

const inventarioActualizado = agregarInventario(inventario, "luces LED");

// Verificación de inmutabilidad
console.log("Inventario Original (Sigue igual):", inventario);
console.log("Inventario Nuevo:", inventarioActualizado);