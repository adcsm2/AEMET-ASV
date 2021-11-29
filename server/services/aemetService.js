const axios = require('axios')
const apiKey = process.env.API_KEY

const listarMunicipios = async function() {
    const response = await axios({
        url: 'https://opendata.aemet.es/opendata/api/maestro/municipios?api_key='+apiKey,
        method: "GET",
    }).catch(error => {
        console.log(error);
    });
    return response
}

/**
 * 
 * @param {*} municipio codigo de municipio
 * @returns 
 */
const obtenerPrediccionDatos = async function(municipio) {
    const response = await axios({
        url: 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/'+municipio+'?api_key='+apiKey,
        method: "GET",
    }).catch(error => {
        console.log(error);
    });
    return response
}

const obtenerDatos = async function(path) {
    const response = await axios({
        url: path,
        method: "GET",
    }).catch(error => {
        console.log(error);
    });
    return response.data
}

module.exports = {
    listarMunicipios,
    obtenerPrediccionDatos,
    obtenerDatos
}