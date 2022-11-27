import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/apiService/api.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {
  emplyeeArr: any = []
  constructor(private http: HttpClient, private API: ApiService) {}

  ngOnInit(): void {
    this.http.get(this.API.GET_EMPLOYEE).subscribe((datas: any) => {
      console.log('datas',)
      this.emplyeeArr = [...datas]
    })
  }

}
