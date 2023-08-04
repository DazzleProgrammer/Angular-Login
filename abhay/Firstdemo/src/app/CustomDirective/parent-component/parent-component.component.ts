import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent5Component } from '../child-component5/child-component5.component';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

//   Something:string=''

//   @ViewChild(ChildComponent5Component) abc!:ChildComponent5Component;

//   Func(name:string){
//     this.abc.setName(name)
//   } 

//   Name!:String;

// //   GetName(name:any){
// // this.Name=name
// //   }

// isdismiss:boolean=true

// Data!:string;

// GetData(name:any){
//   this.Data=name
// }

constructor(private xyz:FirstService){

}

data:any

ngOnInit(): void {
   this.data =this.xyz.getTodo()
   console.log(this.data);
   
}

 }
