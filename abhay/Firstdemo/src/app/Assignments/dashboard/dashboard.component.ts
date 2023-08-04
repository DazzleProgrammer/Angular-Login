import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  ishidden:boolean=false

  toggleChange(){


    var a = document.getElementById('abc');

    if(a?.getAttribute('hidden')==null){
      a?.setAttribute('hidden','')
    }else{
      a?.removeAttribute('hidden')
    }
  }

}
