import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  isVisible = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void{
    const currentUrl = this.router.url;
    if(currentUrl == '/Admin-dashboard'){
      this.isVisible = true
    }
    else{
      this.isVisible = false
    }
  }
}
