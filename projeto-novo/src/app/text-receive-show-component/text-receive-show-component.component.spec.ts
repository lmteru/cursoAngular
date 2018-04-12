import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextReceiveShowComponentComponent } from './text-receive-show-component.component';

describe('TextReceiveShowComponentComponent', () => {
  let component: TextReceiveShowComponentComponent;
  let fixture: ComponentFixture<TextReceiveShowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextReceiveShowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextReceiveShowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
