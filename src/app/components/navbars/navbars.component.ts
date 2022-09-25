import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements OnInit {
  user: any = {}
  constructor(private authServices: AuthServiceService) { }

  ngOnInit(): void {
    this.authServices.GetLoginUser()
    this.authServices.getUser().subscribe((data) => {
      this.user = {...data}
    })

  }
  LogoutHandler(){
    this.authServices.logOut()
  }
}
