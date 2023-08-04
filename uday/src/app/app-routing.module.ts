import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Pages/first/first.component';
import { SecondComponent } from './Pages/second/second.component';
import { LoginComponent } from './Pages/login/login.component';
import { FirstPageComponent } from './Pages/first-page/first-page.component';
import { EditComponent } from './Pages/edit/edit.component';
import { ThirdComponent } from './Pages/third/third.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: FirstPageComponent,
    children: [
      {
        path: 'first',
        component: FirstComponent,
        pathMatch: 'full',
      },
      {
        path: 'first/:id',
        component: EditComponent,
        pathMatch: 'full',
      },
      {
        path: 'second',
        component: SecondComponent,
        pathMatch: 'full',
      },

      {
        path: 'third',
        component: ThirdComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
