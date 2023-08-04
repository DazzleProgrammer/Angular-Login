import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
constructor(private route:ActivatedRoute){

}
Store!:any;
getid(){
  this.Store=this.route.snapshot.params['id']
}
}
