import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){

  }

  loginCredentials:any={
    username:'akashraikwar763@gmail.com',
    password:'12345'

   
  }

  login:any={
    name:'',
    password:''
  }

  loginuser(){
    if(this.login.name==this.loginCredentials.username){
       if(this.login.password==this.loginCredentials.password){
        alert('Login Successfully')
        localStorage.setItem('message','Login Successfully')
        this.router.navigate(['/dashboard'])
       }
       else{
        alert('password not match')
      }
    }
    else{
      alert('User not found')
    }
  }
}
