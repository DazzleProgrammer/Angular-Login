import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private route:Router){
  
  }

mailid:any='';
  pass:any='';
  correctmail:any='Abc';
  correctpass:any='@123';

  check(){
    if (this.mailid!=this.correctmail)
    {
    console.log(this.mailid);
    console.log(this.correctmail);
    alert('Incorrect Mail');
    }
    else 
     {
      if (this.pass!=this.correctpass)
      {
        alert('Incorrect password')
      }
      else 
      {
        alert('login successful');
        localStorage.setItem('message', 'Login Successful');
        this.route.navigate(['/dashboard']);
      }
     }
     
  }
  call(){
    localStorage.setItem(this.mailid, this.pass)
  }
}
