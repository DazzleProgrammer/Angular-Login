import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { DATA1Component } from './pages/data1/data1.component';
import { DATA2Component } from './pages/data2/data2.component';
import { DATA3Component } from './pages/data3/data3.component';
import { HomeComponent } from './pages/home/home.component';
import { EditData1Component } from './pages/edit-data1/edit-data1.component';
import { TimeComponent } from './tools/time/time.component';


const routes: Routes = [

  {
    path: '', component: LoginComponent,
  },

  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'data1', component: DATA1Component,
      },
      {
        path: 'data1/:id', component: DATA1Component,
      },
      {
        path: 'data1/:name/:designation/:phoneNo', component: EditData1Component,
      },
      {
        path: 'data2', component: DATA2Component,
      },
      {
        path: 'data3', component: DATA3Component,
      },
      {
        path: '', component: DATA1Component,
      },
    ]
  },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
