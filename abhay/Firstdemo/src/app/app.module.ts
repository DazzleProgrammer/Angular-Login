import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './component/firstpage/firstpage.component';
import { CustomComponent } from './component/custom/custom.component';
import { custom2Component } from './component/custom2.component';
import { NewoneComponent } from './newone/newone.component';
import { dangerousComponent } from './dangerous.component';
import { successfullComponent } from './successfull.component';
import { FormsModule } from '@angular/forms';
import { ParentComponentComponent } from './CustomDirective/parent-component/parent-component.component';
import { ChildComponentComponent } from './CustomDirective/child-component/child-component.component';
import { ChildComponent2Component } from './CustomDirective/child-component2/child-component2.component';
import { ChildComponent3Component } from './CustomDirective/child-component3/child-component3.component';
import { ChildComponent4Component } from './CustomDirective/child-component4/child-component4.component';
import { ChildComponent5Component } from './CustomDirective/child-component5/child-component5.component';
import { LoginPageComponent } from './Assignments/login-page/login-page.component';
import { LoginroutingComponent } from './Routing/loginrouting/loginrouting.component';
import { ContentComponent } from './Assignments/content/content.component';
import { HeaderComponent } from './Assignments/header/header.component';
import { FooterComponent } from './Assignments/footer/footer.component';
import { NotfoundComponent } from './Assignments/notfound/notfound.component';
import { ServiceComponent } from './Assignments/service/service.component';
import { AboutComponent } from './Assignments/about/about.component';
import { PagesComponent } from './Assignments/pages/pages.component';
import { BlogsComponent } from './Assignments/blogs/blogs.component';
import { ContactComponent } from './Assignments/contact/contact.component';
import { ForgotPasswordComponent } from './Assignments/forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './Assignments/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FirstComponent } from './Assignments/first/first.component';
import { SecondComponent } from './Assignments/second/second.component';
import { ThirdComponent } from './Assignments/third/third.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FirstModelComponent } from './Model/first-model/first-model.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EditComponent } from './Assignments/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    CustomComponent,
    custom2Component,
    NewoneComponent,
    dangerousComponent,
    successfullComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ChildComponent2Component,
    ChildComponent3Component,
    ChildComponent4Component,
    ChildComponent5Component,
    LoginPageComponent,
    LoginroutingComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    ServiceComponent,
    AboutComponent,
    PagesComponent,
    BlogsComponent,
    ContactComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FirstModelComponent,
    EditComponent,
    
    
    
    
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
