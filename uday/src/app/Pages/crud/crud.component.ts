import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CrudComponent>) {}

  public Name: any = {
    fName: '',
    lName: '',
  };
  collect: any = [];

  addInfo() {
    // console.log(this.Name);
    localStorage.setItem('main1', JSON.stringify(this.Name));
    this.collect.push(this.Name);
    var final = localStorage.setItem('main1', JSON.stringify(this.collect));

    console.log(final);
    this.dialogRef.close('add');
  }
  ngOnInit(): void {
    if (localStorage.getItem('main1')) {
      this.collect = localStorage.getItem('main1');
      this.collect = JSON.parse(this.collect);
    } else {
      this.collect = [];
    }
  }

  del() {
    this.Name.fName = '';
    this.Name.lName = '';
  }
}
