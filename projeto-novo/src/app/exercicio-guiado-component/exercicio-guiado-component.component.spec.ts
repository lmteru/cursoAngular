import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioGuiadoComponentComponent } from './exercicio-guiado-component.component';

describe('ExercicioGuiadoComponentComponent', () => {
  let component: ExercicioGuiadoComponentComponent;
  let fixture: ComponentFixture<ExercicioGuiadoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioGuiadoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioGuiadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
