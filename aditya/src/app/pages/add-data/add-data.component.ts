import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddDataComponent>, private formbuilder: FormBuilder) { }

  Firstform!: FormGroup

  getData: any = []


  public allDetails: any = []

  public information: any =
    {
      name: '',
      designation: '',
      phoneNo: ''
    }

  ngOnInit() {
    this.Firstform = this.formbuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      phoneNo: ['', Validators.required]
    })
    if (localStorage.getItem('data')) {
      this.allDetails = localStorage.getItem('data')
      this.allDetails = JSON.parse(this.allDetails)
    }
    else {
      this.allDetails = []
    }

    // this.getData = localStorage.getItem('data')
    // this.getData = JSON.parse(this.getData)
    // this.allDetails = this.getData

    // this.gen = localStorage.getItem('data')
    // this.gen = JSON.parse(this.gen)
    // this.allDetails = this.gen
  }

  addInfo() {
    // console.log(data);
    // this.allDetails.push(this.information)
    this.allDetails.push(this.Firstform.value)
    // alert(this.allDetails)
    var final = localStorage.setItem('data', JSON.stringify(this.allDetails))
    this.dialogRef.close('SUBMIT')
  }


}
