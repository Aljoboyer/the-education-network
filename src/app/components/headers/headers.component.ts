import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  user: any = {}
  constructor(private authServices: AuthServiceService) { }

  ngOnInit(): void {
    this.authServices.GetLoginUser()
    this.authServices.getUser().subscribe((data) => {
      this.user = {...data}
    })
  }

}
