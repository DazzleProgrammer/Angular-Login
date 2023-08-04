import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudComponent } from '../crud/crud.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  main1: any = [];
  str1!: any;

  constructor(private dialoge: MatDialog) {}

  getData() {
    this.main1 = localStorage.getItem('main1');
    this.main1 = JSON.parse(this.main1);
  }

  openDialog() {
    this.dialoge
      .open(CrudComponent, {
        width: '50%',
        height: '280px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result == 'add') {
          this.getData();
          console.log(this.main1);
          // this.str1 = this.main1;
          // console.log(this.str1);
          //           var storedData = localStorage.getItem();
          // const parsedData = JSON.parse(storedData);
        }
      });
  }
  del(id: number) {
    this.main1.splice(id, 1);
    localStorage.setItem('main1', JSON.stringify(this.main1));
  }
  ngOnInit(): void {
    localStorage.clear();
    // this.main1 = localStorage.getItem('main1');
    // this.main1 = JSON.parse(this.main1);
  }
}
