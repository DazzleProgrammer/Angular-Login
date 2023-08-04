import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-firstmodel',
  templateUrl: './firstmodel.component.html',
  styleUrls: ['./firstmodel.component.css']
})
export class FirstmodelComponent implements OnInit{
constructor(public dialogRef: MatDialogRef<FirstmodelComponent>){}

ngOnInit(): void {
  this.AllDetail=localStorage.getItem('data')
  this.AllDetail=JSON.parse(this.AllDetail)
 
}
 public info:any=
 {
  name:'',
  designation:''
 }


   AllDetail:any=[] 

 addInfo(){
  this.AllDetail.push(this.info);
  var final = localStorage.setItem('data',JSON.stringify(this.AllDetail))
  console.log(final)
  this.dialogRef.close('add')
 }

 

}
