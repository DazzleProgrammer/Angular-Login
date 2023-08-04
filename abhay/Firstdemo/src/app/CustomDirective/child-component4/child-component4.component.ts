import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component4',
  templateUrl: './child-component4.component.html',
  styleUrls: ['./child-component4.component.css']
})
export class ChildComponent4Component {

  @Input() abcdef!: String;

  // @Output() CheckName=new EventEmitter<any>

  // setName(name:string){
  //  this.CheckName.emit(name)
  // }

  @Output() CheckData=new EventEmitter<any>

  setData(name:string){
    this.CheckData.emit(name)
  }

  

}
