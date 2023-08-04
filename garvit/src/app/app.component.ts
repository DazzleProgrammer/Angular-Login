import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
//   title = 'Calculater';
//   num1!:any
//   num2!:any
//   num3!:any

//   add(){
//     this.num3=this.num1+this.num2
//     this.num1=''
//     this.num2=''
//   }
//  Subtract(){
//     this.num3=this.num1-this.num2
//     this.num1=''
//     this.num2=''
//   }
//  Multiply(){
//     this.num3=this.num1*this.num2
//     this.num1=''
//     this.num2=''
//   }
//  Divide(){
//     this.num3=this.num1/this.num2
//     this.num1=''
//     this.num2=''
//   }



// ---------------ARRAY ADD AND DELETE--------------
// userlist:any= []

// onclick(data:any){
//   if(data.value.length>0){
//     this.userlist.push(data.value)
//     data.value=''
//   }
 
// }

// ondelete(del:any){
//   this.userlist.splice(del,1)
// }
//----------------------------------------------
// ----NEW TODO LIST--------------
// tasks:any=[];

// newtask(content:any){
//   if(content!=''){
//     this.tasks.push({id:this.tasks.length,title:content})
//   }
// }

// removetask(id:number){
//   // this.tasks = this.tasks.filter((item:{id:number})=> item.id!=id)
//   this.tasks.splice(id,1)
// }

// removeall(){
//   this.tasks= []
// }

}

