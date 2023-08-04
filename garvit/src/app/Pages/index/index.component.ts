import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  ishidden:boolean=false

  constructor(private router:Router) {}

  toggleChange(){
    var t=document.getElementById('abc');
    this.ishidden=!this.ishidden
  }

  ngOnInit(): void {
    var authentication = localStorage.getItem('message')
    if(authentication!='login Successful'){
      this.router.navigate(['/'])
    }
    console.log(authentication)
  }
}
