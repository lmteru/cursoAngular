import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';

import { HelloWorldComponent } from './helloWord/helloWord.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { GreetingComponentComponent } from './greeting-component/greeting-component.component';
import { PaginaFilmesComponentComponent } from './pagina-filmes-component/pagina-filmes-component.component';
import { PfMenuComponentComponent } from './pf-menu-component/pf-menu-component.component';
import { PfMelhoresComponentComponent } from './pf-melhores-component/pf-melhores-component.component';
import { PfFavoritosComponentComponent } from './pf-favoritos-component/pf-favoritos-component.component';
import { ExercicioGuiadoComponentComponent } from './exercicio-guiado-component/exercicio-guiado-component.component';
import { TextReceiveShowComponentComponent } from './text-receive-show-component/text-receive-show-component.component';
import { ExFormComponentComponent } from './ex-form-component/ex-form-component.component';
import { ComposeCardComponentComponent } from './compose-card-component/compose-card-component.component';
import { TwowayDatabindingComponentComponent } from './twoway-databinding-component/twoway-databinding-component.component';
import { SeparadorComponentComponent } from './separador-component/separador-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { CreateNameComponentComponent } from './create-name-component/create-name-component.component';
import { DoisBtnComponent } from './dois-btn/dois-btn.component';
import { BtFilhoComponent } from './bt-filho/bt-filho.component';
import { WrapperComponentComponent } from './wrapper-component/wrapper-component.component';
import { TimerComponentComponent } from './timer-component/timer-component.component';
import { NgIfComponentComponent } from './ng-if-component/ng-if-component.component';
import { TabelaFuncionariosComponent } from './tabela-funcionarios/tabela-funcionarios.component';
import { TesteDiretivaComponent } from './shared/teste-diretiva/teste-diretiva.component';
import { TesteDiretivaDirective } from './teste-diretiva.directive';
import { DiretivaSegundaDirective } from './diretiva-segunda.directive';
import { PrivateRenderTesteComponent } from './private-render-teste/private-render-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TestComponentComponent,
    InterpolacaoComponent,
    GreetingComponentComponent,
    PaginaFilmesComponentComponent,
    PfMenuComponentComponent,
    PfMelhoresComponentComponent,
    PfFavoritosComponentComponent,
    ExercicioGuiadoComponentComponent,
    TextReceiveShowComponentComponent,
    ExFormComponentComponent,
    ComposeCardComponentComponent,
    TwowayDatabindingComponentComponent,
    SeparadorComponentComponent,
    FormularioComponentComponent,
    DoisBtnComponent,
    BtFilhoComponent,
    WrapperComponentComponent,
    TimerComponentComponent,
    NgIfComponentComponent,
    TabelaFuncionariosComponent,
    TesteDiretivaComponent,
    TesteDiretivaDirective,
    DiretivaSegundaDirective,
    PrivateRenderTesteComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
