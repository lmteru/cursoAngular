import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDiretivaComponent } from './teste-diretiva.component';

describe('TesteDiretivaComponent', () => {
  let component: TesteDiretivaComponent;
  let fixture: ComponentFixture<TesteDiretivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteDiretivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteDiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
