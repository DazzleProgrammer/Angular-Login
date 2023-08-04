import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Assignments/login-page/login-page.component';
import { ContentComponent } from './Assignments/content/content.component';
import { NotfoundComponent } from './Assignments/notfound/notfound.component';
import { ServiceComponent } from './Assignments/service/service.component';
import { AboutComponent } from './Assignments/about/about.component';
import { PagesComponent } from './Assignments/pages/pages.component';
import { BlogsComponent } from './Assignments/blogs/blogs.component';
import { ContactComponent } from './Assignments/contact/contact.component';
import { ForgotPasswordComponent } from './Assignments/forgot-password/forgot-password.component';
import { DashboardComponent } from './Assignments/dashboard/dashboard.component';
import { FirstComponent } from './Assignments/first/first.component';
import { SecondComponent } from './Assignments/second/second.component';
import { ThirdComponent } from './Assignments/third/third.component';
import { EditComponent } from './Assignments/edit/edit.component';
const routes: Routes = [

  {
path:'',
redirectTo:'/loginpage',
pathMatch:'full'
  },

 {
path:'loginpage',
component:LoginPageComponent
 },
  {
    
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'first',
        component:FirstComponent
      },
      {
       path:'first/:id',
       component:FirstComponent
      },
      {
       path:'first/:name/:designation',
       component:EditComponent,
      },
      {
       path:'edit',
       component:EditComponent,
      },
      {
        path:'second',
        component:SecondComponent
      },
      {
        path:'third',
        component:ThirdComponent
      }
    ]
    
  },
  {
path:'forgot',
component:ForgotPasswordComponent
  },
  {
    component:NotfoundComponent,
    path:'**'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
