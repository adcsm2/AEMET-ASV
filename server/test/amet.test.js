const axios = require('axios');

const AemetService = require('../services/aemetService');
const listaMunicipios = require('./config/listaMunicipios.json')

//jest.mock("axios");
jest.mock('axios', () => jest.fn(() => Promise.resolve('test')));

describe('Llamadas api aemet', () => {
  it('Llamada a listar municipios', async () => {
    const response = await AemetService.listarMunicipios();
    expect(axios).toHaveBeenCalled();
    expect(response).toEqual('test');
  });
  it('Llamada a obtener datos', async () => {
    const response = await AemetService.obtenerDatos("url");
    expect(axios).toHaveBeenCalled();
  });
  it('Llamada a obtener prediccion datos', async () => {
    const response = await AemetService.obtenerPrediccionDatos("03002");
    expect(axios).toHaveBeenCalled();
    expect(response).toEqual('test');
  });
});