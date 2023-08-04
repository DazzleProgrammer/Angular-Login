import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './pages/first/first.component';
import { SecondcComponent } from './pages/secondc/secondc.component';
import { ThirdcComponent } from './pages/thirdc/thirdc.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
     { 
      path:'first',
      component:FirstComponent,
      pathMatch:'full'
    },
    { 
      path:'second',
      component:SecondcComponent,
      pathMatch:'full'
    },
    { 
      path:'third',
      component:ThirdcComponent,
      pathMatch:'full'
    }

    ]
  },
  {
    path:'',
    redirectTo:'login', 
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
