import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MaterialmodeluModule } from '../materialmodelu.module';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { CardDetalleComponent } from './card-detalle/card-detalle.component';



@NgModule({
  declarations: [
    NavigationComponent,
    TablaUsuariosComponent,
    CardDetalleComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MaterialmodeluModule
  ],
  exports:[
    NavigationComponent,
    TablaUsuariosComponent,
    CardDetalleComponent
  ]
})
export class ComponentesModule { }
