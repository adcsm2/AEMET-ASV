const mongoose = require('mongoose');

const prediccionSchema = mongoose.Schema({
    "mediaTemperatura": String,
    "unidadTemperatura": String,
    "probPrecipitacion": Array,
    "codigo": String,
    "nombre": String,
},
{
    timestamps: { createdAt: true, updatedAt: true },
    versionKey: false
})

const Prediccion = mongoose.model('predicciones', prediccionSchema);

module.exports = Prediccion;