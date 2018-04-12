import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesExerciseComponent } from './cheques-exercise.component';

describe('ChequesExerciseComponent', () => {
  let component: ChequesExerciseComponent;
  let fixture: ComponentFixture<ChequesExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequesExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
