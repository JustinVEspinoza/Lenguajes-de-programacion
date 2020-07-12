import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGuiaDespachoComponent } from './agregar-guia-despacho.component';

describe('AgregarGuiaDespachoComponent', () => {
  let component: AgregarGuiaDespachoComponent;
  let fixture: ComponentFixture<AgregarGuiaDespachoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarGuiaDespachoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarGuiaDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
