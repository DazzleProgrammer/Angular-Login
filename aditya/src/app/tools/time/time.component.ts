import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {

  date!: any
  constructor() {
    setInterval(() => {
      this.date = new Date()
    }, 10)
  }
}
