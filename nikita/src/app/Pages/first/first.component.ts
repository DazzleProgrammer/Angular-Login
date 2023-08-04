import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudComponent } from '../popup/crud.component';
import { MatDialog, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  date!:any;
  // currentDate: Date = new Date();
  constructor(){
  setInterval(()=>{
   this.date= new Date();
  },1000)

  }
}


