import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private route: Router) {}

  // login: any = {
  //   name: '',
  //   password: '',
  // };

  // ...
  email!: string;
  pass!: string;
  origEmail: string = 'abc';
  origPass: string = '123';
  // ngOnInit(): void {
  //   localStorage.setItem(this.email, this.pass);
  // }
  check() {
    // localStorage.setItem(this.email, this.pass);
    if (this.email != this.origEmail) {
      alert('Email shi karo bhai !');
    } else {
      if (this.pass != this.origPass) {
        alert('password glt h bhai !');
      } else {
        alert('ab sb shi h !');
        localStorage.setItem('message', 'Login Successfully');
        this.route.navigate(['/dashboard']);
      }
    }
  }
}
