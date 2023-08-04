import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudComponent } from '../popup/crud.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

 storeinfo: any = []
 id:any;
 constructor(public dialoge: MatDialog) {
  }
  getData() {
    this.storeinfo = localStorage.getItem('storeinfo')
    this.storeinfo = JSON.parse(this.storeinfo)
    console.log(this.storeinfo);
    
  }
 
  openDialog() {
    this.dialoge.open(CrudComponent, {
      width: '20%',
      height: '280px'
    })
    .afterClosed().subscribe((result) => {
      if (result == 'add') {
        this.getData()
        // console.log('hello');
        
      }
    })
  }

  ngOnInit(): void {
    localStorage.clear();
    // this.storeinfo = localStorage.getItem('storeinfo')
    // this.storeinfo = JSON.parse(this.storeinfo)
  }

  dltmem(id:number){
    this.storeinfo.splice(id,1);
    localStorage.setItem('storeinfo',JSON.stringify(this.storeinfo));
  }
}
