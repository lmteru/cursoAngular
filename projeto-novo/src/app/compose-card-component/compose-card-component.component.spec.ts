import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeCardComponentComponent } from './compose-card-component.component';

describe('ComposeCardComponentComponent', () => {
  let component: ComposeCardComponentComponent;
  let fixture: ComponentFixture<ComposeCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
