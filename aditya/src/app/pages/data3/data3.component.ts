import { Component } from '@angular/core';

@Component({
  selector: 'app-data3',
  templateUrl: './data3.component.html',
  styleUrls: ['./data3.component.css']
})
export class DATA3Component {
  list: any = []
  task: string = "";

  ngOnInit(): void {
    this.GetData();
  }

  Add() {
    let obj = {
      TaskData: this.task,
      present: false
    };
    this.list.push(obj);
    this.Save();
    this.task = '';
  }

  chnageS(index: number, currentValue: boolean) {
    if (this.list.length > index) {
      let obj = this.list[index];
      if (obj != null && typeof obj != "undefined") {
        obj.present = !currentValue;
        this.list[index] = obj;
        this.Save();
      }
    }
  }

  Delete(index: number) {
    if (this.list.length > index) {
      this.list.splice(index, 1);
      this.Save();
    }
  }

  DeleteAll() {
    this.list = [];
    this.Save();
  }

  Save() {
    localStorage.setItem("todo", JSON.stringify(this.list));
  }

  GetData() {
    let value = localStorage.getItem("todo");
    if (value != '' && value != null && typeof value != "undefined") {
      this.list = JSON.parse(value!);
    }
  }
}
