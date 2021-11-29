const Prediccion = require('../models/prediccion');

const guardarPrediccion = async function(data) {
    const prediccionDB = await Prediccion.create(data)
    return prediccionDB;
}

const buscarPrediccion = async function(codigo) {
    const prediccionDB = await Prediccion.findOne({codigo: codigo}, {_id: 0, createdAt: 0, codigo: 0})
    return prediccionDB;
}

const actualizarPrediccion = async function(codigo, data) {
    const prediccionDB = await Prediccion.findOneAndUpdate(
        {codigo: codigo}, data, { useFindAndModify: false }
    )
    return prediccionDB;
}

module.exports = {
    guardarPrediccion,
    buscarPrediccion,
    actualizarPrediccion
}