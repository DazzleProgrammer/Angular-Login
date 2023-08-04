import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  username!:string
  password!:string
  constructor(private route:Router){ }

 loginCredentials:any={
   username:'AbhayPratap',
   password:'Abhay123'
 }

 login:any={
  name:'',
  password:''
 }

 

  loginUser(){
    if(this.username == this.loginCredentials.username){
      if(this.password == this.loginCredentials.password){
      alert("Logged in successfully")
      this.route.navigate(['/dashboard'])
    }else{
     alert("Wrong Username or Password")
    }
    }
  }

}
