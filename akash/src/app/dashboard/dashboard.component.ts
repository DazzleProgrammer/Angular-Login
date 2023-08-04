import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
 

  constructor(private router:Router){

  }
  
  ishidden:boolean=false

  toggleSidebar(){
    this.ishidden=!this.ishidden
  }

  ngOnInit(): void {
    var authentication=localStorage.getItem('message')
  
    // if(authentication=='Login Successfully'){
    //  this.router.navigate(['/'])
    // }
    console.log(authentication)
  }
}


