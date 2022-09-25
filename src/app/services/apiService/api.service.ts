import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = 'http://localhost:5000' 
  headers = new HttpHeaders()
  .set('Authorization', 'my-auth-token')
  .set('Content-Type', 'application/json');
  
  constructor() { }

  USER_API: any =  `${this.api}/user`

}
