import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!:FormGroup;
  constructor( private formbuilder:FormBuilder, private usuarioservice:UsuarioService, private router:Router){
    this.formLogin= this.formbuilder.group({
      username:['',
      [
        Validators.required,
        Validators.minLength(3)
      ]
      ],
      email:['',
      [
        Validators.required,
        Validators.minLength(3)
      ]
      ]
    })
  }
  login(){
    
    this.usuarioservice.getUsuarioUsernameandPassword(this.formLogin.get('username')?.value, this.formLogin.get('email')?.value).subscribe(
      res=>{
       if(res){
        console.log(res)
        this.router.navigate(['/home']);
       }else{
        Swal.fire({
          icon: 'error',
          title: 'Usuario o contraseña es incorrecta',
        })
       }
      },
      error=>{}
    )
    
    //console.log(user)
    /*
    console.log(this.usuarioservice.user)
    if(this.usuarioservice.user.lenght==0){
      console.log('usuario no eite')
    }else{
      this.router.navigate(['/home']);
    }
    //console.log(this.formLogin.value)
    /* this.usuarioservice.getUsuario().subscribe(
      res=>{
        console.log(res)
      },
      error=>{
        console.log(error)
      }
     )
     */
  }
}
