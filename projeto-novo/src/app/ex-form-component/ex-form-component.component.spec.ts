import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFormComponentComponent } from './ex-form-component.component';

describe('ExFormComponentComponent', () => {
  let component: ExFormComponentComponent;
  let fixture: ComponentFixture<ExFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
