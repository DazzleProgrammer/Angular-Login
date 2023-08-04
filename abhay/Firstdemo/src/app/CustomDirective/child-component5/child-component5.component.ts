import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component5',
  templateUrl: './child-component5.component.html',
  styleUrls: ['./child-component5.component.css']
})
export class ChildComponent5Component implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  // @Input() abcdefg!: String;

  // Name!  :String;

  @Input('abc') Name!:String;

  n:number=1
  counter:any

  // constructor(){

  //   this.counter=setInterval(()=>{
  //     this.n=this.n+1
  //     console.log(this.n)
  //   },1000)
  //   console.log('constructor Called')
  // }

  constructor(){
    console.log('Constructor called')
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges called')
  }

  ngOnInit(): void {
      console.log('ngOnInit called')
  }

  ngDoCheck(): void {
      console.log('ngDocheck Called')
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInit Called')
  }

  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked Called')
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit Called')
  }

  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked Called')
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy Called')
      clearInterval(this.counter)
  }

  setName(argu:string){
    this.Name=argu
  }

}
