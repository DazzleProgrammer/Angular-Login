import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FirstModelComponent } from 'src/app/Model/first-model/first-model.component';

@Component({
  selector: 'app-com-second',
  templateUrl: './com-second.component.html',
  styleUrls: ['./com-second.component.css']
})
export class ComSecondComponent implements OnInit{

  data:any=[]
  id: any;

  ngOnInit(): void {
    this.data=localStorage.getItem('data')
    this.data=JSON.parse(this.data)
  }
  constructor(public dialog: MatDialog) {}


  openDialog() {
    this.dialog.open(FirstModelComponent,
      {
        width:'40%',
        height:'50%'
      })
      .afterClosed().subscribe((res)=>{
        if(res=='add'){
          this.ngOnInit()
        }
      })
      
  }

  deleteInfo(id:number)
  {
    this.data.splice(id,1)
   
    localStorage.setItem('data',JSON.stringify(this.data))
   
  }

  
}
