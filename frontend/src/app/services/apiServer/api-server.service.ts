import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Municipio } from 'src/app/models/municipio.model';
import { Prediccion } from 'src/app/models/prediccion.model';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {
  listMunicipios: any
  constructor(private http: HttpClient) {   }

  getPrediccion(codigo: string, unidadTemperatura: string){
    return this.http.get<Prediccion>(`${baseUrl}/obtenerPrediccion/${codigo}/${unidadTemperatura}`);
  }

  getListaMunicipios(municipio: string) {
    return this.http.get<Municipio[]>(`${baseUrl}/obtenerMunicipio/${municipio}`);
  }
}
