import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/apiService/api.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {
  id: any = ''
  name = ''
  city = ''
  position = ''
  salary = ''
  country = ''
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private http: HttpClient, private API: ApiService) { 
    this.id = data
    console.log('update id', data)
  }

  ngOnInit(): void {
    this.http.get(`${this.API.EMPLOYEE}/${this.id}`).subscribe((datas: any) => {
 
      this.name = datas[0]?.Name
      this.city = datas[0]?.City
      this.position = datas[0]?.Position
      this.salary = datas[0]?.Salary
      this.country = datas[0]?.country
    })
  }
  UpdateClick(){
    const newUser = {
      name : this.name,
      city : this.city,
      salary : this.salary,
      position : this.position,
      country : this.country,
    }
    this.http.put(`${this.API.EMPLOYEE}/${this.id}`, newUser).subscribe((datas: any) => {
      console.log('datas',)
    })
    
  }
}
