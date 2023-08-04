import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit
 {
  FirstForm!:FormGroup

  AllDetail:any=[]

  ngOnInit(): void {

    var name=this.route.snapshot.params['name']
    var designation=this.route.snapshot.params['designation']


    this.FirstForm=this.formbuilder.group({
      name: name,
      designation: designation,
      // name:['',Validators.required],
      // designation:['',Validators.required]
    })

    if(localStorage.getItem('data')){
      this.AllDetail=localStorage.getItem('data')
    this.AllDetail=JSON.parse(this.AllDetail)
    }
    else{
      this.AllDetail=[]
    }

    this.AllDetail.find((x:any)=>{
      if(x.name=='as'){
        console.log(x)
      }
    })

    
    this.AllDetail.map((x:any)=>{
      if(x.designation=='fgh'){
        
      }
    })
   
    // console.log(this.AllDetail)
  }

  
  constructor(private formbuilder:FormBuilder,private route:ActivatedRoute){}

  

  // getData:any=[]

 

  // public info:any=
  // {
  //   name:'',
  //   desgination:''
  // }

 

  addInfo(){
// console.log(this.info)
    this.AllDetail.push(this.FirstForm.value)
    // console.log(this.AllDetail)
    var final = localStorage.setItem('data',JSON.stringify(this.AllDetail))
    // console.log(final)


  }

}



