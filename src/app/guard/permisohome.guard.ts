import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PermisohomeGuard implements CanActivate {
  constructor(private usuarioservice:UsuarioService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const logeado=this.usuarioservice.islogeado()
    if(logeado){
      return true;
    }else{
      this.router.navigate(['/']);
      return false
    }
    
  }
  
}
