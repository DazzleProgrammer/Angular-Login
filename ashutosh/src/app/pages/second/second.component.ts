import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  date!:any
  constructor(){
    setInterval(()=>{
      this.date=new Date()
    },10)
  }

  birthday = new Date(2001, 6, 15);

  title:any='lucifer'


}
