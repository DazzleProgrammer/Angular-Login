import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CrudComponent>) {

  }
  public Name: any = {
    name: '',
    desg: ''
  };
  members: any = [];
    
  addmem() {
    localStorage.setItem('storeinfo', JSON.stringify(this.Name));
    this.members.push(this.Name);
    var final = localStorage.setItem('storeinfo', JSON.stringify(this.members));
    console.log(this.Name);
    this.dialogRef.close('add');
  }
  ngOnInit(): void {
    if (localStorage.getItem('storeinfo')) {
      this.members = localStorage.getItem('storeinfo');
      this.members = JSON.parse(this.members);
    } else {
      this.members = [];
    }
  }

  delt() {
    this.Name.name=''
    this.Name.desg=''
    
  }

}
