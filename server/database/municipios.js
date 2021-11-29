const Municipios = require('../models/municipios');

const guardarMunicipios = async function(data) {
    const municipioDB = await Municipios.create(data)
    return municipioDB;
}

const buscarMunicipios = async function() {
    const municipioDB = await Municipios.findOne()
    return municipioDB;
}

const actualizarMunicipios = async function(id, data) {
    const municipioDB = await Municipios.findByIdAndUpdate(id, data[0], { useFindAndModify: false })
    return municipioDB;
}

module.exports = {
    guardarMunicipios,
    buscarMunicipios,
    actualizarMunicipios
}