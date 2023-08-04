import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ParentComponentComponent } from './custom-directive/parent-component/parent-component.component';
import { ChildComponentComponent } from './custom-directive/child-component/child-component.component';
import { Child1componentComponent } from './custom-directive/child1component/child1component.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';

import { LoginComponent } from './login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { FirstModelComponent } from './Model/first-model/first-model.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TimeComponent } from './pages/time/time.component';



@NgModule({
  declarations: [
    AppComponent,

    ParentComponentComponent,
    ChildComponentComponent,
    Child1componentComponent,
    DashboardComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    
    LoginComponent,
    FirstModelComponent,
    EditComponent,
    TimeComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
