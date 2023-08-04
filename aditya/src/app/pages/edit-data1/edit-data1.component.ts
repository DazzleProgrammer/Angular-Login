import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddDataComponent } from '../add-data/add-data.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-data1',
  templateUrl: './edit-data1.component.html',
  styleUrls: ['./edit-data1.component.css']
})
export class EditData1Component implements OnInit {

  constructor(private formbuilder: FormBuilder, private route: ActivatedRoute) { }

  Firstform!: FormGroup

  // getData: any = []


  allDetails: any = []

  // public information: any =
  //   {
  //     name: '',
  //     designation: '',
  //     phoneNo: ''
  //   }

  ngOnInit() {

    var name = this.route.snapshot.params['name']
    var designation = this.route.snapshot.params['designation']
    var phoneNo = this.route.snapshot.params['phoneNo']
    this.Firstform = this.formbuilder.group({
      // name: ['', Validators.required],
      // designation: ['', Validators.required],
      // phoneNo: ['', Validators.required]

      name: name,
      designation: designation,
      phoneNo: phoneNo
    })
    if (localStorage.getItem('data')) {
      this.allDetails = localStorage.getItem('data')
      this.allDetails = JSON.parse(this.allDetails)
    }
    else {
      this.allDetails = []
    }
    // console.log(this.allDetails);

    this.allDetails.find((x: any) => {
      if (x.designation == 'bhj') {

      }
    })
  }

  addInfo() {
    // console.log(data);
    this.allDetails.push(this.Firstform.value)
    var final = localStorage.setItem('data', JSON.stringify(this.allDetails))
  }

}
