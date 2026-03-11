import PromptSync from "prompt-sync";

const prompt=PromptSync({sigint:true});

function InformeEstadisticasDeportivas(){
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

function MotorDeConfiguracionAvanzada(){
    const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
    const extraConfig = { nivel: 2, tema: "oscuro" };

    function configFinal(...configs){
        try{
            configs.forEach((config, index)=>{
                if (typeof config!=="object" || config === null || Array.isArray(config)) {
                    throw new Error(`El argumento en la posición ${index} no es un objeto válido`);
                }
            });
            const ObjetoMezclado = configs.reduce((a, actual)=>{
                return {...a ,...actual}
            },{});
            return {
                ...ObjetoMezclado,
                validacion: true
            };
        }catch (error){
            console.error("Fallo en la configuración:", error.message);
            return { validacion: false };
        }
    }
    const resultado = configFinal(baseConfig, extraConfig);
    console.log(resultado);
}
function Menu(){
    console.log("Bienvenido a la guia de Operadores Modernos ");
    console.log("\n\n");
    console.log("elija que ejercicio desea provar");
    console.log("\n\n");
    console.log("1.");
    console.log("2.");
    console.log("3.");
    console.log("4.Informe de estadísticas deportivas");
    console.log("5.Motor de configuración avanzada");
    console.log("0.Salir");
    
    console.log("\n\n");
    
}
function main() {
    while (true) {   
        try{
            Menu()
            let entrada=prompt("elija un ejercicio :");
            let opc=parseInt(entrada);
            if (isNaN(opc)) {
                throw new Error("\nError de tipo de Dato deve ser un numero entero\n")
            }else if (opc===4) {
                InformeEstadisticasDeportivas();
            }else if (opc===5) {
                MotorDeConfiguracionAvanzada();
            }else if (opc===0) {
                console.log("\n\nSaliendo del sistema.....");
                break;
            }
        }catch (error){
            console.error(error.message);
            continue;
        }
    }
}
main();