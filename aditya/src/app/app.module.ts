import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DATA1Component } from './pages/data1/data1.component';
import { DATA2Component } from './pages/data2/data2.component';
import { DATA3Component } from './pages/data3/data3.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddDataComponent } from './pages/add-data/add-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditData1Component } from './pages/edit-data1/edit-data1.component';
import { TimeComponent } from './tools/time/time.component';
import { CalanderComponent } from './tools/calander/calander.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { ProfileComponent } from './tools/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DATA1Component,
    DATA2Component,
    DATA3Component,
    HomeComponent,
    AddDataComponent,
    EditData1Component,
    TimeComponent,
    CalanderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatNativeDateModule,
    NgIf

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
