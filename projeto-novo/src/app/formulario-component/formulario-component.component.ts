import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent implements OnInit {

  nameField = 'NOME';
  senhaField = 'SENHA';

  constructor() { }

  public testNome(nome: string): boolean {
    // /(^[A-Za-z])\w+/g
    const regEx = new RegExp (/^[A-Za-z]+$/ig);

    return regEx.test(nome);
  }

  public testSenha(senha: string): boolean {
    // tslint:disable-next-line:max-line-length
    const regEx = new RegExp (/^[A-Za-z]*[0-9]+[!-.]+[A-Za-z]*$/ig);

    return regEx.test(senha);
  }

  ngOnInit() {
  }

}
