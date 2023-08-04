import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent {
  date!: any;
  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
