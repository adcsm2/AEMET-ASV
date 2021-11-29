const MunicipioService = require('../services/municipioService');
const listaMunicipios = require('./config/listaMunicipios.json')


test('se obtienen los municipios que contengan "agost" en el nombre', () => {

  var expected = [
    {
      codigo: "03002",
      nombre: "Agost"
    }
  ]
  expect(MunicipioService.buscarMunicipio(listaMunicipios, "agost")).toStrictEqual(expected)
});