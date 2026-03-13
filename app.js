import { crearEstudiante, fusionarCatalogos, catalogoA, catalogoB, procesarCompra,InformeEstadisticasDeportivas,MotorDeConfiguracionAvanzada } from "./index.js";

let bandera = true;

while (bandera) {
    let eleccion = prompt(
        "MENÚ DE EJERCICIOS\n\n" +
        "1. Crear Registro de Estudiante\n" +
        "2. Fusionar Catálogos Digitales\n" +
        "3. Procesamiento de Compras\n" +
        "4. Informe de estadísticas deportivas\n"+
        "5. Motor de configuración avanzada\n"+
        "0. Salir\n\n" +
        "Escribe el número del ejercicio:"
    );

    if (eleccion === "1") {
        crearEstudiante("Santiago", 4.0, 5.0, 3.5, 4.2);
    }
    else if (eleccion === "2") {
        fusionarCatalogos(catalogoA, catalogoB);
    }
    else if (eleccion === "3") {
        procesarCompra();
    }else if (eleccion==="4") {
        InformeEstadisticasDeportivas();
    }else if (eleccion==="5") {
        MotorDeConfiguracionAvanzada();
    }
    else if (eleccion === "0") {
        console.log("Saliendo...");
        bandera = false;
    }
    else {
        console.log("Opción no válida.");
    }
}
