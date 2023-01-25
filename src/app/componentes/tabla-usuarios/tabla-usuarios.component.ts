import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  listaUsuario:any=[];

  constructor(private usuarioservice:UsuarioService){}

  ngOnInit(): void {
    this.getListaUsuario();
  }

  getListaUsuario(){
    this.usuarioservice.getUsuario().subscribe(
      res=>{
        this.listaUsuario=res;
      },
      error=>{
        console.log(error);
      }
    )
  }
}
