import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  user:any=[];
  //url
  urlJSON="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

  //obtenemos usuarios
  getUsuario(){
    return  this.http.get<any>(this.urlJSON);
  }

  //Login: obtener usuarios por username y email
  getUsuarioUsernameandPassword(username:string, email:string){
    return this.getUsuario().pipe(
        map((usuario) => {
          const user = usuario.find(
              (user:any) =>
              user.username==username && user.email==email
          );
          if (user){
            this.user=user;
            localStorage.setItem('user',JSON.stringify({id: user.id, name: user.name, username: user.username, email: user.email}))
            return user;
          } else{
            return null;
          }
        })
    )
  }
  //obtener usuario por id
  getUsuarioId(id:number){
    console.log(`${this.urlJSON}/${id}`);
    return this.http.get<any>(this.urlJSON + `/` + id );
  }
}
