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
  mensajeError={
    username:'',
    email:''
  }
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
  }
  
//validacion formulario
validacion(name: string) {
  if(this.formLogin.get(name)?.errors && (this.formLogin.get(name)?.touched || this.formLogin.get(name)?.dirty)){
    if(this.formLogin.get(name)?.errors?.['required']){
      if(name=='username'){
        this.mensajeError.username="el campo es requerido"; 
      }else{
        this.mensajeError.email="El campo es requerido";
      }
      
      
    }else if(this.formLogin.get(name)?.errors?.['minlength']){
      if(name=='username'){
        this.mensajeError.username="Mínimo de caracteres 3"; 
      }else{
        this.mensajeError.email="Mínimo de caracteres 3";
      }
      
    }
  }
  return this.formLogin.get(name)?.errors && (this.formLogin.get(name)?.touched || this.formLogin.get(name)?.dirty);
}

}
