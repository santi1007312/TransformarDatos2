export function InformeEstadisticasDeportivas(){
    try{
        const jugadores = [
            // { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
            // { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
        ];
        
        if (!Array.isArray(jugadores) || jugadores.length===0) {
            throw new Error("El formato de entrada es invalido");
        }if (!jugadores[0].stats || typeof jugadores[0].stats.puntos !== 'number'){
            throw new Error("La estructura de stats del jugador es incorrecta");
        }
    }catch (error){
        console.error("Error de validación", error.message);
        return null;
    }
}