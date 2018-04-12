import { TimeComponent } from './time/time.component';
import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { ListaTimesComponent } from './lista-times/lista-times.component';
import { JogadorComponent } from './jogador/jogador.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes= [
    { path: '', component: LoginComponent},
    { path: 'lista', component: ListaTimesComponent},
    { path: 'jogador', component: JogadorComponent},
    { path: ':meuTime', component: TimeComponent},
    // { path: 'login', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// @NgModule({
//     imports:[
//         RouterModule.forRoot(appRoutes)
//     ],
//     exports: [RouterModule]
// })
// export class AppRoutingModule{}

//nao esquecer de adicionar query no programa e estudar como elas funcionam
//[queryParams]='{regiao:'todas'}'