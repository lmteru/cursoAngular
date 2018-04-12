import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponentComponent } from './greeting-component.component';

describe('GreetingComponentComponent', () => {
  let component: GreetingComponentComponent;
  let fixture: ComponentFixture<GreetingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
