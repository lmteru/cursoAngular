import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparadorComponentComponent } from './separador-component.component';

describe('SeparadorComponentComponent', () => {
  let component: SeparadorComponentComponent;
  let fixture: ComponentFixture<SeparadorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparadorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
