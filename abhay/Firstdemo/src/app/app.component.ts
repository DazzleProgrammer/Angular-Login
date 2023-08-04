import { Component } from '@angular/core';
import { FirstService } from './CustomDirective/first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'Hey, Myself abhay';
//   isdisabled:Boolean=true;
//   Name:string=''
//   Great:string=''
//   constructor(){
//     setTimeout(()=>{
// this.isdisabled=false
//     },3000
//     )
//   }
//   //name:string=''
//   clicked(){
//     alert('hey')
//     console.log('hey')
//   }
//   Submit(data:any){
//     this.Name=data.target.value;

//   }

first:boolean=true;

// constructor(){
//   var random=(Math.random())*10;
//   random=Math.floor(random)

//   //can be written in two ways

//   //1.
//   random<5?this.first=false:this.first=true

// // 2.
//   // if(random<5){
//   //   this.first=false
//   // }
//   // else{
//   //   this.first=true
//   // }
//   console.log(random)
// }

Name:any=['nitin','om','abc','abhay']

Days:string=''

Months:string=''

 Design:any={}
 Check:any=''


 ChangeNumber(value:string){
  this.Check=Number(value)

  if(this.Check>0){
    if(this.Check%2==0){
      this.Design={backgroundColor:'black',textAlign:'center',color:'green'}
      // console.log('This is even number')
    }else{
      this.Design={backgroundColor:'grey',textAlign:'center',color:'red'}
      // console.log('This is odd number')
    }
  }else{
    // console.log('Empty')
    this.Design={}
  }


  // console.log(this.Check)
}

// status:string='right'
status:string='center'

checkStatus(val:any){
  // console.log(val)
  this.status=val
}

Multiple:number=5;
isMultiple:boolean=true;

// multipleCheck(data:any){
//   if(data>0){
//     if(data%5==0){
//       this.isMultiple=1

//     }else{
//       this.isMultiple=0
//     }

//   }else{
//     this.isMultiple=2;
//   }
// }

Todo:any=''
TodoArray:any=[]
AddTodo(){
        this.TodoArray.push(this.Todo);
        console.log(this.TodoArray)
        this.Todo=''
}

title='Hey , My name is Abhay';

Art={backgroumdColor:'red'}

name!:string;

constructor(private abc:FirstService){

}

saveTodo(){
  this.abc.addTodo(this.name)
}



}
