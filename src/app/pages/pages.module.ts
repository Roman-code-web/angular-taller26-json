import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeDashboardComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ComponentesModule,
    RouterModule
  ],exports:[
    HomeDashboardComponent,
    LoginComponent,
  ]
})
export class PagesModule { }
