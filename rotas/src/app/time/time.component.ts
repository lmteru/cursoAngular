import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  sub: Subscription;
  nomeTime: string;

  constructor( private route:ActivatedRoute ) {
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {  
      this.nomeTime = params['meuTime']; //this.variave = params['nome na rota']
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
