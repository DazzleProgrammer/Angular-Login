import { Component } from '@angular/core';
import { TimeComponent } from '../time/time.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 ishidden:boolean=false

 toggleChange(){
  // this.ishidden=!this.ishidden

  var a = document.getElementById('abc');

  if(a?.getAttribute('hidden')==null){
     a?.setAttribute('hidden','')

  }
  else{
    a?.removeAttribute('hidden')
  }
 }

 constructor(private matDialog: MatDialog, public dialog: MatDialog) { }
  openTime() {
    this.matDialog.open(TimeComponent, {
      width: '30%',
      height: '25%'
    })

  }
}

