import { Component} from '@angular/core';

@Component({
  selector: 'app-greeting-component',
  templateUrl: './greeting-component.component.html',
  styleUrls: ['./greeting-component.component.css']
})

export class GreetingComponentComponent {

  constructor() { }

  link = 'https://angular.io/guide/cheatsheet';
  vBool = false;

  imagem1 = {
    txt: 'esse é o texto de teste da imagem 1',
    src: './assets/fantasy.jpg'
  };

  imagem2 = {
    txt: 'esse é o texto de teste da imagem 2',
    src: './assets/mask.jpg'
  };

  public nomeInteiro(): string {
    const Pessoa = {
      nomeCompleto: 'Rafael Teru',
      masc: true
    };

    let texto: string;

    if ( Pessoa.masc === true ) {
      texto = 'Olá! Senhor ' + Pessoa.nomeCompleto;
    } else {
      texto = 'Olá! Senhora ' + Pessoa.nomeCompleto;
    }

    return texto;
  }

  public ficaFalso() {
    this.vBool = true;
  }
}
