import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { RoutingComponent } from './routing/routing.component';
import { IndexComponent } from './Pages/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ComFirstComponent } from './Pages/com-first/com-first.component';
import { ComSecondComponent } from './Pages/com-second/com-second.component';
import { ComThirdComponent } from './Pages/com-third/com-third.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FirstModelComponent } from './Model/first-model/first-model.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewEditComponent } from './new-edit/new-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    RoutingComponent,
    IndexComponent,
    ComFirstComponent,
    ComSecondComponent,
    ComThirdComponent,
    FirstModelComponent,
    NewEditComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
