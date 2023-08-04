import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked {

@Input('abc') Name!:string

constructor(){
  console.log('constructor called')
}

ngOnChanges(changes: SimpleChanges): void {
  console.log('ngonchange called')
}

ngOnInit(): void {
  console.log('ngoninit called')
}

ngDoCheck(): void {
  console.log('ngdocheck called')
}
ngAfterContentInit(): void {
  console.log('agaftercontentinit called')
}

ngAfterContentChecked(): void {
  console.log('ngaftercontentchecked called')
}

ngAfterViewChecked(): void {
  console.log('ngafterviewchecked called')
}
// @Input() something!:string;
// Name!:string;

// setName(name:string){
//   this.Name=name
// }


// Name!:string;

// setName(name:string){
//   this.Name=name
// }


// Name!:string
// vamp(name:string){
//   this.Name=name
// }

// Name!:string

// @Output() checkName=new EventEmitter<any>
// setName(name:string){
//   this.checkName.emit(name)
// }

}


