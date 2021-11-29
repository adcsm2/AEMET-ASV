import { Component, Input, OnInit } from '@angular/core';

import { ApiServerService } from '../../services/apiServer/api-server.service';
import { Prediccion } from 'src/app/models/prediccion.model';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent implements OnInit {
  @Input() codigo: string;
  @Input() nombre: string;
  @Input() unidadTemperatura: string;
  prediccion: Prediccion;

  constructor(private apiService: ApiServerService) { }

  ngOnInit(): void {}

  ngOnChanges() {
    this.apiService.getPrediccion(this.codigo, this.unidadTemperatura).subscribe(prediccionAPI => {
      if(prediccionAPI.codigo != "404"){
        this.prediccion = prediccionAPI
        this.prediccion.nombre = this.nombre
        this.prediccion.date = new Date()
        this.prediccion.unidadTemperatura = prediccionAPI.unidadTemperatura == "G_CEL" ? "°C" : "°F"
      }
    });
  }
}
