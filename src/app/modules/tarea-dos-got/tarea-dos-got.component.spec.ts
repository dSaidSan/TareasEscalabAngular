import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDosGotComponent } from './tarea-dos-got.component';

describe('TareaDosGotComponent', () => {
  let component: TareaDosGotComponent;
  let fixture: ComponentFixture<TareaDosGotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaDosGotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDosGotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
