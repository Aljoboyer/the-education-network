import { Component, DoCheck, OnInit } from '@angular/core';
import { Router,  NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements DoCheck , OnInit {
  title = 'the-education-network';
  isVisible = true;

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
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
 
}
