import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements DoCheck  {
  title = 'the-education-network';
  isVisible = true
  constructor(private router: Router){

  }

  ngDoCheck(): void{
    const currentUrl = this.router.url;
    if(currentUrl == '/Admin-dashboard' || currentUrl == '/Admin-dashboard/create-course' || currentUrl == '/Admin-dashboard/create-course'){
      this.isVisible = false
    }
    else{
      this.isVisible = true
    }
  }
}
