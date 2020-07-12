import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMenuComponent } from './listado-menu.component';

describe('ListadoMenuComponent', () => {
  let component: ListadoMenuComponent;
  let fixture: ComponentFixture<ListadoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
