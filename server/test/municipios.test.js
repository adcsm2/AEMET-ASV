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

test('se obtienen los municipios que contengan "agost" en el nombre', () => {
  const listaOrdenar = [
    {
      "codigo": "28073",
      "nombre": "Humanes de Madrid"
    },
    {
      "codigo": "28079",
      "nombre": "Madrid"
    },
  ]
  var expected = [
    {
      "codigo": "28079",
      "nombre": "Madrid"
    },
    {
      "codigo": "28073",
      "nombre": "Humanes de Madrid"
    },
  ]
  expect(MunicipioService.ordenarMunicipios(listaOrdenar)).toStrictEqual(expected)
});