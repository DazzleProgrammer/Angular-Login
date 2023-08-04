import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component3',
  templateUrl: './child-component3.component.html',
  styleUrls: ['./child-component3.component.css']
})
export class ChildComponent3Component {
  
  @Input() abcde!: String;

}
