import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  constructor(private route: ActivatedRoute) {}

  str!: string;

  print() {
    this.str = this.route.snapshot.params['id'];
  }
}
