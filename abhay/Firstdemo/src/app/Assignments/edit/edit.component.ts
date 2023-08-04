import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  constructor(private formbuilder:FormBuilder, private route:ActivatedRoute){}

  FirstForm!:FormGroup

  AllDetail:any=[]

  ngOnInit(): void {
    var name=this.route.snapshot.params['name']
    var designation=this.route.snapshot.params['designation']

    this.FirstForm=this.formbuilder.group({
      name:name,
      designation:designation,
    })

    if(localStorage.getItem('data')){
      this.AllDetail=localStorage.getItem('data')
      this.AllDetail=JSON.parse(this.AllDetail)
    }else{
      this.AllDetail=[]
    }

    this.AllDetail.find((x:any)=>{
      if(x.name=='asdd'){
        console.log(x);
        
      }
    })

    this.AllDetail.map((x:any)=>{
      if(x.designation=='ads'){

      }
    })
  }

    addInfo(){
      this.AllDetail.push(this.FirstForm.value)
      // console.log(this.AllDetail);
      var final = localStorage.setItem('data',JSON.stringify(this.AllDetail))
      // console.log(final);
    }
  }
 
    
    