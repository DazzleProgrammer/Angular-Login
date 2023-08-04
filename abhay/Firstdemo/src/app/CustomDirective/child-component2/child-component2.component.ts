import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.css']
})
export class ChildComponent2Component {

  @Input() abcd!:String;

}
