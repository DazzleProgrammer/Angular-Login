import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!:string
  password!:string

  constructor(private route:Router){}

  loginCredientals:any={
    username:'xyz',
    password:'123'
  }
//  login:any={
//   username:'',
//   password:''
//  }
 

  loginUser(){
    if(this.username == this.loginCredientals.username){
      if(this.password == this.loginCredientals.password){
        console.log(this.username);
        
        alert('login successfully')
        this.route.navigate(['/dashboard'])
        
      }
      else{
        alert('login fail!')
      }
    }
    
  }


  


}
