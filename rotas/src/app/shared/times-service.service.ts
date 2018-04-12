import { Injectable } from '@angular/core';
import { Time } from '../Time';

@Injectable()
export class TimesServiceService {

  times: Time[] = [{
    nome: "Palmeiras",
    tecnico: "Roger Machado",
    isLibertadores: true
  },{
    nome: "Santos",
    tecnico: "Jair Ventura",
    isLibertadores: true
  },{
    nome: "Fortaleza",
    tecnico: "Rogerio Ceni",
    isLibertadores: false
  }

];

  constructor() { }

  getTimes(){
    return this.times;
  }

  addTime(time: Time){
    this.times.push(time);
  }

  

}
