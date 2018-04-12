import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.css']
})
export class TabelaFuncionariosComponent implements OnInit {

  constructor() {}

  setSede:string = 'SP';
  criterio:string = "";

  funcionarios = [
    {
      nome: "Maiar",
      sobrenome: "Balrog",
      id: "11111",
      salario: 1200,
      sede: "SP"
    },
    {
      nome: "Bilbo",
      sobrenome: "Baggins",
      id: "11112",
      salario: 1400,
      sede: "SP"
    },
    {
      nome: "Balrog",
      sobrenome: "Maiar",
      id: "11121",
      salario: 1300,
      sede: "BH"
    },
    {
      nome: "Azmodan",
      sobrenome: "Primordial",
      id: "11312",
      salario: 2200,
      sede: "BH"
    },
    {
      nome: "Aurelio",
      sobrenome: "Primus",
      id: "14111",
      salario: 1500,
      sede: "SP"
    },
    {
      nome: "Ristreto",
      sobrenome: "DolceGusto",
      id: "51112",
      salario: 7200,
      sede: "SP"
    },
    {
      nome: "Gandalf",
      sobrenome: "White",
      id: "51112",
      salario: 7200,
      sede: "RJ"
    }
  ];

  sedes:string[]=[];
  funcionarioSelc;

  trocaSede(){
    if(this.setSede == 'SP'){
      this.setSede = 'BH'
    }else{
      this.setSede = 'SP';
    }
  }

  mostraSede(){
    return this.setSede;
  }

  trocaSelected(sede){
    console.log(sede);
    this.setSede = sede;
  }

  ngOnInit() {
    this.iniciaSedeArray();
    this.funcionarioSelc = this.funcionarios;
  }

  iniciaSedeArray(){
    for(let funcionario of this.funcionarios){
      if(this.sedes.length>0){
        if(!this.sedes.includes(funcionario.sede)){
          this.sedes.push(funcionario.sede);
        }
      }
      else
        this.sedes.push(funcionario.sede);
    }
  }

  aplicaFiltroNome(){
    this.funcionarioSelc = [];
    if(this.criterio!=""){
      for(let funcionario of this.funcionarios){
        if(funcionario.nome.toLowerCase().includes(this.criterio.toLowerCase())){
          this.funcionarioSelc.push(funcionario);
        }
      }
    }else{
      this.funcionarioSelc = this.funcionarios;
    }
  }//

  aplicaFiltroSobreNome(){
    this.funcionarioSelc = [];
    if(this.criterio!=""){
      for(let funcionario of this.funcionarios){
        if(funcionario.sobrenome.toLowerCase().includes(this.criterio.toLowerCase())){
          this.funcionarioSelc.push(funcionario);
        }
      }
    }else{
      this.funcionarioSelc = this.funcionarios;
    }
  }//

}
