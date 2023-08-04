import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-com-first',
  templateUrl: './com-first.component.html',
  styleUrls: ['./com-first.component.css']
})
export class ComFirstComponent {


  tasks:any=[];

newtask(content:any){
  if(content!=''){
    this.tasks.push({id:this.tasks.length,name:content})
  }
}

removetask(id:number){
  // this.tasks = this.tasks.filter((item:{id:number})=> item.id!=id)
  this.tasks.splice(id,1)
}

removeall(){
  this.tasks= []
}
}
