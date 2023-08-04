import { Component } from '@angular/core';

@Component({
  selector: 'app-secondc',
  templateUrl: './secondc.component.html',
  styleUrls: ['./secondc.component.css']
})
export class SecondcComponent {
  date!:any


  constructor(){
    setInterval(()=>{
      this.date=new Date()
    },2000)
  }
  
  
    a: number = 20;
    b: number = 10;
}
