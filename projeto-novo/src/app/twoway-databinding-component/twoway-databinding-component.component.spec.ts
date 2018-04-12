import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayDatabindingComponentComponent } from './twoway-databinding-component.component';

describe('TwowayDatabindingComponentComponent', () => {
  let component: TwowayDatabindingComponentComponent;
  let fixture: ComponentFixture<TwowayDatabindingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowayDatabindingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayDatabindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
