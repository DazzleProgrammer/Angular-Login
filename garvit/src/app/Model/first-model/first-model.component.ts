import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-first-model',
  templateUrl: './first-model.component.html',
  styleUrls: ['./first-model.component.css']
})
export class FirstModelComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<FirstModelComponent>,private formbuilder:FormBuilder){}

  FirstForm!: FormGroup;

  public Info:any={
    name:'',
    designation:''
  }

  Details:any=[]
  ngOnInit(): void {

    this.FirstForm=this.formbuilder.group({
      name:['',Validators.required],
      designation:['',Validators.required]
    })

    if(localStorage.getItem('data')){
      this.Details=localStorage.getItem('data')
    this.Details=JSON.parse(this.Details)
    }else{
      this.Details=[]
    }
  }

  

  addInfo(){
    this.Details.push(this.FirstForm.value)
    var final=localStorage.setItem('data',JSON.stringify(this.Details))
    console.log(final)

    this.dialogRef.close('add')
  }
 

}
