import { Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  
  // something:string=''
// @ViewChild(ChildComponentComponent) abc!:ChildComponentComponent
//   Name(name:string){
//     this.abc.setName(name)
//   }

  // @ViewChild(ChildComponentComponent) abc!:ChildComponentComponent

  // Name(name:string){
  //   this.abc.setName(name)
  // }


  // @ViewChild(ChildComponentComponent)  abc!:ChildComponentComponent

  // Name(name:string){
  //   this.abc.vamp(name)
  // }

  // @ViewChild(ChildComponentComponent) abc!:ChildComponentComponent

  // NN(xyz:string){
  //   this.abc.vamp(xyz)
  // }


  // Name!:string
  // GetData(name:any){
  //   this.Name=name
  // }

  // Name!:string
  // GetData(name:string){
  //   this.Name=name
  // }

  Name!:string
}
