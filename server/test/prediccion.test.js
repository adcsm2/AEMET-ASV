const PrediccionService = require('../services/prediccionService');
const prediccionDatos = require('./config/prediccionDatos.json')


test('Se genera la prediccion ', () => {

  var expected = 
  {
    "mediaTemperatura": 12,
    "unidadTemperatura": "G_CEL",
  }

  expect(PrediccionService.obtenerPrediccion(prediccionDatos, "G_CEL")).toMatchObject(expected)
});