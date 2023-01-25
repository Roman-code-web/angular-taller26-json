import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-card-detalle',
  templateUrl: './card-detalle.component.html',
  styleUrls: ['./card-detalle.component.css']
})
export class CardDetalleComponent  implements OnInit{
  detalleUsuario:any=[];
  id!:string;

  constructor(private usuarioservice:UsuarioService, private  activaterouter: ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.id=String(this.activaterouter.snapshot.paramMap.get('id')) ;
    this.getUsuarioID(this.id)
  }
  getUsuarioID(id:string){
    this.usuarioservice.getUsuarioId(Number(id)).subscribe(
      res=>{
        this.detalleUsuario=res;
        console.log(this.detalleUsuario);
      },
      error=>{
        console.log(error);
      }
    )
  }
  regresar(){
    this.router.navigate(['home/user']);
  }
}
