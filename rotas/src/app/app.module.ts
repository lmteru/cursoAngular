import { FormsModule } from '@angular/forms';
import { TimesServiceService } from './shared/times-service.service';
// import { AppRoutingModule } from './app.routing';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaTimesComponent } from './lista-times/lista-times.component';
import { JogadorComponent } from './jogador/jogador.component';
import { TimeComponent } from './time/time.component';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaTimesComponent,
    JogadorComponent,
    TimeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    TimesServiceService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
