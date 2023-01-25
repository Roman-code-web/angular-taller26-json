import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path:'', component:LoginComponent },
  {path:'home', component: HomeDashboardComponent,
    children:[
      {path:'', component: InicioComponent}  ,
      {path:'user', component: UserComponent,
        children:[
          {path:'detalle/:id', component:DetalleComponent}
        ]
      }  
    ]
  },
  {path:'**', pathMatch:'full', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
