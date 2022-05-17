import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { parent } from '../parent.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) { }
  addParent(parent:parent):Observable<boolean>
  {
    return this.http.post<boolean>(environment.url+'parent/addParent',parent)
  }
  getParent():Observable<number>
  {
    return this.http.get<number>(environment.url+'parent/getParent')
  }
}
