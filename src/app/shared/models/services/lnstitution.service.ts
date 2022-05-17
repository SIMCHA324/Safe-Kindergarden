import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { lnstitution } from '../lnstitution.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LnstitutionService {

  constructor(private http:HttpClient) { }
  addLnstitution(lnstitution:lnstitution):Observable<boolean>
  {
    return this.http.post<boolean>(environment.url+'lnstitution/addLnstitution',lnstitution)
  }
  getLnstitution():Observable<number>
  {
    return this.http.get<number>(environment.url+'lnstitution/getLnstitution')
  }
}
