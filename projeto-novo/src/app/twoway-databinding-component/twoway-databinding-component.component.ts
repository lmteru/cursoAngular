import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-databinding-component',
  templateUrl: './twoway-databinding-component.component.html',
  styleUrls: ['./twoway-databinding-component.component.css']
})
export class TwowayDatabindingComponentComponent implements OnInit {
  nome = 'teste';

  constructor() {
  }

  ngOnInit() {
  }

}
