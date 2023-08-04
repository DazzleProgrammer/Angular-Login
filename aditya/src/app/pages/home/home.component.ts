import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalanderComponent } from 'src/app/tools/calander/calander.component';
import { ProfileComponent } from 'src/app/tools/profile/profile.component';
import { TimeComponent } from 'src/app/tools/time/time.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ishidden: boolean = false
  toggleChange() {
    // this.ishidden=!this.ishidden

    var a = document.getElementById('abc');

    if (a?.getAttribute('hidden') == null) {
      a?.setAttribute('hidden', '')

    }
    else {
      a?.removeAttribute('hidden')
    }
  }



  constructor(private matDialog: MatDialog, public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(TimeComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openTime() {
    this.matDialog.open(TimeComponent, {
      width: '30%',
      height: '25%'
    })
  }
  openDate() {
    this.matDialog.open(CalanderComponent, {
      width: '25%',
      height: '70%'
    })
  }
  openProfile() {
    this.matDialog.open(ProfileComponent, {
      width: '25%',
      height: '70%'
    })
  }



}
