import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { IndexComponent } from './Pages/index/index.component';
import { ComFirstComponent } from './Pages/com-first/com-first.component';
import { ComSecondComponent } from './Pages/com-second/com-second.component';
import { ComThirdComponent } from './Pages/com-third/com-third.component';
import { NewEditComponent } from './new-edit/new-edit.component';

const routes: Routes = [
  {
    path:'login',
    component:RoutingComponent,
    pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'

  },
  {
    path:'index',
    component:IndexComponent,
    children:[
      {
        path:'',
        redirectTo:'second',
        pathMatch:'full'
      },
      {
        path:'first',
        component:ComFirstComponent,
        pathMatch:'full'
      },
      {
        path:'second',
        component:ComSecondComponent,
        pathMatch:'full'
      },
      {
        path:'second/:name/:designation',
        component:NewEditComponent,
        pathMatch:'full'
      },
      {
        path:'third',
        component:ComThirdComponent,
        pathMatch:'full'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
