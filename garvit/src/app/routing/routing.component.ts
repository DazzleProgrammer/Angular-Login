import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {

  constructor(private route:Router){

  }
  loginCredentials:any={
    userName:'abc',
    password:123
  }

  login:any={
    name:'',
    password:''
  }

  loginUser(){
    if(this.login.name=this.loginCredentials.userName){
      if(this.login.password=this.loginCredentials.password){
        alert('login Successful')
        localStorage.setItem('message','login Successful')
        this.route.navigate(['/index'])

      }else{
        alert('Password not match')
      }
    }
    else{
      alert('User not found')
    }
  }
}
