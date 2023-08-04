import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-first-model',
  templateUrl: './first-model.component.html',
  styleUrls: ['./first-model.component.css']
})
export class FirstModelComponent implements  OnInit {

  constructor(private  dialogRef:MatDialogRef<FirstModelComponent>,private formbuilder:FormBuilder){}

  FirstForm!:FormGroup

  getData:any=[]

  ngOnInit(): void {
   this.FirstForm=this.formbuilder.group({
      name:['',Validators.required],
      designation:['',Validators.required]
    })
      // this.AllDetail=localStorage.getItem('data')
      // this.AllDetail=JSON.parse(this.AllDetail)
      //console.log(this.AllDetail)

      if(localStorage.getItem('data')){
        this.AllDetail=localStorage.getItem('data')
        this.AllDetail=JSON.parse(this.AllDetail)
      }else{
        this.AllDetail=[]
      }
  }

  

  
   
  // public info:any=
  // {
  //   name:'',
  //   designation:''
  // }

  AllDetail:any=[]

  addInfo(){
    //console.log(this.info);
    this.AllDetail.push(this.FirstForm.value);
    console.log(this.AllDetail)
    var final=localStorage.setItem('data',JSON.stringify(this.AllDetail))
    
    this.dialogRef.close('Add')
    
  }
}
