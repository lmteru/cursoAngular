import { Time } from './../Time';
import { Component, OnInit } from '@angular/core';
import { TimesServiceService } from '../shared/times-service.service';

@Component({
  selector: 'app-lista-times',
  templateUrl: './lista-times.component.html',
  styleUrls: ['./lista-times.component.css']
})
export class ListaTimesComponent implements OnInit {

  constructor(private times:TimesServiceService) { }
  arrayTimes:Time[] = [];
  ngOnInit() {
    this.arrayTimes = this.times.getTimes();
  }

}
