const mongoose = require('mongoose');

const prediccionSchema = mongoose.Schema({
    "data": [],
},
{
    timestamps: { createdAt: true, updatedAt: true },
    versionKey: false
})

const Municipios = mongoose.model('municipios', prediccionSchema);

module.exports = Municipios;