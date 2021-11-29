import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { ApiServerService } from '../../services/apiServer/api-server.service';


@Component({
  selector: 'app-buscar-municipio',
  templateUrl: './buscar-municipio.component.html',
  styleUrls: ['./buscar-municipio.component.css']
})
export class BuscarMunicipioComponent implements OnInit {
  codigo: string
  nombre: string
  unidadTemperatura: string
  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;
  constructor(private apiService: ApiServerService) { }

  ngOnInit(): void {
    this.apiService.getListaMunicipios("").subscribe(municipios => {
      this.options = municipios.map(mun => mun.nombre);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        //map(value => this._filter(value)), 
        /**
         * Empezamos el autocompletado a partir del 3 input para que el array
         * de los nombres no sea tan grande y no ralentice la página
         */
        map(val => val.length >= 3 ? this._filter(val): [])
      );
    }); 
    
  }

  private _filter(value: string): string[] {
    this.checkMunicipio(value)
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onChange(unidadTemperatura: any) {
    this.unidadTemperatura = unidadTemperatura.target.value;
  }

  private async checkMunicipio(value: string) {
    this.apiService.getListaMunicipios(value).subscribe(municipios => {
      this.codigo = municipios[0].codigo;
      this.nombre = municipios[0].nombre;
    });
    return
  }
}
