import { Component, OnInit, } from '@angular/core';
import { MatDialog, _MatDialogContainerBase } from '@angular/material/dialog';
import { AddDataComponent } from '../add-data/add-data.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css'],

})
export class DATA1Component implements OnInit {

  locData: any = []
  constructor(private matDialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.locData = localStorage.getItem('data')
    this.locData = JSON.parse(this.locData)
  }

  openDialog() {
    this.matDialog.open(AddDataComponent, {
      width: '20.5%',
      height: '55%'
    }).afterClosed().subscribe((result) => {
      // console.log(result)
      if (result == 'SUBMIT') {
        this.ngOnInit()
        // this.getData()
      }
    })
  }
  // getData() {
  // }
  deleteInfo(data: any) {
    // localStorage.setItem('data', JSON.stringify(this.locData))
    this.locData.splice(data, 1)
    localStorage.setItem('data', JSON.stringify(this.locData))
    // localStorage.setItem('data', JSON.stringify(this.locData))
  }
}

