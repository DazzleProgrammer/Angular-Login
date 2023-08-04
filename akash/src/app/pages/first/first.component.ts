import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';
import { FirstmodelComponent } from 'src/app/model/firstmodel/firstmodel.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{
  constructor(public dialog: MatDialog) {}
element!:any

  data:any=[]

  
  ngOnInit(): void {
    this.data=localStorage.getItem('data')
    this.data=JSON.parse(this.data)
  }

  openDialog() {
    this.dialog.open(FirstmodelComponent,{
      width:'300px',
      height:'280px'
    }).afterClosed().subscribe((result)=>{
      if(result=='add'){
        this.ngOnInit();
      }
    })
  }

 

  public OnDelete(index: any){
  console.log(index)
  this.data.splice(index, 1);
  }

  
}
