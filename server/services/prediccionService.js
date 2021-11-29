const AemetService = require('./aemetService');

const obtenerPrediccion = function(prediccionDatos, unidadTemperatura){
    
    const temperatura = prediccionDatos.dia[0].temperatura
    const temperaturaMedia = (temperatura.maxima + temperatura.minima)/2
    
    const date = new Date().getDate() + 1 //Fecha de hoy más uno para buscar el día del que queremos la predicción

    let dayPrediccion
    let precipitacionDia
    for(const day of prediccionDatos.dia){
        dayPrediccion = new Date(day.fecha).getDate()
        if(date == dayPrediccion){
            precipitacionDia = day.probPrecipitacion
        }
    }

    const prediccion = {
        "mediaTemperatura": unidadTemperatura=="G_CEL"? temperaturaMedia : ((temperaturaMedia*9/5) +32),
        "unidadTemperatura": unidadTemperatura,
        "probPrecipitacion": precipitacionDia,
    }
    return prediccion
}

const obtenerPrediccionAPI = async function(codigo, unidad){
    const prediccionMunicipio = await AemetService.obtenerPrediccionDatos(codigo)
    
    if(prediccionMunicipio.data.estado=="404"){
        return null
    }
    const prediccionDatos = await AemetService.obtenerDatos(prediccionMunicipio.data.datos);
    prediccion = this.obtenerPrediccion(prediccionDatos[0].prediccion,unidad)
    prediccionDB = prediccion
    prediccionDB.codigo = codigo
    return prediccionDB
} 

module.exports = {
    obtenerPrediccion,
    obtenerPrediccionAPI
}