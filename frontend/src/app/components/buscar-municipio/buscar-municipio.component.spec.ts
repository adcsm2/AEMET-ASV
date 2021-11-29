import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMunicipioComponent } from './buscar-municipio.component';

describe('BuscarMunicipioComponent', () => {
  let component: BuscarMunicipioComponent;
  let fixture: ComponentFixture<BuscarMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarMunicipioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
