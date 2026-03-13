

export function MotorDeConfiguracionAvanzada(){
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