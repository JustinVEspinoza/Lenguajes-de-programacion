import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGuiaDespachoComponent } from './listado-guia-despacho.component';

describe('ListadoGuiaDespachoComponent', () => {
  let component: ListadoGuiaDespachoComponent;
  let fixture: ComponentFixture<ListadoGuiaDespachoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoGuiaDespachoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoGuiaDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
