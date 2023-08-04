import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username!: string
  password!: string
  constructor(private route: Router) { }

  loginCredientals: any = {
    username: 'a',
    password: '1'
  }

  login: any = {
    name: '',
    password: ''
  }
  loginUser() {
    if (this.username == this.loginCredientals.username) {
      if (this.password == this.loginCredientals.password) {
        alert('Welcome! Login Sucess')
        this.route.navigate(['/home'])
      }
      else {
        alert('Login Fail :(')
      }
    }
  }
}
