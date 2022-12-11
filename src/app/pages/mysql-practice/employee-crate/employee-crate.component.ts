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
  dogname: any = ''
  img: any = ''
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

    this.http.post(this.API.EMPLOYEE, this.employeObj, {'headers': this.API.headers}).subscribe((datas: any) => {

      if(datas?.error){
        alert(`${datas?.error}`)
      }
    })
  } 

  OnDogNameHandler(e: any){
    this.dogname = e.target.value; 
  }
  OnimgChangeHandler(e: any){
    this.img = e.target.files[0];
  }
  Upload(){
    const fd = new FormData()

    fd.append('dogname', this.dogname)
    fd.append('img', this.img)

    this.http.post(this.API.UPLOAD, fd).subscribe((datas: any) => {
      console.log('upload f >>>>>', datas)
    })
  }
}
