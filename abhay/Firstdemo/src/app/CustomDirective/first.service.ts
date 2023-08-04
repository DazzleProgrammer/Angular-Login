import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  todo:any=[]

  constructor() { }

 addTodo(name:string){
 this.todo.push(name)
 console.log(this.todo);
 }

 getTodo(){
  return this.todo
 }
}
