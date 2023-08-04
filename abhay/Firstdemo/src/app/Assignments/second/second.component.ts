import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirstModelComponent } from 'src/app/Model/first-model/first-model.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
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

    } )
  }

}
