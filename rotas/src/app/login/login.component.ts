import { ActivatedRoute } from '@angular/router';
import { User } from './../User';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  login: string = '';
  senha: string = '';
  
  constructor( private AuthService: AuthService , private router: ActivatedRoute) { 
    this.user.login = "testalogin";
    this.user.senha = "testasenha";
  }

  ngOnInit() {}

  fazerLogin(){}

}
