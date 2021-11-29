const express = require('express');
const router = express.Router();

const PrediccionDB = require('../database/prediccion');
const MunicipiosDB = require('../database/municipios');
const AemetService = require('../services/aemetService');
const PrediccionService = require('../services/prediccionService');
const MunicipioService = require('../services/municipioService');


router.get('/obtenerMunicipio/:municipio?', async (req, res)=>{
    let municipiosEncontrados
    let listaMunicipios = await MunicipiosDB.buscarMunicipios();
    
    const municipio = req.params.municipio

    //Comprobamos que exista una prediccion en nuestra base de datos y que además se de menos de 7 días
    if(listaMunicipios){
        const datePrediccion = listaMunicipios.updatedAt.getDate()
        const date = new Date().getDate()
        const diffDate = date - datePrediccion
        //Si la lista que tenemos es de hace 7 días la actualizamos
        if(diffDate >= 7){
            listaMunicipiosAPI = await AemetService.listarMunicipios();
            await MunicipiosDB.actualizarMunicipios(listaMunicipios._id, listaMunicipiosAPI.data)
            listaMunicipios = listaMunicipiosAPI
        }
    }
    else{
        //Si no existe lista la obtenemos de la api de aemet y la guardamos en nuestra BD
        listaMunicipiosAPI = await AemetService.listarMunicipios();
        await MunicipiosDB.guardarMunicipios(listaMunicipiosAPI.data)
        listaMunicipios = listaMunicipiosAPI
    }

    /**
     * Comprobamos si se ha pasado un municipio que buscar
     * Si se ha pasado un municipio se busca en la lista
     * Si no se ha pasado un municpio se devuelve toda la lista
     */
    if(municipio){
        municipiosEncontrados = MunicipioService.buscarMunicipio(listaMunicipios.data, municipio)
    }
    else{
        municipiosEncontrados = listaMunicipios.data
    }
    municipiosEncontrados = MunicipioService.ordenarMunicipios(municipiosEncontrados)
    res.json(municipiosEncontrados)
})

router.get('/obtenerPrediccion/:codMunicipio/:unidad?', async (req, res)=>{
    let prediccionDB //prediccion que vamos a guardar en BD
    let prediccion //prediccion que vamos a devolver
    
    const codMunicipio = req.params.codMunicipio
    let unidad = req.params.unidad
    
    if(!unidad || (unidad != "G_CEL" && unidad != "G_FAH")){
        unidad = "G_CEL"
    }   

    const checkPrediccion = await PrediccionDB.buscarPrediccion(codMunicipio)

    //Comprobamos que exista una prediccion en nuestra base de datos y que además se de menos de 7 días
    if(checkPrediccion){
        const datePrediccion = checkPrediccion.updatedAt.getDate()
        const date = new Date().getDate()
        const diffDate = date - datePrediccion
        if(diffDate <= 1){
            prediccionDB = await PrediccionService.obtenerPrediccionAPI(codMunicipio, unidad)
            await PrediccionDB.actualizarPrediccion(codMunicipio, prediccionDB)
            prediccion = prediccionDB
        }
        else{
            prediccionDB = await PrediccionService.obtenerPrediccionAPI(codMunicipio, unidad)
            prediccion = checkPrediccion
        }
    }
    else{
        //Si no existe la prediccion la obtenemos de la api de aemet y la guardamos en nuestra BD
        prediccionDB = await PrediccionService.obtenerPrediccionAPI(codMunicipio, unidad)
        if(!prediccionDB){
            prediccion = {
                codigo: "404",
                mensaje: "codigo "+codMunicipio+" no encontrado"
            }
        }
        else{
            await PrediccionDB.guardarPrediccion(prediccionDB)
            prediccion = prediccionDB
        }
    }
    res.json(prediccion)
})


module.exports = router;