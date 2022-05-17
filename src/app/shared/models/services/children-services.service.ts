import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { children } from '../childrens.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChildrenServicesService {
  private CurrentChildren = undefined;
  constructor( private http:HttpClient) { }
  addChildren( children:children): Observable<boolean>
  {
    return this.http.post<boolean>(environment.url+'children/addChild', children)
  }
  getAllChildren():Observable<children>
  {
    return this.http.get<children>(environment.url+'children/getChild')
  }
  setCurrentChildren(children: any){
    this.CurrentChildren=children;
  }
  checkUser(id:string) : Observable<boolean>{
    let flag = this.http.post<boolean>(environment.url +'children/checkUser/'+id, '' )
    return flag;
  }
}