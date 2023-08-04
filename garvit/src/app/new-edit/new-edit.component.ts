import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirstModelComponent } from '../Model/first-model/first-model.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.css']
})
export class NewEditComponent implements OnInit{
  constructor(private route:ActivatedRoute,private formbuilder:FormBuilder, private router: Router){}

  FirstForm!: FormGroup;

  public Info:any={
    name:'',
    designation:''
  }

  Details:any=[]
  ngOnInit(): void {

    var name = this.route.snapshot.params['name']
    var designation=this.route.snapshot.params['designation']

    
    this.FirstForm=this.formbuilder.group({
      name:name,
      designation:designation
    })

    if(localStorage.getItem('data')){
      this.Details=localStorage.getItem('data')
    this.Details=JSON.parse(this.Details)
    }else{
      this.Details=[]
    }
    this.Details.map((x:any)=>{  //TILL THE LAST CLASS!!!!
      // if(x.designation==''){
      //  x.name=''
       
      // }
    })
  }

  

  addInfo(){
    this.Details.push(this.FirstForm.value)
    var final=localStorage.setItem('data',JSON.stringify(this.Details))
    console.log(final)
    
    
  }
}
