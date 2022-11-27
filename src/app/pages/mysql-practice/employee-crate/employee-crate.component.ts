import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-crate',
  templateUrl: './employee-crate.component.html',
  styleUrls: ['./employee-crate.component.scss']
})
export class EmployeeCrateComponent implements OnInit {
  employeObj: any = {}
  constructor(private API: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  OnEmployeChangeHandler(e: any){
    const dataname = e.target.name;
    const datavalue = e.target.value;

    const newdata = {...this.employeObj}
    newdata[dataname] = datavalue;

    this.employeObj = newdata
  }
  EmployeeAddHandler(){
    console.log('this.employeObj', this.employeObj)
    this.http.post(this.API.EMPLOYEE, this.employeObj, {'headers': this.API.headers}).subscribe((datas: any) => {
      console.log('datas',)
    })
  }
}
