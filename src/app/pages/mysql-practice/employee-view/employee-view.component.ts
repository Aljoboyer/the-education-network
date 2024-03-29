import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/apiService/api.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {
  emplyeeArr: any = []
  positions: any = []
  images: any = []
  twoTableData: any = []

  constructor(private http: HttpClient, private API: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.http.get(this.API.EMPLOYEE).subscribe((datas: any) => {
      console.log('employee ===>', datas)
      this.emplyeeArr = [...datas]
    })

    this.http.get(this.API.GET_OUTTER_JOIN_DATA).subscribe((datas: any) => {
      console.log('GET_OUTTER_JOIN_DATA ===>', datas)
      this.emplyeeArr = [...datas]
    })

    
    this.http.get(this.API.CATEGORY).subscribe((datas: any) => {
      console.log('datas',datas)
      this.positions = [...datas]
    })

    this.http.get(this.API.GETIMAGES).subscribe((datas: any) => {
      console.log('images >>>>>',datas)
      this.images = [...datas]
    })
    this.http.get(this.API.GET_TWO_TABLE_DATA).subscribe((datas: any) => {
      console.log('twoTableData >>>>>',datas)
      this.twoTableData = [...datas]
    })
  }
  
  DeleteHandler(id: any){

    this.http.delete(`${this.API.EMPLOYEE}/${id}`).subscribe((datas: any) => {

      this.ngOnInit()
    })
  }
  UpdateHandler(id: any){
    const dialogRef = this.dialog.open(UpdateModalComponent, {
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === false){
        this.ngOnInit()
      }
    });
  }
}
