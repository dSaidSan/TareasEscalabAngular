import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaUnoComponent } from './tarea-uno.component';

describe('TareaUnoComponent', () => {
  let component: TareaUnoComponent;
  let fixture: ComponentFixture<TareaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
