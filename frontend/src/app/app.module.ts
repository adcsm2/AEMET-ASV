import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrediccionComponent } from './components/prediccion/prediccion.component';
import { BuscarMunicipioComponent } from './components/buscar-municipio/buscar-municipio.component';


@NgModule({
  declarations: [
    AppComponent,
    PrediccionComponent,
    BuscarMunicipioComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
