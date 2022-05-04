import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDosPaisesComponent } from './tarea-dos-paises.component';

describe('TareaDosPaisesComponent', () => {
  let component: TareaDosPaisesComponent;
  let fixture: ComponentFixture<TareaDosPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaDosPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDosPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
