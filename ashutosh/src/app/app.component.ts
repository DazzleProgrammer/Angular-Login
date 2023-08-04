import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-directive';
  // design:any=''
  // check:any=''

  // ChangeNumber(value:string){
  //   this.check=Number(value)
  //   if(this.check>0){
  //     if(this.check%2==0){
  //       this.design={backgroundColor:'black', textAlign:'center',color:'wheat'}
  //     }
  //     else{
  //       this.design={backgroundColor:'grey', textAlign:'center',color:'aqua'}
  //     }
  //   }
  //   else{
  //     this.design={backgroundColor:'yellow', textAlign:'center',color:'white'}
  //   }
  // }

  // status:string='center'

  // checkStatus(val:any){
  //   console.log(val)
  //   this.status=val
  // }


  // ToDo:any=''
  // ToDoArray:any=[]

  // AddToDo(){
  //   this.ToDoArray.push(this.ToDo)
  //   this.ToDo()
  // }

 
}
