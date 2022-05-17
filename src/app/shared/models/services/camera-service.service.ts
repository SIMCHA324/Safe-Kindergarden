import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Image } from '../image';

@Injectable({
  providedIn: 'root'
})
export class CameraServiceService {


 constructor(private http: HttpClient) { }

  recognize(img: Image,id:string) {
   return this.http.post<boolean>(environment.url + '/face/recognize?id='+id,img)
  }
}
