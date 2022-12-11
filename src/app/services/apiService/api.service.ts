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
  EMPLOYEE: any =  `${this.api}/practice/employee`
  CATEGORY: any =  `${this.api}/practice/category`
  UPLOAD: any =  `${this.api}/practice/upload`
  GETIMAGES: any =  `${this.api}/practice/GetImages`
  GET_TWO_TABLE_DATA: any =  `${this.api}/practice/GetTwoTableData`
  
}
