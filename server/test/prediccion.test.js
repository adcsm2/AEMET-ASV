const PrediccionService = require('../services/prediccionService');
const prediccionDatos = require('./config/prediccionDatos.json')


test('Se genera la prediccion ', () => {

  var expected = 
    {
      "mediaTemperatura": 12,
      "unidadTemperatura": "G_CEL",
      "probPrecipitacion": [
        {
          "periodo": "00-24", 
          "value": 10
        }, 
        {
          "periodo": "00-12", 
          "value": 0
        }, 
        {
          "periodo": "12-24", 
          "value": 10
        }, 
        {
          "periodo": "00-06", 
          "value": 0
        }, 
        {
          "periodo": "06-12", 
          "value": 0
        }, 
        {
          "periodo": "12-18", 
          "value": 10
        }, 
        {
          "periodo": "18-24", 
          "value": 0
        }
      ]
    }

  expect(PrediccionService.obtenerPrediccion(prediccionDatos, "G_CEL")).toStrictEqual(expected)
});