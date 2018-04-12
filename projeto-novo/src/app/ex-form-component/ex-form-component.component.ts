import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-form-component',
  templateUrl: './ex-form-component.component.html',
  styleUrls: ['./ex-form-component.component.css']
})
export class ExFormComponentComponent implements OnInit {

  pessoa: {
    nome: string,
    sexo: boolean
  };
  aux: boolean;
  constructor() {
    this.aux = false;
  }

  atualiza(nome: string, sexo: boolean) {
    this.pessoa.nome = nome;
    this.pessoa.sexo = sexo;
  }

  tratamento(nome: string, sexo: string): string {
    let resposta: string;

    if (sexo === '1') {
      resposta = 'Bem Vindo, Senhor ' + nome;
    } else {
      resposta = 'Bem Vinda, Senhorita ' + nome;
    }

    if ( nome === '') {
      resposta = '';
    }

    return(resposta);
  }

  public isAux(): boolean {
    return this.aux;
  }

  public invertAux() {
    this.aux = !this.aux;
  }

  public inverte(x: boolean): boolean {
    return !x;
  }

  ngOnInit() {
  }
}
