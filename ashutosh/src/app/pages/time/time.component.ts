import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  time!:any

  constructor(private dialog:MatDialog){
    setInterval(()=>{
      this.time=new Date()
    },10)
  }

  
}
