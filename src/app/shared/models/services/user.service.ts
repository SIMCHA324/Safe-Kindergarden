import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from 'src/environments/environment';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) {}

    checkUser(pass:string,mail:string) :Observable<boolean>{
 return this.http.get<boolean>
 (environment.url+`user/checkUser/password=${pass}&mail=${mail}`)
   }
}
