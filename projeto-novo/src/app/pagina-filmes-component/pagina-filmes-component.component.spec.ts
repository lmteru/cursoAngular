import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFilmesComponentComponent } from './pagina-filmes-component.component';

describe('PaginaFilmesComponentComponent', () => {
  let component: PaginaFilmesComponentComponent;
  let fixture: ComponentFixture<PaginaFilmesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaFilmesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaFilmesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
