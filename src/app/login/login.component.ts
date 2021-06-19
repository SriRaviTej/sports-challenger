import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLogin: string;

  constructor(private router:Router) { 
    this.showLogin = 'login';
  }

  ngOnInit() {
  }
  login(){
    console.log('login')
    this.router.navigate(['/layout/dashboard']);
    return false;
  }

}
