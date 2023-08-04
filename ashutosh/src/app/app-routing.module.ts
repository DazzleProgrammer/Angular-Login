import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';

import { EditComponent } from './edit/edit.component';


const routes: Routes = [

 
  {
  path:'',
  component:LoginComponent,
  pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'first',
        component:FirstComponent,
       
      },
      // {
      //   path:'first/:id',
      //   component:EditComponent,
       
      // },
      {
        path:'first/:name/:designation',
        component:EditComponent,
       
      },
      {
        path:'second',
        component:SecondComponent,
      
      },
      {
        path:'third',
        component:ThirdComponent,
        
      },
      {
        path:'',
        component:FirstComponent,
       
      },
    ]
    
  },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
