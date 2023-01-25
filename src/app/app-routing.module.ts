import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path:'', component:LoginComponent },
  {path:'home', component: HomeDashboardComponent,
    children:[
      {path:'user', component: UserComponent}  
    ]
  },
  {path:'**', pathMatch:'full', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
