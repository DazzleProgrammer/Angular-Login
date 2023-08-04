import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Pages/first/first.component';
import { SecondComponent } from './Pages/second/second.component';
import { ThirdComponent } from './Pages/third/third.component';
import { LoginComponent } from './Pages/login/login.component';
import { FirstPageComponent } from './Pages/first-page/first-page.component';
import { FourthComponent } from './fourth/fourth.component';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent,
    
  },
  {
    path:'',
    redirectTo:'login', 
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:FirstPageComponent,
    children:[
    { 
      path:'first',
      component:FirstComponent,
      pathMatch:'full'
    },
    { 
      path:'second',
      component:SecondComponent,
      pathMatch:'full'
    },
    { 
      path:'third',
      component:ThirdComponent,
      pathMatch:'full'
    },
    { 
      path:'third/:id',
      component:ThirdComponent,
    },
    { 
      path:'fourth',
      component:FourthComponent,
      pathMatch:'full'
    }

    ]
  },
  {
    path:'**',
    redirectTo:'login'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
